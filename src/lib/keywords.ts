/**
 * Homepage SEO keywords for LillyBabe (https://lillybabe.com).
 * Use with Next.js `metadata.keywords` or `<meta name="keywords" />`.
 */

export const HOMEPAGE_KEYWORDS_BRAND = [
  'LillyBabe',
  'LillyBabe Chennai',
  'LillyBabe escorts',
] as const;

/** Broader geo / legacy city names people still search */
export const HOMEPAGE_KEYWORDS_GEO = [
  'Tamil Nadu escorts',
  'escorts Tamil Nadu',
  'South India escorts',
  'Madras escorts',
  'Chennai Tamil Nadu escorts',
] as const;

export const HOMEPAGE_KEYWORDS_PRIMARY = [
  'Chennai escorts',
  'escorts Chennai',
  'Chennai escort service',
  'escort service Chennai',
  'escorts in Chennai',
  'call girls Chennai',
  'Chennai call girls',
  'call girl service Chennai',
  'Chennai escort girls',
  'Chennai escort agency',
  'escort agency Chennai',
  'best escorts Chennai',
  'top escorts Chennai',
  'premium escorts Chennai',
  'luxury escorts Chennai',
  'elite escorts Chennai',
  'high profile escorts Chennai',
  'high class escorts Chennai',
  'professional escorts Chennai',
  'beautiful escorts Chennai',
  'female escorts Chennai',
  'verified escorts Chennai',
  'genuine escorts Chennai',
  'authentic escorts Chennai',
  'independent escorts Chennai',
  'VIP escorts Chennai',
  'escort booking Chennai',
  'Chennai escorts booking',
  'best escort service in Chennai',
  'trusted escort service Chennai',
  'Chennai escort gallery',
] as const;

export const HOMEPAGE_KEYWORDS_CATEGORIES = [
  'Russian escorts Chennai',
  'Tamil escorts Chennai',
  'model escorts Chennai',
  'celebrity escorts Chennai',
  'teen escorts Chennai',
  'housewife escorts Chennai',
  'mallu escorts Chennai',
  'Indian escorts Chennai',
  'local escorts Chennai',
] as const;

export const HOMEPAGE_KEYWORDS_LOCATIONS = [
  'Anna Nagar escorts',
  'T Nagar escorts',
  'Teynampet escorts',
  'OMR escorts',
  'ECR escorts',
  'Nungambakkam escorts',
  'Adyar escorts',
  'Guindy escorts',
  'Kilpauk escorts',
  'Mahabalipuram escorts',
  'Mylapore escorts',
] as const;

export const HOMEPAGE_KEYWORDS_TRUST_INTENT = [
  'verified Chennai escorts',
  'real photos escorts Chennai',
  'no advance escorts Chennai',
  'pay after meet escorts Chennai',
  'cash payment escorts Chennai',
  'discreet escort service Chennai',
  'private escort Chennai',
  'confidential escort Chennai',
  'Chennai escorts privacy',
  '24/7 escorts Chennai',
  'late night escorts Chennai',
  'same day escort booking Chennai',
  'book escort WhatsApp Chennai',
  'Chennai escort booking WhatsApp',
  'incall escorts Chennai',
  'outcall escorts Chennai',
  'hotel escorts Chennai',
  'service apartment escorts Chennai',
  'Chennai escorts near me',
  'escorts near me Chennai',
  'Chennai escort rates',
  'Chennai escort pricing',
] as const;

/** Extra long-tail / question-style search phrases */
export const HOMEPAGE_KEYWORDS_LONGTAIL = [
  'how to book escort in Chennai',
  'safe escort booking Chennai',
  'Chennai escorts reviews',
  'real Chennai escorts',
  'Chennai call girls WhatsApp',
  'escorts Chennai contact number',
  'Chennai escort service areas',
  'Chennai escort locations',
] as const;

/** Flat list for `metadata.keywords` — deduplicated order: brand → primary → rest */
export const HOMEPAGE_KEYWORDS: readonly string[] = [
  ...HOMEPAGE_KEYWORDS_BRAND,
  ...HOMEPAGE_KEYWORDS_GEO,
  ...HOMEPAGE_KEYWORDS_PRIMARY,
  ...HOMEPAGE_KEYWORDS_CATEGORIES,
  ...HOMEPAGE_KEYWORDS_LOCATIONS,
  ...HOMEPAGE_KEYWORDS_TRUST_INTENT,
  ...HOMEPAGE_KEYWORDS_LONGTAIL,
];

/** Curated for `<meta name="keywords">` on `/` — strong mix without maxing tag length */
export const HOMEPAGE_METADATA_KEYWORDS: readonly string[] = [
  ...HOMEPAGE_KEYWORDS_BRAND,
  'Chennai escorts',
  'escorts Chennai',
  'Chennai escort service',
  'verified escorts Chennai',
  'independent escorts Chennai',
  'call girls Chennai',
  'Chennai escort agency',
  'premium escorts Chennai',
  'Russian escorts Chennai',
  'Tamil escorts Chennai',
  'VIP escorts Chennai',
  'Anna Nagar escorts',
  'T Nagar escorts',
  'OMR escorts',
  'ECR escorts',
  'Nungambakkam escorts',
  'Adyar escorts',
  'incall escorts Chennai',
  'outcall escorts Chennai',
  'book escort WhatsApp Chennai',
  'no advance escorts Chennai',
  '24/7 escorts Chennai',
  'Tamil Nadu escorts',
];

/** Comma-separated string for legacy `<meta name="keywords">` usage */
export function getHomepageKeywordsMetaString(): string {
  return HOMEPAGE_KEYWORDS.join(', ');
}
