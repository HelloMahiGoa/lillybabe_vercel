import { Metadata } from 'next';
import { MalluEscortsClient } from '@/components/gallery/mallu-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Mallu Escorts in Chennai | Beautiful Kerala Girls & South Indian Charm | Lillybabe',
  description: 'Book beautiful Mallu escorts in Chennai with Lillybabe. Authentic Kerala beauty, South Indian charm, and traditional elegance available 24/7. Verified profiles, complete privacy.',
  keywords: 'Mallu escorts Chennai, Kerala escorts Chennai, Chennai Mallu escorts, Mallu call girls Chennai, South Indian escorts Chennai, Mallu escorts T Nagar, Mallu escorts Anna Nagar, Mallu escorts OMR, Mallu escorts ECR, Mallu escorts Nungambakkam, Mallu escorts Adyar, beautiful Mallu escorts Chennai, Kerala girls Chennai, South Indian beauty Chennai',
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
    title: 'Mallu Escorts in Chennai | Beautiful Kerala Girls & South Indian Charm',
    description: 'Book beautiful Mallu escorts in Chennai with Lillybabe. Authentic Kerala beauty, South Indian charm, and traditional elegance available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/mallu-escorts-in-chennai',
    images: [
      {
        url: '/images/mallu-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Mallu Escorts in Chennai - Authentic Kerala Beauty and South Indian Charm Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallu Escorts in Chennai | Beautiful Kerala Girls & South Indian Charm',
    description: 'Book beautiful Mallu escorts in Chennai with Lillybabe. Authentic Kerala beauty, South Indian charm, and traditional elegance available 24/7.',
    images: ['/images/mallu-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/mallu-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function MalluEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mallu Escorts in Chennai",
    "description": "Professional Mallu escort services in Chennai featuring authentic Kerala beauty, South Indian charm, and traditional elegance with cultural understanding.",
    "provider": {
      "@type": "Organization",
      "name": "Lillybabe",
      "url": "https://lillybabe.com",
      "logo": "https://lillybabe.com/images/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918121426651",
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi", "Malayalam"]
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
      "serviceUrl": "https://lillybabe.com/mallu-escorts-in-chennai",
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
        "name": "What makes Mallu escorts in Chennai special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mallu escorts in Chennai bring authentic Kerala beauty, South Indian charm, and traditional elegance. They understand South Indian culture, speak Malayalam fluently, and can provide companionship that feels natural and comfortable. They know the local culture, understand traditions, and can make you feel at home in Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Do Mallu escorts speak Malayalam and English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Mallu escorts in Chennai are fluent in both Malayalam and English. They can communicate comfortably in either language, making it easy for you to express yourself and feel understood. Whether you prefer Malayalam or English, they'll make sure the conversation flows naturally."
        }
      },
      {
        "@type": "Question",
        "name": "Are Mallu escorts familiar with South Indian culture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our Mallu escorts in Chennai are from Kerala and understand South Indian culture, traditions, and way of life. They know the best places to visit, understand local customs, and can help you experience Chennai like a local. They bring that authentic Kerala cultural touch to every meeting."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a Mallu escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect Mallu escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of services do Mallu escorts provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Mallu escorts in Chennai provide companionship services for social events, business dinners, travel, and private time. They're perfect for when you need someone who understands South Indian culture and can make you feel comfortable. They understand boundaries and will be exactly what you need for your specific situation. They're also great for showing you around the city if you're new to Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Do Mallu escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Mallu escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience. They're also familiar with the city, so they can suggest good locations if you need recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "Are Mallu escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most Mallu escorts in Chennai are available around the clock. They understand that your schedule might be busy, and they're flexible with timing. Whether it's early morning meetings, late-night company, or weekend companionship, they're there when you need them. They're also more likely to accommodate last-minute requests since they're local and familiar with the area."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from a Mallu escort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect someone who actually understands your culture and background. These women know how to be respectful, caring, and genuine. They understand Kerala traditions and values, and they can provide companionship that feels natural and comfortable. They're not just going through the motions - they genuinely want to make your time together enjoyable and meaningful."
        }
      },
      {
        "@type": "Question",
        "name": "Do Mallu escorts understand local customs and traditions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Our Mallu escorts in Chennai are well-versed in South Indian customs, traditions, and cultural practices. They understand Kerala festivals, family values, and social norms. This cultural understanding makes them perfect companions for any occasion, whether it's a family event, business meeting, or casual outing. They know how to behave appropriately in different situations."
        }
      },
      {
        "@type": "Question",
        "name": "Are Mallu escorts more affordable than other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mallu escorts in Chennai often provide excellent value for money. They understand the local market and can offer competitive rates while maintaining high service standards. Plus, they're more flexible with pricing and can work within your budget to provide the best possible experience. They understand that building long-term relationships is more valuable than short-term profits."
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
        "name": "Mallu Escorts Chennai",
        "item": "https://lillybabe.com/mallu-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/mallu-escorts-in-chennai" pageTitle="Mallu Escorts in Chennai | Beautiful Kerala Girls & South Indian Charm | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Mallu Escorts" 
        location="Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <MalluEscortsClient />
    </>
  );
}
