import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Function to get environment variables with fallback
function getEnvVar(name: string): string | undefined {
  return process.env[name];
}

// Validate environment variables
const supabaseUrl = getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
const supabaseKey = getEnvVar('SUPABASE_SERVICE_ROLE_KEY');

console.log('Environment check:');
console.log('NEXT_PUBLIC_SUPABASE_URL exists:', !!supabaseUrl);
console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!supabaseKey);
console.log('NEXT_PUBLIC_SUPABASE_URL value:', supabaseUrl ? 'SET' : 'NOT SET');
console.log('SUPABASE_SERVICE_ROLE_KEY value:', supabaseKey ? 'SET' : 'NOT SET');

if (!supabaseUrl) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseKey) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
}

// Create Supabase client with optimized settings
let supabase: any = null;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
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
    });
    console.log('Supabase client created successfully');
  } catch (error) {
    console.error('Error creating Supabase client:', error);
  }
}

// Simple in-memory cache for profiles (5 minute TTL)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const featured = searchParams.get('featured');

    console.log(`[API] Starting profiles-list request - limit: ${limit}, offset: ${offset}`);
    console.log(`[API] Supabase client available: ${supabase ? 'Yes' : 'No'}`);

    // Check cache first
    const cacheKey = `profiles-${limit}-${offset}-${category || 'all'}-${location || 'all'}-${featured || 'all'}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log(`[API] Returning cached data for key: ${cacheKey}`);
      return NextResponse.json(cached.data);
    }

    // If Supabase is not available, return fallback data
    if (!supabase) {
      console.error('[API] Supabase client not available, returning fallback data');
      
      // Return fallback profiles to keep the site functional
      const fallbackProfiles = [
        {
          id: 1,
          name: "Priya",
          age: 24,
          location: "Chennai",
          category: "Independent",
          photo_url: "/images/independent-1.jpg",
          gallery_urls: ["/images/independent-1.jpg"],
          whatsapp_number: "+918121426651",
          phone_number: "+918121426651",
          pricing: {
            "1 Shot": "₹5000",
            "2 Shots": "₹8000",
            "3 Shots": "₹12000",
            "Full Night": "₹20000"
          },
          rating: 4.5,
          reviews_count: 12,
          is_featured: true,
          is_active: true,
          views_count: 150,
          clicks_count: 25,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          slug: "priya"
        },
        {
          id: 2,
          name: "Sneha",
          age: 22,
          location: "Chennai",
          category: "Teen",
          photo_url: "/images/teen-1.jpg",
          gallery_urls: ["/images/teen-1.jpg"],
          whatsapp_number: "+918121426651",
          phone_number: "+918121426651",
          pricing: {
            "1 Shot": "₹4000",
            "2 Shots": "₹7000",
            "3 Shots": "₹10000",
            "Full Night": "₹18000"
          },
          rating: 4.3,
          reviews_count: 8,
          is_featured: false,
          is_active: true,
          views_count: 120,
          clicks_count: 18,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          slug: "sneha"
        },
        {
          id: 3,
          name: "Ananya",
          age: 26,
          location: "Chennai",
          category: "Celebrity",
          photo_url: "/images/celebrity-1.jpg",
          gallery_urls: ["/images/celebrity-1.jpg"],
          whatsapp_number: "+918121426651",
          phone_number: "+918121426651",
          pricing: {
            "1 Shot": "₹8000",
            "2 Shots": "₹15000",
            "3 Shots": "₹22000",
            "Full Night": "₹35000"
          },
          rating: 4.8,
          reviews_count: 20,
          is_featured: true,
          is_active: true,
          views_count: 300,
          clicks_count: 45,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          slug: "ananya"
        }
      ];

      // Apply filters to fallback data
      let filteredProfiles = [...fallbackProfiles];
      
      if (category) {
        filteredProfiles = filteredProfiles.filter(profile => 
          profile.category.toLowerCase() === category.toLowerCase()
        );
      }
      
      if (location) {
        filteredProfiles = filteredProfiles.filter(profile => 
          profile.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      if (featured === 'true') {
        filteredProfiles = filteredProfiles.filter(profile => profile.is_featured);
      } else if (featured === 'false') {
        filteredProfiles = filteredProfiles.filter(profile => !profile.is_featured);
      }

      // Apply pagination
      const paginatedProfiles = filteredProfiles.slice(offset, offset + limit);

      const responseData = {
        profiles: paginatedProfiles,
        total: filteredProfiles.length,
        limit,
        offset,
        fallback: true,
        message: 'Using fallback data - database connection unavailable'
      };

      return NextResponse.json(responseData);
    }

    // Optimized query with minimal fields and timeout protection
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
        whatsapp_number,
        phone_number,
        pricing,
        featured,
        is_active,
        created_at
      `)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(limit)
      .range(offset, offset + limit - 1);

    // Apply filters only if provided
    if (category) {
      query = query.eq('category', category);
    }
    if (location) {
      query = query.ilike('location', `%${location}%`);
    }
    if (featured === 'true') {
      query = query.eq('featured', true);
    } else if (featured === 'false') {
      query = query.eq('featured', false);
    }

    console.log(`[API] Executing database query...`);
    const { data: profiles, error } = await query;

    if (error) {
      console.error('Error fetching profiles:', error);
      return NextResponse.json(
        { 
          error: 'Failed to fetch profiles', 
          details: error.message,
          profiles: [],
          total: 0,
          limit,
          offset
        },
        { status: 500 }
      );
    }

    if (!profiles) {
      console.error('No profiles data returned');
      return NextResponse.json(
        { 
          error: 'No profiles found',
          profiles: [],
          total: 0,
          limit,
          offset
        },
        { status: 404 }
      );
    }

    // Transform data to match frontend expectations
    const transformedProfiles = profiles.map((profile: any) => ({
      id: profile.id,
      name: profile.name || 'Unknown',
      age: profile.age || 25,
      location: profile.location || 'Chennai',
      category: profile.category || 'Independent',
      photo_url: profile.main_photo_url || '/images/independent-1.jpg',
      gallery_urls: [profile.main_photo_url || '/images/independent-1.jpg'],
      whatsapp_number: profile.whatsapp_number || '+918121426651',
      phone_number: profile.phone_number || '+918121426651',
      pricing: profile.pricing || {
        "1 Shot": "₹5000",
        "2 Shots": "₹8000", 
        "3 Shots": "₹12000",
        "Full Night": "₹20000"
      },
      rating: 4.5, // Default rating
      reviews_count: 0, // Default count
      is_featured: profile.featured || false,
      is_active: profile.is_active !== false,
      views_count: 0,
      clicks_count: 0,
      created_at: profile.created_at || new Date().toISOString(),
      updated_at: profile.created_at || new Date().toISOString(),
      slug: profile.slug || profile.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown'
    }));

    const totalTime = Date.now() - startTime;
    console.log(`[API] Total API time: ${totalTime}ms, profiles returned: ${transformedProfiles.length}`);
    
    const responseData = {
      profiles: transformedProfiles,
      total: transformedProfiles.length,
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
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        profiles: [],
        total: 0,
        limit: parseInt(request.nextUrl.searchParams.get('limit') || '20'),
        offset: parseInt(request.nextUrl.searchParams.get('offset') || '0')
      },
      { status: 500 }
    );
  }
}
