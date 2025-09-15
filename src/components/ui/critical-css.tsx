'use client';

import { useEffect } from 'react';

export function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      
      .hero-content {
        text-align: center;
        color: white;
        z-index: 10;
        position: relative;
      }
      
      .hero-title {
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      
      .cta-button {
        background: #ec4899;
        color: white;
        padding: 1rem 2rem;
        border-radius: 9999px;
        font-weight: 700;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
      }
      
      .cta-button:hover {
        background: #db2777;
        transform: translateY(-2px);
      }
      
      /* Loading states */
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Image optimization */
      .optimized-image {
        transition: opacity 0.3s ease;
      }
      
      .optimized-image.loading {
        opacity: 0;
      }
      
      .optimized-image.loaded {
        opacity: 1;
      }
      
      /* Responsive design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2rem;
        }
        
        .hero-subtitle {
          font-size: 1rem;
        }
      }
    `;

    // Create style element
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    
    // Insert at the beginning of head
    document.head.insertBefore(style, document.head.firstChild);

    // Clean up on unmount
    return () => {
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
}

// Hook for managing critical CSS
export function useCriticalCSS() {
  const injectCriticalCSS = (css: string) => {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  };

  const removeCriticalCSS = () => {
    const criticalStyles = document.querySelectorAll('style[data-critical="true"]');
    criticalStyles.forEach(style => style.remove());
  };

  return {
    injectCriticalCSS,
    removeCriticalCSS,
  };
}
