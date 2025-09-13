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

// Simple in-memory cache for individual profiles (10 minute TTL)
const profileCache = new Map();
const PROFILE_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const startTime = Date.now();
  try {
    const { slug } = await params;

    // Check cache first
    const cached = profileCache.get(slug);
    if (cached && Date.now() - cached.timestamp < PROFILE_CACHE_TTL) {
      console.log(`[Profile API] Returning cached data for slug: ${slug}`);
      return NextResponse.json(cached.data);
    }

    console.log(`[Profile API] Fetching profile for slug: ${slug}`);

    const { data: profile, error } = await supabase
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
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error || !profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    // Get rating and reviews count from testimonials
    const { data: testimonials, error: testimonialsError } = await supabase
      .from('testimonials')
      .select('rating')
      .eq('profile_id', profile.id)
      .eq('is_active', true);

    let averageRating = 4.5; // Default rating
    let reviewsCount = 0;

    if (!testimonialsError && testimonials && testimonials.length > 0) {
      reviewsCount = testimonials.length;
      const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
      averageRating = Math.round((totalRating / reviewsCount) * 10) / 10; // Round to 1 decimal place
    }

    // Transform data to match frontend expectations
    const transformedProfile = {
      id: profile.id,
      name: profile.name || 'Unknown',
      age: profile.age || 25,
      location: profile.location || 'Chennai',
      category: profile.category || 'Independent',
      photo_url: profile.main_photo_url || '/images/independent-1.jpg',
      gallery_urls: Array.isArray(profile.gallery_images) ? profile.gallery_images : [],
      whatsapp_number: profile.whatsapp_number || '+918121426651',
      phone_number: profile.phone_number || '+918121426651',
      pricing: profile.pricing || {},
      rating: averageRating,
      reviews_count: reviewsCount,
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

    const responseData = {
      profile: transformedProfile
    };

    // Store in cache
    profileCache.set(slug, {
      data: responseData,
      timestamp: Date.now()
    });

    const totalTime = Date.now() - startTime;
    console.log(`[Profile API] Total time: ${totalTime}ms for slug: ${slug}`);

    const response = NextResponse.json(responseData);
    
    // Add caching headers
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=300');
    
    return response;

  } catch (error) {
    console.error('Error in profile API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
