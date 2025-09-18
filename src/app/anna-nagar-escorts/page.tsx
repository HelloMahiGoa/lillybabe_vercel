import { Metadata } from 'next';
import { AnnaNagarEscortsClient } from '@/components/locations/anna-nagar-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Anna Nagar Escorts | Premium Escort Services in Anna Nagar Chennai | Lillybabe',
  description: 'Book beautiful and professional escorts in Anna Nagar Chennai with Lillybabe. Premium escort services in Anna Nagar with verified profiles, complete privacy, and 24/7 availability.',
  keywords: 'Anna Nagar escorts, Anna Nagar call girls, escorts Anna Nagar Chennai, Anna Nagar escort service, call girls Anna Nagar, Anna Nagar independent escorts, Anna Nagar escort agency, premium escorts Anna Nagar, Anna Nagar escort girls, Anna Nagar escort booking',
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
    title: 'Anna Nagar Escorts | Premium Escort Services in Anna Nagar Chennai',
    description: 'Book beautiful and professional escorts in Anna Nagar Chennai with Lillybabe. Premium escort services with verified profiles and complete privacy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/anna-nagar-escorts',
    images: [
      {
        url: '/images/anna-nagar-1.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Escorts in Anna Nagar Chennai - Premium Escort Services Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Nagar Escorts | Premium Escort Services in Anna Nagar Chennai',
    description: 'Book beautiful and professional escorts in Anna Nagar Chennai with Lillybabe. Premium escort services with verified profiles.',
    images: ['/images/anna-nagar-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/anna-nagar-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function AnnaNagarEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Anna Nagar Escorts",
    "description": "Professional escort services in Anna Nagar Chennai featuring beautiful, verified, and experienced escorts with premium service quality in a well-planned residential area.",
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
        "addressLocality": "Anna Nagar",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Anna Nagar"
      },
      {
        "@type": "City", 
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/anna-nagar-escorts",
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
        "name": "Anna Nagar Escorts",
        "item": "https://lillybabe.com/anna-nagar-escorts"
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
      <SEOMonitoring pageType="location" pageUrl="https://lillybabe.com/anna-nagar-escorts" pageTitle="Anna Nagar Escorts | Premium Escort Services in Anna Nagar Chennai | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="location" 
        topic="Anna Nagar Escorts" 
        location="Anna Nagar Chennai"
        authorName="LillyBabe Team"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <AnnaNagarEscortsClient />
    </>
  );
}
