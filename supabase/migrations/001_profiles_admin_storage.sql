-- Run this in the Supabase SQL Editor (or via CLI) after creating a project.
-- 1. Replace the admin email in INSERT INTO admin_emails before running, or add rows later.
-- 2. Create Auth user in Dashboard > Authentication with the same email (or use sign-up once RLS allows).

-- ---------------------------------------------------------------------------
-- Admin allowlist (used by is_admin(); keep emails in sync with real Auth users)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_emails (
  email text PRIMARY KEY
);

ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

-- No GRANT to anon/authenticated on admin_emails — only service role / dashboard can manage rows.

-- ---------------------------------------------------------------------------
-- Profiles
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  age int NOT NULL CHECK (age >= 18 AND age <= 99),
  location text NOT NULL CHECK (
    location IN (
      'Egmore',
      'Vadapalani',
      'Guindy',
      'Kilpauk',
      'Nungambakkam',
      'OMR',
      'Arumbakkam',
      'Tnagar',
      'Royapettah'
    )
  ),
  price_one_shot int NOT NULL DEFAULT 12000,
  price_two_shot int NOT NULL DEFAULT 24000,
  price_three_shot int NOT NULL DEFAULT 35000,
  price_full_night int NOT NULL DEFAULT 40000,
  main_image_url text NOT NULL DEFAULT '',
  gallery_urls text[] NOT NULL DEFAULT '{}',
  short_description text NOT NULL DEFAULT '',
  meta_title text NOT NULL DEFAULT '',
  meta_description text NOT NULL DEFAULT '',
  meta_tags text[] NOT NULL DEFAULT '{}',
  whatsapp text NOT NULL DEFAULT '',
  telegram text NOT NULL DEFAULT '',
  enabled boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_enabled_updated
  ON public.profiles (enabled, updated_at DESC);

CREATE OR REPLACE FUNCTION public.set_profiles_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE PROCEDURE public.set_profiles_updated_at();

-- ---------------------------------------------------------------------------
-- is_admin(): SECURITY DEFINER so RLS can use admin_emails safely
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_emails e
    WHERE e.email IS NOT NULL
      AND e.email = (auth.jwt() ->> 'email')
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;

-- ---------------------------------------------------------------------------
-- RLS: profiles
-- ---------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_select_public_or_admin" ON public.profiles;
CREATE POLICY "profiles_select_public_or_admin"
  ON public.profiles FOR SELECT
  TO anon, authenticated
  USING (enabled = true OR public.is_admin());

DROP POLICY IF EXISTS "profiles_insert_admin" ON public.profiles;
CREATE POLICY "profiles_insert_admin"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "profiles_update_admin" ON public.profiles;
CREATE POLICY "profiles_update_admin"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "profiles_delete_admin" ON public.profiles;
CREATE POLICY "profiles_delete_admin"
  ON public.profiles FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- ---------------------------------------------------------------------------
-- Storage bucket (public read for OG / site images)
-- ---------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-media', 'profile-media', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "profile_media_public_read" ON storage.objects;
CREATE POLICY "profile_media_public_read"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'profile-media');

DROP POLICY IF EXISTS "profile_media_insert_admin" ON storage.objects;
CREATE POLICY "profile_media_insert_admin"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'profile-media' AND public.is_admin());

DROP POLICY IF EXISTS "profile_media_update_admin" ON storage.objects;
CREATE POLICY "profile_media_update_admin"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'profile-media' AND public.is_admin())
  WITH CHECK (bucket_id = 'profile-media' AND public.is_admin());

DROP POLICY IF EXISTS "profile_media_delete_admin" ON storage.objects;
CREATE POLICY "profile_media_delete_admin"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'profile-media' AND public.is_admin());

-- ---------------------------------------------------------------------------
-- Seed admin email — CHANGE THIS
-- ---------------------------------------------------------------------------
INSERT INTO public.admin_emails (email)
VALUES ('admin@example.com')
ON CONFLICT (email) DO NOTHING;
