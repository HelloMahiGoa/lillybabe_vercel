import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/platform-auth';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

// GET: Get single ad details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      console.error('User not authenticated');
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      console.error('Supabase client creation failed');
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const adId = parseInt(params.id);
    if (isNaN(adId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid ad ID' },
        { status: 400 }
      );
    }

    const { data: ad, error } = await supabase
      .from('user_ads')
      .select(`
        *,
        plan:ad_plans(*),
        payment:payments!fk_user_ads_payment_id(*)
      `)
      .eq('id', adId)
      .eq('user_id', user.id) // Ensure user can only view their own ads
      .single();

    if (error) {
      console.error('Error fetching ad:', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { success: false, error: 'Ad not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, error: `Failed to fetch ad: ${error.message}` },
        { status: 500 }
      );
    }

    if (!ad) {
      return NextResponse.json(
        { success: false, error: 'Ad not found' },
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
      { success: false, error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// PUT: Update ad (for draft/rejected ads)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const adId = parseInt(params.id);
    const body = await request.json();

    // Check if ad belongs to user and can be edited
    const { data: existingAd } = await supabase
      .from('user_ads')
      .select('*')
      .eq('id', adId)
      .eq('user_id', user.id)
      .single();

    if (!existingAd) {
      return NextResponse.json(
        { success: false, error: 'Ad not found or access denied' },
        { status: 404 }
      );
    }

    // Only allow editing of draft or rejected ads
    if (existingAd.approval_status !== 'pending' && existingAd.approval_status !== 'rejected') {
      return NextResponse.json(
        { success: false, error: 'Cannot edit approved ads' },
        { status: 403 }
      );
    }

    // Update ad
    const { data: updatedAd, error } = await supabase
      .from('user_ads')
      .update({
        ...body,
        approval_status: 'pending', // Reset to pending after edit
        updated_at: new Date().toISOString()
      })
      .eq('id', adId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating ad:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to update ad' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ad: updatedAd,
      message: 'Ad updated successfully'
    });

  } catch (error) {
    console.error('Update ad error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Delete ad (only draft/rejected)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const adId = parseInt(params.id);

    // Check if ad belongs to user and can be deleted
    const { data: existingAd } = await supabase
      .from('user_ads')
      .select('*')
      .eq('id', adId)
      .eq('user_id', user.id)
      .single();

    if (!existingAd) {
      return NextResponse.json(
        { success: false, error: 'Ad not found or access denied' },
        { status: 404 }
      );
    }

    // Only allow deleting draft or rejected ads
    if (existingAd.approval_status === 'approved' && !existingAd.is_expired) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete active approved ads' },
        { status: 403 }
      );
    }

    // Delete ad
    const { error } = await supabase
      .from('user_ads')
      .delete()
      .eq('id', adId)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error deleting ad:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete ad' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Ad deleted successfully'
    });

  } catch (error) {
    console.error('Delete ad error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

