import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';

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
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Profiles API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const location = searchParams.get('location') || '';
    const featured = searchParams.get('featured');
    const isActive = searchParams.get('is_active');
    const sortBy = searchParams.get('sortBy') || 'created_at';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // Build query
    let query = supabase
      .from('profiles')
      .select('*', { count: 'exact' });

    // Apply filters
    if (search) {
      query = query.or(`name.ilike.%${search}%,slug.ilike.%${search}%`);
    }

    if (category) {
      query = query.eq('category', category);
    }

    if (location) {
      query = query.eq('location', location);
    }

    if (featured !== null && featured !== undefined) {
      query = query.eq('featured', featured === 'true');
    }

    if (isActive !== null && isActive !== undefined) {
      query = query.eq('is_active', isActive === 'true');
    }

    // Apply sorting
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // Apply pagination
    const offset = (page - 1) * limit;
    query = query.range(offset, offset + limit - 1);

    const { data: profiles, error, count } = await query;

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch profiles' },
        { status: 500 }
      );
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return NextResponse.json({
      profiles,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages,
      },
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Profiles API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.slug || !body.age || !body.location || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('slug', body.slug)
      .single();

    if (existingProfile) {
      return NextResponse.json(
        { error: 'Profile with this slug already exists' },
        { status: 400 }
      );
    }

    // Create profile
    const { data: profile, error } = await supabase
      .from('profiles')
      .insert({
        name: body.name,
        slug: body.slug,
        age: body.age,
        location: body.location,
        category: body.category,
        whatsapp_number: body.whatsapp_number || '+918121426651',
        phone_number: body.phone_number || '+918121426651',
        pricing: body.pricing || {
          "1 Shot": "₹8,000",
          "2 Shots": "₹12,000",
          "3 Shots": "₹15,000",
          "Full Night": "₹25,000"
        },
        featured: body.featured || false,
        is_active: body.is_active !== undefined ? body.is_active : true,
        main_photo_url: body.main_photo_url,
        gallery_images: body.gallery_images || [],
        
        // Profile Description
        profile_description: body.profile_description,
        
        // SEO Fields
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        meta_keywords: body.meta_keywords,
        og_title: body.og_title,
        og_description: body.og_description,
        og_image: body.og_image,
        twitter_title: body.twitter_title,
        twitter_description: body.twitter_description,
        twitter_image: body.twitter_image,
        canonical_url: body.canonical_url,
        schema_markup: body.schema_markup,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to create profile' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Profile created successfully',
      profile,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
