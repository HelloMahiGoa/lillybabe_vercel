import { notFound } from 'next/navigation';
import { getProfileByIdForAdmin } from '@/lib/profiles/queries';
import { ProfileAdminForm } from '@/app/admin/profiles/profile-admin-form';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const p = await getProfileByIdForAdmin(id);
  return {
    title: p ? `Edit ${p.name}` : 'Edit profile',
  };
}

export default async function EditProfilePage({ params }: Props) {
  const { id } = await params;
  const profile = await getProfileByIdForAdmin(id);
  if (!profile) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Edit profile</h1>
        <p className="mt-1 font-mono text-sm text-zinc-500">
          Public URL:{' '}
          <a
            href={`/profiles/${profile.slug}`}
            className="text-amber-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            /profiles/{profile.slug}
          </a>
        </p>
      </div>
      <ProfileAdminForm mode="edit" profile={profile} />
    </div>
  );
}
