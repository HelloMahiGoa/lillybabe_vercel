'use client';

import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import TestimonialList from '@/components/admin/testimonials/TestimonialList';

export default function AdminTestimonials() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Testimonials</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage customer testimonials and reviews.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/admin/testimonials/new'}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
          Add Testimonial
        </button>
      </div>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <TestimonialList />
      </Suspense>
    </div>
  );
}
