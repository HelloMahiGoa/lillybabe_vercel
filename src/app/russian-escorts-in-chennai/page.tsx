import { Metadata } from 'next';
import { RussianEscortsClient } from '@/components/gallery/russian-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Russian Escorts in Chennai | Exotic Beauty & Sophistication | Lillybabe',
  description: 'Book stunning Russian escorts in Chennai with Lillybabe. Exotic European beauty, intelligence, and sophistication available 24/7. Verified profiles, complete privacy.',
  keywords: 'Russian escorts Chennai, exotic escorts Chennai, European escorts Chennai, Russian call girls Chennai, foreign escorts Chennai, Russian escorts T Nagar, Russian escorts Anna Nagar, Russian escorts OMR, Russian escorts ECR, Russian escorts Nungambakkam, Russian escorts Adyar, sophisticated escorts Chennai',
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
    title: 'Russian Escorts in Chennai | Exotic Beauty & Sophistication',
    description: 'Book stunning Russian escorts in Chennai with Lillybabe. Exotic European beauty, intelligence, and sophistication available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/russian-escorts-in-chennai',
    images: [
      {
        url: '/images/russian-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Russian Escorts in Chennai - Exotic European Beauty and Sophistication Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Russian Escorts in Chennai | Exotic Beauty & Sophistication',
    description: 'Book stunning Russian escorts in Chennai with Lillybabe. Exotic European beauty, intelligence, and sophistication available 24/7.',
    images: ['/images/russian-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/russian-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RussianEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Russian Escorts in Chennai",
    "description": "Professional Russian escort services in Chennai featuring exotic European beauty, intelligence, sophistication, and mysterious charm.",
    "provider": {
      "@type": "Organization",
      "name": "Lillybabe",
      "url": "https://lillybabe.com",
      "logo": "https://lillybabe.com/images/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918121426651",
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi", "Russian"]
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
      "serviceUrl": "https://lillybabe.com/russian-escorts-in-chennai",
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
        "name": "Are the Russian escorts in Chennai safe and verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We don't mess around with safety - every Russian escort in our agency is properly verified, background checked, and we know who they are. Your safety and privacy are our top priorities. These are real women, not some random people we found online."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between Russian escorts and regular escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Well, it's like the difference between a fine wine and cheap beer. Russian escorts in Chennai bring that exotic European beauty and sophistication that you just can't find with local escorts. They're elegant, they know how to carry themselves, and they have that mysterious charm that makes them irresistible. Plus, they're usually well-educated and can hold intelligent conversations."
        }
      },
      {
        "@type": "Question",
        "name": "Do Russian escorts speak English well?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Russian escorts in Chennai speak English fluently. They're not just beautiful - they're also intelligent and well-educated. You won't have any communication issues, and they can engage in meaningful conversations about pretty much anything. They're not just pretty faces."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a Russian escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's simple - just give us a call or send us a message. We'll help you find the perfect Russian escort for your needs. We'll discuss your requirements, your budget, and when you need them. We make the whole process easy and discreet."
        }
      },
      {
        "@type": "Question",
        "name": "Are Russian escorts more expensive than regular escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look, you get what you pay for. Russian escorts in Chennai are premium companions, and their rates reflect that. But when you consider what you're getting - exotic beauty, sophistication, intelligence, and that special something that Russian women have - it's worth every rupee. They're an investment in having an unforgettable experience."
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
        "name": "Russian Escorts Chennai",
        "item": "https://lillybabe.com/russian-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/russian-escorts-in-chennai" pageTitle="Russian Escorts in Chennai | Exotic Beauty & Sophistication | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Russian Escorts" 
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
      <RussianEscortsClient />
    </>
  );
}
