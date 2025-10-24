import { NextRequest, NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';

// Get all escorts (admin profiles + approved user ads) for public display
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Initialize supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Build query for active admin profiles
    let profilesQuery = supabase
      .from('profiles')
      .select(`
        id,
        name,
        slug,
        age,
        location,
        category,
        main_photo_url,
        pricing,
        created_at,
        views_count,
        clicks_count,
        is_featured
      `)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    // Apply filters for profiles
    if (category && category !== 'all') {
      profilesQuery = profilesQuery.eq('category', category);
    }
    if (location && location !== 'all') {
      profilesQuery = profilesQuery.eq('location', location);
    }

    // Build query for approved user ads
    let userAdsQuery = supabase
      .from('user_ads')
      .select(`
        id,
        name,
        slug,
        age,
        location,
        category,
        main_photo_url,
        pricing,
        created_at,
        views_count,
        clicks_count,
        is_featured,
        user_id,
        user:platform_users(user_type_id)
      `)
      .eq('is_active', true)
      .eq('is_expired', false)
      .eq('approval_status', 'approved')
      .order('created_at', { ascending: false });

    // Apply filters for user ads
    if (category && category !== 'all') {
      userAdsQuery = userAdsQuery.eq('category', category);
    }
    if (location && location !== 'all') {
      userAdsQuery = userAdsQuery.eq('location', location);
    }

    // Execute both queries in parallel
    const [profilesResult, userAdsResult] = await Promise.all([
      profilesQuery,
      userAdsQuery
    ]);

    if (profilesResult.error) {
      console.error('Error fetching profiles:', profilesResult.error);
      return NextResponse.json(
        { error: 'Failed to fetch profiles' },
        { status: 500 }
      );
    }

    if (userAdsResult.error) {
      console.error('Error fetching user ads:', userAdsResult.error);
      return NextResponse.json(
        { error: 'Failed to fetch user ads' },
        { status: 500 }
      );
    }

    // Add badge info to admin profiles
    const profilesWithBadge = (profilesResult.data || []).map(profile => ({
      ...profile,
      badge: profile.is_featured ? 'Featured' : 'Admin Verified',
      source: 'admin'
    }));

    // Add badge info to user ads
    const userAdsWithBadge = (userAdsResult.data || []).map(ad => {
      const userTypeId = (ad.user as any)?.user_type_id || 1;
      return {
        ...ad,
        badge: userTypeId === 2 ? 'Agency' : 'Independent',
        source: 'user' as const
      };
    });

    // Combine both sources
    const allEscorts = [...profilesWithBadge, ...userAdsWithBadge];

    // Shuffle for random display
    const shuffled = allEscorts.sort(() => Math.random() - 0.5);

    // Apply pagination
    const paginated = shuffled.slice(offset, offset + limit);

    // Get total count
    const totalCount = allEscorts.length;

    return NextResponse.json({
      escorts: paginated,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount
      }
    });

  } catch (error) {
    console.error('Error in escorts API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
