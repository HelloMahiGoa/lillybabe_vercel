import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with anon key for public access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MjI5OTYsImV4cCI6MjA3MTQ5ODk5Nn0.9nUUklx5qSDOxAc8EyHMLLaFYdU69SxcpBNGM5dVNME'
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

    // Get profile with images - only if active
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*, profile_images(*)')
      .eq('id', profileId)
      .eq('is_active', true) // Only show active profiles
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
