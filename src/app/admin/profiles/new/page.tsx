import { Suspense } from 'react';
import ProfileForm from '@/components/admin/profiles/ProfileForm';

export default function NewProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add New Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create a new escort profile for your website.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <ProfileForm />
      </Suspense>
    </div>
  );
}
