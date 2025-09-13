'use client';

import { Suspense, use } from 'react';
import LocationForm from '@/components/admin/locations/LocationForm';

interface EditLocationPageProps {
  params: Promise<{
    locationId: string;
  }>;
}

export default function AdminEditLocation({ params }: EditLocationPageProps) {
  const { locationId } = use(params);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Edit Location</h1>
        <p className="mt-1 text-sm text-gray-500">
          Update location information and settings.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <LocationForm locationId={parseInt(locationId)} />
      </Suspense>
    </div>
  );
}
