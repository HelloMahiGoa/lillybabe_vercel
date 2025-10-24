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

// GET: Get all payments for a specific user
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

    const { data: payments, error } = await supabase
      .from('payments')
      .select(`
        *,
        plan:ad_plans(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    // Fetch related ads separately
    if (payments && payments.length > 0) {
      const adIds = payments.map(p => p.ad_id).filter(id => id !== null);
      if (adIds.length > 0) {
        const { data: ads } = await supabase
          .from('user_ads')
          .select('id, name, slug, main_photo_url')
          .in('id', adIds);

        // Map ads to payments
        if (ads) {
          payments.forEach((payment: any) => {
            payment.ad = ads.find(ad => ad.id === payment.ad_id) || null;
          });
        }
      }
    }

    if (error) {
      console.error('Error fetching payments:', error);
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        return NextResponse.json({ payments: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch payments: ${error.message}`, payments: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      payments: payments || []
    });

  } catch (error: any) {
    console.error('Get user payments error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}`, payments: [] },
      { status: 500 }
    );
  }
}

