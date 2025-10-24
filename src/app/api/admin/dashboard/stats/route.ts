import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCurrentUser } from '@/lib/simple-auth';

// Function to create Supabase client
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
    return null;
  }

  // Try service role key first, then anon key
  const supabaseKey = serviceRoleKey || anonKey;
  if (!supabaseKey) {
    console.error('Missing both SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables');
    return null;
  }

  try {
    const client = createClient(supabaseUrl, supabaseKey);
    return client;
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Create Supabase client
    const supabase = createSupabaseClient();
    if (!supabase) {
      console.error('[Admin Dashboard] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    // Add caching headers - cache for 5 minutes
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    // Fetch all stats in parallel with optimized queries
    const [
      profilesStatsResult,
      testimonialsStatsResult,
      categoriesStatsResult,
      locationsStatsResult,
      userAdsStatsResult,
      platformUsersStatsResult,
      paymentsStatsResult,
    ] = await Promise.all([
      // Single query for all profile stats
      supabase.rpc('get_profiles_stats'),
      // Testimonials stats
      supabase.from('testimonials').select('id, is_verified', { count: 'exact' }),
      // Categories stats
      supabase.from('categories').select('id', { count: 'exact' }).eq('is_active', true),
      // Locations stats
      supabase.from('locations').select('id', { count: 'exact' }).eq('is_active', true),
      // User ads stats
      supabase.from('user_ads').select('id, approval_status, is_active', { count: 'exact' }),
      // Platform users stats
      supabase.from('platform_users').select('id, user_type_id, is_active', { count: 'exact' }),
      // Payments stats
      supabase.from('payments').select('id, payment_status, amount', { count: 'exact' }),
    ]);

    // If the RPC function doesn't exist, fall back to individual queries
    let totalProfiles = 0, activeProfiles = 0, featuredProfiles = 0, totalViews = 0, totalClicks = 0;
    
    if (profilesStatsResult.data) {
      // Use RPC result if available
      const stats = profilesStatsResult.data[0];
      totalProfiles = stats.total_profiles || 0;
      activeProfiles = stats.active_profiles || 0;
      featuredProfiles = stats.featured_profiles || 0;
      totalViews = stats.total_views || 0;
      totalClicks = stats.total_clicks || 0;
    } else {
      // Fallback to individual queries
      const [
        totalProfilesResult,
        activeProfilesResult,
        featuredProfilesResult,
        totalViewsResult,
        totalClicksResult,
      ] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact' }),
        supabase.from('profiles').select('id', { count: 'exact' }).eq('is_active', true),
        supabase.from('profiles').select('id', { count: 'exact' }).eq('featured', true),
        supabase.from('profiles').select('views_count'),
        supabase.from('profiles').select('clicks_count'),
      ]);

      totalProfiles = totalProfilesResult.count || 0;
      activeProfiles = activeProfilesResult.count || 0;
      featuredProfiles = featuredProfilesResult.count || 0;
      totalViews = totalViewsResult.data?.reduce((sum, profile) => sum + (profile.views_count || 0), 0) || 0;
      totalClicks = totalClicksResult.data?.reduce((sum, profile) => sum + (profile.clicks_count || 0), 0) || 0;
    }

    // Calculate testimonials stats
    const totalTestimonials = testimonialsStatsResult.count || 0;
    const verifiedTestimonials = testimonialsStatsResult.data?.filter(t => t.is_verified).length || 0;

    // Calculate user ads stats
    const totalUserAds = userAdsStatsResult.count || 0;
    const pendingAds = userAdsStatsResult.data?.filter(ad => ad.approval_status === 'pending').length || 0;
    const approvedAds = userAdsStatsResult.data?.filter(ad => ad.approval_status === 'approved').length || 0;
    const activeUserAds = userAdsStatsResult.data?.filter(ad => ad.is_active).length || 0;

    // Calculate platform users stats
    const totalUsers = platformUsersStatsResult.count || 0;
    const independentUsers = platformUsersStatsResult.data?.filter(u => u.user_type_id === 1).length || 0;
    const agencyUsers = platformUsersStatsResult.data?.filter(u => u.user_type_id === 2).length || 0;
    const activeUsers = platformUsersStatsResult.data?.filter(u => u.is_active).length || 0;

    // Calculate payments stats
    const totalPayments = paymentsStatsResult.count || 0;
    const pendingPayments = paymentsStatsResult.data?.filter(p => p.payment_status === 'pending').length || 0;
    const verifiedPayments = paymentsStatsResult.data?.filter(p => p.payment_status === 'verified').length || 0;
    const totalRevenue = paymentsStatsResult.data?.filter(p => p.payment_status === 'verified')
      .reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

    const stats = {
      // Profiles stats
      totalProfiles,
      activeProfiles,
      featuredProfiles,
      totalViews,
      totalClicks,
      
      // User ads stats
      totalUserAds,
      pendingAds,
      approvedAds,
      activeUserAds,
      
      // Platform users stats
      totalUsers,
      independentUsers,
      agencyUsers,
      activeUsers,
      
      // Payments stats
      totalPayments,
      pendingPayments,
      verifiedPayments,
      totalRevenue,
      
      // Other stats
      totalTestimonials,
      verifiedTestimonials,
      totalCategories: categoriesStatsResult.count || 0,
      totalLocations: locationsStatsResult.count || 0,
    };

    return NextResponse.json({ stats });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
