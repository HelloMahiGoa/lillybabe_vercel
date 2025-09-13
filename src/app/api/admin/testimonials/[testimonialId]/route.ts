import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCurrentUser } from '@/lib/simple-auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET - Fetch single testimonial
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ testimonialId: string }> }
) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { testimonialId: testimonialIdStr } = await params;
    const testimonialId = parseInt(testimonialIdStr);
    if (isNaN(testimonialId)) {
      return NextResponse.json(
        { error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const { data: testimonial, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('id', testimonialId)
      .single();

    if (error || !testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ testimonial });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update testimonial
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ testimonialId: string }> }
) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { testimonialId: testimonialIdStr } = await params;
    const testimonialId = parseInt(testimonialIdStr);
    if (isNaN(testimonialId)) {
      return NextResponse.json(
        { error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // First, get the current testimonial to merge with updates
    const { data: currentTestimonial, error: fetchError } = await supabase
      .from('testimonials')
      .select('*')
      .eq('id', testimonialId)
      .single();

    if (fetchError || !currentTestimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    // Merge current data with updates
    const updateData = {
      ...currentTestimonial,
      ...body,
      updated_at: new Date().toISOString(),
    };

    // Validate required fields if they're being updated
    if (body.name !== undefined && !body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (body.rating !== undefined && (body.rating < 1 || body.rating > 5)) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    if (body.comment !== undefined && !body.comment) {
      return NextResponse.json(
        { error: 'Comment is required' },
        { status: 400 }
      );
    }

    // Update testimonial
    const { data: testimonial, error } = await supabase
      .from('testimonials')
      .update(updateData)
      .eq('id', testimonialId)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to update testimonial' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Testimonial updated successfully',
      testimonial,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete testimonial
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ testimonialId: string }> }
) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { testimonialId: testimonialIdStr } = await params;
    const testimonialId = parseInt(testimonialIdStr);
    if (isNaN(testimonialId)) {
      return NextResponse.json(
        { error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', testimonialId);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to delete testimonial' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Testimonial deleted successfully',
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
