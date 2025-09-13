'use client';

import { Suspense, use } from 'react';
import ProfileView from '@/components/admin/profiles/ProfileView';

interface ProfileViewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProfileViewPage({ params }: ProfileViewPageProps) {
  const { id } = use(params);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Profile Details</h1>
        <p className="mt-1 text-sm text-gray-500">
          View profile information and details.
        </p>
      </div>

      <Suspense fallback={<div>Loading profile...</div>}>
        <ProfileView profileId={parseInt(id)} />
      </Suspense>
    </div>
  );
}
