'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import sharp from 'sharp';
import { createClient } from '@/lib/supabase/server';
import { DEFAULT_PRICES, generateProfileMeta } from '@/lib/profile-meta-generate';
import { ensureUniqueSlug, slugifyName } from '@/lib/profile-slug';
import type { ProfileLocation } from '@/types/profile';
import type { MetaStyle } from '@/lib/profile-meta-generate';

const BUCKET = 'profile-media';
const MAX_INPUT_BYTES = 20 * 1024 * 1024;

function isImageMime(mime: string): boolean {
  return mime.startsWith('image/');
}

async function optimizeImageToAvif(
  file: File,
  options: { maxWidth: number; quality: number }
): Promise<Buffer> {
  const input = Buffer.from(await file.arrayBuffer());
  return sharp(input)
    .rotate()
    .resize({
      width: options.maxWidth,
      withoutEnlargement: true,
      fit: 'inside',
    })
    .avif({ quality: options.quality })
    .toBuffer();
}

async function getAdminSupabase() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { supabase, user };
}

export async function regenerateMetaAction(input: {
  name: string;
  location: ProfileLocation;
  age: number;
  style?: MetaStyle;
}) {
  const { user } = await getAdminSupabase();
  if (!user) {
    return null;
  }
  return generateProfileMeta(input);
}

export async function regenerateMetaVariantsAction(input: {
  name: string;
  location: ProfileLocation;
  age: number;
  count?: number;
  style?: MetaStyle;
}) {
  const { user } = await getAdminSupabase();
  if (!user) {
    return null;
  }

  const count = Math.max(1, Math.min(input.count ?? 3, 5));
  return Array.from({ length: count }, () => generateProfileMeta(input));
}

export async function createProfileAction(formData: FormData) {
  const { supabase, user } = await getAdminSupabase();
  if (!user) {
    return { ok: false as const, error: 'Unauthorized' };
  }

  const name = String(formData.get('name') ?? '').trim();
  const location = String(formData.get('location') ?? '') as ProfileLocation;
  const age = Number(formData.get('age'));
  const whatsapp = String(formData.get('whatsapp') ?? '').trim();
  const enabled = formData.get('enabled') === 'on' || formData.get('enabled') === 'true';

  const price_one_shot = Number(formData.get('price_one_shot') ?? DEFAULT_PRICES.price_one_shot);
  const price_two_shot = Number(formData.get('price_two_shot') ?? DEFAULT_PRICES.price_two_shot);
  const price_three_shot = Number(
    formData.get('price_three_shot') ?? DEFAULT_PRICES.price_three_shot
  );
  const price_full_night = Number(
    formData.get('price_full_night') ?? DEFAULT_PRICES.price_full_night
  );

  if (!name) {
    return { ok: false as const, error: 'Name is required' };
  }

  const meta = generateProfileMeta({ name, location, age });
  const baseSlug = slugifyName(name);
  const slug = await ensureUniqueSlug(baseSlug, async (s) => {
    const { data } = await supabase.from('profiles').select('id').eq('slug', s).maybeSingle();
    return Boolean(data);
  });

  const mainFile = formData.get('main_image');
  const galleryFiles = formData.getAll('gallery').filter((f): f is File => f instanceof File);

  const insertRow = {
    slug,
    name,
    age: Number.isFinite(age) ? age : 22,
    location,
    price_one_shot,
    price_two_shot,
    price_three_shot,
    price_full_night,
    main_image_url: '',
    gallery_urls: [] as string[],
    short_description: meta.short_description,
    meta_title: meta.meta_title,
    meta_description: meta.meta_description,
    meta_tags: meta.meta_tags,
    whatsapp,
    enabled,
  };

  const { data: row, error: insErr } = await supabase
    .from('profiles')
    .insert(insertRow)
    .select()
    .single();

  if (insErr || !row) {
    return { ok: false as const, error: insErr?.message ?? 'Insert failed' };
  }

  const profileId = row.id as string;
  let mainUrl = '';
  const galleryUrls: string[] = [];

  if (mainFile instanceof File && mainFile.size > 0) {
    if (mainFile.size > MAX_INPUT_BYTES) {
      return { ok: false as const, error: 'Main image too large (max 20MB)' };
    }
    if (!isImageMime(mainFile.type)) {
      return { ok: false as const, error: 'Main image must be an image file' };
    }
    const path = `${profileId}/main-${Date.now()}.avif`;
    const buf = await optimizeImageToAvif(mainFile, { maxWidth: 1600, quality: 55 });
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, buf, { contentType: 'image/avif', upsert: true });
    if (upErr) {
      await supabase.from('profiles').delete().eq('id', profileId);
      return { ok: false as const, error: upErr.message };
    }
    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
    mainUrl = pub.publicUrl;
  }

  for (let i = 0; i < galleryFiles.length; i++) {
    const file = galleryFiles[i];
    if (!file || file.size === 0) continue;
    if (file.size > MAX_INPUT_BYTES) continue;
    if (!isImageMime(file.type)) continue;
    const path = `${profileId}/gallery-${Date.now()}-${i}.avif`;
    const buf = await optimizeImageToAvif(file, { maxWidth: 1400, quality: 50 });
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, buf, { contentType: 'image/avif', upsert: true });
    if (!upErr) {
      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
      galleryUrls.push(pub.publicUrl);
    }
  }

  const { error: updErr } = await supabase
    .from('profiles')
    .update({
      main_image_url: mainUrl,
      gallery_urls: galleryUrls,
    })
    .eq('id', profileId);

  if (updErr) {
    return { ok: false as const, error: updErr.message };
  }

  revalidatePath('/');
  revalidatePath('/profiles');
  revalidatePath(`/profiles/${slug}`);
  redirect(`/admin/profiles/${profileId}/edit`);
}

