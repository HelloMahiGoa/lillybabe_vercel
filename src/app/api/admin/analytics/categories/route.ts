import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';

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

    // Create Supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Analytics Categories API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    try {
      // Get category statistics from profiles table
      const { data: categoryStats, error } = await supabase
        .from('profiles')
        .select('category')
        .eq('is_active', true);

      if (error) {
        console.error('Error fetching category stats:', error);
        return NextResponse.json({ data: [] });
      }

      // Count profiles by category
      const categoryCounts: { [key: string]: number } = {};
      categoryStats?.forEach(profile => {
        const category = profile.category || 'Other';
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      // Convert to array format with colors
      const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
      const result = Object.entries(categoryCounts).map(([name, count], index) => ({
        name,
        count,
        color: colors[index % colors.length]
      }));

      return NextResponse.json({ data: result });

    } catch (dbError) {
      console.error('Database error in category stats:', dbError);
      return NextResponse.json({ data: [] });
    }

  } catch (error) {
    console.error('Category stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
