import { Metadata } from 'next';
import { ModelEscortsClient } from '@/components/gallery/model-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Model Escorts in Chennai | Fashion Models & Professional Companions | Lillybabe',
  description: 'Book stunning model escorts in Chennai with Lillybabe. Professional fashion models, runway experience, and sophisticated companionship available 24/7. Verified profiles, complete privacy.',
  keywords: 'model escorts Chennai, fashion model escorts Chennai, Chennai model escorts, model call girls Chennai, professional model escorts, model escorts T Nagar, model escorts Anna Nagar, model escorts OMR, model escorts ECR, model escorts Nungambakkam, model escorts Adyar, runway model escorts Chennai, fashion model companions Chennai',
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
    title: 'Model Escorts in Chennai | Fashion Models & Professional Companions',
    description: 'Book stunning model escorts in Chennai with Lillybabe. Professional fashion models, runway experience, and sophisticated companionship available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/model-escorts-in-chennai',
    images: [
      {
        url: '/images/model-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Stunning Model Escorts in Chennai - Professional Fashion Models and Sophisticated Companions Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Model Escorts in Chennai | Fashion Models & Professional Companions',
    description: 'Book stunning model escorts in Chennai with Lillybabe. Professional fashion models, runway experience, and sophisticated companionship available 24/7.',
    images: ['/images/model-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/model-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function ModelEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Model Escorts in Chennai",
    "description": "Professional model escort services in Chennai featuring fashion models, runway experience, and sophisticated companionship.",
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
      "serviceUrl": "https://lillybabe.com/model-escorts-in-chennai",
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
        "name": "What makes model escorts in Chennai different from regular escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Model escorts in Chennai are professional fashion models with runway experience, photoshoot backgrounds, and sophisticated presentation skills. They understand fashion, know how to carry themselves in any social situation, and bring that professional model confidence to every meeting. They're used to being in the spotlight and know how to make you look good too."
        }
      },
      {
        "@type": "Question",
        "name": "Do model escorts have professional modeling experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our model escorts in Chennai have genuine professional modeling experience. They've worked in fashion shows, photoshoots, and commercial modeling. This experience gives them confidence, poise, and the ability to present themselves beautifully in any situation. They know how to dress, how to pose, and how to make any event look glamorous."
        }
      },
      {
        "@type": "Question",
        "name": "Are model escorts more expensive than regular escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Model escorts in Chennai are premium companions, and their rates reflect their professional modeling background and sophisticated presentation. But when you consider what you're getting - professional model experience, fashion sense, confidence, and that special something that models have - it's worth every rupee. They're an investment in having an unforgettable, glamorous experience."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of events are model escorts perfect for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Model escorts in Chennai are perfect for high-end events, business dinners, fashion shows, corporate parties, and any occasion where you want to make a statement. They know how to dress appropriately, they understand social etiquette, and they can handle any situation with grace and confidence. They're also great for photoshoots and any event where presentation matters."
        }
      },
      {
        "@type": "Question",
        "name": "Do model escorts understand fashion and styling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our model escorts in Chennai have extensive knowledge of fashion, styling, and presentation. They know what looks good, they understand current trends, and they can help you look your best too. They're like having a personal stylist and model rolled into one. They know how to dress for any occasion and can make any event look glamorous."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a model escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect model escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential. You can also specify if you have any particular preferences or requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are model escorts available for photoshoots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many of our model escorts in Chennai are available for photoshoots and modeling assignments. They have professional modeling experience and know how to pose, how to work with photographers, and how to get the best results. They understand lighting, angles, and how to present themselves beautifully in front of the camera."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from a model escort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect someone who actually knows how to be in the spotlight and make you look good too. These women understand presentation, they know how to dress, and they have that professional model confidence that makes any event look glamorous. They're not just going through the motions - they genuinely want to make your time together unforgettable and sophisticated."
        }
      },
      {
        "@type": "Question",
        "name": "Do model escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our model escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience, and they're used to adapting to different environments."
        }
      },
      {
        "@type": "Question",
        "name": "Are model escorts more confident and sophisticated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Model escorts in Chennai are naturally more confident and sophisticated because of their professional modeling background. They're used to being in the spotlight, they know how to handle attention, and they understand how to present themselves beautifully in any situation. This confidence and sophistication makes them perfect companions for high-end events and sophisticated occasions."
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
        "name": "Model Escorts Chennai",
        "item": "https://lillybabe.com/model-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/model-escorts-in-chennai" pageTitle="Model Escorts in Chennai | Fashion Models & Professional Companions | Lillybabe" />

      {/* Content Authority Builder */}
      <ContentAuthorityBuilder
        contentType="category"
        topic="Model Escorts"
        location="Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ModelEscortsClient />
    </>
  );
}
