import { Suspense } from 'react';
import BulkOperationsPanel from '@/components/admin/bulk-operations/BulkOperationsPanel';

export default function AdminBulkOperations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Bulk Operations</h1>
        <p className="mt-1 text-sm text-gray-500">
          Perform mass actions on profiles, categories, locations, and testimonials.
        </p>
      </div>

      <Suspense fallback={<div>Loading bulk operations...</div>}>
        <BulkOperationsPanel />
      </Suspense>
    </div>
  );
}
