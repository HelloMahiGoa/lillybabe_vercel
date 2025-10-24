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

// GET: List all UPI QR codes
export async function GET(request: NextRequest) {
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

    const { data: qrCodes, error } = await supabase
      .from('upi_qr_codes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching QR codes:', error);
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('upi_qr_codes table does not exist. Returning empty data.');
        return NextResponse.json({ qr_codes: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch QR codes: ${error.message}`, qr_codes: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({ qr_codes: qrCodes || [] });

  } catch (error: any) {
    console.error('UPI QR codes API error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}`, qr_codes: [] },
      { status: 500 }
    );
  }
}

// POST: Create new UPI QR code
export async function POST(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { upi_id, qr_code_url, merchant_name, is_active } = body;

    if (!upi_id || !qr_code_url || !merchant_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Check if UPI ID already exists
    const { data: existing } = await supabase
      .from('upi_qr_codes')
      .select('id')
      .eq('upi_id', upi_id)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: 'UPI ID already exists' },
        { status: 400 }
      );
    }

    const { data: qrCode, error } = await supabase
      .from('upi_qr_codes')
      .insert({
        upi_id,
        qr_code_url,
        merchant_name,
        is_active: is_active ?? true
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating QR code:', error);
      return NextResponse.json(
        { error: 'Failed to create QR code' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      qr_code: qrCode,
      message: 'QR code added successfully'
    });

  } catch (error: any) {
    console.error('Create QR code error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// PUT: Update UPI QR code
export async function PUT(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, upi_id, qr_code_url, merchant_name, is_active } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'QR code ID is required' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const updateData: any = {};
    if (upi_id !== undefined) updateData.upi_id = upi_id;
    if (qr_code_url !== undefined) updateData.qr_code_url = qr_code_url;
    if (merchant_name !== undefined) updateData.merchant_name = merchant_name;
    if (is_active !== undefined) updateData.is_active = is_active;

    const { data: qrCode, error } = await supabase
      .from('upi_qr_codes')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating QR code:', error);
      return NextResponse.json(
        { error: 'Failed to update QR code' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      qr_code: qrCode,
      message: 'QR code updated successfully'
    });

  } catch (error: any) {
    console.error('Update QR code error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

// DELETE: Delete UPI QR code
export async function DELETE(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'QR code ID is required' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from('upi_qr_codes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting QR code:', error);
      return NextResponse.json(
        { error: 'Failed to delete QR code' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'QR code deleted successfully'
    });

  } catch (error: any) {
    console.error('Delete QR code error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

