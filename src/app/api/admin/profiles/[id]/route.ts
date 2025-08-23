import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const profileId = parseInt(id);
    
    if (isNaN(profileId)) {
      return NextResponse.json({ error: 'Invalid profile ID' }, { status: 400 });
    }

    // Get profile with images
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*, profile_images(*)')
      .eq('id', profileId)
      .single();

    if (error) {
      console.error('Profile fetch error:', error);
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: profile
    });

  } catch (error) {
    console.error('Profile API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const profileId = parseInt(id);
    
    if (isNaN(profileId)) {
      return NextResponse.json({ error: 'Invalid profile ID' }, { status: 400 });
    }

    const body = await request.json();
    const { 
      name, 
      age, 
      location, 
      services, 
      pricing, 
      availability, 
      rating, 
      is_featured, 
      is_verified, 
      is_active,
      category,
      whatsapp,
      phone,
      nationality,
      height,
      body_type,
      hair_color,
      eye_color,
      languages
    } = body;

    // Build update object with only provided fields
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (age !== undefined) updateData.age = age;
    if (location !== undefined) updateData.location = location;
    if (services !== undefined) updateData.services = services;
    if (pricing !== undefined) updateData.pricing = pricing;
    if (availability !== undefined) updateData.availability = availability;
    if (rating !== undefined) updateData.rating = rating;
    if (is_featured !== undefined) updateData.is_featured = is_featured;
    if (is_verified !== undefined) updateData.is_verified = is_verified;
    if (is_active !== undefined) updateData.is_active = is_active;
    if (category !== undefined) updateData.category = category;
    if (whatsapp !== undefined) updateData.whatsapp = whatsapp;
    if (phone !== undefined) updateData.phone = phone;
    if (nationality !== undefined) updateData.nationality = nationality;
    if (height !== undefined) updateData.height = height;
    if (body_type !== undefined) updateData.body_type = body_type;
    if (hair_color !== undefined) updateData.hair_color = hair_color;
    if (eye_color !== undefined) updateData.eye_color = eye_color;
    if (languages !== undefined) updateData.languages = languages;

    // Update profile
    const { data: updatedProfile, error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', profileId)
      .select('*, profile_images(*)')
      .single();

    if (error) {
      console.error('Profile update error:', error);
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: updatedProfile
    });

  } catch (error) {
    console.error('Profile update API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const profileId = parseInt(id);
    
    if (isNaN(profileId)) {
      return NextResponse.json({ error: 'Invalid profile ID' }, { status: 400 });
    }

    // Delete profile (cascade will delete related images)
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', profileId);

    if (error) {
      console.error('Profile deletion error:', error);
      return NextResponse.json({ error: 'Failed to delete profile' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Profile deleted successfully'
    });

  } catch (error) {
    console.error('Profile deletion API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
