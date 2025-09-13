import { Suspense, use } from 'react';
import TestimonialForm from '@/components/admin/testimonials/TestimonialForm';

interface TestimonialEditPageProps {
  params: Promise<{ testimonialId: string; }>;
}

export default function TestimonialEditPage({ params }: TestimonialEditPageProps) {
  const { testimonialId } = use(params);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Testimonial</h1>
          <p className="mt-2 text-sm text-gray-600">
            Update testimonial information and settings
          </p>
        </div>

        <Suspense fallback={<div>Loading testimonial form...</div>}>
          <TestimonialForm testimonialId={parseInt(testimonialId)} />
        </Suspense>
      </div>
    </div>
  );
}
