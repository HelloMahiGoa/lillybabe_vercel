import { Suspense } from 'react';
import ProfileList from '@/components/admin/profiles/ProfileList';

export default function AdminProfiles() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Profiles</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage all escort profiles on your website.
          </p>
        </div>
        <div className="flex space-x-3">
          <a
            href="/admin/profiles/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Profile
          </a>
          <a
            href="/admin/profiles/pdf"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            PDF Profile
          </a>
        </div>
      </div>

      <Suspense fallback={<div>Loading profiles...</div>}>
        <ProfileList />
      </Suspense>
    </div>
  );
}
