import type { ProfileLocation } from '@/types/profile';

export type GeneratedProfileMeta = {
  meta_title: string;
  meta_description: string;
  meta_tags: string[];
  short_description: string;
};

export const META_STYLES = ['concise', 'balanced', 'detailed', 'premium'] as const;
export type MetaStyle = (typeof META_STYLES)[number];

const SITE = 'LillyBabe';

const TITLE_TEMPLATES = [
  '{name} in {location}, Chennai | {site}',
  '{name} ({age}) - {location} Chennai escort profile | {site}',
  '{name} {location} Chennai call girl profile | {site}',
  '{name} - Escort in {location}, Chennai | {site}',
  '{location} Chennai: {name} escort profile | {site}',
  '{name} in Chennai ({location}) | {site}',
  '{name} escort profile - {location}, Chennai | {site}',
  '{name} ({location}) | Chennai call girl profile on {site}',
  '{name} in {location} Chennai - rates and contact | {site}',
  '{name} escort profile in {location} | Chennai on {site}',
  '{name} ({age}) in Chennai {location} | {site}',
  '{name} Chennai escort for {location} area | {site}',
  '{name} - {location} Chennai details and booking | {site}',
  '{location} Chennai escort: {name} ({age}) | {site}',
  '{name} in {location} - Chennai escort details | {site}',
  '{name} {location} profile with WhatsApp contact | {site}',
  '{name} Chennai ({location}) escort page | {site}',
  '{name} - Chennai service profile in {location} | {site}',
];

const META_DESCRIPTION_TEMPLATES = [
  '{name} ({age}) is a verified escort in {location}, Chennai. Clear rates, genuine profile details, and direct WhatsApp contact on {site}.',
  '{name} is available as a call girl in {location}, Chennai. Check rates, profile details, and WhatsApp booking on {site}.',
  '{name} in {location}, Chennai with genuine profile details, rate information, and direct WhatsApp contact via {site}.',
  '{name} ({age}) in {location}, Chennai with clear escort details and pricing. Connect on WhatsApp through {site}.',
  '{name} in {location}, Chennai. Rates, key details, and WhatsApp contact are clearly shared on {site}.',
  '{name} is a verified call girl in {location}, Chennai with clear pricing and WhatsApp booking support from {site}.',
  '{name} in {location}, Chennai with genuine details, transparent rates, and direct WhatsApp connection via {site}.',
  '{name}\'s Chennai escort profile for {location} includes rate details and WhatsApp contact, kept clear on {site}.',
  '{name} ({age}) for {location}, Chennai with practical escort details, pricing, and direct WhatsApp contact on {site}.',
  '{name} in {location}, Chennai with a neutral tone, genuine details, transparent rates, and simple WhatsApp booking through {site}.',
  '{name} in {location}, Chennai. Review escort details, expected pricing, and direct WhatsApp contact via {site}.',
  '{name} ({age}) in {location}, Chennai. The profile includes verified details, pricing info, and easy WhatsApp contact on {site}.',
  '{name} in {location}, Chennai with key escort details, rate information, and direct WhatsApp booking through {site}.',
  '{name} in {location}, Chennai with clear profile content and pricing guidance. Reach out quickly on WhatsApp with {site}.',
  '{name} in {location}, Chennai and check rates, profile summary, and straightforward WhatsApp contact on {site}.',
  '{name} ({age}) in {location}, Chennai with complete escort details, practical pricing notes, and direct WhatsApp support via {site}.',
  '{name} in {location}, Chennai with transparent pricing and WhatsApp contact details on {site}.',
  '{name} in {location}, Chennai with key details, rates, and a direct WhatsApp connection through {site}.',
  '{name} in {location}, Chennai with updated genuine details, clear rate information, and fast WhatsApp contact on {site}.',
  '{name} ({age}) in {location}, Chennai with pricing and WhatsApp contact shared clearly via {site}.',
];

