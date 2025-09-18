import { Metadata } from 'next';
import { HousewifeEscortsClient } from '@/components/gallery/housewife-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Housewife Escorts in Chennai | Mature & Experienced Companions | Lillybabe',
  description: 'Book experienced housewife escorts in Chennai with Lillybabe. Mature, sophisticated, and passionate companions available 24/7. Verified profiles, complete privacy.',
  keywords: 'housewife escorts Chennai, mature escorts Chennai, experienced escorts Chennai, housewife call girls Chennai, mature women escorts Chennai, housewife escorts T Nagar, housewife escorts Anna Nagar, housewife escorts OMR, housewife escorts ECR, housewife escorts Nungambakkam, housewife escorts Adyar, sophisticated escorts Chennai',
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
    title: 'Housewife Escorts in Chennai | Mature & Experienced Companions',
    description: 'Book experienced housewife escorts in Chennai with Lillybabe. Mature, sophisticated, and passionate companions available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/housewife-escorts-in-chennai',
    images: [
      {
        url: '/images/housewife.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Housewife Escorts in Chennai - Mature and Experienced Companions Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Housewife Escorts in Chennai | Mature & Experienced Companions',
    description: 'Book experienced housewife escorts in Chennai with Lillybabe. Mature, sophisticated, and passionate companions available 24/7.',
    images: ['/images/housewife.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/housewife-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function HousewifeEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Housewife Escorts in Chennai",
    "description": "Professional housewife escort services in Chennai featuring mature, experienced, and sophisticated companions with real-life wisdom and passion.",
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
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City", 
        "name": "T. Nagar"
      },
      {
        "@type": "City",
        "name": "Anna Nagar"
      },
      {
        "@type": "City",
        "name": "OMR"
      },
      {
        "@type": "City",
        "name": "ECR"
      },
      {
        "@type": "City",
        "name": "Nungambakkam"
      },
      {
        "@type": "City",
        "name": "Adyar"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/housewife-escorts-in-chennai",
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
        "name": "Are the housewife escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our housewife escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes housewife escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Housewife escorts bring maturity, experience, and real-life wisdom to every encounter. They understand relationships, know how to make you feel comfortable, and provide genuine companionship with emotional depth and understanding."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a housewife escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified housewife escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do housewife escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our housewife escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location."
        }
      },
      {
        "@type": "Question",
        "name": "Are housewife escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our housewife escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing."
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
        "name": "Escorts",
        "item": "https://lillybabe.com/escort-girls-chennai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Housewife Escorts Chennai",
        "item": "https://lillybabe.com/housewife-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/housewife-escorts-in-chennai" pageTitle="Housewife Escorts in Chennai | Mature & Experienced Companions | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Housewife Escorts" 
        location="Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <HousewifeEscortsClient />
    </>
  );
}
