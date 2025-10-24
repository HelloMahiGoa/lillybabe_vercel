import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Function to create Supabase client
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
    return null;
  }

  const supabaseKey = serviceRoleKey || anonKey;
  if (!supabaseKey) {
    console.error('Missing both SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables');
    return null;
  }

  try {
    const client = createClient(supabaseUrl, supabaseKey, {
      db: {
        schema: 'public',
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        headers: {
          'Connection': 'close',
        },
        fetch: (url, options = {}) => {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);
          
          return fetch(url, {
            ...options,
            signal: controller.signal,
          }).finally(() => {
            clearTimeout(timeoutId);
          });
        },
      },
    });
    return client;
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '12');
    const featured = searchParams.get('featured');

    console.log(`[API] Starting ads request - limit: ${limit}`);

    const supabase = createSupabaseClient();
    if (!supabase) {
      console.error('[API] Supabase client not available');
      return NextResponse.json(
        { 
          error: 'Database connection not available', 
          ads: [],
          total: 0,
          limit
        },
        { status: 503 }
      );
    }

    // Build query for approved user ads
    let query = supabase
      .from('user_ads')
      .select(`
        id,
        name,
        slug,
        age,
        location,
        category,
        main_photo_url,
        gallery_images,
        video_verification_url,
        profile_description,
        whatsapp_number,
        phone_number,
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

    // Apply featured filter if provided
    if (featured === 'true') {
      query = query.eq('is_featured', true);
    } else if (featured === 'false') {
      query = query.eq('is_featured', false);
    }

    console.log(`[API] Executing database query for user ads...`);
    const { data: ads, error } = await query;

    if (error) {
      console.error('Error fetching user ads:', error);
      // If table doesn't exist, return empty array gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('user_ads table does not exist. Returning empty data.');
        return NextResponse.json({
          ads: [],
          total: 0,
          limit
        });
      }
      return NextResponse.json(
        { 
          error: 'Failed to fetch user ads', 
          details: error.message,
          ads: [],
          total: 0,
          limit
        },
        { status: 500 }
      );
    }

    if (!ads) {
      console.error('No ads data returned');
      return NextResponse.json(
        { 
          ads: [],
          total: 0,
          limit
        }
      );
    }

    // Transform data to match frontend Profile interface
    const transformedAds = ads.map((ad: any) => {
      const userTypeId = (ad.user as any)?.user_type_id || 1;
      
      // Generate realistic views count based on ad age and activity
      const daysSinceCreated = Math.floor((Date.now() - new Date(ad.created_at).getTime()) / (1000 * 60 * 60 * 24));
      const baseViews = Math.floor(Math.random() * 300) + 50; // 50-350 base views
      const timeMultiplier = Math.min(daysSinceCreated * 1.5, 30); // Up to 30 extra views per day
      const views_count = baseViews + timeMultiplier + (ad.is_featured ? 100 : 0);
      
      // Generate realistic reviews count (typically 3-10% of views for user ads)
      const reviews_count = Math.floor(views_count * (Math.random() * 0.07 + 0.03)); // 3-10% of views
      
      // Generate random response rate between 80-95%
      const response_rate = Math.floor(Math.random() * 16) + 80; // 80-95%
      
      // Generate realistic rating based on reviews
      const baseRating = 3.8 + Math.random() * 1.2; // 3.8-5.0
      const rating = Math.round(baseRating * 10) / 10; // Round to 1 decimal
      
      return {
        id: `ad-${ad.id}`, // Prefix to distinguish from admin profiles
        name: ad.name || 'Unknown',
        age: ad.age || 25,
        location: ad.location || 'Chennai',
        category: ad.category || 'Independent',
        photo_url: ad.main_photo_url || '/images/independent-1.jpg',
        gallery_urls: ad.gallery_images && ad.gallery_images.length > 0 
          ? ad.gallery_images 
          : [ad.main_photo_url || '/images/independent-1.jpg'],
        whatsapp_number: ad.whatsapp_number || '+918121426651',
        phone_number: ad.phone_number || '+918121426651',
        pricing: ad.pricing || {
          "1 Shot": "₹3000",
          "2 Shots": "₹5000", 
          "3 Shots": "₹8000",
          "Full Night": "₹15000"
        },
        rating: rating,
        reviews_count: reviews_count,
        response_rate: response_rate,
        is_featured: ad.is_featured || false,
        is_active: ad.is_active !== false,
        views_count: views_count,
        clicks_count: Math.floor(views_count * 0.25), // 25% of views become clicks
        created_at: ad.created_at || new Date().toISOString(),
        updated_at: ad.created_at || new Date().toISOString(),
        slug: ad.slug || ad.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown',
        // Add user ad specific fields
        source: 'user_ad',
        user_type_id: userTypeId,
        badge: userTypeId === 2 ? 'Agency' : 'Independent',
        // Add missing fields for detailed view
        profile_description: ad.profile_description,
        video_verification_url: ad.video_verification_url
      };
    });

    console.log(`[API] Total API time: ${Date.now()}, ads returned: ${transformedAds.length}`);
    
    const responseData = {
      ads: transformedAds,
      total: transformedAds.length,
      limit
    };

    const response = NextResponse.json(responseData);

    // Add caching headers
    response.headers.set('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=600');
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=120');
    
    return response;

  } catch (error) {
    console.error('Error in ads API:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        ads: [],
        total: 0,
        limit: parseInt(request.nextUrl.searchParams.get('limit') || '12')
      },
      { status: 500 }
    );
  }
}
