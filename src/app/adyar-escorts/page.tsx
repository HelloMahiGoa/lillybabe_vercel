import { Metadata } from 'next';
import { AdyarEscortsClient } from '@/components/locations/adyar-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Adyar Escorts Chennai | Verified Girls, No Advance | LillyBabe',
  description:
    'Looking for escorts in Adyar Chennai? LillyBabe offers verified Adyar escorts with direct WhatsApp booking, hotel or apartment support, and pay-after-meet policy with no advance.',
  keywords:
    'adyar escorts, escorts in adyar, adyar escorts chennai, chennai escorts adyar, verified escorts adyar, no advance escorts chennai, besant nagar escorts',
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
    title: 'Adyar Escorts Chennai | Verified Girls, No Advance',
    description:
      'Book verified escorts in Adyar Chennai with LillyBabe. Real profiles, no-advance policy, and quick WhatsApp response for South Chennai.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/adyar-escorts',
    images: [
      {
        url: '/images/adyar-1.avif',
        width: 1200,
        height: 630,
        alt: 'Verified Adyar escorts by LillyBabe Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adyar Escorts Chennai | Verified Girls, No Advance',
    description:
      'Escorts in Adyar Chennai with verified profiles, no advance payment, and direct WhatsApp booking.',
    images: ['/images/adyar-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/adyar-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function AdyarEscortsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Adyar Escorts Chennai',
    description:
      'Verified Adyar escorts in Chennai with direct WhatsApp booking, hotel and apartment coordination, and pay-after-meet policy without advance payment.',
    provider: {
      '@type': 'Organization',
      name: 'Lillybabe',
      url: 'https://lillybabe.com',
      logo: 'https://lillybabe.com/images/logo.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+918121426651',
        contactType: 'customer service',
        availableLanguage: ['English', 'Tamil', 'Hindi'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Adyar',
        addressRegion: 'Chennai',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Adyar',
      },
      {
        '@type': 'City',
        name: 'Chennai',
      },
    ],
    serviceType: 'Escort Service in Adyar Chennai',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://lillybabe.com/adyar-escorts',
      servicePhone: '+918121426651',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lillybabe.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://lillybabe.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Adyar Escorts',
        item: 'https://lillybabe.com/adyar-escorts',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SEOMonitoring
        pageType="location"
        pageUrl="https://lillybabe.com/adyar-escorts"
        pageTitle="Adyar Escorts Chennai | Verified Girls, No Advance | LillyBabe"
      />

      <ContentAuthorityBuilder
        contentType="location"
        topic="Adyar Escorts Chennai"
        location="Adyar Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <AdyarEscortsClient />
    </>
  );
}
