'use client';

import { useEffect } from 'react';

export default function AnalyticsTest() {
  useEffect(() => {
    // Test Google Analytics
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    console.log('Google Analytics ID:', gaId);
    
    // Test Google Search Console
    const gscCode = process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION;
    console.log('Google Search Console Code:', gscCode);
    
    // Test if gtag is available
    if (typeof window !== 'undefined') {
      console.log('gtag function available:', typeof window.gtag);
      console.log('dataLayer available:', typeof window.dataLayer);
      
      if (window.gtag) {
        // Test event
        window.gtag('event', 'test_event', {
          event_category: 'test',
          event_label: 'analytics_test',
        });
        console.log('Test event sent to Google Analytics');
      }
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Analytics Test</h3>
      <div className="space-y-2 text-sm">
        <p><strong>Google Analytics ID:</strong> {process.env.NEXT_PUBLIC_GA_ID || 'Not set'}</p>
        <p><strong>Google Search Console:</strong> {process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION ? 'Set' : 'Not set'}</p>
        <p><strong>gtag Available:</strong> {typeof window !== 'undefined' && window.gtag ? 'Yes' : 'No'}</p>
        <p><strong>dataLayer Available:</strong> {typeof window !== 'undefined' && window.dataLayer ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}
