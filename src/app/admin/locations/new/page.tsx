'use client';

import { Suspense } from 'react';
import LocationForm from '@/components/admin/locations/LocationForm';

export default function AdminNewLocation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add New Location</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create a new escort location for your website.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <LocationForm />
      </Suspense>
    </div>
  );
}
