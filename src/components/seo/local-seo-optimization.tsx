'use client';

import { StructuredData } from './structured-data';

interface LocalSEOOptimizationProps {
  location: string;
  serviceType?: string;
  phoneNumber?: string;
  coordinates?: {
    latitude: string;
    longitude: string;
  };
}

export const LocalSEOOptimization = ({ 
  location, 
  serviceType = "Escort Service",
  phoneNumber = "+91-81214-26651",
  coordinates = { latitude: "13.0827", longitude: "80.2707" }
}: LocalSEOOptimizationProps) => {
  
  // Chennai area coordinates for different locations
  const chennaiAreas = {
    "Anna Nagar": { latitude: "13.0859", longitude: "80.2189" },
    "T. Nagar": { latitude: "13.0418", longitude: "80.2341" },
    "OMR": { latitude: "12.9166", longitude: "80.2243" },
    "ECR": { latitude: "12.9166", longitude: "80.2243" },
    "Nungambakkam": { latitude: "13.0604", longitude: "80.2344" },
    "Adyar": { latitude: "13.0067", longitude: "80.2206" },
    "Mahabalipuram": { latitude: "12.6208", longitude: "80.1944" },
    "Kilpauk": { latitude: "13.0859", longitude: "80.2189" },
    "Guindy": { latitude: "13.0067", longitude: "80.2206" },
    "Mylapore": { latitude: "13.0340", longitude: "80.2608" },
    "Chennai": { latitude: "13.0827", longitude: "80.2707" }
  };

  const areaCoords = chennaiAreas[location as keyof typeof chennaiAreas] || coordinates;

  // Generate comprehensive local business structured data
  const localBusinessData = {
    name: `${location} ${serviceType} - LillyBabe`,
    description: `Professional ${serviceType.toLowerCase()} in ${location} with verified profiles and authentic reviews`,
    url: `https://lillybabe.com/${location.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: phoneNumber,
    address: {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": areaCoords.latitude,
      "longitude": areaCoords.longitude
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    priceRange: "$$",
    paymentAccepted: "Cash, Digital Payment",
    currenciesAccepted: "INR",
    areaServed: [
      { "@type": "City", "name": "Chennai" },
      { "@type": "Place", "name": location },
      { "@type": "Place", "name": "Anna Nagar" },
      { "@type": "Place", "name": "T. Nagar" },
      { "@type": "Place", "name": "OMR" },
      { "@type": "Place", "name": "ECR" }
    ],
    serviceType: serviceType,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "name": `${location} ${serviceType} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Independent ${location} Escorts`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Russian ${location} Escorts`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `VIP ${location} Escorts`
          }
        }
      ]
    }
  };

  // Generate service area structured data
  const serviceAreaData = {
    name: `${location} Escort Services`,
    description: `Comprehensive ${serviceType.toLowerCase()} in ${location} with verified profiles`,
    provider: {
      "@type": "Organization",
      "name": "LillyBabe"
    },
    areaServed: [
      {
        "@type": "Place",
        "name": location,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": areaCoords.latitude,
          "longitude": areaCoords.longitude
        }
      }
    ],
    serviceType: serviceType,
    availableChannel: {
      "@type": "ServiceChannel",
      "serviceUrl": `https://lillybabe.com/escorts`,
      "serviceSmsNumber": phoneNumber
    }
  };

  return (
    <>
      {/* Local Business Structured Data */}
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      
      {/* Service Area Structured Data */}
      <StructuredData type="Service" data={serviceAreaData} />
      
      {/* Additional Local SEO Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content={`${areaCoords.latitude};${areaCoords.longitude}`} />
      <meta name="ICBM" content={`${areaCoords.latitude}, ${areaCoords.longitude}`} />
      
      {/* Location-specific keywords */}
      <meta name="keywords" content={`
        ${location} escorts,
        ${location} call girls,
        ${location} escort service,
        escorts in ${location},
        ${location} independent escorts,
        ${location} Russian escorts,
        ${location} VIP escorts,
        ${location} escort agency,
        ${serviceType.toLowerCase()} ${location},
        ${location} escort girls,
        best ${location} escorts,
        ${location} escorts near me
      `.trim().replace(/\s+/g, ', ')} />
    </>
  );
};

