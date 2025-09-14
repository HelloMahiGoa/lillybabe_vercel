'use client';

import { useEffect } from 'react';

interface SEOMonitoringProps {
  pageType: 'homepage' | 'escorts' | 'profile' | 'blog' | 'location' | 'category';
  pageUrl?: string;
  pageTitle?: string;
}

export const SEOMonitoring = ({ pageType, pageUrl, pageTitle }: SEOMonitoringProps) => {
  useEffect(() => {
    // Track page views for SEO monitoring
    const trackSEOMetrics = () => {
      const metrics = {
        pageType,
        pageUrl: pageUrl || window.location.href,
        pageTitle: pageTitle || document.title,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        // Track for potential AI crawler detection
        isAICrawler: detectAICrawler(),
        // Core Web Vitals tracking
        performanceMetrics: getPerformanceMetrics()
      };

      // Send to analytics (implement your tracking service)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'seo_monitoring', {
          page_type: pageType,
          page_url: metrics.pageUrl,
          ai_crawler_detected: metrics.isAICrawler,
          performance_score: metrics.performanceMetrics.score
        });
      }

      // Log for development
      console.log('SEO Monitoring Data:', metrics);
    };

    // Detect potential AI crawlers
    const detectAICrawler = (): boolean => {
      const userAgent = navigator.userAgent.toLowerCase();
      const aiCrawlerPatterns = [
        'chatgpt',
        'openai',
        'anthropic',
        'claude',
        'perplexity',
        'gemini',
        'bard',
        'bingbot',
        'googlebot',
        'crawler',
        'spider',
        'bot'
      ];
      
      return aiCrawlerPatterns.some(pattern => userAgent.includes(pattern));
    };

    // Get basic performance metrics
    const getPerformanceMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return {
          loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
          domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          score: calculatePerformanceScore()
        };
      }
      return { score: 0 };
    };

    // Calculate a basic performance score
    const calculatePerformanceScore = (): number => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (!navigation) return 0;

        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Simple scoring based on load times
        let score = 100;
        if (loadTime > 3000) score -= 30;
        if (loadTime > 5000) score -= 20;
        if (domContentLoaded > 2000) score -= 25;
        if (domContentLoaded > 4000) score -= 15;
        
        return Math.max(0, score);
      } catch {
        return 50; // Default score if calculation fails
      }
    };

    // Track when page becomes visible (for AI crawler detection)
    const trackVisibility = () => {
      if (document.visibilityState === 'visible') {
        trackSEOMetrics();
      }
    };

    // Track scroll depth for engagement metrics
    const trackScrollDepth = () => {
      let maxScrollDepth = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDepth = Math.round((scrollTop / scrollHeight) * 100);
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 100].includes(scrollDepth)) {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'scroll_depth', {
                page_type: pageType,
                scroll_depth: scrollDepth,
                page_url: pageUrl || window.location.href
              });
            }
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        // Track time milestones
        if ([30, 60, 120, 300].includes(timeOnPage)) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'time_on_page', {
              page_type: pageType,
              time_on_page: timeOnPage,
              page_url: pageUrl || window.location.href
            });
          }
        }
      };

      const interval = setInterval(trackTime, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    };

    // Initialize tracking
    trackSEOMetrics();
    trackScrollDepth();
    const timeTracker = trackTimeOnPage();

    // Track visibility changes
    document.addEventListener('visibilitychange', trackVisibility);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', trackVisibility);
      timeTracker();
    };
  }, [pageType, pageUrl, pageTitle]);

  // Return null as this is a monitoring component
  return null;
};

// Helper function to track structured data usage
export const trackStructuredDataUsage = (schemaType: string, pageUrl: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'structured_data_usage', {
      schema_type: schemaType,
      page_url: pageUrl,
      timestamp: new Date().toISOString()
    });
  }
};

// Helper function to track FAQ interactions (for GEO optimization)
export const trackFAQInteraction = (question: string, pageUrl: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'faq_interaction', {
      question: question.substring(0, 100), // Limit length
      page_url: pageUrl,
      timestamp: new Date().toISOString()
    });
  }
};

// Helper function to track content engagement
export const trackContentEngagement = (contentType: string, engagementType: string, pageUrl: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'content_engagement', {
      content_type: contentType,
      engagement_type: engagementType,
      page_url: pageUrl,
      timestamp: new Date().toISOString()
    });
  }
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
