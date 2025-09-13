'use client';

import { Suspense, use } from 'react';
import ProfileForm from '@/components/admin/profiles/ProfileForm';

interface ProfileEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProfileEditPage({ params }: ProfileEditPageProps) {
  const { id } = use(params);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Edit Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Update profile information and settings.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <ProfileForm profileId={parseInt(id)} />
      </Suspense>
    </div>
  );
}
