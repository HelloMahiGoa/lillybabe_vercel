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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[31rem] animate-pulse rounded-[1.4rem] border border-zinc-800 bg-zinc-950/85"
              />
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {profiles.map((p) => (
              <li key={p.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-zinc-800 bg-zinc-950/85 shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-zinc-900/85 hover:shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
                  <Link
                    href={`/profiles/${p.slug}`}
                    className="absolute inset-0 z-0"
                    aria-label={`View ${p.name} profile`}
                  />
                  <div className="pointer-events-none relative aspect-[4/5] w-full bg-zinc-900 sm:aspect-[5/6] lg:aspect-[4/5]">
                    {p.main_image_url ? (
                      <Image
                        src={p.main_image_url}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-zinc-600">
                        Photo soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                          <BadgeCheck className="h-3 w-3" />
                          Verified
                        </span>
                        <span className="rounded-full border border-amber-400/20 bg-amber-500/15 px-2.5 py-1 text-[11px] font-medium text-amber-100">
                          Popular
                        </span>
                      </div>
                      <span className="rounded-full border border-black/20 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        From {formatInr(p.price_one_shot)}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-16">
                      <div className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm">
                        <p className="line-clamp-2 text-base font-bold leading-tight text-white sm:text-lg">
                          {p.name}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-200 sm:text-sm">
                          <span>{p.age} years</span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-amber-300" />
                            {p.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none relative z-10 flex flex-1 flex-col gap-3 p-4">
                    {p.short_description ? (
                      <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
                        {p.short_description}
                      </p>
                    ) : (
                      <p className="line-clamp-2 text-sm leading-6 text-zinc-500">
                        Direct private booking with clear rates, premium photos,
                        and fast response.
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-2">
                      {p.whatsapp ? (
                        <a
                          href={whatsappHrefWithMessage(
                            p.whatsapp,
                            `Hi, I am interested in ${p.name}. Please share availability and booking details.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      ) : null}
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-500">
                        <MessageCircle className="h-3.5 w-3.5 text-emerald-300" />
                        Direct contact
                      </span>
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
