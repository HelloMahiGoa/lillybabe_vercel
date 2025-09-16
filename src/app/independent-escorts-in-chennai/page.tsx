import { Metadata } from 'next';
import { IndependentEscortsClient } from '@/components/gallery/independent-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Independent Escorts in Chennai | Professional & Discreet Companions | Lillybabe',
  description: 'Book professional independent escorts in Chennai with Lillybabe. Experienced, discreet, and reliable companions available 24/7. Verified profiles, complete privacy.',
  keywords: 'independent escorts Chennai, professional escorts Chennai, Chennai independent escorts, independent call girls Chennai, self-employed escorts Chennai, independent escorts T Nagar, independent escorts Anna Nagar, independent escorts OMR, independent escorts ECR, independent escorts Nungambakkam, independent escorts Adyar, professional escorts Chennai, discreet escorts Chennai',
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
    title: 'Independent Escorts in Chennai | Professional & Discreet Companions',
    description: 'Book professional independent escorts in Chennai with Lillybabe. Experienced, discreet, and reliable companions available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/independent-escorts-in-chennai',
    images: [
      {
        url: '/images/independent-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Professional Independent Escorts in Chennai - Experienced and Discreet Companions Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Independent Escorts in Chennai | Professional & Discreet Companions',
    description: 'Book professional independent escorts in Chennai with Lillybabe. Experienced, discreet, and reliable companions available 24/7.',
    images: ['/images/independent-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/independent-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function IndependentEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Independent Escorts in Chennai",
    "description": "Professional independent escort services in Chennai featuring experienced, discreet, and reliable companions with business acumen and personal touch.",
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
      "serviceUrl": "https://lillybabe.com/independent-escorts-in-chennai",
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
        "name": "What makes independent escorts different from agency escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Independent escorts in Chennai are self-employed professionals who run their own business. They're more experienced, have better communication skills, and offer a more personalized service. They understand the business side of things and know how to provide exactly what you need without any middleman complications."
        }
      },
      {
        "@type": "Question",
        "name": "Are independent escorts in Chennai more reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Independent escorts are running their own business, so their reputation is everything to them. They're more professional, punctual, and committed to providing excellent service. They understand that one bad experience can hurt their business, so they go the extra mile to ensure you're completely satisfied."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book an independent escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is straightforward - just call us or send a message. We'll discuss your requirements, timing, and preferences. Independent escorts are usually more flexible with scheduling and can often accommodate last-minute requests. Everything is handled with complete discretion and professionalism."
        }
      },
      {
        "@type": "Question",
        "name": "Do independent escorts offer better rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Independent escorts often provide better value for money because they don't have agency fees to cover. They can offer competitive rates while still maintaining high service standards. Plus, they're more flexible with pricing and can work within your budget to provide the best possible experience."
        }
      },
      {
        "@type": "Question",
        "name": "Are independent escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most independent escorts in Chennai are available around the clock. They understand that business professionals and busy individuals need flexible scheduling. Whether it's early morning meetings, late-night company, or weekend companionship, they're there when you need them."
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
        "name": "Independent Escorts Chennai",
        "item": "https://lillybabe.com/independent-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/independent-escorts-in-chennai" pageTitle="Independent Escorts in Chennai | Professional & Discreet Companions | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Independent Escorts" 
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
      <IndependentEscortsClient />
    </>
  );
}
