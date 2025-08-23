import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // For now, return sample data
    // When Supabase is connected, uncomment the following:
    /*
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select(`
        *,
        profile_photos(photo_url, is_primary, order_index)
      `)
      .eq('is_active', true)
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
    */

    // Return sample data for now
    const sampleData = [
      {
        id: "sujata-modal",
        name: "Sujata Modal",
        age: 27,
        ethnicity: "Indian",
        rating: 4.5,
        response_rate: 87,
        availability: "13h",
        price_per_hour: 12000,
        description: "Beautiful and professional companion with a warm personality.",
        is_featured: true,
        is_verified: true,
        is_active: true,
        created_at: "2024-01-15T10:00:00Z",
        updated_at: "2024-01-15T10:00:00Z",
        profile_photos: [
          {
            photo_url: "/images/profiles/sujata-1.jpg",
            is_primary: true
          }
        ]
      }
    ];

    return NextResponse.json(sampleData);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
