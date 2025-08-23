import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, profileId, clickType } = body;

    if (!type || !profileId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get client IP and user agent
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') ||
               '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';

    if (type === 'view') {
      // Track profile view
      const { error } = await supabase
        .from('profile_views')
        .insert({
          profile_id: profileId,
          ip_address: ip,
          user_agent: userAgent
        });

      if (error) {
        console.error('View tracking error:', error);
        return NextResponse.json({ error: 'Failed to track view' }, { status: 500 });
      }

    } else if (type === 'click') {
      // Track profile click
      if (!clickType) {
        return NextResponse.json({ error: 'Click type is required' }, { status: 400 });
      }

      const { error } = await supabase
        .from('profile_clicks')
        .insert({
          profile_id: profileId,
          click_type: clickType,
          ip_address: ip,
          user_agent: userAgent
        });

      if (error) {
        console.error('Click tracking error:', error);
        return NextResponse.json({ error: 'Failed to track click' }, { status: 500 });
      }

    } else {
      return NextResponse.json({ error: 'Invalid tracking type' }, { status: 400 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const profileId = searchParams.get('profileId');
    const timeRange = searchParams.get('timeRange') || '7d'; // 7d, 30d, 90d, 1y

    if (!profileId) {
      return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
    }

    // Calculate date range
    const now = new Date();
    let startDate = new Date();
    
    switch (timeRange) {
      case '1d':
        startDate.setDate(now.getDate() - 1);
        break;
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(now.getDate() - 90);
        break;
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }

    // Get view analytics
    const { data: viewsData, error: viewsError } = await supabase
      .from('profile_views')
      .select('viewed_at')
      .eq('profile_id', profileId)
      .gte('viewed_at', startDate.toISOString())
      .order('viewed_at');

    if (viewsError) {
      console.error('Views analytics error:', viewsError);
      return NextResponse.json({ error: 'Failed to fetch view analytics' }, { status: 500 });
    }

    // Get click analytics
    const { data: clicksData, error: clicksError } = await supabase
      .from('profile_clicks')
      .select('click_type, clicked_at')
      .eq('profile_id', profileId)
      .gte('clicked_at', startDate.toISOString())
      .order('clicked_at');

    if (clicksError) {
      console.error('Clicks analytics error:', clicksError);
      return NextResponse.json({ error: 'Failed to fetch click analytics' }, { status: 500 });
    }

    // Process data for analytics
    const analytics = {
      timeRange,
      totalViews: viewsData.length,
      totalClicks: clicksData.length,
      clicksByType: clicksData.reduce((acc: any, click) => {
        acc[click.click_type] = (acc[click.click_type] || 0) + 1;
        return acc;
      }, {}),
      dailyViews: viewsData.reduce((acc: any, view) => {
        const date = new Date(view.viewed_at).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {}),
      dailyClicks: clicksData.reduce((acc: any, click) => {
        const date = new Date(click.clicked_at).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {})
    };

    return NextResponse.json({
      success: true,
      data: analytics
    });

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
