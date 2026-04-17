'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, MapPin, MessageCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { whatsappHrefWithMessage } from '@/lib/profile-links';
import type { ProfileRow } from '@/types/profile';

type TodaysProfilesSectionProps = {
  areaLabel: string;
  limit?: number;
  eyebrowText?: string;
  headingText?: string;
  descriptionText?: string;
};

function formatInr(n: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export function TodaysProfilesSection({
  areaLabel,
  limit = 12,
  eyebrowText = "Today's profiles",
  headingText,
  descriptionText = 'Recent listings, styled like the homepage cards for fast browsing and direct booking.',
}: TodaysProfilesSectionProps) {
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const hasSupabaseEnv = useMemo(
    () =>
      Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ),
    []
  );

  useEffect(() => {
    if (!hasSupabaseEnv) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function loadProfiles() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('enabled', true)
          .order('updated_at', { ascending: false })
          .limit(limit);

        if (!isMounted) return;
        if (error || !data) {
          setProfiles([]);
          return;
        }

        setProfiles(data as ProfileRow[]);
      } catch {
        if (isMounted) {
          setProfiles([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadProfiles();

    return () => {
      isMounted = false;
    };
  }, [hasSupabaseEnv, limit]);

  if (!isLoading && profiles.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-zinc-800/80 bg-black py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/90">
            {eyebrowText}
          </p>
          <h2 className="font-black tracking-tight text-[clamp(1.5rem,4vw,2.25rem)] text-white">
            {headingText ?? `Available near ${areaLabel}`}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-400">
            {descriptionText}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[19rem] animate-pulse rounded-xl border border-zinc-800 bg-zinc-950/85"
              />
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {profiles.map((p) => (
              <li key={p.id} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/95 shadow-[0_6px_24px_rgba(0,0,0,0.22)] transition hover:border-amber-500/50 hover:bg-zinc-900/95">
                  <Link
                    href={`/profiles/${p.slug}`}
                    className="absolute inset-0 z-20"
                    aria-label={`View ${p.name} profile`}
                  />

                  <div className="pointer-events-none relative z-10 border-b border-zinc-800 bg-zinc-900/60 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-white">Ad ID: {p.slug.toUpperCase()}</p>
                      <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-200">
                        Active
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">Posted in {p.location}, Chennai</p>
                  </div>

                  <div className="pointer-events-none relative z-10 flex gap-3 p-3">
                    <div className="relative h-55 w-32 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 sm:h-40 sm:w-32">
                      {p.main_image_url ? (
                        <Image
                          src={p.main_image_url}
                          alt={p.name}
                          fill
                          sizes="128px"
                          className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                          Photo soon
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="line-clamp-2 text-base font-bold leading-tight text-white">{p.name}</p>
                        <span className="whitespace-nowrap rounded-md bg-amber-600 px-2 py-1 text-xs font-semibold text-black">
                          {formatInr(p.price_one_shot)}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                        <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-300">
                          Age {p.age}
                        </span>
                        <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-300">
                          {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-200">
                          <BadgeCheck className="h-3 w-3" />
                          Verified
                        </span>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm leading-5 text-zinc-400">
                        {p.short_description ||
                          'Genuine profile with clear rates and direct WhatsApp contact. Tap for complete details and booking info.'}
                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-1 text-[11px] text-zinc-500">
                        <span className="truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                          2 Shot: {formatInr(p.price_two_shot)}
                        </span>
                        <span className="truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                          3 Shot: {formatInr(p.price_three_shot)}
                        </span>
                        <span className="col-span-2 truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                          Full Night: {formatInr(p.price_full_night)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none relative z-10 flex items-center justify-between gap-2 border-t border-zinc-800 bg-zinc-900/50 px-3 py-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <MapPin className="h-3.5 w-3.5 text-amber-300" />
                      {p.location}, Chennai
                    </span>
                    <div className="flex items-center gap-2">
                      {p.whatsapp ? (
                        <a
                          href={whatsappHrefWithMessage(
                            p.whatsapp,
                            `Hi, I am interested in ${p.name}. Please share availability and booking details.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto relative z-30 inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-emerald-500"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      ) : null}
                      <span className="text-[11px] text-zinc-500">Tap card for full ad</span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
