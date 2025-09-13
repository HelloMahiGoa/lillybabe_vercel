'use client';

import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import CategoryList from '@/components/admin/categories/CategoryList';

export default function AdminCategories() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage escort categories for your website.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/admin/categories/new'}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
          Add Category
        </button>
      </div>

      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoryList />
      </Suspense>
    </div>
  );
}
