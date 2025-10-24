import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

// GET: Get single ad details (for admin)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { id } = await params;
    const adId = parseInt(id);
    if (isNaN(adId)) {
      return NextResponse.json(
        { error: 'Invalid ad ID' },
        { status: 400 }
      );
    }

    const { data: ad, error } = await supabase
      .from('user_ads')
      .select(`
        *,
        user:platform_users(id, full_name, email, phone_number, user_type_id),
        plan:ad_plans(name, duration_days, price),
        payment:payments!fk_user_ads_payment_id(payment_status, amount, payment_proof_url)
      `)
      .eq('id', adId)
      .single();

    if (error) {
      console.error('Error fetching ad:', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Ad not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: `Failed to fetch ad: ${error.message}` },
        { status: 500 }
      );
    }

    if (!ad) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      ad
    });

  } catch (error: any) {
    console.error('Get ad error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

