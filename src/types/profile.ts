export const PROFILE_LOCATIONS = [
  'Egmore',
  'Vadapalani',
  'Guindy',
  'Kilpauk',
  'Nungambakkam',
  'OMR',
  'Arumbakkam',
  'Tnagar',
  'Teynampet',
  'Royapettah',
] as const;

export type ProfileLocation = (typeof PROFILE_LOCATIONS)[number];

export type ProfileRow = {
  id: string;
  slug: string;
  name: string;
  age: number;
  location: ProfileLocation;
  price_one_shot: number;
  price_two_shot: number;
  price_three_shot: number;
  price_full_night: number;
  main_image_url: string;
  gallery_urls: string[];
  video_urls: string[];
  short_description: string;
  meta_title: string;
  meta_description: string;
  meta_tags: string[];
  whatsapp: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
};
