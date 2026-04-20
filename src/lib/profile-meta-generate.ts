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
  '{name} in {location}, Chennai | Real Profile | {site}',
  '{name} ({age}) - {location} Chennai | {site}',
  '{name} in {location} Chennai | Pay After Meet | {site}',
  '{name} in {location}, Chennai | No Advance Booking | {site}',
  '{name} - Verified {location} Chennai Profile | {site}',
  '{name} in Chennai ({location}) | WhatsApp Booking | {site}',
  '{name} in {location}, Chennai | Photos, Rates & Contact | {site}',
  '{location} Chennai Profile: {name} | {site}',
];

const META_DESCRIPTION_TEMPLATES = [
  'Skip fake ads. Meet {name} ({age}) in {location}, Chennai with face-verified profile details, real photos, and direct WhatsApp booking on {site}.',
  '{name} in {location}, Chennai with genuine profile details, transparent rates, and pay-after-meet booking support through {site}.',
  'View {name}\'s profile in {location}, Chennai: verified photos, clear pricing, privacy-first WhatsApp contact, and no-advance booking via {site}.',
  '{name} ({age}) in {location}, Chennai with real profile details and direct private booking on WhatsApp through {site}.',
  'Book {name} in {location}, Chennai with confidence - verified profile, clear rates, and no-advance WhatsApp inquiry on {site}.',
  '{name} in {location}, Chennai with updated profile info, gallery highlights, and pay-after-meet booking details on {site}.',
];

const SHORT_DESCRIPTION_TEMPLATES = [
  '{name} ({age}) in {location}, Chennai with real profile details, clear rates, and direct WhatsApp booking.',
  'Verified profile for {name} in {location}, Chennai with genuine photos and pay-after-meet booking.',
  '{name} in {location}, Chennai with privacy-first contact and no-advance inquiry support.',
  '{name} in {location}, Chennai with updated details, transparent pricing, and fast WhatsApp response.',
  'Book {name} in {location}, Chennai through a real profile with clear rates and trusted contact.',
];

const BASE_TAG_POOL = [
  'Chennai escorts',
  'escort service Chennai',
  'call girls Chennai',
  'real girls Chennai',
  'verified profiles Chennai',
  'pay after meet Chennai',
  'no advance booking Chennai',
  'privacy first booking Chennai',
  'WhatsApp booking Chennai',
  'private booking Chennai',
  'trusted escorts Chennai',
  'Chennai escort rates',
  'independent escorts Chennai',
  'local escorts Chennai',
  'face verified profiles Chennai',
  'safe escort booking Chennai',
];

function pickOne<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pickOneDeterministic<T>(items: T[], seedKey: string): T {
  if (items.length === 0) {
    throw new Error('Cannot pick from empty array');
  }
  const index = hashString(seedKey) % items.length;
  return items[index];
}

function stableShuffle<T>(items: T[], seedKey: string): T[] {
  return [...items].sort((a, b) => {
    const aHash = hashString(`${seedKey}::${String(a)}`);
    const bHash = hashString(`${seedKey}::${String(b)}`);
    return aHash - bHash;
  });
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
      title: TITLE_TEMPLATES.slice(0, 5),
      description: META_DESCRIPTION_TEMPLATES.slice(0, 4),
      short: SHORT_DESCRIPTION_TEMPLATES.slice(0, 3),
      maxDescription: 145,
      maxShort: 120,
      tagCount: 8,
    };
  }

  if (style === 'detailed') {
    return {
      title: TITLE_TEMPLATES,
      description: META_DESCRIPTION_TEMPLATES,
      short: SHORT_DESCRIPTION_TEMPLATES,
      maxDescription: 168,
      maxShort: 175,
      tagCount: 10,
    };
  }

  if (style === 'premium') {
    return {
      title: TITLE_TEMPLATES.filter(
        (t) =>
          t.includes('Verified') || t.includes('Updated') || t.includes('Rates & Contact')
      ),
      description: META_DESCRIPTION_TEMPLATES.filter(
        (t) => t.includes('face-verified') || t.includes('no-advance') || t.includes('confidence')
      ),
      short: SHORT_DESCRIPTION_TEMPLATES.filter(
        (t) => t.includes('Verified') || t.includes('privacy-first') || t.includes('trusted')
      ),
      maxDescription: 165,
      maxShort: 150,
      tagCount: 10,
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
  seed?: string;
}): GeneratedProfileMeta {
  const { name, location, age } = input;
  const style = input.style ?? 'balanced';
  const values = { name: name.trim(), location, age, site: SITE };
  const templateSet = pickTemplatesForStyle(style);
  const baseSeed = input.seed ?? `${name.trim().toLowerCase()}|${location}|${age}|${style}`;

  const meta_title = ensureSiteInTitle(
    replaceTokens(pickOneDeterministic(templateSet.title, `${baseSeed}|title`), values)
      .replace(/\s+/g, ' ')
      .trim(),
    SITE,
    65
  );

  const meta_description = truncateAtWord(
    sentenceCase(
      replaceTokens(pickOneDeterministic(templateSet.description, `${baseSeed}|description`), values)
    ),
    templateSet.maxDescription
  );

  const short_description = truncateAtWord(
    sentenceCase(replaceTokens(pickOneDeterministic(templateSet.short, `${baseSeed}|short`), values)),
    templateSet.maxShort
  );

  const dynamicTags = [
    'Chennai escorts',
    location,
    `${location} Chennai`,
    `${name} profile`,
    `${name} Chennai`,
    `${name} ${location}`,
    `${location} escorts`,
    `${location} call girls`,
    `${name} escort profile`,
    'no advance booking',
    'pay after meet',
  ];
  const shuffledBase = stableShuffle(BASE_TAG_POOL, `${baseSeed}|tags`);
  const styleTags =
    style === 'premium'
      ? ['verified luxury profile Chennai', 'priority WhatsApp booking Chennai']
      : style === 'concise'
        ? ['quick booking Chennai']
        : style === 'detailed'
          ? ['full profile details Chennai', 'safe private booking Chennai']
          : ['verified booking profile Chennai'];
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
