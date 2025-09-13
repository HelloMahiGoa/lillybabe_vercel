import { Metadata } from 'next';
import { AboutClient } from '@/components/about/about-client';

export const metadata: Metadata = {
  title: 'About Us - Lillybabe Chennai Escorts | Premium Escort Service Since 2010',
  description: 'Learn about Lillybabe Chennai Escorts - the most trusted and premium escort service in Chennai since 2010. Discover our story, values, and commitment to excellence.',
  keywords: 'about lillybabe, chennai escorts about, escort service chennai, premium escorts chennai, trusted escort agency, chennai call girls agency, lillybabe story, escort service history',
  authors: [{ name: 'Lillybabe Chennai Escorts' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'About Us - Lillybabe Chennai Escorts | Premium Escort Service',
    description: 'Learn about Lillybabe Chennai Escorts - the most trusted and premium escort service in Chennai since 2010.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/about',
    images: [
      {
        url: '/images/about-hero.avif',
        width: 1200,
        height: 630,
        alt: 'About Lillybabe Chennai Escorts - Premium Escort Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Lillybabe Chennai Escorts | Premium Escort Service',
    description: 'Learn about Lillybabe Chennai Escorts - the most trusted and premium escort service in Chennai since 2010.',
    images: ['/images/about-hero.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/about',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
