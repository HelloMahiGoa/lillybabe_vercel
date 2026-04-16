# Supabase environment variables

Add these to `.env.local` (local) and to the Vercel project **Settings → Environment Variables** (production/preview).

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Project URL (Supabase **Settings → API**). |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | `anon` `public` key — used in the browser and server with RLS. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site origin for metadata/OG (defaults to `https://lillybabe.com`). |

Do **not** expose the **service role** key in `NEXT_PUBLIC_*` or client-side code. Admin operations use the logged-in user session and RLS.

## Database setup

1. In the Supabase SQL editor, run [`supabase/migrations/001_profiles_admin_storage.sql`](../supabase/migrations/001_profiles_admin_storage.sql).
2. Replace the seed admin email in `INSERT INTO public.admin_emails` with the email you will use to sign in (or insert another row later).
3. Under **Authentication → Users**, create a user with that email and a password (or enable email sign-up and register once).
4. Create a **Storage** bucket named `profile-media` if the migration did not create it (the migration inserts into `storage.buckets`).

## After deploy

- Open `/admin/login`, sign in, then add profiles under **Profiles**.
- Enabled profiles appear on the homepage and at `/profiles/[slug]`.
