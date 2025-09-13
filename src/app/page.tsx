"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { AvailableProfiles } from '@/components/home/featured-profiles';
import { ContentSections } from '@/components/home/content-sections';
import { Profile } from '@/types';

// Mobile Components
import { MobileHero } from '@/components/mobile/mobile-hero';
import { MobileCategories } from '@/components/mobile/mobile-categories';
import { MobileProfiles } from '@/components/mobile/mobile-profiles';
import { MobileContentSections } from '@/components/mobile/mobile-content-sections';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';

// UI Components
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallModal } from '@/components/ui/pwa-install-modal';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import PerformanceMonitor from '@/components/ui/performance-monitor';
import { HomepageSEO } from '@/components/seo/homepage-seo';

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
  const [isMobile, setIsMobile] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // PWA Install
  const { showInstallModal, installApp, closeModal } = usePWAInstall();

  useEffect(() => {
    setMounted(true);
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching profiles from API...');
        const response = await fetch('/api/profiles-list');
        console.log('API Response status:', response.status);
        console.log('API Response ok:', response.ok);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error response:', errorText);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('API Response data:', data);
        console.log('Profiles count:', data.profiles?.length || 0);
        setProfiles(data.profiles || []);
        setError(null);

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/profiles-list', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProfiles(data.profiles || []);
      setError(null);
    } catch (err) {
      console.error('Error refreshing data:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh data');
    } finally {
      setLoading(false);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Mobile layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Homepage SEO */}
        <HomepageSEO />
        
        {/* Mobile Hero Section */}
        <MobileHero />
        
        {/* Mobile Categories Section */}
        <MobileCategories />
        
        {/* Mobile Profiles Section */}
        <div className="mobile-profiles">
          <MobileProfiles profiles={profiles} loading={loading} />
        </div>
        
        {/* Mobile Content Sections */}
        <MobileContentSections />
        
        {/* Floating Action Buttons */}
        {isClient && <FloatingButtons />}
        
        {/* PWA Install Modal */}
        <PWAInstallModal
          isOpen={showInstallModal}
          onClose={closeModal}
          onInstall={installApp}
        />
        
        {/* Mobile Bottom Navigation */}
        <MobileBottomNavigation />
        
        {/* Performance Monitor */}
        <PerformanceMonitor />
      </div>
    );
  }

  // Desktop layout
  return (
    <Layout>
      {/* Homepage SEO */}
      <HomepageSEO />
      
      <main>
        <Hero />
        <AvailableProfiles profiles={profiles} loading={loading} />
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
