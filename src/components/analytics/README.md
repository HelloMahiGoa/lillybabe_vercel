# Analytics Provider Component

A comprehensive analytics component that combines Google Analytics, Search Console, Vercel Speed Insights, and Vercel Analytics into a single, easy-to-use component.

## Features

- **Google Analytics**: Automatic page view tracking and custom event tracking
- **Google Search Console**: Site verification meta tag
- **Vercel Speed Insights**: Performance monitoring
- **Vercel Analytics**: User behavior analytics
- **Utility Functions**: Manual event tracking capabilities

## Setup

### Environment Variables

Add these environment variables to your `.env.local` file:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console
GOOGLE_SEARCH_CONSOLE_VERIFICATION=your_verification_code_here
```

### Usage

The component is already integrated into the root layout (`src/app/layout.tsx`) and will automatically track all pages.

## Manual Event Tracking

You can use the utility functions to track custom events:

```tsx
import { trackEvent, trackPageView, trackConversion } from '@/components/analytics';

// Track a custom event
trackEvent('click', 'button', 'contact-form-submit');

// Track a page view manually
trackPageView('/custom-page', 'Custom Page Title');

// Track a conversion
trackConversion('AW-CONVERSION_ID', 100, 'INR');
```

## Available Functions

### `trackEvent(action, category, label?, value?)`
- **action**: The action being tracked (e.g., 'click', 'submit', 'download')
- **category**: The category of the event (e.g., 'button', 'form', 'navigation')
- **label**: Optional label for the event
- **value**: Optional numeric value

### `trackPageView(url, title?)`
- **url**: The URL of the page
- **title**: Optional page title

### `trackConversion(conversionId, value?, currency?)`
- **conversionId**: Google Ads conversion ID
- **value**: Optional conversion value
- **currency**: Optional currency (defaults to 'INR')

## Automatic Tracking

The component automatically tracks:
- Page views on all routes
- Route changes in single-page applications
- Performance metrics via Vercel Speed Insights
- User behavior via Vercel Analytics

## Benefits

- **Centralized**: All analytics in one component
- **Performance**: Optimized loading and initialization
- **TypeScript**: Full type safety
- **Flexible**: Easy to add new tracking services
- **Clean**: No duplicate analytics code across pages
