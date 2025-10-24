import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

// GET: List pending ads for approval
export async function GET(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'pending';

    let query = supabase
      .from('user_ads')
      .select(`
        *,
        user:platform_users(id, full_name, email, phone_number, user_type_id),
        plan:ad_plans(name, duration_days, price),
        payment:payments!fk_user_ads_payment_id(payment_status, amount, transaction_id, payment_proof_url)
      `)
      .order('created_at', { ascending: false });

    if (status !== 'all') {
      query = query.eq('approval_status', status);
    }

    const { data: ads, error } = await query;

    if (error) {
      console.error('Error fetching ads:', error);
      // If table doesn't exist, return empty array gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('user_ads table does not exist. Returning empty data.');
        return NextResponse.json({ ads: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch ads: ${error.message}`, ads: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({ ads: ads || [] });

  } catch (error) {
    console.error('Ads approval API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Approve or reject ad
export async function POST(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { ad_id, action, rejection_reason } = body;

    if (!ad_id || !action || !['approve', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    if (action === 'reject' && !rejection_reason) {
      return NextResponse.json(
        { error: 'Rejection reason is required' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Get ad details
    const { data: ad, error: adError } = await supabase
      .from('user_ads')
      .select('*, plan:ad_plans(*)')
      .eq('id', ad_id)
      .single();

    if (adError || !ad) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }

    if (action === 'approve') {
      // Calculate start and end dates
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + (ad.plan?.duration_days || 30));

      // Update ad status
      const { error: updateError } = await supabase
        .from('user_ads')
        .update({
          approval_status: 'approved',
          approved_by: admin.id,
          approval_date: new Date().toISOString(),
          is_active: true,
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          is_expired: false
        })
        .eq('id', ad_id);

      if (updateError) {
        console.error('Error approving ad:', updateError);
        return NextResponse.json(
          { error: 'Failed to approve ad' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Ad approved successfully'
      });
    } else {
      // Reject ad
      const { error: updateError } = await supabase
        .from('user_ads')
        .update({
          approval_status: 'rejected',
          approved_by: admin.id,
          approval_date: new Date().toISOString(),
          rejection_reason,
          is_active: false
        })
        .eq('id', ad_id);

      if (updateError) {
        console.error('Error rejecting ad:', updateError);
        return NextResponse.json(
          { error: 'Failed to reject ad' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Ad rejected successfully'
      });
    }

  } catch (error) {
    console.error('Ad approval action error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

