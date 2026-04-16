import type { ProfileLocation } from '@/types/profile';

export type GeneratedProfileMeta = {
  meta_title: string;
  meta_description: string;
  meta_tags: string[];
  short_description: string;
};

const SITE = 'LillyBabe';

export function generateProfileMeta(input: {
  name: string;
  location: ProfileLocation;
  age: number;
}): GeneratedProfileMeta {
  const { name, location, age } = input;
  const meta_title = `${name} — Chennai escort in ${location} | ${SITE}`;
  const meta_description = `Book ${name} (${age}) in ${location}, Chennai. Verified profile, clear rates, and WhatsApp booking. Discreet, professional service with LillyBabe.`;
  const meta_tags = [
    'Chennai escorts',
    location,
    'escort service Chennai',
    name,
    'verified escorts Chennai',
    'independent escorts Chennai',
  ];
  const short_description = `${name} is available in ${location}, Chennai (${age}). Clear pricing and privacy-first booking on WhatsApp.`;
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
