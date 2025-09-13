import { Metadata } from 'next';
import { LocationsClient } from '@/components/locations/locations-client';

export const metadata: Metadata = {
  title: 'Chennai Escort Service Locations - All Areas Covered | LillyBabe',
  description: 'Find escort services in all major Chennai locations including T Nagar, Anna Nagar, OMR, ECR, Adyar, Nungambakkam, and more. Professional escort services across Chennai.',
  keywords: [
    'Chennai Escort Locations',
    'T Nagar Escorts',
    'Anna Nagar Escorts',
    'OMR Escorts',
    'ECR Escorts',
    'Adyar Escorts',
    'Nungambakkam Escorts',
    'Chennai Escort Service Areas',
    'Escort Girls Chennai Locations',
    'Call Girls Chennai Areas'
  ],
  openGraph: {
    title: 'Chennai Escort Service Locations - All Areas Covered',
    description: 'Find professional escort services in all major Chennai locations. T Nagar, Anna Nagar, OMR, ECR, Adyar, and more areas covered.',
    url: 'https://lillybabe.com/locations',
    images: [
      {
        url: '/images/locations-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escort Service Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escort Service Locations - All Areas Covered',
    description: 'Find professional escort services in all major Chennai locations with LillyBabe.',
    images: ['/images/locations-banner.webp'],
  },
  alternates: {
    canonical: '/locations',
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
