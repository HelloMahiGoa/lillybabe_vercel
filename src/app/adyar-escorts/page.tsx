import { Metadata } from 'next';
import { AdyarEscortsClient } from '@/components/locations/adyar-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Adyar Escorts | Premium Escort Services in Adyar Chennai | Lillybabe',
  description: 'Discover premium and verified Adyar escorts in Chennai with Lillybabe. Professional call girls available 24/7 in Chennai\'s upscale residential and commercial hub. Discreet and unforgettable experiences.',
  keywords: 'Adyar escorts, escorts in Adyar Chennai, Adyar call girls, premium escorts Adyar, independent escorts Adyar, verified escorts Adyar, Chennai escorts Adyar, luxury escorts Adyar',
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
    title: 'Adyar Escorts | Premium Escort Services in Adyar Chennai',
    description: 'Discover premium and verified Adyar escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/adyar-escorts',
    images: [
      {
        url: '/images/adyar-1.avif', // Placeholder image, replace with actual Adyar image
        width: 1200,
        height: 630,
        alt: 'Beautiful Adyar Escorts in Chennai - Premium and Professional Escorts Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adyar Escorts | Premium Escort Services in Adyar Chennai',
    description: 'Discover premium and verified Adyar escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    images: ['/images/adyar-1.avif'], // Placeholder image
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
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Adyar Escorts in Chennai",
    "description": "Professional escort services in Adyar, Chennai featuring beautiful, discreet, and professional escorts in the upscale residential and commercial district.",
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
        "addressLocality": "Adyar",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Adyar"
      },
      {
        "@type": "City",
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/adyar-escorts",
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
        "name": "Are the Adyar escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Adyar escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Adyar escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adyar escorts offer a premium experience in Chennai's upscale residential and commercial district. They are sophisticated, discreet, and understand the needs of clients seeking high-class companionship in a refined urban setting."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an Adyar escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified Adyar escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do Adyar escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Adyar escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location within Adyar or nearby areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are Adyar escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Adyar escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing to suit your schedule in Adyar."
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
        "name": "Adyar Escorts Chennai",
        "item": "https://lillybabe.com/adyar-escorts"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/adyar-escorts" pageTitle="Adyar Escorts | Premium Escort Services in Adyar Chennai | Lillybabe" />

      {/* Content Authority Builder */}
      <ContentAuthorityBuilder
        contentType="category"
        topic="Adyar Escorts"
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
      <AdyarEscortsClient />
    </>
  );
}
