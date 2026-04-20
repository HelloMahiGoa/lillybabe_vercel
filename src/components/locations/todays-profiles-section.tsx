'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, MapPin, MessageCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { whatsappHrefWithMessage } from '@/lib/profile-links';
import type { ProfileRow } from '@/types/profile';
import { shuffleArray } from '@/lib/shuffle-array';

type TodaysProfilesSectionProps = {
  areaLabel: string;
  limit?: number;
  eyebrowText?: string;
  headingText?: string;
  descriptionText?: string;
  /** Anchor id for in-page links (e.g. hero “Today’s profiles”). */
  sectionId?: string;
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
  limit,
  eyebrowText = "Today's profiles",
  headingText,
  descriptionText = 'Recent listings, styled like the homepage cards for fast browsing and direct booking.',
  sectionId,
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
        const hasLimit = typeof limit === 'number' && limit > 0;
        let request = supabase.from('profiles').select('*').eq('enabled', true);
        if (hasLimit) {
          const poolSize = Math.min(200, Math.max(limit * 8, 48));
          request = request.limit(poolSize);
        }
        const { data, error } = await request;

        if (!isMounted) return;
        if (error || !data) {
          setProfiles([]);
          return;
        }

        const shuffled = shuffleArray(data as ProfileRow[]);
        setProfiles(hasLimit ? shuffled.slice(0, limit) : shuffled);
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
    <section
      id={sectionId}
      className={`border-y border-zinc-800/80 bg-black py-12 sm:py-16${sectionId ? ' scroll-mt-24' : ''}`}
    >
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
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <li key={p.id} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_16px_40px_rgba(251,191,36,0.14)]">
                  <Link
                    href={`/profiles/${p.slug}`}
                    className="absolute inset-0 z-20"
                    aria-label={`View ${p.name} profile`}
                  />

                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                    {p.main_image_url ? (
                      <Image
                        src={p.main_image_url}
                        alt={p.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                        Photo soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200 transition group-hover:border-emerald-400/70 group-hover:bg-emerald-400/15">
                      <BadgeCheck className="h-3 w-3" />
                      Active
                    </div>
                    <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black transition group-hover:scale-105 group-hover:bg-amber-400">
                      {formatInr(p.price_one_shot)}
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                      <p className="line-clamp-2 text-lg font-bold leading-tight text-white">{p.name}</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-200">
                        <MapPin className="h-3.5 w-3.5 text-amber-300" />
                        {p.location}, Chennai
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none space-y-3 border-t border-zinc-800 bg-zinc-950/95 p-3">
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-300">
                        Age {p.age}
                      </span>
                      <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-300">
                        Ad ID: {p.slug.toUpperCase()}
                      </span>
                    </div>

                    <p className="line-clamp-2 text-sm leading-5 text-zinc-400">
                      {p.short_description ||
                        'Genuine profile with clear rates and direct WhatsApp contact. Tap for complete details and booking info.'}
                    </p>

                    <div className="grid grid-cols-3 gap-1 text-[11px] text-zinc-500">
                      <span className="truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                        2 Shot: {formatInr(p.price_two_shot)}
                      </span>
                      <span className="truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                        3 Shot: {formatInr(p.price_three_shot)}
                      </span>
                      <span className="truncate rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1">
                        Night: {formatInr(p.price_full_night)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      {p.whatsapp ? (
                        <a
                          href={whatsappHrefWithMessage(
                            p.whatsapp,
                            `Hi, I am interested in ${p.name}. Please share availability and booking details.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        className="pointer-events-auto relative z-30 inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_0_0_rgba(16,185,129,0.45)] transition hover:bg-emerald-500 hover:shadow-[0_0_0_6px_rgba(16,185,129,0.12)]"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      ) : (
                        <span />
                      )}
                      <span className="text-[11px] text-zinc-500">Tap card for full profile</span>
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
