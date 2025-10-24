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

// POST: Create renewal payment
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const adId = parseInt(params.id);
    const body = await request.json();
    const { plan_id } = body;

    if (!plan_id) {
      return NextResponse.json(
        { success: false, error: 'Plan ID is required' },
        { status: 400 }
      );
    }

    // Verify ad belongs to user and is expired
    const { data: ad, error: adError } = await supabase
      .from('user_ads')
      .select('*')
      .eq('id', adId)
      .eq('user_id', user.id)
      .single();

    if (adError || !ad) {
      return NextResponse.json(
        { success: false, error: 'Ad not found or access denied' },
        { status: 404 }
      );
    }

    if (!ad.is_expired) {
      return NextResponse.json(
        { success: false, error: 'Ad is still active and cannot be renewed yet' },
        { status: 400 }
      );
    }

    // Get plan details
    const { data: plan, error: planError } = await supabase
      .from('ad_plans')
      .select('*')
      .eq('id', plan_id)
      .eq('is_active', true)
      .single();

    if (planError || !plan) {
      return NextResponse.json(
        { success: false, error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    // Check if there's already a pending payment for this ad
    const { data: existingPayment } = await supabase
      .from('payments')
      .select('*')
      .eq('ad_id', adId)
      .eq('payment_status', 'pending')
      .maybeSingle();

    if (existingPayment) {
      return NextResponse.json(
        { success: false, error: 'There is already a pending payment for this ad. Please complete or cancel it first.' },
        { status: 400 }
      );
    }

    // Create new payment record for renewal
    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: user.id,
        plan_id: plan.id,
        ad_id: adId,
        amount: plan.price,
        upi_id: '', // Will be filled when user sees payment page
        payment_status: 'pending'
      })
      .select()
      .single();

    if (paymentError || !payment) {
      console.error('Error creating payment:', paymentError);
      return NextResponse.json(
        { success: false, error: 'Failed to create payment record' },
        { status: 500 }
      );
    }

    // Update ad with new plan (but don't activate yet - wait for payment)
    const { error: updateError } = await supabase
      .from('user_ads')
      .update({
        plan_id: plan.id,
        payment_id: payment.id,
        updated_at: new Date().toISOString()
      })
      .eq('id', adId);

    if (updateError) {
      console.error('Error updating ad:', updateError);
      // Rollback payment creation
      await supabase.from('payments').delete().eq('id', payment.id);
      return NextResponse.json(
        { success: false, error: 'Failed to update ad with new plan' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      payment_id: payment.id,
      ad_id: adId,
      message: 'Renewal initiated. Please proceed to payment.'
    });

  } catch (error: any) {
    console.error('Renew ad error:', error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

