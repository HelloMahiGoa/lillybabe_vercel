import { createClient } from '@/lib/supabase/server';
import type { ProfileRow } from '@/types/profile';

function hasSupabaseEnv(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export async function getEnabledProfiles(limit = 12): Promise<ProfileRow[]> {
  if (!hasSupabaseEnv()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('enabled', true)
    .order('updated_at', { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data as ProfileRow[];
}

export async function getProfileBySlugPublic(slug: string): Promise<ProfileRow | null> {
  if (!hasSupabaseEnv()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('slug', slug)
    .eq('enabled', true)
    .maybeSingle();

  if (error || !data) return null;
  return data as ProfileRow;
}

export async function getProfileByIdForAdmin(id: string): Promise<ProfileRow | null> {
  if (!hasSupabaseEnv()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase.from('profiles').select('*').eq('id', id).maybeSingle();

  if (error || !data) return null;
  return data as ProfileRow;
}

export async function getRelatedProfiles(
  excludeSlug: string,
  limit = 4
): Promise<ProfileRow[]> {
  if (!hasSupabaseEnv()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('enabled', true)
    .neq('slug', excludeSlug)
    .order('updated_at', { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data as ProfileRow[];
}

export async function listAllProfilesForAdmin(): Promise<ProfileRow[]> {
  if (!hasSupabaseEnv()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('updated_at', { ascending: false });

  if (error || !data) return [];
  return data as ProfileRow[];
}

/** Sitemap: only enabled profiles. */
export async function getEnabledProfileSlugRows(): Promise<
  { slug: string; updated_at: string }[]
> {
  if (!hasSupabaseEnv()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('slug, updated_at')
    .eq('enabled', true);

  if (error || !data) return [];
  return data as { slug: string; updated_at: string }[];
}
