"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { AvailableProfiles } from '@/components/home/featured-profiles';
import { ContentSections } from '@/components/home/content-sections';
import { Profile } from '@/types';

// UI Components
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallModal } from '@/components/ui/pwa-install-modal';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import PerformanceMonitor from '@/components/ui/performance-monitor';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';

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
  const { showInstallModal, installApp, closeModal } = usePWAInstall();

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
      } catch (err) {
        console.error('Error fetching profiles:', err);
        // Silently fail - don't show error to user
      }
    };

    fetchData();
  }, []);

  // Responsive layout - works on all screen sizes
  return (
    <Layout>
      {/* Homepage SEO */}
      <HomepageSEO />
      
      {/* SEO Monitoring */}
      <SEOMonitoring pageType="homepage" pageUrl="https://lillybabe.com" pageTitle="Chennai Escorts - Verified Call Girls & Independent Escorts | LillyBabe" />
      
      <main>
        <Hero />
        <AvailableProfiles profiles={profiles} />
        <ContentSections />
      </main>
      
      {/* Floating Action Buttons */}
      {isClient && <FloatingButtons />}
      
      {/* PWA Install Modal */}
      <PWAInstallModal
        isOpen={showInstallModal}
        onClose={closeModal}
        onInstall={installApp}
      />
      
      {/* Performance Monitor */}
      <PerformanceMonitor />
    </Layout>
  );
}