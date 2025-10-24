import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/platform-auth';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

// Generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    + '-' + Date.now();
}

// GET: List user's ads
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      console.error('User not authenticated');
      return NextResponse.json(
        { success: false, error: 'Not authenticated', data: [] },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      console.error('Supabase client creation failed');
      return NextResponse.json(
        { success: false, error: 'Database connection failed', data: [] },
        { status: 500 }
      );
    }

    const { data: ads, error } = await supabase
      .from('user_ads')
      .select(`
        *,
        plan:ad_plans(*),
        payment:payments!fk_user_ads_payment_id(*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching ads:', error);
      // If table doesn't exist, return empty array gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('user_ads table does not exist. Returning empty data.');
        return NextResponse.json({
          success: true,
          data: [],
          message: 'Ads system not yet configured'
        });
      }
      return NextResponse.json(
        { success: false, error: `Failed to fetch ads: ${error.message}`, data: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: ads || []
    });

  } catch (error: any) {
    console.error('Get ads error:', error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error.message}`, data: [] },
      { status: 500 }
    );
  }
}

// POST: Create new ad
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Both user types require plan selection (pay per ad)
    const planId = body.plan_id;

    if (!body.plan_id) {
      return NextResponse.json(
        { success: false, error: 'Plan selection is required' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.name || !body.age || !body.location || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique slug
    const slug = generateSlug(body.name);

    // Create ad
    const { data: ad, error } = await supabase
      .from('user_ads')
      .insert({
        user_id: user.id,
        name: body.name,
        slug,
        age: body.age,
        location: body.location,
        category: body.category,
        whatsapp_number: body.whatsapp_number,
        phone_number: body.phone_number,
        pricing: body.pricing,
        profile_description: body.profile_description,
        plan_id: planId,
        main_photo_url: body.main_photo_url,
        gallery_images: body.gallery_images || [],
        video_verification_url: body.video_verification_url,
        approval_status: 'pending',
        is_active: false,
        is_expired: false
      })
      .select('*')
      .single();

    if (error) {
      console.error('Error creating ad:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to create ad' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ad,
      message: 'Ad created successfully. Please proceed to payment.'
    });

  } catch (error) {
    console.error('Create ad error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

