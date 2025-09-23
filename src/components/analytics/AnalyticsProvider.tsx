'use client';

import { useEffect } from 'react';

// Google Analytics configuration
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VRM6HCHZHX';

interface AnalyticsProviderProps {
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Initialize Google Analytics
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-VRM6HCHZHX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
      });

      // Track page views on route changes
      const handleRouteChange = () => {
        gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
        });
      };

      // Listen for route changes (for Next.js)
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
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
