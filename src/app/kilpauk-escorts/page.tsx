import { Metadata } from 'next';
import { KilpaukEscortsClient } from '@/components/locations/kilpauk-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Kilpauk Escorts | Premium Escort Services in Kilpauk Chennai | Lillybabe',
  description: 'Discover premium and verified Kilpauk escorts in Chennai with Lillybabe. Professional call girls available 24/7 in Chennai\'s industrial and business hub. Discreet and unforgettable experiences.',
  keywords: 'Kilpauk escorts, escorts in Kilpauk Chennai, Kilpauk call girls, premium escorts Kilpauk, independent escorts Kilpauk, verified escorts Kilpauk, Chennai escorts Kilpauk, luxury escorts Kilpauk',
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
    title: 'Kilpauk Escorts | Premium Escort Services in Kilpauk Chennai',
    description: 'Discover premium and verified Kilpauk escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/kilpauk-escorts',
    images: [
      {
        url: '/images/kilpauk-1.avif', // Placeholder image, replace with actual kilpauk image
        width: 1200,
        height: 630,
        alt: 'Beautiful Kilpauk Escorts in Chennai - Premium and Professional Escorts Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kilpauk Escorts | Premium Escort Services in Kilpauk Chennai',
    description: 'Discover premium and verified Kilpauk escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    images: ['/images/kilpauk-1.avif'], // Placeholder image
  },
  alternates: {
    canonical: 'https://lillybabe.com/kilpauk-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function KilpaukEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kilpauk Escorts in Chennai",
    "description": "Professional escort services in Kilpauk, Chennai featuring beautiful, discreet, and professional escorts in the industrial and business district.",
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
        "addressLocality": "Kilpauk",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kilpauk"
      },
      {
        "@type": "City",
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/kilpauk-escorts",
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
        "name": "Are the Kilpauk escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Kilpauk escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Kilpauk escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kilpauk escorts offer a premium experience in Chennai's industrial and business district. They are sophisticated, discreet, and understand the needs of clients seeking high-class companionship in a professional business environment."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a Kilpauk escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified Kilpauk escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do Kilpauk escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Kilpauk escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location within Kilpauk or nearby areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are Kilpauk escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Kilpauk escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing to suit your schedule in Kilpauk."
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
        "name": "Kilpauk Escorts Chennai",
        "item": "https://lillybabe.com/kilpauk-escorts"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/kilpauk-escorts" pageTitle="Kilpauk Escorts | Premium Escort Services in Kilpauk Chennai | Lillybabe" />

      {/* Content Authority Builder */}
      <ContentAuthorityBuilder
        contentType="category"
        topic="Kilpauk Escorts"
        location="Chennai"
        authorName="LillyBabe Team"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <KilpaukEscortsClient />
    </>
  );
}