// Helper function to generate location-specific content
export const generateLocationContent = (location: string) => {
  const locationContent = {
    "Anna Nagar": {
      title: `Anna Nagar Escorts - Premium Call Girls in Anna Nagar | LillyBabe`,
      description: `Find genuine Anna Nagar escorts with verified profiles and authentic reviews. Premium call girls available 24/7 in Anna Nagar with complete privacy and discretion.`,
      content: `Anna Nagar escorts offer premium companionship services in one of Chennai's most upscale areas. Our verified Anna Nagar call girls provide discreet and professional escort services with genuine photos and authentic client reviews.`
    },
    "T. Nagar": {
      title: `T. Nagar Escorts - Verified Call Girls in T. Nagar | LillyBabe`,
      description: `Meet beautiful T. Nagar escorts with verified profiles and real photos. Independent call girls available 24/7 in T. Nagar for incall and outcall services.`,
      content: `T. Nagar escorts provide excellent companionship services in Chennai's commercial hub. Our verified T. Nagar call girls offer professional escort services with complete privacy and authentic reviews from satisfied clients.`
    },
    "OMR": {
      title: `OMR Escorts - Beautiful Call Girls in OMR Chennai | LillyBabe`,
      description: `Discover stunning OMR escorts with verified profiles and genuine photos. Professional call girls available 24/7 in OMR for premium escort services.`,
      content: `OMR escorts serve the IT corridor of Chennai with premium companionship services. Our verified OMR call girls provide professional escort services with authentic reviews and complete discretion.`
    },
    "ECR": {
      title: `ECR Escorts - Premium Call Girls in ECR Chennai | LillyBabe`,
      description: `Experience luxury ECR escorts with verified profiles and authentic reviews. Beautiful call girls available 24/7 in ECR for high-class escort services.`,
      content: `ECR escorts offer premium companionship along Chennai's scenic coastline. Our verified ECR call girls provide luxury escort services with genuine photos and authentic client testimonials.`
    },
    "Nungambakkam": {
      title: `Nungambakkam Escorts - Verified Call Girls in Nungambakkam | LillyBabe`,
      description: `Find genuine Nungambakkam escorts with verified profiles and real photos. Independent call girls available 24/7 in Nungambakkam for professional services.`,
      content: `Nungambakkam escorts provide professional companionship services in Chennai's premium residential area. Our verified Nungambakkam call girls offer discreet escort services with authentic reviews.`
    },
    "Adyar": {
      title: `Adyar Escorts - Beautiful Call Girls in Adyar Chennai | LillyBabe`,
      description: `Meet stunning Adyar escorts with verified profiles and genuine photos. Premium call girls available 24/7 in Adyar for luxury escort services.`,
      content: `Adyar escorts serve Chennai's upscale residential area with premium companionship services. Our verified Adyar call girls provide professional escort services with complete privacy and authentic reviews.`
    },
    "Mahabalipuram": {
      title: `Mahabalipuram Escorts - Verified Call Girls in Mahabalipuram | LillyBabe`,
      description: `Discover beautiful Mahabalipuram escorts with verified profiles and real photos. Independent call girls available 24/7 in Mahabalipuram for escort services.`,
      content: `Mahabalipuram escorts offer unique companionship services near Chennai's historic temple town. Our verified Mahabalipuram call girls provide professional escort services with genuine photos and authentic client reviews.`
    }
  };

  return locationContent[location as keyof typeof locationContent] || {
    title: `${location} Escorts - Verified Call Girls in ${location} | LillyBabe`,
    description: `Find genuine ${location} escorts with verified profiles and authentic reviews. Professional call girls available 24/7 in ${location} for premium escort services.`,
    content: `${location} escorts provide professional companionship services in Chennai. Our verified ${location} call girls offer discreet escort services with genuine photos and authentic client reviews.`
  };
};

// Helper function to generate location-specific FAQ
export const generateLocationFAQ = (location: string) => {
  return {
    faqs: [
      {
        "@type": "Question",
        "name": `Are the ${location} escorts verified?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, all our ${location} escorts are verified with genuine photos, authentic reviews, and thorough background checks. We ensure complete authenticity and safety for all our clients in ${location}.`
        }
      },
      {
        "@type": "Question",
        "name": `What services do ${location} escorts offer?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${location} escorts offer comprehensive companionship services including incall and outcall services, social events, travel companionship, and personalized experiences with complete privacy and discretion.`
        }
      },
      {
        "@type": "Question",
        "name": `How can I book ${location} escorts?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Booking ${location} escorts is simple and secure. Contact us via phone or WhatsApp, discuss your requirements, and we'll arrange everything with complete privacy and discretion for your ${location} escort service.`
        }
      },
      {
        "@type": "Question",
        "name": `Are ${location} escorts available 24/7?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, our ${location} escorts are available 24/7 for immediate or advance bookings. Our customer support team is always available to assist with your ${location} escort service needs.`
        }
      }
    ]
  };
};
