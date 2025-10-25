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
import { HomepageSEO } from '@/components/seo/homepage-seo';
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
  const [userAds, setUserAds] = useState<Profile[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
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

  // Fetch profiles and user ads
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      // Fetch both profiles and user ads in parallel
      const [profilesResponse, adsResponse] = await Promise.all([
        fetch('/api/profiles-list', {
          signal: controller.signal,
          headers: {
            'Connection': 'close',
          },
        }),
        fetch('/api/ads', {
          signal: controller.signal,
          headers: {
            'Connection': 'close',
          },
        })
      ]);
      
      clearTimeout(timeoutId);
      
      if (profilesResponse.ok) {
        const profilesData = await profilesResponse.json();
        setProfiles(profilesData.profiles || []);
      } else {
        console.warn('Failed to fetch profiles:', profilesResponse.status, profilesResponse.statusText);
      }

      if (adsResponse.ok) {
        const adsData = await adsResponse.json();
        setUserAds(adsData.ads || []);
      } else {
        console.warn('Failed to fetch user ads:', adsResponse.status, adsResponse.statusText);
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.warn('Data fetch request was aborted due to timeout');
      } else {
        console.error('Error fetching data:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for refresh button
  const handleRefresh = () => {
    fetchData();
    trackEvent('click', 'refresh_button', 'profile_refresh');
  };

  useEffect(() => {
    setIsClient(true);
    
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
      
      <Layout>
        <Hero totalProfiles={profiles.length + userAds.length} />
        <AvailableProfiles profiles={profiles} userAds={userAds} isLoading={isLoading} onRefresh={handleRefresh} />
        <ContentSections />
      </Layout>
      
      <FloatingButtons />
      
      <PWAInstallBanner 
        isOpen={showInstallBanner}
        onInstall={installApp}
        onClose={closeModal}
      />
    </>
  );
}