import { ProfileAdminForm } from '@/app/admin/profiles/profile-admin-form';

export const metadata = {
  title: 'New profile',
};

export default function NewProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">New profile</h1>
        <p className="mt-1 text-sm text-zinc-400">
          SEO fields are generated automatically from name, location, and age. You can edit them
          after saving.
        </p>
      </div>
      <ProfileAdminForm mode="create" />
    </div>
  );
}
