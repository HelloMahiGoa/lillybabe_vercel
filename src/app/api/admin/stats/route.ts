import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Check authentication
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    if (authError || !session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check admin role
    const { data: profile } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Get statistics
    const [
      { count: totalProfiles },
      { count: activeProfiles },
      { count: pendingUploads },
      { count: completedUploads },
      { count: failedUploads }
    ] = await Promise.all([
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('is_active', true),
      supabase.from('pdf_uploads').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('pdf_uploads').select('*', { count: 'exact', head: true }).eq('status', 'completed'),
      supabase.from('pdf_uploads').select('*', { count: 'exact', head: true }).eq('status', 'failed')
    ]);

    // Calculate success rate
    const totalUploads = (completedUploads || 0) + (failedUploads || 0);
    const successRate = totalUploads > 0 ? ((completedUploads || 0) / totalUploads) * 100 : 0;

    // Get recent uploads
    const { data: recentUploads } = await supabase
      .from('pdf_uploads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    // Get recent profiles
    const { data: recentProfiles } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    const stats = {
      totalProfiles: totalProfiles || 0,
      activeProfiles: activeProfiles || 0,
      pendingUploads: pendingUploads || 0,
      completedUploads: completedUploads || 0,
      failedUploads: failedUploads || 0,
      successRate: Math.round(successRate * 10) / 10, // Round to 1 decimal place
      totalViews: 15420, // Mock data for now
      recentUploads: recentUploads || [],
      recentProfiles: recentProfiles || []
    };

    return NextResponse.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
