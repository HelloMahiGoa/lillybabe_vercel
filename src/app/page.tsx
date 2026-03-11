"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { ContentSections } from '@/components/home/content-sections';

// UI Components
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { CriticalCSS } from '@/components/ui/critical-css';

export default function HomePage() {
  const [totalProfiles, setTotalProfiles] = useState(0);

  // Fetch live profile count from Telegram posts API
  useEffect(() => {
    fetch(`/api/telegram-posts?_=${Date.now()}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.posts?.length) {
          setTotalProfiles(data.posts.length);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <CriticalCSS />
      <HomepageSEO />
      
      <Layout>
        <Hero totalProfiles={totalProfiles} />
        <ContentSections />
      </Layout>
      
      <FloatingButtons />
    </>
  );
}