export async function updateProfileAction(profileId: string, formData: FormData) {
  const { supabase, user } = await getAdminSupabase();
  if (!user) {
    return { ok: false as const, error: 'Unauthorized' };
  }

  const name = String(formData.get('name') ?? '').trim();
  const location = String(formData.get('location') ?? '') as ProfileLocation;
  const age = Number(formData.get('age'));
  const whatsapp = String(formData.get('whatsapp') ?? '').trim();
  const enabled = formData.get('enabled') === 'on' || formData.get('enabled') === 'true';

  const price_one_shot = Number(formData.get('price_one_shot') ?? DEFAULT_PRICES.price_one_shot);
  const price_two_shot = Number(formData.get('price_two_shot') ?? DEFAULT_PRICES.price_two_shot);
  const price_three_shot = Number(
    formData.get('price_three_shot') ?? DEFAULT_PRICES.price_three_shot
  );
  const price_full_night = Number(
    formData.get('price_full_night') ?? DEFAULT_PRICES.price_full_night
  );

  const short_description = String(formData.get('short_description') ?? '');
  const meta_title = String(formData.get('meta_title') ?? '');
  const meta_description = String(formData.get('meta_description') ?? '');
  const meta_tags_raw = String(formData.get('meta_tags') ?? '');
  const meta_tags = meta_tags_raw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const galleryUrlsText = String(formData.get('gallery_urls_text') ?? '');
  let gallery_urls = galleryUrlsText
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!name) {
    return { ok: false as const, error: 'Name is required' };
  }

  const { data: existing, error: exErr } = await supabase
    .from('profiles')
    .select('slug, main_image_url')
    .eq('id', profileId)
    .single();

  if (exErr || !existing) {
    return { ok: false as const, error: 'Profile not found' };
  }

  let main_image_url = String(formData.get('main_image_url') ?? '').trim();
  const prevMain = String((existing as { main_image_url?: string }).main_image_url ?? '');
  if (!main_image_url && prevMain) {
    main_image_url = prevMain;
  }

  const mainFile = formData.get('main_image');
  if (mainFile instanceof File && mainFile.size > 0) {
    if (mainFile.size > MAX_INPUT_BYTES) {
      return { ok: false as const, error: 'Main image too large (max 20MB)' };
    }
    if (!isImageMime(mainFile.type)) {
      return { ok: false as const, error: 'Main image must be an image file' };
    }
    const path = `${profileId}/main-${Date.now()}.avif`;
    const buf = await optimizeImageToAvif(mainFile, { maxWidth: 1600, quality: 55 });
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, buf, { contentType: 'image/avif', upsert: true });
    if (upErr) {
      return { ok: false as const, error: upErr.message };
    }
    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
    main_image_url = pub.publicUrl;
  }

  const galleryFiles = formData.getAll('gallery').filter((f): f is File => f instanceof File);

  for (let i = 0; i < galleryFiles.length; i++) {
    const file = galleryFiles[i];
    if (!file || file.size === 0) continue;
    if (file.size > MAX_INPUT_BYTES) continue;
    if (!isImageMime(file.type)) continue;
    const path = `${profileId}/gallery-${Date.now()}-${i}.avif`;
    const buf = await optimizeImageToAvif(file, { maxWidth: 1400, quality: 50 });
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, buf, { contentType: 'image/avif', upsert: true });
    if (!upErr) {
      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
      gallery_urls.push(pub.publicUrl);
    }
  }

  const { error: updErr } = await supabase
    .from('profiles')
    .update({
      name,
      age: Number.isFinite(age) ? age : 22,
      location,
      price_one_shot,
      price_two_shot,
      price_three_shot,
      price_full_night,
      main_image_url,
      gallery_urls,
      short_description,
      meta_title,
      meta_description,
      meta_tags,
      whatsapp,
      enabled,
    })
    .eq('id', profileId);

  if (updErr) {
    return { ok: false as const, error: updErr.message };
  }

  const slug = existing.slug as string;
  revalidatePath('/');
  revalidatePath(`/profiles/${slug}`);
  revalidatePath('/admin/profiles');
  return { ok: true as const };
}

export async function toggleProfileEnabledAction(id: string, enabled: boolean) {
  const { supabase, user } = await getAdminSupabase();
  if (!user) {
    return { ok: false as const, error: 'Unauthorized' };
  }
  const { data: row } = await supabase.from('profiles').select('slug').eq('id', id).single();
  const { error } = await supabase.from('profiles').update({ enabled }).eq('id', id);
  if (error) {
    return { ok: false as const, error: error.message };
  }
  revalidatePath('/');
  revalidatePath('/admin/profiles');
  if (row?.slug) {
    revalidatePath(`/profiles/${row.slug}`);
  }
  return { ok: true as const };
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/admin');
  redirect('/admin/login');
}

export async function deleteProfileAction(id: string) {
  const { supabase, user } = await getAdminSupabase();
  if (!user) {
    redirect('/admin/login');
  }
  const { data: row } = await supabase.from('profiles').select('slug').eq('id', id).single();
  const { error } = await supabase.from('profiles').delete().eq('id', id);
  if (error) {
    return { ok: false as const, error: error.message };
  }
  revalidatePath('/');
  revalidatePath('/admin/profiles');
  if (row?.slug) {
    revalidatePath(`/profiles/${row.slug}`);
  }
  redirect('/admin/profiles');
}
