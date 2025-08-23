import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const status = searchParams.get('status') || '';

    // Build query
    let query = supabase
      .from('profiles')
      .select('*, profile_images(*)', { count: 'exact' });

    // Apply filters
    if (search) {
      query = query.ilike('name', `%${search}%`);
    }
    if (location) {
      query = query.eq('location', location);
    }
    if (status === 'active') {
      query = query.eq('is_active', true);
    } else if (status === 'inactive') {
      query = query.eq('is_active', false);
    } else if (status === 'featured') {
      query = query.eq('is_featured', true);
    }

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to).order('created_at', { ascending: false });

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

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, age, location, services, pricing, availability, rating, is_featured, is_verified, is_active } = body;

    // Validate required fields
    if (!name || !age || !location || !pricing) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create profile
    const { data: newProfile, error } = await supabase
      .from('profiles')
      .insert({
        name,
        age,
        location,
        services: services || [],
        pricing,
        availability: availability || 'Available Now',
        rating: rating || 0,
        is_featured: is_featured || false,
        is_verified: is_verified || false,
        is_active: is_active !== undefined ? is_active : true
      })
      .select()
      .single();

    if (error) {
      console.error('Profile creation error:', error);
      return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: newProfile
    });

  } catch (error) {
    console.error('Profile creation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
