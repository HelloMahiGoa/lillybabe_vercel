'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  interactionToNextPaint: number;
  memoryUsage: number;
  networkSpeed: string;
  userEngagement: {
    timeOnPage: number;
    scrollDepth: number;
    clickCount: number;
    profileViews: number;
  };
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development';
    const isAdmin = localStorage.getItem('admin') === 'true';
    
    if (!isDev && !isAdmin) return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const webVitals = performance.getEntriesByType('measure');

      // Core Web Vitals
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      // Layout Shift
      let cls = 0;
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                cls += (entry as any).value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.log('CLS measurement not supported');
        }
      }

      // Memory usage
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

      // Network speed estimation
      const connection = (navigator as any).connection;
      const networkSpeed = connection ? 
        `${connection.effectiveType} (${connection.downlink}Mbps)` : 
        'Unknown';

      const performanceData: PerformanceMetrics = {
        pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        cumulativeLayoutShift: cls,
        firstInputDelay: 0, // Would need specific measurement
        interactionToNextPaint: 0, // Would need specific measurement
        memoryUsage,
        networkSpeed,
        userEngagement: {
          timeOnPage: 0,
          scrollDepth: 0,
          clickCount: 0,
          profileViews: 0
        }
      };

      setMetrics(performanceData);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    // Track user engagement
    let startTime = Date.now();
    let maxScroll = 0;
    let clickCount = 0;
    let profileViews = 0;

    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;
      const scrollDepth = Math.max(maxScroll, window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
      
      setMetrics(prev => prev ? {
        ...prev,
        userEngagement: {
          timeOnPage,
          scrollDepth,
          clickCount,
          profileViews
        }
      } : null);
    };

    // Track scroll depth
    const handleScroll = () => {
      maxScroll = Math.max(maxScroll, window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
    };

    // Track clicks
    const handleClick = () => {
      clickCount++;
    };

    // Track profile views
    const handleProfileView = () => {
      profileViews++;
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    document.addEventListener('profileView', handleProfileView);

    // Update engagement every 5 seconds
    const engagementInterval = setInterval(trackEngagement, 5000);

    return () => {
      window.removeEventListener('load', collectMetrics);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('profileView', handleProfileView);
      clearInterval(engagementInterval);
    };
  }, []);

  if (!metrics) return null;

  const getPerformanceGrade = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return { grade: 'A', color: 'text-green-500' };
    if (score <= thresholds.needsImprovement) return { grade: 'B', color: 'text-yellow-500' };
    return { grade: 'C', color: 'text-red-500' };
  };

  const fcpGrade = getPerformanceGrade(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 });
  const lcpGrade = getPerformanceGrade(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 });
  const clsGrade = getPerformanceGrade(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 });

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 backdrop-blur-xl text-white p-3 rounded-full shadow-2xl border border-white/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {isVisible ? '📊' : '⚡'}
        </div>
      </motion.button>

      {isVisible && (
        <motion.div
          className="absolute bottom-16 right-0 bg-black/90 backdrop-blur-xl text-white p-4 rounded-2xl shadow-2xl border border-white/20 min-w-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <span className="mr-2">⚡</span>
            Performance Metrics
          </h3>

          {/* Core Web Vitals */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={fcpGrade.color}>
                  {Math.round(metrics.firstContentfulPaint)}ms ({fcpGrade.grade})
                </span>
              </div>
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={lcpGrade.color}>
                  {Math.round(metrics.largestContentfulPaint)}ms ({lcpGrade.grade})
                </span>
              </div>
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={clsGrade.color}>
                  {metrics.cumulativeLayoutShift.toFixed(3)} ({clsGrade.grade})
                </span>
              </div>
              <div className="flex justify-between">
                <span>Load Time:</span>
                <span className="text-blue-400">
                  {Math.round(metrics.pageLoadTime)}ms
                </span>
              </div>
            </div>

            {/* Memory & Network */}
            <div className="border-t border-white/20 pt-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span className="text-purple-400">
                    {metrics.memoryUsage.toFixed(1)}MB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Network:</span>
                  <span className="text-green-400">
                    {metrics.networkSpeed}
                  </span>
                </div>
              </div>
            </div>

            {/* User Engagement */}
            <div className="border-t border-white/20 pt-3">
              <h4 className="text-sm font-semibold mb-2">User Engagement</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Time on Page:</span>
                  <span className="text-yellow-400">
                    {Math.round(metrics.userEngagement.timeOnPage / 1000)}s
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Scroll Depth:</span>
                  <span className="text-pink-400">
                    {Math.round(metrics.userEngagement.scrollDepth)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Clicks:</span>
                  <span className="text-blue-400">
                    {metrics.userEngagement.clickCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Profile Views:</span>
                  <span className="text-green-400">
                    {metrics.userEngagement.profileViews}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Score */}
            <div className="border-t border-white/20 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">Overall Score:</span>
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-gray-600 rounded-full mr-2">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                      style={{ width: `${Math.min(100, (100 - (metrics.firstContentfulPaint / 50)))}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold">
                    {Math.round(Math.min(100, (100 - (metrics.firstContentfulPaint / 50))))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}