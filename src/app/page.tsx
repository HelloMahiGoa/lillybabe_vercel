import type { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { ContentSections } from '@/components/home/content-sections';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { HomepageSEO } from '@/components/seo/homepage-seo';
import { CriticalCSS } from '@/components/ui/critical-css';
import { HOMEPAGE_METADATA_KEYWORDS } from '@/lib/keywords';
import { ProfileShowcase } from '@/components/home/profile-showcase';
import { getEnabledProfileCount } from '@/lib/profiles/queries';

export const revalidate = 120;

const homeDescription =
  'Skip fake ads: LillyBabe is a Chennai escort agency built on face-to-face verification. Real girls, pay-after-meet policy, and privacy-first booking on WhatsApp';

export const metadata: Metadata = {
  title: 'Chennai Escorts | Real Girls| Pay After You Meet | No Advance',
  description: homeDescription,
  keywords: [...HOMEPAGE_METADATA_KEYWORDS],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chennai Escorts | Real Girls| Pay After You Meet | No Advance',
    description: homeDescription,
    url: 'https://lillybabe.com',
    siteName: 'LillyBabe',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'LillyBabe — Chennai escorts and verified escort service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts | Real Girls| Pay After You Meet | No Advance',
    description: homeDescription,
    images: ['/images/hero-bg.webp'],
  },
};

export default async function HomePage() {
  const availableProfileCount = await getEnabledProfileCount();

  return (
    <>
      <CriticalCSS />
      <HomepageSEO />
      <Layout>
        <Hero availableProfileCount={availableProfileCount} />
        <ProfileShowcase />
        <ContentSections />
      </Layout>
      <FloatingButtons />
    </>
  );
}
