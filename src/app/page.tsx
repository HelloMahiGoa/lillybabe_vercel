"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { AvailableProfiles } from '@/components/home/featured-profiles';
import { ContentSections } from '@/components/home/content-sections';
import { Profile } from '@/types';
import { trackEvent, trackPageView } from '@/components/analytics';

// UI Components
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallBanner } from '@/components/ui/pwa-install-banner';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import PerformanceMonitor from '@/components/ui/performance-monitor';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { CriticalCSS } from '@/components/ui/critical-css';

interface LegacyProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  photo_url: string;
  rating: number;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  distance: string;
}

export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // PWA Install
  const { showInstallBanner, installApp, closeModal, showModal, canShowModal } = usePWAInstall('banner');

  // Track page view and user interactions
  useEffect(() => {
    if (isClient) {
      trackPageView('/', 'Chennai Escorts - Best Escort Service | Hot Call Girls in Chennai');
      trackEvent('page_view', 'homepage', 'homepage_visit');
    }
  }, [isClient]);

  // Track profile interactions
  const handleProfileClick = (profileId: string, profileName: string) => {
    trackEvent('click', 'profile_card', profileName);
    trackEvent('engagement', 'profile_view', profileId);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string, location?: string) => {
    trackEvent('click', 'cta_button', ctaType);
    if (location) {
      trackEvent('engagement', 'homepage_cta', location);
    }
  };

  useEffect(() => {
    setIsClient(true);
    
    // Fetch profiles in background without blocking render
    const fetchData = async () => {
      try {
        const response = await fetch('/api/profiles-list');
        if (response.ok) {
          const data = await response.json();
          setProfiles(data.profiles || []);
        }
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    // Use requestIdleCallback for non-critical data fetching
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fetchData);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(fetchData, 100);
    }
  }, []);

  // Preload critical images
  useEffect(() => {
    if (isClient) {
      const criticalImages = [
        '/images/hero-bg.webp',
        '/images/independent-1.jpg',
        '/images/independent-2.jpg',
        '/images/independent-3.webp'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [isClient]);

  return (
    <>
      <CriticalCSS />
      <HomepageSEO />
      <SEOMonitoring 
        pageType="homepage" 
        pageUrl="https://lillybabe.com" 
        pageTitle="Chennai Escorts - Best Escort Service | Hot Call Girls in Chennai" 
      />
      
      <Layout>
        <Hero />
        <AvailableProfiles profiles={profiles} />
        <ContentSections />
      </Layout>
      
      <FloatingButtons />
      
      <PWAInstallBanner 
        isOpen={showInstallBanner}
        onInstall={installApp}
        onClose={closeModal}
      />
      
      {process.env.NODE_ENV === 'development' && (
        <>
          <PerformanceMonitor />
        </>
      )}
    </>
  );
}