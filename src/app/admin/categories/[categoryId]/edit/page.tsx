'use client';

import { Suspense, use } from 'react';
import CategoryForm from '@/components/admin/categories/CategoryForm';

interface EditCategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

export default function AdminEditCategory({ params }: EditCategoryPageProps) {
  const { categoryId } = use(params);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Edit Category</h1>
        <p className="mt-1 text-sm text-gray-500">
          Update category information and settings.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <CategoryForm categoryId={parseInt(categoryId)} />
      </Suspense>
    </div>
  );
}
