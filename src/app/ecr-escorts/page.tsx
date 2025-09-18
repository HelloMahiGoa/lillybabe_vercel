import { Metadata } from 'next';
import { ECREscortsClient } from '@/components/locations/ecr-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'ECR Escorts | Premium Escort Services in ECR Chennai | Lillybabe',
  description: 'Book beautiful and sophisticated escorts in ECR Chennai with Lillybabe. Premium escort services along East Coast Road with verified profiles, complete privacy, and 24/7 availability.',
  keywords: 'ECR escorts, ECR call girls, escorts ECR Chennai, ECR escort service, call girls ECR, ECR independent escorts, ECR escort agency, premium escorts ECR, ECR escort girls, ECR escort booking, East Coast Road escorts',
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
    title: 'ECR Escorts | Premium Escort Services in ECR Chennai',
    description: 'Book beautiful and sophisticated escorts in ECR Chennai with Lillybabe. Premium escort services along East Coast Road with verified profiles and complete privacy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/ecr-escorts',
    images: [
      {
        url: '/images/ecr-1.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Escorts in ECR Chennai - Premium Escort Services Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECR Escorts | Premium Escort Services in ECR Chennai',
    description: 'Book beautiful and sophisticated escorts in ECR Chennai with Lillybabe. Premium escort services along East Coast Road with verified profiles.',
    images: ['/images/ecr-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/ecr-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function ECREscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ECR Escorts",
    "description": "Professional escort services in ECR Chennai featuring beautiful, verified, and experienced escorts with premium service quality along the scenic East Coast Road.",
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
        "addressLocality": "ECR",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "ECR"
      },
      {
        "@type": "City", 
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/ecr-escorts",
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
        "name": "Are the escorts in ECR verified and safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our ECR escorts are thoroughly verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper background checks and safety measures."
        }
      },
      {
        "@type": "Question",
        "name": "What makes ECR escorts special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ECR escorts are known for their sophistication, beauty, and ability to provide exceptional service along Chennai's scenic East Coast Road. Located near beaches and luxury resorts, they offer convenience and premium companionship for travelers and locals."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an escort in ECR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified escorts in ECR with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do ECR escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our ECR escorts are available for both incall and outcall services. You can choose what works best for you and your location along the East Coast Road or nearby beach resorts."
        }
      },
      {
        "@type": "Question",
        "name": "Are ECR escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our ECR escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing along the scenic East Coast Road."
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
        "name": "ECR Escorts",
        "item": "https://lillybabe.com/ecr-escorts"
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
      <SEOMonitoring pageType="location" pageUrl="https://lillybabe.com/ecr-escorts" pageTitle="ECR Escorts | Premium Escort Services in ECR Chennai | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="location" 
        topic="ECR Escorts" 
        location="ECR Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ECREscortsClient />
    </>
  );
}
