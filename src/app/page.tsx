"use client";

import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { ContentSections } from '@/components/home/content-sections';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { CriticalCSS } from '@/components/ui/critical-css';

export default function HomePage() {
  return (
    <>
      <CriticalCSS />
      <HomepageSEO />
      <Layout>
        <Hero />
        <ContentSections />
      </Layout>
      <FloatingButtons />
    </>
  );
}
