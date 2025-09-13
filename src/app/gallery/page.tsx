import { Metadata } from 'next';
import { GalleryClient } from '@/components/gallery/gallery-client';

export const metadata: Metadata = {
  title: 'Chennai Escorts Gallery - Browse Beautiful Call Girls | LillyBabe',
  description: 'Browse our extensive gallery of verified Chennai escorts. Find beautiful call girls, Russian escorts, independent escorts, and more. Real photos, genuine profiles, 24/7 service.',
  keywords: [
    'Chennai Escorts Gallery',
    'Call Girls Gallery Chennai',
    'Escort Girls Photos Chennai',
    'Russian Escorts Gallery',
    'Independent Escorts Chennai',
    'Beautiful Escorts Chennai',
    'Verified Escorts Chennai',
    'Chennai Escort Photos',
    'Call Girls Photos Chennai',
    'Escort Service Gallery'
  ],
  openGraph: {
    title: 'Chennai Escorts Gallery - Browse Beautiful Call Girls',
    description: 'Browse our extensive gallery of verified Chennai escorts. Find beautiful call girls with real photos and genuine profiles.',
    url: 'https://lillybabe.com/gallery',
    images: [
      {
        url: '/images/gallery-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escorts Gallery - Beautiful Call Girls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts Gallery - Browse Beautiful Call Girls',
    description: 'Browse our extensive gallery of verified Chennai escorts with real photos and genuine profiles.',
    images: ['/images/gallery-banner.webp'],
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
