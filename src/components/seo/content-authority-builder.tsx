'use client';

import { StructuredData } from './structured-data';

interface ContentAuthorityBuilderProps {
  contentType: 'guide' | 'faq' | 'service' | 'location' | 'category';
  topic: string;
  location?: string;
  authorName?: string;
  publishDate?: string;
  lastModified?: string;
}

export const ContentAuthorityBuilder = ({
  contentType,
  topic,
  location = "Chennai",
  authorName = "LillyBabe Team",
  publishDate = new Date().toISOString().split('T')[0],
  lastModified = new Date().toISOString().split('T')[0]
}: ContentAuthorityBuilderProps) => {

  // Generate comprehensive FAQ data for GEO optimization
  const generateFAQData = () => {
    const baseFAQs = {
      guide: [
        {
          "@type": "Question",
          "name": `What is the complete guide to ${topic} in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Our comprehensive guide to ${topic} in ${location} covers everything you need to know, from basic information to advanced tips. This authoritative resource provides detailed insights based on years of experience in the ${location} market.`
          }
        },
        {
          "@type": "Question",
          "name": `How do I choose the best ${topic} in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Choosing the best ${topic} in ${location} requires understanding your needs, budget, and preferences. Our guide provides detailed criteria and recommendations based on verified reviews and professional experience.`
          }
        },
        {
          "@type": "Question",
          "name": `What are the rates for ${topic} in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Rates for ${topic} in ${location} vary based on several factors including quality, location, and services offered. Our guide provides detailed pricing information and tips for getting the best value.`
          }
        },
        {
          "@type": "Question",
          "name": `Is it safe to use ${topic} services in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, when you choose verified and reputable ${topic} services in ${location}, safety is guaranteed. Our guide emphasizes the importance of verification, reviews, and professional standards for a safe experience.`
          }
        }
      ],
      service: [
        {
          "@type": "Question",
          "name": `What makes ${topic} in ${location} different from other locations?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${topic} in ${location} offers unique advantages including local expertise, cultural understanding, and specialized knowledge of the area. Our service provides authentic experiences tailored to ${location} preferences.`
          }
        },
        {
          "@type": "Question",
          "name": `How do I verify the quality of ${topic} in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Verifying ${topic} quality in ${location} involves checking reviews, photos, verification status, and professional standards. Our comprehensive verification process ensures you get the best ${topic} experience in ${location}.`
          }
        },
        {
          "@type": "Question",
          "name": `What areas in ${location} offer the best ${topic} services?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${location} offers excellent ${topic} services across all major areas including Anna Nagar, T. Nagar, OMR, ECR, and more. Each area has its own advantages and specializations for ${topic} services.`
          }
        }
      ],
      location: [
        {
          "@type": "Question",
          "name": `Why choose ${location} for ${topic} services?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${location} is an ideal location for ${topic} services due to its accessibility, safety, and variety of options. Our ${location} service provides professional, verified, and reliable ${topic} experiences.`
          }
        },
        {
          "@type": "Question",
          "name": `What are the best times to book ${topic} in ${location}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `The best times to book ${topic} in ${location} depend on your schedule and preferences. Our ${location} service offers 24/7 availability with peak hours for optimal experiences.`
          }
        }
      ]
    };

    return baseFAQs[contentType as keyof typeof baseFAQs] || baseFAQs.guide;
  };

  // Generate article structured data
  const articleData = {
    headline: `${topic} in ${location} - Complete Guide & Expert Tips`,
    description: `Comprehensive guide to ${topic} in ${location} with expert insights, verified information, and professional recommendations. Get the complete picture of ${topic} services in ${location}.`,
    image: `https://lillybabe.com/images/${topic.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}.webp`,
    author: {
      "@type": "Person",
      "name": authorName,
      "url": "https://lillybabe.com",
      "knowsAbout": [
        `${location} Escort Services`,
        "Independent Escorts",
        "Russian Escorts",
        "Model Escorts",
        "VIP Escort Services"
      ]
    },
    publisher: {
      "@type": "Organization",
      "name": "LillyBabe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lillybabe.com/images/logo.webp"
      }
    },
    datePublished: publishDate,
    dateModified: lastModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lillybabe.com/${topic.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}`
    },
    articleSection: `${topic} Services`,
    keywords: [
      `${topic} ${location}`,
      `${location} ${topic}`,
      `${topic} services ${location}`,
      `${topic} guide ${location}`,
      `best ${topic} ${location}`,
      `${topic} tips ${location}`
    ],
    wordCount: 2500,
    timeRequired: "PT10M"
  };

  // Generate how-to structured data
  const howToData = {
    name: `How to Choose the Best ${topic} in ${location}`,
    description: `Step-by-step guide to selecting the perfect ${topic} service in ${location} with expert tips and professional recommendations.`,
    image: `https://lillybabe.com/images/how-to-${topic.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}.webp`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "Varies"
    },
    totalTime: "PT15M",
    supply: [
      {
        "@type": "HowToSupply",
        "name": "Research time"
      },
      {
        "@type": "HowToSupply", 
        "name": "Budget planning"
      }
    ],
    tool: [
      {
        "@type": "HowToTool",
        "name": "Our verification system"
      },
      {
        "@type": "HowToTool",
        "name": "Client reviews"
      }
    ],
    step: [
      {
        "@type": "HowToStep",
        "name": "Define your requirements",
        "text": `Start by clearly defining what you're looking for in ${topic} services in ${location}. Consider your preferences, budget, and specific needs.`,
        "image": `https://lillybabe.com/images/step1-${topic.toLowerCase().replace(/\s+/g, '-')}.webp`
      },
      {
        "@type": "HowToStep",
        "name": "Research verified options",
        "text": `Look for verified ${topic} services in ${location} with genuine photos, authentic reviews, and professional standards.`,
        "image": `https://lillybabe.com/images/step2-${topic.toLowerCase().replace(/\s+/g, '-')}.webp`
      },
      {
        "@type": "HowToStep",
        "name": "Check reviews and testimonials",
        "text": `Read authentic client reviews and testimonials to understand the quality and reliability of ${topic} services in ${location}.`,
        "image": `https://lillybabe.com/images/step3-${topic.toLowerCase().replace(/\s+/g, '-')}.webp`
      },
      {
        "@type": "HowToStep",
        "name": "Contact and book",
        "text": `Contact the service provider, discuss your requirements, and book your ${topic} service in ${location} with complete privacy and discretion.`,
        "image": `https://lillybabe.com/images/step4-${topic.toLowerCase().replace(/\s+/g, '-')}.webp`
      }
    ]
  };

  return (
    <>
      {/* Article Structured Data */}
      <StructuredData 
        type="WebPage" 
        data={articleData} 
      />
      
      {/* How-To Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            ...howToData
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <StructuredData 
        type="FAQPage" 
        data={{ faqs: generateFAQData() }} 
      />
      
      {/* Breadcrumb Structured Data */}
      <StructuredData 
        type="BreadcrumbList" 
        data={{
          breadcrumbs: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://lillybabe.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": location,
              "item": `https://lillybabe.com/${location.toLowerCase().replace(/\s+/g, '-')}`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": topic,
              "item": `https://lillybabe.com/${topic.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}`
            }
          ]
        }} 
      />
      
      {/* Author Information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": authorName,
            "description": `Expert in ${location} escort services with years of professional experience`,
            "url": "https://lillybabe.com",
            "sameAs": ["https://wa.me/918121426651"],
            "knowsAbout": [
              `${location} Escort Services`,
              "Independent Escorts",
              "Russian Escorts", 
              "Model Escorts",
              "VIP Escort Services",
              "Professional Companionship",
              "Discrete Services"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Escort Service Professional",
              "occupationLocation": {
                "@type": "City",
                "name": location
              }
            }
          })
        }}
      />
    </>
  );
};

// Helper function to generate content clusters
export const generateContentClusters = (mainTopic: string, location: string) => {
  const clusters = {
    "Chennai Escorts": [
      "Independent Chennai Escorts",
      "Russian Chennai Escorts", 
      "Model Chennai Escorts",
      "VIP Chennai Escorts",
      "Housewife Chennai Escorts",
      "Teen Chennai Escorts",
      "Celebrity Chennai Escorts"
    ],
    "Anna Nagar Escorts": [
      "Anna Nagar Independent Escorts",
      "Anna Nagar Russian Escorts",
      "Anna Nagar Model Escorts",
      "Anna Nagar VIP Escorts"
    ],
    "T. Nagar Escorts": [
      "T. Nagar Independent Escorts",
      "T. Nagar Russian Escorts",
      "T. Nagar Model Escorts",
      "T. Nagar VIP Escorts"
    ],
    "OMR Escorts": [
      "OMR Independent Escorts",
      "OMR Russian Escorts",
      "OMR Model Escorts",
      "OMR VIP Escorts"
    ]
  };

  return clusters[mainTopic as keyof typeof clusters] || [
    `${mainTopic} Services`,
    `${mainTopic} Guide`,
    `${mainTopic} Tips`,
    `Best ${mainTopic}`,
    `${mainTopic} Reviews`
  ];
};

// Helper function to generate semantic keywords
export const generateSemanticKeywords = (topic: string, location: string) => {
  return [
    // Primary keywords
    `${topic} ${location}`,
    `${location} ${topic}`,
    
    // Long-tail keywords
    `best ${topic} in ${location}`,
    `${topic} services ${location}`,
    `${location} ${topic} guide`,
    `how to choose ${topic} ${location}`,
    
    // Semantic variations
    `${topic.toLowerCase()} ${location}`,
    `${location} ${topic.toLowerCase()}`,
    `${topic} near ${location}`,
    `${location} ${topic} reviews`,
    
    // Location-specific variations
    `${topic} in ${location} city`,
    `${location} area ${topic}`,
    `${topic} ${location} Tamil Nadu`,
    
    // Service-specific variations
    `professional ${topic} ${location}`,
    `verified ${topic} ${location}`,
    `genuine ${topic} ${location}`,
    `authentic ${topic} ${location}`
  ];
};
