import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProvider } from '@/components/analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Chennai Escorts - Verified Call Girls & Independent Escorts',
    template: '%s | Chennai Escorts - LillyBabe'
  },
  description: 'Genuine Chennai escorts and call girls with verified profiles, real photos, and authentic reviews. Independent, Russian, Model escorts available 24/7 across Chennai locations.',
  icons: {
    icon: '/images/kiss.png',
    apple: '/images/kiss.png',
    shortcut: '/images/kiss.png',
  },
  keywords: ['Chennai escorts', 'LillyBabe', 'escort service Chennai'],
  authors: [{ name: 'LillyBabe' }],
  creator: 'LillyBabe',
  publisher: 'LillyBabe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lillybabe.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chennai Escorts - Genuine Escort Service Provider | Hot Call Girls in Chennai',
    description: 'Genuine Chennai Escorts Service Provider with beautiful, verified call girls. 24/7 availability, complete privacy, and professional service.',
    url: 'https://lillybabe.com',
    siteName: 'LillyBabe',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful Chennai Escort Girls - Best Escort Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts - Best Escort Service',
    description: 'Best Chennai Escorts Service with beautiful, verified call girls. 24/7 availability and complete privacy.',
    images: ['/images/hero-bg.webp'],
  },
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
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || 'E2cg-G7rhtaAK5j3HMLuv7HhmsW0azIIMWKwTkB1Tl4',
  },
  category: 'adult services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Theme and Viewport */}
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true,
                  });
                `,
              }}
            />
          </>
        )}
        {/* Preload critical resources - moved to specific pages where used */}
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data — WebSite.name is the main signal for Google's SERP site name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://lillybabe.com/#website',
              name: 'LillyBabe',
              url: 'https://lillybabe.com/',
              publisher: { '@id': 'https://lillybabe.com/#organization' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://lillybabe.com/#organization",
              "name": "LillyBabe",
              "url": "https://lillybabe.com",
              "logo": "https://lillybabe.com/images/logo.webp",
              "description": "Best Chennai Escorts Service with beautiful, verified call girls",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-81214-26651",
                "contactType": "customer service",
                "availableLanguage": ["English", "Tamil", "Hindi"]
              },
              "sameAs": [
                "https://wa.me/918121426651"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* <ContentProtection /> */}
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}