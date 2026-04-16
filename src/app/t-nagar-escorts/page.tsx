import { Metadata } from 'next';
import { TNagarEscortsClient } from '@/components/locations/t-nagar-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'T Nagar Escorts Chennai | Verified Girls, No Advance | LillyBabe',
  description:
    'Looking for escorts in T Nagar Chennai? LillyBabe offers verified T Nagar escorts with direct WhatsApp booking, hotel or apartment support, and pay-after-meet policy with no advance.',
  keywords:
    't nagar escorts, escorts in t nagar, t nagar escorts chennai, chennai escorts t nagar, verified escorts t nagar, no advance escorts chennai, pondy bazaar escorts',
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
    title: 'T Nagar Escorts Chennai | Verified Girls, No Advance',
    description:
      'Book verified escorts in T Nagar Chennai with LillyBabe. Real profiles, no-advance policy, and quick WhatsApp response for central Chennai.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/t-nagar-escorts',
    images: [
      {
        url: '/images/t-nagar-1.avif',
        width: 1200,
        height: 630,
        alt: 'Verified T Nagar escorts by LillyBabe Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T Nagar Escorts Chennai | Verified Girls, No Advance',
    description:
      'Escorts in T Nagar Chennai with verified profiles, no advance payment, and direct WhatsApp booking.',
    images: ['/images/t-nagar-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/t-nagar-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function TNagarEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "T Nagar Escorts Chennai",
    "description": "Verified T Nagar escorts in Chennai with direct WhatsApp booking, hotel and apartment coordination, and pay-after-meet policy without advance payment.",
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
        "addressLocality": "T Nagar",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "T Nagar"
      },
      {
        "@type": "City", 
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Service in T Nagar Chennai",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/t-nagar-escorts",
      "servicePhone": "+918121426651"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes this T Nagar page useful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This page is designed to feel more local and useful than a generic template. It focuses on profile highlights, central Chennai landmarks, hotel and apartment context, and realistic timing notes around T Nagar."
        }
      },
      {
        "@type": "Question",
        "name": "Why does T Nagar work well as a central Chennai area page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T Nagar works well for bookings because it is central, busy late into the evening, and close to hotels, shopping streets, and apartment clusters. That makes timing, pickup, and travel more practical than many outer areas."
        }
      },
      {
        "@type": "Question",
        "name": "What details should I share first for T Nagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The simplest way is to message on WhatsApp with your area, timing, and whether you need hotel or apartment coordination. That makes replies faster and more realistic."
        }
      },
      {
        "@type": "Question",
        "name": "Do hotel and apartment plans both work around T Nagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both can work, but the answer depends on the property, timing, and your exact pickup point. T Nagar usually supports both because it is a central part of Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Does late-evening timing change things in T Nagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late-evening and night requests are common in T Nagar, but actual availability depends on traffic, distance, and who is free that day. It is better to ask with a rough time rather than assume instant confirmation."
        }
      }
    ]
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
        "name": "T Nagar Escorts",
        "item": "https://lillybabe.com/t-nagar-escorts"
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
      <SEOMonitoring pageType="location" pageUrl="https://lillybabe.com/t-nagar-escorts" pageTitle="T Nagar Escorts Chennai | Verified Girls, No Advance | LillyBabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="location" 
        topic="T Nagar Escorts Chennai" 
        location="T Nagar Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <TNagarEscortsClient />
    </>
  );
}
