'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ProfileEnabledToggle } from '@/app/admin/profiles/profile-enabled-toggle';
import { DeleteProfileButton } from '@/app/admin/profiles/delete-profile-button';
import type { ProfileRow } from '@/types/profile';

type AdminProfilesListProps = {
  initialProfiles: ProfileRow[];
  initialTotal: number;
  initialQuery: string;
  initialStatus: 'all' | 'enabled' | 'disabled';
  initialPage: number;
  pageSize: number;
  hasEnv: boolean;
};

type ApiResult = {
  profiles: ProfileRow[];
  total: number;
  page: number;
  pageSize: number;
};

function buildSearchParams(
  query: string,
  status: 'all' | 'enabled' | 'disabled',
  page: number
): string {
  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (status !== 'all') params.set('status', status);
  if (page > 1) params.set('page', String(page));
  return params.toString();
}

export function AdminProfilesList({
  initialProfiles,
  initialTotal,
  initialQuery,
  initialStatus,
  initialPage,
  pageSize,
  hasEnv,
}: AdminProfilesListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState(initialQuery);
  const [status, setStatus] = useState<'all' | 'enabled' | 'disabled'>(initialStatus);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [profiles, setProfiles] = useState(initialProfiles);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / pageSize)), [total, pageSize]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const q = search.trim();
      const targetPage = Math.min(currentPage, totalPages);
      const params = buildSearchParams(q, status, targetPage);
      router.replace(params ? `${pathname}?${params}` : pathname);

      if (!hasEnv) return;

      setLoading(true);
      try {
        const response = await fetch(
          `/api/admin/profiles?q=${encodeURIComponent(q)}&status=${status}&page=${targetPage}&pageSize=${pageSize}`,
          {
            method: 'GET',
            credentials: 'same-origin',
            cache: 'no-store',
          }
        );

        if (!response.ok) return;
        const data = (await response.json()) as ApiResult;
        setProfiles(data.profiles);
        setTotal(data.total);

        const nextTotalPages = Math.max(1, Math.ceil(data.total / pageSize));
        if (targetPage > nextTotalPages) {
          setCurrentPage(nextTotalPages);
        }
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => clearTimeout(timeout);
  }, [search, status, currentPage, pathname, router, pageSize, hasEnv, totalPages]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search name, slug, or location"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
        />
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value as 'all' | 'enabled' | 'disabled');
            setCurrentPage(1);
          }}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-amber-500 focus:outline-none"
          aria-label="Filter profiles by status"
        >
          <option value="all">All statuses</option>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
        {loading ? <p className="self-center text-xs text-zinc-500">Searching...</p> : null}
      </div>

      {hasEnv && profiles.length === 0 ? (
        <p className="text-zinc-500">
          {search.trim() || status !== 'all'
            ? 'No profiles match your search.'
            : 'No profiles yet. Create one to show on the homepage.'}
        </p>
      ) : null}

      <ul className="space-y-3">
        {profiles.map((p) => (
          <li
            key={p.id}
            className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex min-w-0 flex-1 gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
                {p.main_image_url ? (
                  <Image src={p.main_image_url} alt="" fill sizes="80px" className="object-cover" />
                ) : (
                  <span className="flex h-full items-center justify-center text-xs text-zinc-600">
                    No
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-white">{p.name}</p>
                <p className="text-sm text-zinc-400">
                  {p.location} · {p.age} yrs ·{' '}
                  <span className={p.enabled ? 'text-emerald-400' : 'text-zinc-500'}>
                    {p.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                </p>
                <p className="truncate font-mono text-xs text-zinc-500">/profiles/{p.slug}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-3 sm:border-t-0 sm:pt-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">On</span>
                <ProfileEnabledToggle id={p.id} enabled={p.enabled} />
              </div>
              <Link
                href={`/admin/profiles/${p.id}/edit`}
                className="rounded-lg border border-zinc-600 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800"
              >
                Edit
              </Link>
              <DeleteProfileButton id={p.id} />
            </div>
          </li>
        ))}
      </ul>

      {hasEnv && total > pageSize ? (
        <div className="flex items-center justify-between gap-3 border-t border-zinc-800 pt-4 text-sm text-zinc-400">
          <p>
            Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, total)} of{' '}
            {total}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage <= 1 || loading}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="rounded-lg border border-zinc-600 px-3 py-1.5 text-zinc-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:text-zinc-600"
            >
              Previous
            </button>
            <span className="px-2 text-zinc-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              disabled={currentPage >= totalPages || loading}
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className="rounded-lg border border-zinc-600 px-3 py-1.5 text-zinc-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:text-zinc-600"
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
