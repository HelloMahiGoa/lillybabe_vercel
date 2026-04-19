/**
 * Static images for /egmore-escorts — all paths verified under public/images.
 * Each path used at most once across hero + doc blocks + polaroid (gallery uses RandomImageGallery separately).
 */
export const EGMORE_PAGE_IMAGES = {
  heroBg: '/images/hero-bg.webp',
  /** Hero sidebar card (replaces missing egmore-1.avif) */
  heroAside: '/images/locations.avif',
  docLine1: '/images/header.jpg',
  docLine3: '/images/background.jpg',
  docLine5: '/images/escort-bg.webp',
  polaroid: '/images/vip-girl1.png',
} as const;

/** docs/egmore-escorts.md line 9 → 73 — one image per section, no reuse */
export const EGMORE_DOC_LINE9_IMAGES = [
  '/images/model1.avif',
  '/images/independent1.avif',
  '/images/mallu-escorts.avif',
  '/images/tamil-escorts.avif',
  '/images/russian-escorts.avif',
  '/images/celebrity.avif',
  '/images/housewife-1.avif',
  '/images/model2.avif',
  '/images/nightlife.jpg',
  '/images/nightlife2.jpg',
  '/images/contact-bg.webp',
  '/images/experience-section.jpg',
  '/images/safety-guide.avif',
  '/images/pricing.jpg',
] as const;
