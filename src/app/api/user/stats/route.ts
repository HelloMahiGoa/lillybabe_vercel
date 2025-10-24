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

export async function GET(request: NextRequest) {
  try {
    // Check authentication
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

    // Get user's ads stats
    const { data: ads, error: adsError } = await supabase
      .from('user_ads')
      .select('approval_status, is_active, is_expired, views_count, clicks_count')
      .eq('user_id', user.id);

    if (adsError) {
      console.error('Error fetching ads:', adsError);
      // If table doesn't exist, return zero stats
      if (adsError.code === '42P01' || adsError.message.includes('does not exist')) {
        console.warn('user_ads table does not exist. Returning zero stats.');
        return NextResponse.json({
          success: true,
          stats: {
            total_ads: 0,
            active_ads: 0,
            pending_ads: 0,
            rejected_ads: 0,
            expired_ads: 0,
            total_views: 0,
            total_clicks: 0,
          }
        });
      }
    }

    const stats: any = {
      total_ads: ads?.length || 0,
      active_ads: ads?.filter(ad => ad.is_active && !ad.is_expired).length || 0,
      pending_ads: ads?.filter(ad => ad.approval_status === 'pending').length || 0,
      rejected_ads: ads?.filter(ad => ad.approval_status === 'rejected').length || 0,
      expired_ads: ads?.filter(ad => ad.is_expired).length || 0,
      total_views: ads?.reduce((sum, ad) => sum + (ad.views_count || 0), 0) || 0,
      total_clicks: ads?.reduce((sum, ad) => sum + (ad.clicks_count || 0), 0) || 0,
    };

    // Get active ads with plans for all user types (pay per ad)
    const { data: activeAdsData, error: activeAdsError } = await supabase
      .from('user_ads')
      .select(`
        id,
        name,
        end_date,
        plan:ad_plans(*)
      `)
      .eq('user_id', user.id)
      .eq('is_active', true)
      .eq('is_expired', false)
      .eq('approval_status', 'approved');

    if (!activeAdsError && activeAdsData && activeAdsData.length > 0) {
      stats.active_ad_plans = activeAdsData;
    }

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error: any) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error.message}`, stats: { total_ads: 0, active_ads: 0, pending_ads: 0, rejected_ads: 0, expired_ads: 0, total_views: 0, total_clicks: 0 } },
      { status: 500 }
    );
  }
}

