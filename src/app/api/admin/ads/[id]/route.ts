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

// GET: Get single ad details (for admin)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;
    const adId = parseInt(id);
    if (isNaN(adId)) {
      return NextResponse.json(
        { error: 'Invalid ad ID' },
        { status: 400 }
      );
    }

    const { data: ad, error } = await supabase
      .from('user_ads')
      .select(`
        *,
        user:platform_users(id, full_name, email, phone_number, user_type_id),
        plan:ad_plans(name, duration_days, price),
        payment:payments!fk_user_ads_payment_id(payment_status, amount, payment_proof_url)
      `)
      .eq('id', adId)
      .single();

    if (error) {
      console.error('Error fetching ad:', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Ad not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: `Failed to fetch ad: ${error.message}` },
        { status: 500 }
      );
    }

    if (!ad) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      ad
    });

  } catch (error: any) {
    console.error('Get ad error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// DELETE: Delete ad (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const adId = parseInt(id);
    if (isNaN(adId)) {
      return NextResponse.json(
        { error: 'Invalid ad ID' },
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

    // Check if ad exists
    const { data: existingAd, error: checkError } = await supabase
      .from('user_ads')
      .select('id, user_id')
      .eq('id', adId)
      .single();

    if (checkError || !existingAd) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }

    // Delete the ad
    const { error: deleteError } = await supabase
      .from('user_ads')
      .delete()
      .eq('id', adId);

    if (deleteError) {
      console.error('Error deleting ad:', deleteError);
      return NextResponse.json(
        { error: 'Failed to delete ad' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Ad deleted successfully'
    });

  } catch (error: any) {
    console.error('Delete ad error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// PUT: Update ad (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const adId = parseInt(id);
    if (isNaN(adId)) {
      return NextResponse.json(
        { error: 'Invalid ad ID' },
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

    const body = await request.json();

    // Check if ad exists
    const { data: existingAd, error: checkError } = await supabase
      .from('user_ads')
      .select('id')
      .eq('id', adId)
      .single();

    if (checkError || !existingAd) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }

    // Update the ad
    const { data: updatedAd, error: updateError } = await supabase
      .from('user_ads')
      .update({
        ...body,
        updated_at: new Date().toISOString()
      })
      .eq('id', adId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating ad:', updateError);
      return NextResponse.json(
        { error: 'Failed to update ad' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ad: updatedAd,
      message: 'Ad updated successfully'
    });

  } catch (error: any) {
    console.error('Update ad error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

