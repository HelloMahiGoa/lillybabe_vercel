import Link from 'next/link';
import { listProfilesForAdminPage } from '@/lib/profiles/queries';
import { AdminProfilesList } from '@/app/admin/profiles/admin-profiles-list';

export const dynamic = 'force-dynamic';

type AdminProfilesPageProps = {
  searchParams?: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function AdminProfilesPage({ searchParams }: AdminProfilesPageProps) {
  const hasEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const params = (await searchParams) ?? {};
  const q = params.q?.trim() ?? '';
  const pageFromQuery = Number(params.page);
  const initialPage = Number.isFinite(pageFromQuery) && pageFromQuery > 0 ? pageFromQuery : 1;
  const pageSize = 10;
  const firstPageData = hasEnv
    ? await listProfilesForAdminPage({ query: q, page: initialPage, pageSize })
    : { profiles: [], total: 0 };
  const total = firstPageData.total;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(initialPage, totalPages);
  const pageData =
    hasEnv && currentPage !== initialPage
      ? await listProfilesForAdminPage({ query: q, page: currentPage, pageSize })
      : firstPageData;
  const profiles = pageData.profiles;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Profiles</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Enable or disable listings, edit details, or add a new profile.
          </p>
        </div>
        <Link
          href="/admin/profiles/new"
          className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-black hover:bg-amber-500"
        >
          New profile
        </Link>
      </div>

      {!hasEnv ? (
        <p className="rounded-lg border border-amber-900/50 bg-amber-950/30 px-4 py-3 text-sm text-amber-200">
          Set <code className="text-amber-100">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
          <code className="text-amber-100">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in{' '}
          <code className="text-amber-100">.env.local</code>, then run the SQL migration in{' '}
          <code className="text-amber-100">supabase/migrations/</code>.
        </p>
      ) : null}

      <AdminProfilesList
        initialProfiles={profiles}
        initialTotal={total}
        initialQuery={q}
        initialPage={currentPage}
        pageSize={pageSize}
        hasEnv={Boolean(hasEnv)}
      />
    </div>
  );
}
