import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCurrentUser } from '@/lib/simple-auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

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

    // Add caching headers - cache for 5 minutes
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    // Fetch all stats in parallel with optimized queries
    const [
      profilesStatsResult,
      testimonialsStatsResult,
      categoriesStatsResult,
      locationsStatsResult,
    ] = await Promise.all([
      // Single query for all profile stats
      supabase.rpc('get_profiles_stats'),
      // Testimonials stats
      supabase.from('testimonials').select('id, is_verified', { count: 'exact' }),
      // Categories stats
      supabase.from('categories').select('id', { count: 'exact' }).eq('is_active', true),
      // Locations stats
      supabase.from('locations').select('id', { count: 'exact' }).eq('is_active', true),
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

    const stats = {
      totalProfiles,
      activeProfiles,
      featuredProfiles,
      totalViews,
      totalClicks,
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
