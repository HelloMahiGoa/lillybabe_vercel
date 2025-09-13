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
