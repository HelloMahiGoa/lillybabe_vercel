alter table public.profiles
add column if not exists video_urls text[] not null default '{}';
