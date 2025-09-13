import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCurrentUser } from '@/lib/simple-auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7');

    // Generate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Initialize empty data structure
    const dailyStats = new Map();
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      dailyStats.set(dateStr, { date: dateStr, views: 0, clicks: 0 });
    }

    try {
      // First, try to get data from profile_analytics table (detailed tracking)
      const { data: analyticsData, error: analyticsError } = await supabase
        .from('profile_analytics')
        .select('action_type, created_at')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      if (!analyticsError && analyticsData && analyticsData.length > 0) {
        console.log(`📊 Found ${analyticsData.length} analytics records`);
        
        // Aggregate analytics data
        analyticsData.forEach(record => {
          const dateStr = new Date(record.created_at).toISOString().split('T')[0];
          const stats = dailyStats.get(dateStr) || { date: dateStr, views: 0, clicks: 0 };
          
          if (record.action_type === 'view') {
            stats.views++;
          } else if (record.action_type === 'click' || record.action_type === 'whatsapp_click' || record.action_type === 'phone_click') {
            stats.clicks++;
          }
          
          dailyStats.set(dateStr, stats);
        });

        const realData = Array.from(dailyStats.values());
        console.log('📈 Returning real analytics data:', realData);
        return NextResponse.json({ data: realData });
      }

      // Fallback: Get data from profiles table (aggregated counts)
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('views_count, clicks_count, created_at')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      if (!profilesError && profilesData && profilesData.length > 0) {
        console.log(`📊 Found ${profilesData.length} profiles with analytics data`);
        
        // Aggregate profiles data
        profilesData.forEach(profile => {
          const dateStr = new Date(profile.created_at).toISOString().split('T')[0];
          const stats = dailyStats.get(dateStr) || { date: dateStr, views: 0, clicks: 0 };
          
          stats.views += profile.views_count || 0;
          stats.clicks += profile.clicks_count || 0;
          
          dailyStats.set(dateStr, stats);
        });

        const realData = Array.from(dailyStats.values());
        console.log('📈 Returning profiles analytics data:', realData);
        return NextResponse.json({ data: realData });
      }

      // If no data found, return empty structure
      const emptyData = Array.from(dailyStats.values());
      console.log('📈 No analytics data found, returning empty structure');
      return NextResponse.json({ data: emptyData });

    } catch (dbError) {
      console.error('Database error in analytics:', dbError);
      
      // Return empty data structure if database fails
      const emptyData = Array.from(dailyStats.values());
      console.log('📈 Database error, returning empty structure');
      return NextResponse.json({ data: emptyData });
    }

  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
