drop policy if exists "profiles_select_public_or_admin" on public.profiles;

create policy "profiles_select_public_or_admin"
  on public.profiles for select
  to anon, authenticated
  using (true);
