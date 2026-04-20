import { z } from 'zod';
import { PROFILE_LOCATIONS } from '@/types/profile';

const locationEnum = z.enum(
  PROFILE_LOCATIONS as unknown as [string, ...string[]]
);

export const profileFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120),
  age: z.coerce.number().int().min(18).max(99),
  location: locationEnum,
  price_one_shot: z.coerce.number().int().min(0),
  price_two_shot: z.coerce.number().int().min(0),
  price_three_shot: z.coerce.number().int().min(0),
  price_full_night: z.coerce.number().int().min(0),
  main_image_url: z.string(),
  gallery_urls: z.array(z.string()),
  video_urls: z.array(z.string()),
  short_description: z.string(),
  meta_title: z.string().min(1),
  meta_description: z.string().min(1),
  meta_tags: z.array(z.string()),
  whatsapp: z.string(),
  enabled: z.boolean(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
