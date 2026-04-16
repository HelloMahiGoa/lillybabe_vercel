import Link from 'next/link';
import { Layout } from '@/components/layout/layout';

export default function ProfileNotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Profile not found</h1>
        <p className="mt-2 text-zinc-400">This listing may have been removed or is unavailable.</p>
        <Link href="/" className="mt-8 inline-block text-amber-400 hover:underline">
          Back to home
        </Link>
      </div>
    </Layout>
  );
}
