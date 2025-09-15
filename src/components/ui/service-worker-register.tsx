'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          console.log('Service Worker registered successfully:', registration);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  if (confirm('New version available! Refresh to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Handle service worker messages
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'CACHE_UPDATED') {
              console.log('Cache updated:', event.data.payload);
            }
          });

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Register after a short delay to not block initial page load
      setTimeout(registerSW, 1000);
    }
  }, []);

  return null; // This component doesn't render anything
}

// Hook for service worker functionality
export function useServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Listen for service worker messages
      const handleMessage = (event: MessageEvent) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          // Handle cache updates
          console.log('Cache updated:', event.data.payload);
        }
      };

      navigator.serviceWorker.addEventListener('message', handleMessage);

      return () => {
        navigator.serviceWorker.removeEventListener('message', handleMessage);
      };
    }
  }, []);

  const updateCache = async (url: string, data: any) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'UPDATE_CACHE',
        url,
        data,
      });
    }
  };

  const clearCache = async () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'CLEAR_CACHE',
      });
    }
  };

  return {
    updateCache,
    clearCache,
  };
}
