import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';
import { rm } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

// GET - Fetch single profile by ID
export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
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

    // Create Supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Profile API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const { id } = await params;
    
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Profile not found' },
          { status: 404 }
        );
      }
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch profile' },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update profile by ID
export async function PUT(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
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

    // Create Supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Profile API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    // Update profile
    const { data: profile, error } = await supabase
      .from('profiles')
      .update({
        name: body.name,
        slug: body.slug,
        age: body.age,
        location: body.location,
        category: body.category,
        whatsapp_number: body.whatsapp_number,
        phone_number: body.phone_number,
        pricing: body.pricing,
        featured: body.featured,
        is_active: body.is_active,
        main_photo_url: body.main_photo_url,
        gallery_images: body.gallery_images,
        
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
        
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to update profile' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Profile updated successfully',
      profile 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete profile by ID
export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
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

    // Create Supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Profile API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const { id } = await params;

    // First, get the profile data to find the associated folder
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('name, slug')
      .eq('id', id)
      .single();

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Profile not found' },
          { status: 404 }
        );
      }
      console.error('Database error:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch profile' },
        { status: 500 }
      );
    }

    // Delete profile from database first
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to delete profile' },
        { status: 500 }
      );
    }

    // After successful database deletion, clean up the images folder
    try {
      if (profile?.name) {
        const sanitizedProfileName = profile.name.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
        const profileDir = path.join(process.cwd(), 'public', 'profiles', sanitizedProfileName);
        
        // Check if folder exists and delete it
        if (existsSync(profileDir)) {
          await rm(profileDir, { recursive: true, force: true });
          console.log(`Successfully deleted profile folder: ${sanitizedProfileName}`);
        }
      }
      
      // Also try to delete folder using slug if name-based folder doesn't exist
      if (profile?.slug && profile.slug !== profile.name) {
        const profileDirBySlug = path.join(process.cwd(), 'public', 'profiles', profile.slug);
        if (existsSync(profileDirBySlug)) {
          await rm(profileDirBySlug, { recursive: true, force: true });
          console.log(`Successfully deleted profile folder by slug: ${profile.slug}`);
        }
      }
    } catch (folderError) {
      console.warn('Failed to delete profile folder:', folderError);
      // Don't fail the request if folder deletion fails - the database deletion was successful
    }

    return NextResponse.json({ 
      message: 'Profile and associated files deleted successfully' 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
