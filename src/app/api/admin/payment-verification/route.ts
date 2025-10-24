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

// GET: List pending payments
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
      .from('payments')
      .select(`
        *,
        user:platform_users(id, full_name, email, phone_number, user_type_id),
        plan:ad_plans(name, duration_days, price)
      `)
      .order('created_at', { ascending: false });

    if (status !== 'all') {
      query = query.eq('payment_status', status);
    }

    const { data: payments, error } = await query;

    if (error) {
      console.error('Error fetching payments:', error);
      // If table doesn't exist, return empty array gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('payments table does not exist. Returning empty data.');
        return NextResponse.json({ payments: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch payments: ${error.message}`, payments: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({ payments: payments || [] });

  } catch (error) {
    console.error('Payment verification API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Verify or reject payment
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
    const { payment_id, action, rejection_reason } = body;

    if (!payment_id || !action || !['verify', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid request' },
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

    if (action === 'verify') {
      // Get payment details with user and plan info
      const { data: payment, error: paymentError } = await supabase
        .from('payments')
        .select(`
          *,
          user:platform_users(id, user_type_id),
          plan:ad_plans(id, duration_days)
        `)
        .eq('id', payment_id)
        .single();

      if (paymentError || !payment) {
        return NextResponse.json(
          { error: 'Payment not found' },
          { status: 404 }
        );
      }

      // Update payment status
      const { error: updateError } = await supabase
        .from('payments')
        .update({
          payment_status: 'verified',
          verified_by: admin.id,
          verification_date: new Date().toISOString()
        })
        .eq('id', payment_id);

      if (updateError) {
        return NextResponse.json(
          { error: 'Failed to verify payment' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully'
      });
    } else {
      // Reject payment
      const { error: updateError } = await supabase
        .from('payments')
        .update({
          payment_status: 'rejected',
          verified_by: admin.id,
          verification_date: new Date().toISOString(),
          rejection_reason
        })
        .eq('id', payment_id);

      if (updateError) {
        return NextResponse.json(
          { error: 'Failed to reject payment' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Payment rejected successfully'
      });
    }

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

