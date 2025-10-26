// Google Analytics 4 Implementation
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Debug function to check if GA is working
export const debugGA = () => {
  if (typeof window !== 'undefined') {
    console.log('GA Debug Info:');
    console.log('GA_TRACKING_ID:', GA_TRACKING_ID);
    console.log('window.gtag exists:', typeof window.gtag === 'function');
    console.log('window.dataLayer exists:', Array.isArray(window.dataLayer));
    console.log('dataLayer length:', window.dataLayer?.length || 0);
    console.log('dataLayer contents:', window.dataLayer);
  }
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const conversion = (conversionId: string, value?: number, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
};

// Initialize GA4
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
  });

  console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
};

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
