import Link from 'next/link';
import Image from 'next/image';
import { listAllProfilesForAdmin } from '@/lib/profiles/queries';
import { ProfileEnabledToggle } from '@/app/admin/profiles/profile-enabled-toggle';
import { DeleteProfileButton } from '@/app/admin/profiles/delete-profile-button';

export const dynamic = 'force-dynamic';

export default async function AdminProfilesPage() {
  const hasEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const profiles = hasEnv ? await listAllProfilesForAdmin() : [];

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

      {hasEnv && profiles.length === 0 ? (
        <p className="text-zinc-500">No profiles yet. Create one to show on the homepage.</p>
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
                  <Image
                    src={p.main_image_url}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
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
    </div>
  );
}
