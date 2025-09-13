import { Metadata } from 'next';
import ChennaiEscortGirlsClient from '@/components/chennai/chennai-escort-girls-client';

export const metadata: Metadata = {
  title: 'Chennai Escort Girls - Premium Escorts Service | LillyBabe',
  description: 'Discover the most beautiful and professional Chennai Escort Girls at LillyBabe. Premium escort service with verified profiles, 24/7 availability, and complete discretion.',
  keywords: [
    'Chennai Escort Girls',
    'Chennai Escorts',
    'Chennai Call Girls',
    'Premium Escorts Chennai',
    'Beautiful Escorts Chennai',
    'Verified Escorts Chennai',
    'Chennai Escort Service',
    'LillyBabe Chennai',
    'Chennai Escorts Agency',
    'Professional Escorts Chennai'
  ],
  openGraph: {
    title: 'Chennai Escort Girls - Premium Escorts Service | LillyBabe',
    description: 'Discover the most beautiful and professional Chennai Escort Girls at LillyBabe. Premium escort service with verified profiles, 24/7 availability, and complete discretion.',
    url: 'https://lillybabe.com/chennai-escort-girls',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    images: [
      {
        url: '/images/chennai-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escort Girls - Premium Escorts Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escort Girls - Premium Escorts Service | LillyBabe',
    description: 'Discover the most beautiful and professional Chennai Escort Girls at LillyBabe. Premium escort service with verified profiles, 24/7 availability, and complete discretion.',
    images: ['/images/chennai-banner.webp'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/chennai-escort-girls',
  },
};

export default function ChennaiEscortGirlsPage() {
  return <ChennaiEscortGirlsClient />;
}
