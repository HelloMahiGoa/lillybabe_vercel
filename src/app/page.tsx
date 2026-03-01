"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { ContentSections } from '@/components/home/content-sections';

// UI Components
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallBanner } from '@/components/ui/pwa-install-banner';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { CriticalCSS } from '@/components/ui/critical-css';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  
  // PWA Install
  const { showInstallBanner, installApp, closeModal, showModal, canShowModal } = usePWAInstall('banner');

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
        <Hero totalProfiles={0} />
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