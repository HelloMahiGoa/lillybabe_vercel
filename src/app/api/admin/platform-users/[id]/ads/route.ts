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

// GET: Get all ads for a specific user
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
    const userId = id;

    const { data: ads, error } = await supabase
      .from('user_ads')
      .select(`
        *,
        plan:ad_plans(*),
        payment:payments!fk_user_ads_payment_id(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching ads:', error);
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        return NextResponse.json({ ads: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch ads: ${error.message}`, ads: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ads: ads || []
    });

  } catch (error: any) {
    console.error('Get user ads error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}`, ads: [] },
      { status: 500 }
    );
  }
}

