'use client';

import { StructuredData } from './structured-data';

interface BlogPostSEOProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  readTime: string;
}

export const BlogPostSEO = ({ 
  title, 
  description, 
  keywords, 
  author, 
  date, 
  image, 
  slug, 
  category,
  readTime 
}: BlogPostSEOProps) => {
  const canonicalUrl = `https://lillybabe.com/blog/${slug}`;
  const imageUrl = `https://lillybabe.com${image}`;

  return (
    <>
      {/* Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="LillyBabe - Chennai Escorts" />
      <meta property="article:author" content={author} />
      <meta property="article:published_time" content={new Date(date).toISOString()} />
      <meta property="article:section" content={category} />
      <meta property="article:tag" content={keywords} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="article:reading_time" content={readTime} />
      <meta name="article:category" content={category} />
      
      {/* Preload critical resources */}
      <link rel="preload" href={image} as="image" type="image/webp" />
      
      {/* Structured Data */}
      <StructuredData 
        type="WebPage" 
        data={{
          headline: title,
          description: description,
          image: imageUrl,
          author: {
            "@type": "Person",
            "name": author
          },
          publisher: {
            "@type": "Organization",
            "name": "LillyBabe",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lillybabe.com/images/logo.webp"
            }
          },
          datePublished: new Date(date).toISOString(),
          dateModified: new Date(date).toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          articleSection: category,
          keywords: keywords.split(', '),
          wordCount: description.split(' ').length * 10, // Rough estimate
          timeRequired: readTime
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
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title,
              "item": canonicalUrl
            }
          ]
        }} 
      />
      
      <StructuredData 
        type="WebPage" 
        data={{
          title: title,
          description: description,
          url: canonicalUrl,
          isPartOf: {
            "@type": "WebSite",
            "name": "LillyBabe - Chennai Escorts",
            "url": "https://lillybabe.com"
          }
        }} 
      />
    </>
  );
};
