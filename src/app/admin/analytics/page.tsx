'use client';

import { Suspense } from 'react';
import AnalyticsDashboard from '@/components/admin/analytics/AnalyticsDashboard';

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">
          View detailed analytics and performance reports for your website.
        </p>
      </div>

      <Suspense fallback={<div>Loading analytics...</div>}>
        <AnalyticsDashboard />
      </Suspense>
    </div>
  );
}
