import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const profileId = searchParams.get('profile_id');

    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true);

    // Filter by profile_id if provided
    if (profileId) {
      query = query.eq('profile_id', profileId);
    }

    const { data: testimonials, error } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Error fetching testimonials:', error);
      return NextResponse.json(
        { error: 'Failed to fetch testimonials' },
        { status: 500 }
      );
    }

    // Transform data to match frontend expectations
    const transformedTestimonials = testimonials?.map(testimonial => ({
      id: testimonial.id,
      name: testimonial.name,
      rating: testimonial.rating,
      comment: testimonial.comment,
      location: testimonial.location || 'Chennai',
      is_verified: testimonial.is_verified,
      profile_image: '/images/independent-1.jpg' // Default image
    })) || [];

    return NextResponse.json({
      testimonials: transformedTestimonials,
      total: testimonials?.length || 0,
      limit,
      offset
    });

  } catch (error) {
    console.error('Error in testimonials API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
