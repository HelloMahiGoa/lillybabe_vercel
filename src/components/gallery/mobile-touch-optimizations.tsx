import React, { useEffect } from 'react';

export function MobileTouchOptimizations() {
  useEffect(() => {
    // Add touch-friendly optimizations
    const addTouchOptimizations = () => {
      // Track if user has interacted with the page
      let hasUserInteracted = false;
      
      // Enable haptic feedback after first user interaction
      const enableHapticFeedback = () => {
        hasUserInteracted = true;
        document.removeEventListener('touchstart', enableHapticFeedback);
        document.removeEventListener('click', enableHapticFeedback);
      };
      
      // Listen for first user interaction
      document.addEventListener('touchstart', enableHapticFeedback, { once: true });
      document.addEventListener('click', enableHapticFeedback, { once: true });

      // Prevent zoom on double tap for buttons
      const buttons = document.querySelectorAll('button, a');
      buttons.forEach(button => {
        button.addEventListener('touchstart', (e) => {
          e.preventDefault();
        }, { passive: false });
      });

      // Add haptic feedback for supported devices (only after user interaction)
      const addHapticFeedback = (element: Element) => {
        element.addEventListener('touchstart', () => {
          if (hasUserInteracted && 'vibrate' in navigator) {
            try {
              navigator.vibrate(10); // Light haptic feedback
            } catch (error) {
              // Silently fail if vibration is not supported or blocked
              console.debug('Haptic feedback not available');
            }
          }
        });
      };

      // Apply haptic feedback to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
      interactiveElements.forEach(addHapticFeedback);

      // Optimize scroll performance
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Smooth scroll optimization
            document.documentElement.style.scrollBehavior = 'smooth';
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScroll, { passive: true });

      // Add pull-to-refresh indicator
      let startY = 0;
      let pullDistance = 0;
      const pullThreshold = 100;

      const handleTouchStart = (e: TouchEvent) => {
        startY = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (window.scrollY === 0) {
          pullDistance = e.touches[0].clientY - startY;
          if (pullDistance > 0) {
            e.preventDefault();
            // Add visual feedback for pull-to-refresh
            const refreshIndicator = document.getElementById('pull-refresh-indicator');
            if (refreshIndicator) {
              const opacity = Math.min(pullDistance / pullThreshold, 1);
              refreshIndicator.style.opacity = opacity.toString();
            }
          }
        }
      };

      const handleTouchEnd = () => {
        if (pullDistance > pullThreshold) {
          // Trigger refresh
          window.location.reload();
        }
        pullDistance = 0;
        const refreshIndicator = document.getElementById('pull-refresh-indicator');
        if (refreshIndicator) {
          refreshIndicator.style.opacity = '0';
        }
      };

      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Cleanup function
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchstart', enableHapticFeedback);
        document.removeEventListener('click', enableHapticFeedback);
        window.removeEventListener('scroll', optimizeScroll);
      };
    };

    const cleanup = addTouchOptimizations();
    return cleanup;
  }, []);

  return (
    <>
      {/* Pull-to-refresh indicator */}
      <div
        id="pull-refresh-indicator"
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-pink-500 text-white px-4 py-2 rounded-b-lg text-sm font-medium opacity-0 transition-opacity duration-200"
        style={{ top: '-50px' }}
      >
        Pull to refresh
      </div>

      {/* Touch-friendly styles */}
      <style jsx global>{`
        /* Improve touch targets */
        button, a, [role="button"] {
          min-height: 44px;
          min-width: 44px;
          touch-action: manipulation;
        }

        /* Optimize scrolling */
        * {
          -webkit-overflow-scrolling: touch;
        }

        /* Prevent text selection on buttons */
        button, a {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Improve tap highlights */
        button:active, a:active {
          background-color: rgba(0, 0, 0, 0.1);
          transform: scale(0.98);
          transition: all 0.1s ease;
        }

        /* Optimize image loading */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Smooth transitions for mobile */
        .transition-all {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Better focus states for accessibility */
        button:focus, a:focus {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
        }

        /* Optimize grid layouts for mobile */
        .grid {
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .grid {
            gap: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
