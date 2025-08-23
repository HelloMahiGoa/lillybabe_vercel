import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function GET(request: NextRequest) {
  try {
    // Get statistics without authentication for now (admin panel will handle auth)
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
