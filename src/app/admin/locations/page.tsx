'use client';

import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import LocationList from '@/components/admin/locations/LocationList';

export default function AdminLocations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Locations</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage escort locations for your website.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/admin/locations/new'}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
          Add Location
        </button>
      </div>

      <Suspense fallback={<div>Loading locations...</div>}>
        <LocationList />
      </Suspense>
    </div>
  );
}
