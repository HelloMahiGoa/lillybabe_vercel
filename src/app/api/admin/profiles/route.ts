import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { listProfilesForAdminPage } from '@/lib/profiles/queries';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const hasEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!hasEnv) {
    return NextResponse.json({ profiles: [], total: 0, page: 1, pageSize: 10 });
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const q = request.nextUrl.searchParams.get('q')?.trim() ?? '';
  const rawStatus = request.nextUrl.searchParams.get('status');
  const status = rawStatus === 'enabled' || rawStatus === 'disabled' ? rawStatus : 'all';
  const rawPage = Number(request.nextUrl.searchParams.get('page'));
  const rawPageSize = Number(request.nextUrl.searchParams.get('pageSize'));
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;
  const pageSize = Number.isFinite(rawPageSize) && rawPageSize > 0 ? rawPageSize : 10;

  const { profiles, total } = await listProfilesForAdminPage({
    query: q,
    status,
    page,
    pageSize,
  });

  return NextResponse.json({
    profiles,
    total,
    page,
    pageSize,
  });
}
