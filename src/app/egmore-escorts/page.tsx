import { Metadata } from 'next';
import { EgmoreEscortsClient } from '@/components/locations/egmore-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Egmore Escorts | Premium Escort Services in Egmore Chennai | Lillybabe',
  description: 'Discover premium and verified Egmore escorts in Chennai with Lillybabe. Professional call girls available 24/7 in Chennai\'s upscale residential and commercial hub. Discreet and unforgettable experiences.',
  keywords: 'Egmore escorts, escorts in Egmore Chennai, Egmore call girls, premium escorts Egmore, independent escorts Egmore, verified escorts Egmore, Chennai escorts Egmore, luxury escorts Egmore',
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
    title: 'Egmore Escorts | Premium Escort Services in Egmore Chennai',
    description: 'Discover premium and verified Egmore escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/egmore-escorts',
    images: [
      {
        url: '/images/egmore-1.avif', // Placeholder image, replace with actual Egmore image
        width: 1200,
        height: 630,
        alt: 'Beautiful Egmore Escorts in Chennai - Premium and Professional Escorts Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egmore Escorts | Premium Escort Services in Egmore Chennai',
    description: 'Discover premium and verified Egmore escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    images: ['/images/egmore-1.avif'], // Placeholder image
  },
  alternates: {
    canonical: 'https://lillybabe.com/egmore-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function EgmoreEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Egmore Escorts in Chennai",
    "description": "Professional escort services in Egmore, Chennai featuring beautiful, discreet, and professional escorts in the upscale residential and commercial district.",
    "provider": {
      "@type": "Organization",
      "name": "Lillybabe",
      "url": "https://lillybabe.com",
      "logo": "https://lillybabe.com/images/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918121426651",
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Egmore",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Egmore"
      },
      {
        "@type": "City",
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/egmore-escorts",
      "servicePhone": "+918121426651"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    }
  };


  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lillybabe.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://lillybabe.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Egmore Escorts Chennai",
        "item": "https://lillybabe.com/egmore-escorts"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* SEO Monitoring */}
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/egmore-escorts" pageTitle="Egmore Escorts | Premium Escort Services in Egmore Chennai | Lillybabe" />

      {/* Content Authority Builder */}
      <ContentAuthorityBuilder
        contentType="category"
        topic="Egmore Escorts"
        location="Chennai"
        authorName="LillyBabe Team"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <EgmoreEscortsClient />
    </>
  );
}