const SHORT_DESCRIPTION_TEMPLATES = [
  '{name} is a verified escort in {location}, Chennai ({age}) with clear pricing and direct WhatsApp booking.',
  'Profile for {name} in {location}, Chennai ({age}) with genuine details and WhatsApp contact.',
  '{name} ({age}) is available in {location}, Chennai as a call girl. Pricing and WhatsApp details are clear.',
  '{name} in {location}, Chennai ({age}) with transparent rates and quick WhatsApp contact.',
  'A concise escort profile for {name} in {location}, Chennai ({age}) with pricing and direct WhatsApp contact.',
  '{name} ({age}) serving {location}, Chennai with a clear profile and booking via WhatsApp.',
  '{name} in {location}, Chennai ({age}) with practical details and direct WhatsApp contact.',
  'Neutral profile summary for {name} ({age}) in {location}, Chennai, including rates and booking contact.',
  '{name} in {location}, Chennai ({age}) with simple details, clear rates, and WhatsApp support.',
  'Profile details for {name} in {location}, Chennai ({age}) with pricing guidance and quick WhatsApp contact.',
  '{name} in {location}, Chennai ({age}) with clear profile notes and direct booking contact.',
  '{name} ({age}) escort profile in {location}, Chennai with transparent pricing and easy WhatsApp connection.',
  'A straightforward profile for {name} in {location}, Chennai ({age}) with rates and contact in one place.',
  '{name} in {location}, Chennai ({age}) with concise details and practical WhatsApp booking access.',
  '{name} ({age}) in {location}, Chennai with profile highlights, rates, and direct contact.',
  'Clear escort overview for {name} in {location}, Chennai ({age}) with WhatsApp booking details.',
];

const BASE_TAG_POOL = [
  'Chennai escorts',
  'escort service Chennai',
  'call girl Chennai',
  'Chennai booking',
  'WhatsApp booking Chennai',
  'independent escorts Chennai',
  'local escorts Chennai',
  'Chennai call girl service',
  'verified escorts Chennai',
  'genuine escorts Chennai',
  'private booking Chennai',
  'city escort service Chennai',
  'Chennai escort contact',
  'escort profile Chennai',
  'escort rates Chennai',
  'Chennai escort details',
  'local Chennai escort booking',
  'direct contact escort Chennai',
  'personal escort service Chennai',
  'Chennai escorts WhatsApp',
  'rate card escorts Chennai',
  'trusted escorts Chennai',
  'quick booking Chennai',
  'Chennai city escorts',
  'real escorts Chennai',
  'easy WhatsApp contact Chennai',
  'escort page Chennai',
  'Chennai area escorts',
  'neutral escort profile',
  'updated escort profile Chennai',
  'local escort rates Chennai',
  'direct booking escorts Chennai',
  'genuine call girls Chennai',
  'detailed escort profile Chennai',
];

function pickOne<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function replaceTokens(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_m, key: string) => String(values[key] ?? ''));
}

