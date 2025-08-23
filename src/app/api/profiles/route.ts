import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with anon key for public access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MjI5OTYsImV4cCI6MjA3MTQ5ODk5Nn0.9nUUklx5qSDOxAc8EyHMLLaFYdU69SxcpBNGM5dVNME'
);

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const category = searchParams.get('category') || '';
    const availability = searchParams.get('availability') || '';
    const sortBy = searchParams.get('sortBy') || '';

    // Build query - only active profiles
    let query = supabase
      .from('profiles')
      .select('*, profile_images(*)', { count: 'exact' })
      .eq('is_active', true); // Only show active profiles

    // Apply filters
    if (search) {
      query = query.or(`name.ilike.%${search}%,location.ilike.%${search}%,category.ilike.%${search}%`);
    }
    if (location) {
      query = query.eq('location', location);
    }
    if (category) {
      query = query.eq('category', category);
    }
    if (availability) {
      query = query.eq('availability', availability);
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        query = query.order('created_at', { ascending: false });
        break;
      case 'price_low':
        query = query.order('pricing->one_shot', { ascending: true, nullsFirst: false });
        break;
      case 'price_high':
        query = query.order('pricing->one_shot', { ascending: false, nullsFirst: false });
        break;
      case 'popular':
        query = query.order('views_count', { ascending: false });
        break;
      case 'rating':
        query = query.order('rating', { ascending: false });
        break;
      default:
        // Default sorting: featured first, then by creation date
        query = query.order('is_featured', { ascending: false })
                     .order('created_at', { ascending: false });
    }

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data: profiles, count, error } = await query;

    if (error) {
      console.error('Profiles fetch error:', error);
      return NextResponse.json({ error: 'Failed to fetch profiles' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: {
        profiles: profiles || [],
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages: Math.ceil((count || 0) / limit)
        }
      }
    });

  } catch (error) {
    console.error('Profiles API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}