'use client';

import { StructuredData } from './structured-data';

export const BlogSEO = () => {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/images/models/escort-girl-2.webp" as="image" type="image/webp" />
      <link rel="preload" href="/images/models/escort-girl-3.webp" as="image" type="image/webp" />
      
      {/* Structured Data */}
      <StructuredData 
        type="WebPage" 
        data={{
          title: "Chennai Escorts Blog - Tips, Guides & Latest News | LillyBabe",
          description: "Read our comprehensive blog about Chennai escorts, booking tips, safety guides, and latest updates from LillyBabe escort service.",
          url: "https://lillybabe.com/blog",
          profileCount: 0
        }} 
      />
      
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
              "name": "Blog",
              "item": "https://lillybabe.com/blog"
            }
          ]
        }} 
      />
      
      <StructuredData 
        type="FAQPage" 
        data={{
          faqs: [
            {
              "@type": "Question",
              "name": "What topics does the Chennai escorts blog cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our blog covers booking tips, safety guides, location information, escort types, and latest updates about Chennai escort services."
              }
            },
            {
              "@type": "Question",
              "name": "How often is the blog updated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We regularly update our blog with new articles, tips, and information about Chennai escort services to keep our readers informed."
              }
            },
            {
              "@type": "Question",
              "name": "Can I find safety tips for booking escorts in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our blog includes comprehensive safety guides and tips for booking escorts in Chennai to ensure a safe and enjoyable experience."
              }
            }
          ]
        }} 
      />
    </>
  );
};
