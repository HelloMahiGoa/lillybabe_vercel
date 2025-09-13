'use client';

import { Suspense } from 'react';
import TestimonialForm from '@/components/admin/testimonials/TestimonialForm';

export default function AdminNewTestimonial() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add New Testimonial</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create a new customer testimonial for your website.
        </p>
      </div>

      <Suspense fallback={<div>Loading form...</div>}>
        <TestimonialForm />
      </Suspense>
    </div>
  );
}
