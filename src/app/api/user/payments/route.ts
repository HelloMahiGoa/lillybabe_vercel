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

// GET: Get random UPI QR code
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // If requesting a QR code
    if (action === 'get-qr') {
      const { data: qrCodes, error } = await supabase
        .from('upi_qr_codes')
        .select('*')
        .eq('is_active', true);

      if (error || !qrCodes || qrCodes.length === 0) {
        return NextResponse.json(
          { success: false, error: 'No active UPI codes available' },
          { status: 500 }
        );
      }

      // Select random QR code
      const randomQr = qrCodes[Math.floor(Math.random() * qrCodes.length)];

      return NextResponse.json({
        success: true,
        qr_code: randomQr
      });
    }

    // Get user's payment history with ad details
    const { data: payments, error: paymentsError } = await supabase
      .from('payments')
      .select(`
        *,
        plan:ad_plans(*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    // Fetch related ads separately to avoid foreign key ambiguity
    if (payments && payments.length > 0) {
      const adIds = payments.map(p => p.ad_id).filter(id => id !== null);
      if (adIds.length > 0) {
        const { data: ads } = await supabase
          .from('user_ads')
          .select('id, name, slug, main_photo_url, location, category')
          .in('id', adIds);

        // Map ads to payments
        if (ads) {
          payments.forEach((payment: any) => {
            payment.ad = ads.find(ad => ad.id === payment.ad_id) || null;
          });
        }
      }
    }

    if (paymentsError) {
      console.error('Error fetching payments:', paymentsError);
      // If table doesn't exist, return empty array gracefully
      if (paymentsError.code === '42P01' || paymentsError.message.includes('does not exist')) {
        console.warn('payments table does not exist. Returning empty data.');
        return NextResponse.json({
          success: true,
          data: [],
          message: 'Payments system not yet configured'
        });
      }
      return NextResponse.json(
        { success: false, error: `Failed to fetch payments: ${paymentsError.message}`, data: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: payments || []
    });

  } catch (error: any) {
    console.error('Payments API error:', error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error.message}`, data: [] },
      { status: 500 }
    );
  }
}

// POST: Submit payment proof
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const adId = formData.get('ad_id') as string;
    const planId = formData.get('plan_id') as string;
    const amount = formData.get('amount') as string;
    const upiId = formData.get('upi_id') as string;
    const transactionId = formData.get('transaction_id') as string | null;
    const proofFile = formData.get('payment_proof') as File;

    if (!adId || !planId || !amount || !upiId || !proofFile) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Upload payment proof to Supabase Storage
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { success: false, error: 'Storage configuration missing' },
        { status: 500 }
      );
    }

    const supabaseStorage = createClient(supabaseUrl, serviceRoleKey);

    // Convert file to buffer
    const bytes = await proofFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = proofFile.name.split('.').pop();
    const filename = `payment-${timestamp}.${fileExtension}`;
    const filePath = `payments/${user.id}/${filename}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabaseStorage.storage
      .from('uploads')
      .upload(filePath, buffer, {
        contentType: proofFile.type,
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      return NextResponse.json(
        { success: false, error: 'Failed to upload payment proof to storage' },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseStorage.storage
      .from('uploads')
      .getPublicUrl(filePath);

    const proofUrl = publicUrl;

    // Create payment record
    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { data: payment, error } = await supabase
      .from('payments')
      .insert({
        user_id: user.id,
        plan_id: parseInt(planId),
        ad_id: parseInt(adId),
        amount: parseFloat(amount),
        upi_id: upiId,
        transaction_id: transactionId || null,
        payment_proof_url: proofUrl,
        payment_status: 'pending'
      })
      .select('*')
      .single();

    if (error) {
      console.error('Error creating payment:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to create payment record' },
        { status: 500 }
      );
    }

    // Update ad with payment_id
    await supabase
      .from('user_ads')
      .update({ payment_id: payment.id })
      .eq('id', parseInt(adId));

    return NextResponse.json({
      success: true,
      payment,
      message: 'Payment proof submitted successfully. Awaiting verification.'
    });

  } catch (error) {
    console.error('Submit payment error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

