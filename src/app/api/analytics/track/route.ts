import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { profileId, actionType } = body;

    if (!profileId || !actionType) {
      return NextResponse.json(
        { error: 'Profile ID and action type are required' },
        { status: 400 }
      );
    }

    // First, verify the profile exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, views_count, clicks_count')
      .eq('id', profileId)
      .single();

    if (profileError || !profile) {
      console.error('Profile not found:', profileId, profileError);
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    // Get client information
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || '';

    try {
      // Insert analytics record
      const { error: analyticsError } = await supabase
        .from('profile_analytics')
        .insert({
          profile_id: profileId,
          action_type: actionType,
          ip_address: ip,
          user_agent: userAgent,
          referrer: referrer
        });

      if (analyticsError) {
        console.error('Analytics tracking error:', analyticsError);
      }
    } catch (analyticsError) {
      console.error('Analytics insert error:', analyticsError);
    }

    // Update profile counts using proper increment
    try {
      let updateData = {};
      if (actionType === 'view') {
        updateData = { views_count: (profile.views_count || 0) + 1 };
      } else if (actionType === 'click' || actionType === 'whatsapp_click' || actionType === 'phone_click') {
        updateData = { clicks_count: (profile.clicks_count || 0) + 1 };
      }

      if (Object.keys(updateData).length > 0) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update(updateData)
          .eq('id', profileId);

        if (updateError) {
          console.error('Profile update error:', updateError);
        }
      }
    } catch (updateError) {
      console.error('Profile update error:', updateError);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Analytics tracked successfully' 
    });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track analytics' },
      { status: 500 }
    );
  }
}
