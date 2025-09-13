'use client';

import { Suspense } from 'react';
import CategoryForm from '@/components/admin/categories/CategoryForm';

export default function AdminNewCategory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add New Category</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create a new escort category for your website.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <CategoryForm />
      </Suspense>
    </div>
  );
}
