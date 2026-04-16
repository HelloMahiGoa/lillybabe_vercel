'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOutAction } from '@/app/admin/profiles/actions';

export function AdminNav() {
  const path = usePathname();
  const isLogin = path?.startsWith('/admin/login');

  if (isLogin) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium">
          <Link href="/admin/profiles" className="text-amber-400 hover:text-amber-300">
            Profiles
          </Link>
        </nav>
        <form action={signOutAction}>
          <button
            type="submit"
            className="rounded-lg border border-zinc-600 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
