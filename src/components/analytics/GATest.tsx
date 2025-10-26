'use client';

import { useEffect, useState } from 'react';
import { debugGA, event } from '@/lib/analytics';

export const GATest = () => {
  const [gaStatus, setGaStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkGA = () => {
      if (typeof window !== 'undefined') {
        const hasGtag = typeof window.gtag === 'function';
        const hasDataLayer = Array.isArray(window.dataLayer);
        const gaId = process.env.NEXT_PUBLIC_GA_ID;
        
        if (hasGtag && hasDataLayer && gaId) {
          setGaStatus('✅ Google Analytics is working!');
          
          // Test event
          event({
            action: 'test_event',
            category: 'debug',
            label: 'GA Test Component',
            value: 1
          });
        } else {
          setGaStatus('❌ Google Analytics not working');
        }
      }
    };

    // Check after 3 seconds
    setTimeout(checkGA, 3000);
  }, []);

  const testEvent = () => {
    event({
      action: 'button_click',
      category: 'test',
      label: 'GA Test Button',
      value: 1
    });
    alert('Test event sent! Check Google Analytics Real-time reports.');
  };

  const debugGAInfo = () => {
    debugGA();
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="font-bold mb-2">Google Analytics Test</h3>
      <p className="text-sm mb-2">{gaStatus}</p>
      <p className="text-xs mb-3">GA ID: {process.env.NEXT_PUBLIC_GA_ID}</p>
      <div className="space-y-2">
        <button
          onClick={testEvent}
          className="bg-blue-500 text-white px-3 py-1 rounded text-xs mr-2"
        >
          Test Event
        </button>
        <button
          onClick={debugGAInfo}
          className="bg-green-500 text-white px-3 py-1 rounded text-xs"
        >
          Debug Info
        </button>
      </div>
    </div>
  );
};
