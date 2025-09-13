import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with optimized settings
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    db: {
      schema: 'public',
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: {
        'Connection': 'keep-alive',
      },
    },
  }
);

// Simple in-memory cache for profiles (5 minute TTL)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const queryStartTime = Date.now();
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const featured = searchParams.get('featured');

    console.log(`[API] Starting profiles-list request - limit: ${limit}, offset: ${offset}`);

    // Check cache first
    const cacheKey = `profiles-${limit}-${offset}-${category || 'all'}-${location || 'all'}-${featured || 'all'}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log(`[API] Returning cached data for key: ${cacheKey}`);
      return NextResponse.json(cached.data);
    }

    // Simplified query with only essential fields that exist
    let query = supabase
      .from('profiles')
      .select(`
        id,
        name,
        slug,
        age,
        location,
        category,
        main_photo_url,
        gallery_images,
        whatsapp_number,
        phone_number,
        pricing,
        featured,
        is_active,
        views_count,
        clicks_count,
        meta_title,
        meta_description,
        meta_keywords,
        og_title,
        og_description,
        og_image,
        twitter_title,
        twitter_description,
        twitter_image,
        canonical_url,
        schema_markup,
        created_at,
        updated_at
      `)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    // Apply filters
    if (category) {
      query = query.eq('category', category);
    }
    if (location) {
      query = query.eq('location', location);
    }
    // Only apply featured filter if explicitly requested
    if (featured === 'true') {
      query = query.eq('featured', true);
    } else if (featured === 'false') {
      query = query.eq('featured', false);
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const dbQueryStartTime = Date.now();
    console.log(`[API] Executing database query...`);
    const { data: profiles, error } = await query;
    const dbQueryEndTime = Date.now();
    console.log(`[API] Database query completed in ${dbQueryEndTime - dbQueryStartTime}ms`);

    if (error) {
      console.error('Error fetching profiles:', error);
      return NextResponse.json(
        { error: 'Failed to fetch profiles', details: error.message },
        { status: 500 }
      );
    }

    if (!profiles) {
      console.error('No profiles data returned');
      return NextResponse.json(
        { error: 'No profiles found' },
        { status: 404 }
      );
    }

    // Skip testimonials count for better performance - use stored reviews_count
    // This eliminates the extra database query that was causing slowness

    // Transform data to match frontend expectations
    const transformStartTime = Date.now();
    console.log(`[API] Starting data transformation for ${profiles?.length || 0} profiles...`);
    const transformedProfiles = profiles?.map((profile) => {
      try {
        // Use only actual pricing from database
        const pricing: { [key: string]: string } = profile.pricing || {};

        // Handle gallery_images properly
        let galleryUrls = [];
        if (profile.gallery_images) {
          if (Array.isArray(profile.gallery_images)) {
            galleryUrls = profile.gallery_images;
          } else if (typeof profile.gallery_images === 'string') {
            // Split by space if it's a space-separated string
            galleryUrls = profile.gallery_images.split(' ').filter((url: string) => url.trim());
          }
        }

        // Use default reviews count since we don't calculate it in profiles-list for performance
        const reviewsCount = 0;

      return {
        id: profile.id,
        name: profile.name || 'Unknown',
        age: profile.age || 25,
        location: profile.location || 'Chennai',
        category: profile.category || 'Independent',
        photo_url: profile.main_photo_url || '/images/independent-1.jpg',
        gallery_urls: galleryUrls,
        whatsapp_number: profile.whatsapp_number || '+918121426651',
        phone_number: profile.phone_number || '+918121426651',
        pricing,
        rating: 4.5, // Default rating (calculated in individual profile API)
        reviews_count: reviewsCount, // Default count (calculated in individual profile API)
        is_featured: profile.featured || false,
        is_active: profile.is_active !== false,
        views_count: profile.views_count || 0,
        clicks_count: profile.clicks_count || 0,
        created_at: profile.created_at || new Date().toISOString(),
        updated_at: profile.updated_at || new Date().toISOString(),
        slug: profile.slug || profile.name.toLowerCase().replace(/\s+/g, '-'),
        meta_title: profile.meta_title,
        meta_description: profile.meta_description,
        meta_keywords: profile.meta_keywords,
        og_title: profile.og_title,
        og_description: profile.og_description,
        og_image: profile.og_image,
        twitter_title: profile.twitter_title,
        twitter_description: profile.twitter_description,
        twitter_image: profile.twitter_image,
        canonical_url: profile.canonical_url,
        schema_markup: profile.schema_markup
      };
      } catch (profileError) {
        console.error('Error transforming profile:', profile.id, profileError);
        // Return a minimal profile object to prevent complete failure
        return {
          id: profile.id,
          name: profile.name || 'Unknown',
          age: profile.age || 25,
          location: profile.location || 'Chennai',
          category: profile.category || 'Independent',
          photo_url: profile.main_photo_url || '/images/independent-1.jpg',
          gallery_urls: [],
          whatsapp_number: profile.whatsapp_number || '+918121426651',
          phone_number: profile.phone_number || '+918121426651',
          pricing: {},
          rating: 4.5,
          reviews_count: 0,
          is_featured: profile.featured || false,
          is_active: profile.is_active !== false,
          views_count: 0,
          clicks_count: 0,
          created_at: profile.created_at || new Date().toISOString(),
          updated_at: profile.updated_at || new Date().toISOString(),
          slug: profile.slug || profile.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown',
          meta_title: null,
          meta_description: null,
          meta_keywords: null
        };
      }
    }) || [];
    const transformEndTime = Date.now();
    console.log(`[API] Data transformation completed in ${transformEndTime - transformStartTime}ms`);

    const totalTime = Date.now() - startTime;
    console.log(`[API] Total API time: ${totalTime}ms (DB: ${dbQueryEndTime - dbQueryStartTime}ms, Transform: ${transformEndTime - transformStartTime}ms)`);
    
    const responseData = {
      profiles: transformedProfiles,
      total: profiles?.length || 0,
      limit,
      offset
    };

    // Store in cache
    cache.set(cacheKey, {
      data: responseData,
      timestamp: Date.now()
    });

    const response = NextResponse.json(responseData);

    // Add caching headers for better performance
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=60');
    
    return response;

  } catch (error) {
    console.error('Error in profiles API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
