'use client';

import { useEffect } from 'react';
import { initGA, debugGA } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Initialize Google Analytics
    initGA();
    
    // Debug GA after a short delay
    setTimeout(() => {
      debugGA();
    }, 2000);

    // Track page views on route changes
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
        });
      }
    };

    // Listen for route changes (for Next.js)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Render children if provided */}
      {children}
    </>
  );
}

// Utility functions for manual event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: title || document.title,
        page_location: url,
        send_page_view: true,
      });
    } catch (error) {
      console.warn('Analytics page view tracking error:', error);
    }
  }
};

export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'INR',
      });
    } catch (error) {
      console.warn('Analytics conversion tracking error:', error);
    }
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
