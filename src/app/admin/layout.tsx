import Link from 'next/link';
import { AdminNav } from '@/app/admin/admin-nav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNav />
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:max-w-6xl">{children}</div>
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-300">
          View site
        </Link>
      </footer>
    </div>
  );
}
