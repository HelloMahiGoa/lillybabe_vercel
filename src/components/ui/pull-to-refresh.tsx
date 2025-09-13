'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  className?: string;
  disabled?: boolean;
}

export default function PullToRefresh({
  children,
  onRefresh,
  threshold = 80,
  className = '',
  disabled = false
}: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  
  // Transform values for animations
  const rotate = useTransform(y, [0, threshold], [0, 180]);
  const scale = useTransform(y, [0, threshold], [0.8, 1.2]);
  const opacity = useTransform(y, [0, threshold], [0, 1]);

  const handleDragStart = () => {
    if (disabled || isRefreshing) return;
    setIsPulling(true);
  };

  const handleDrag = (event: any, info: PanInfo) => {
    if (disabled || isRefreshing) return;
    
    const currentY = info.offset.y;
    setPullDistance(currentY);
    
    // Only allow pulling down when at the top
    if (currentY > 0 && window.scrollY === 0) {
      y.set(currentY);
    } else {
      y.set(0);
    }
  };

  const handleDragEnd = async (event: any, info: PanInfo) => {
    if (disabled || isRefreshing) return;
    
    const currentY = info.offset.y;
    setIsPulling(false);
    
    if (currentY >= threshold && window.scrollY === 0) {
      // Trigger refresh
      setIsRefreshing(true);
      y.set(threshold);
      
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setIsRefreshing(false);
        y.set(0);
        setPullDistance(0);
      }
    } else {
      // Snap back
      y.set(0);
      setPullDistance(0);
    }
  };

  // Reset on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        y.set(0);
        setPullDistance(0);
        setIsPulling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Pull to Refresh Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center z-10"
        style={{
          y: useTransform(y, (value) => Math.max(0, value - 60)),
          opacity: useTransform(y, [0, 20, threshold], [0, 0.5, 1])
        }}
      >
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200"
          style={{
            rotate,
            scale,
            opacity
          }}
        >
          <RefreshCw 
            className={`w-6 h-6 text-blue-500 ${
              isRefreshing ? 'animate-spin' : ''
            }`} 
          />
        </motion.div>
      </motion.div>

      {/* Pull to Refresh Text */}
      <motion.div
        className="absolute top-16 left-0 right-0 flex items-center justify-center z-10"
        style={{
          y: useTransform(y, (value) => Math.max(0, value - 40)),
          opacity: useTransform(y, [threshold * 0.7, threshold], [0, 1])
        }}
      >
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: pullDistance >= threshold ? 1 : 0,
            scale: pullDistance >= threshold ? 1 : 0.8
          }}
        >
          <span className="text-sm font-medium text-gray-700">
            {isRefreshing ? 'Refreshing...' : 'Release to refresh'}
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="relative"
      >
        {children}
      </motion.div>

      {/* Loading Overlay */}
      {isRefreshing && (
        <motion.div
          className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-full p-4 shadow-xl border border-gray-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
