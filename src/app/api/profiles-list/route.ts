import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory cache for profiles (5 minute TTL)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Mock profiles data as fallback
const mockProfiles = [
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

export async function GET(request: NextRequest) {
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

    // Filter mock profiles based on parameters
    let filteredProfiles = [...mockProfiles];

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
