import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// POST - Track profile click
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { action_type = 'click' } = body; // 'click', 'whatsapp_click', 'phone_click'
    
    // Get client IP and user agent
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || '';

    // Check if profile exists and is active
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, is_active')
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (profileError || !profile) {
      return NextResponse.json(
        { error: 'Profile not found or inactive' },
        { status: 404 }
      );
    }

    // Insert analytics record
    const { error: analyticsError } = await supabase
      .from('profile_analytics')
      .insert({
        profile_id: parseInt(id),
        action_type: action_type,
        ip_address: ip,
        user_agent: userAgent,
        referrer: referrer
      });

    if (analyticsError) {
      console.error('Error tracking click:', analyticsError);
      // Don't return error to client, just log it
    }

    // Update profile click count
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ 
        clicks_count: supabase.rpc('increment', { row_id: parseInt(id), column_name: 'clicks_count' })
      })
      .eq('id', id);

    if (updateError) {
      console.error('Error updating click count:', updateError);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error in click tracking API:', error);
    // Don't return error to client, just log it
    return NextResponse.json({ success: true });
  }
}