function sentenceCase(value: string): string {
  const cleaned = value.replace(/\s+/g, ' ').trim();
  if (!cleaned) return cleaned;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function truncateAtWord(value: string, maxLen: number): string {
  if (value.length <= maxLen) return value;
  const sliced = value.slice(0, maxLen + 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const cut = lastSpace > 30 ? sliced.slice(0, lastSpace) : sliced.slice(0, maxLen);
  return `${cut.trim().replace(/[.,;:!?-]+$/, '')}.`;
}

function ensureSiteInTitle(title: string, site: string, maxLen: number): string {
  const suffix = ` | ${site}`;
  const normalized = title.replace(/\s+/g, ' ').trim();

  if (normalized.endsWith(suffix) && normalized.length <= maxLen) {
    return normalized;
  }

  const base = normalized.replace(/\s*\|\s*[^|]+$/, '').trim();
  const maxBaseLen = Math.max(10, maxLen - suffix.length);
  const trimmedBase = truncateAtWord(base, maxBaseLen).replace(/[.]$/, '').trim();
  return `${trimmedBase}${suffix}`;
}

function pickTemplatesForStyle(style: MetaStyle) {
  if (style === 'concise') {
    return {
      title: TITLE_TEMPLATES.slice(0, 10),
      description: META_DESCRIPTION_TEMPLATES.slice(0, 10),
      short: SHORT_DESCRIPTION_TEMPLATES.slice(0, 8),
      maxDescription: 145,
      maxShort: 130,
      tagCount: 7,
    };
  }

  if (style === 'detailed') {
    return {
      title: TITLE_TEMPLATES.slice(8),
      description: META_DESCRIPTION_TEMPLATES.slice(8),
      short: SHORT_DESCRIPTION_TEMPLATES.slice(8),
      maxDescription: 170,
      maxShort: 175,
      tagCount: 10,
    };
  }

  if (style === 'premium') {
    return {
      title: TITLE_TEMPLATES.filter(
        (t) =>
          t.includes('details') ||
          t.includes('profile page') ||
          t.includes('service profile') ||
          t.includes('listing')
      ),
      description: META_DESCRIPTION_TEMPLATES.filter(
        (t) =>
          t.includes('complete profile') ||
          t.includes('updated profile') ||
          t.includes('practical profile information') ||
          t.includes('profile highlights') ||
          t.includes('profile details')
      ),
      short: SHORT_DESCRIPTION_TEMPLATES.filter(
        (t) =>
          t.includes('clear profile') ||
          t.includes('profile highlights') ||
          t.includes('straightforward profile')
      ),
      maxDescription: 165,
      maxShort: 160,
      tagCount: 9,
    };
  }

  return {
    title: TITLE_TEMPLATES,
    description: META_DESCRIPTION_TEMPLATES,
    short: SHORT_DESCRIPTION_TEMPLATES,
    maxDescription: 160,
    maxShort: 165,
    tagCount: 8,
  };
}

export function generateProfileMeta(input: {
  name: string;
  location: ProfileLocation;
  age: number;
  style?: MetaStyle;
}): GeneratedProfileMeta {
  const { name, location, age } = input;
  const style = input.style ?? 'balanced';
  const values = { name: name.trim(), location, age, site: SITE };
  const templateSet = pickTemplatesForStyle(style);

  const meta_title = ensureSiteInTitle(
    replaceTokens(pickOne(templateSet.title), values).replace(/\s+/g, ' ').trim(),
    SITE,
    65
  );

  const meta_description = truncateAtWord(
    sentenceCase(replaceTokens(pickOne(templateSet.description), values)),
    templateSet.maxDescription
  );

  const short_description = truncateAtWord(
    sentenceCase(replaceTokens(pickOne(templateSet.short), values)),
    templateSet.maxShort
  );

  const dynamicTags = [
    location,
    `${location} Chennai`,
    `${name} profile`,
    `${name} Chennai`,
    `${age} age profile`,
  ];
  const shuffledBase = [...BASE_TAG_POOL].sort(() => Math.random() - 0.5);
  const styleTags =
    style === 'premium'
      ? ['premium profile Chennai', 'exclusive listing Chennai']
      : style === 'concise'
        ? ['quick escort info Chennai']
        : style === 'detailed'
          ? ['detailed escort profile Chennai', 'full escort details Chennai']
          : ['balanced escort profile Chennai'];
  const meta_tags = [...new Set([...dynamicTags, ...styleTags, ...shuffledBase])].slice(
    0,
    templateSet.tagCount
  );

  return { meta_title, meta_description, meta_tags, short_description };
}

export function randomAge20to25(): number {
  return 20 + Math.floor(Math.random() * 6);
}

export const DEFAULT_PRICES = {
  price_one_shot: 12_000,
  price_two_shot: 24_000,
  price_three_shot: 35_000,
  price_full_night: 40_000,
} as const;
