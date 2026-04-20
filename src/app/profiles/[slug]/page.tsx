import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BadgeCheck,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { Layout } from '@/components/layout/layout';
import { ProfileGalleryLightbox } from '@/app/profiles/[slug]/profile-gallery-lightbox';
import { ProfilePhotoHighlightsLightbox } from '@/app/profiles/[slug]/profile-photo-highlights-lightbox';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { getProfileBySlugPublic, getRelatedProfiles } from '@/lib/profiles/queries';
import { getSiteUrl } from '@/lib/site-url';
import { whatsappHrefWithMessage } from '@/lib/profile-links';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 120;

function normalizeStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value !== 'string') return [];
  const raw = value.trim();
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean);
    }
  } catch {
    // fallback for Postgres array literal format: {"a","b"}
  }

  if (raw.startsWith('{') && raw.endsWith('}')) {
    const body = raw.slice(1, -1).trim();
    if (!body) return [];
    return body
      .split(',')
      .map((item) => item.trim().replace(/^"(.*)"$/, '$1'))
      .map((item) => item.replace(/\\"/g, '"'))
      .filter(Boolean);
  }

  return raw
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatInr(n: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProfileBySlugPublic(slug);
  if (!p) {
    return { title: 'Profile' };
  }

  const site = getSiteUrl();
  const og = p.main_image_url || `${site}/images/hero-bg.webp`;
  const title = p.meta_title || `${p.name} | LillyBabe`;
  const desc = p.meta_description || p.short_description;
  const keywords = p.meta_tags?.length ? p.meta_tags : undefined;

  return {
    title,
    description: desc,
    keywords,
    alternates: {
      canonical: `/profiles/${p.slug}`,
    },
    openGraph: {
      title,
      description: desc,
      url: `${site}/profiles/${p.slug}`,
      siteName: 'LillyBabe',
      images: [{ url: og, width: 1200, height: 630, alt: p.name }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [og],
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = await getProfileBySlugPublic(slug);
  if (!profile) {
    notFound();
  }

  const related = await getRelatedProfiles(profile.slug, 4);
  const wa = whatsappHrefWithMessage(
    profile.whatsapp,
    `Hi, I am interested in ${profile.name}. Please share availability and booking details.`
  );
  const galleryUrls = normalizeStringArray(profile.gallery_urls);
  const gallery = [profile.main_image_url, ...galleryUrls].filter(Boolean);
  const videoUrls = normalizeStringArray(profile.video_urls);

  const prices = [
    { label: '1 shot', value: profile.price_one_shot },
    { label: '2 shot', value: profile.price_two_shot },
    { label: '3 shot', value: profile.price_three_shot },
    { label: 'Full night', value: profile.price_full_night },
  ];
  const highlightBadges = [
    'Verified photos',
    `Popular in ${profile.location}`,
    'Fast booking response',
  ];
  const quickFacts = [
    { label: 'Location', value: profile.location, icon: MapPin },
    { label: 'Age', value: `${profile.age} years`, icon: Star },
    { label: 'Response', value: 'Usually quick reply', icon: Clock3 },
    { label: 'Privacy', value: 'Direct private booking', icon: ShieldCheck },
  ];
  const profileHighlights = [
    'Direct WhatsApp booking link with profile-specific inquiry',
    `Curated listing for private inquiries in ${profile.location}`,
    'Clear pricing, fast contact, and photo-first browsing',
  ];

  return (
    <>
      <Layout>
        <article className="bg-black text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-zinc-500">
              <Link href="/" className="hover:text-amber-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-zinc-400">Profiles</span>
              <span className="mx-2">/</span>
              <span className="text-zinc-300">{profile.name}</span>
            </nav>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_360px]">
              <div className="space-y-8">
                <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {highlightBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {gallery.length > 0 ? (
                      <ProfileGalleryLightbox
                        name={profile.name}
                        images={gallery}
                        heroOverlay={
                          <>
                            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                              Premium profile
                            </p>
                            <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                              {profile.name}
                            </h1>
                            <p className="mt-2 text-base text-zinc-200 sm:text-lg">
                              {profile.age} years · {profile.location}
                            </p>
                          </>
                        }
                      />
                    ) : (
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 sm:aspect-[5/6] lg:aspect-[4/5]">
                        <div className="flex h-full items-center justify-center text-zinc-600">
                          Photo coming soon
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                          <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                            Premium profile
                          </p>
                          <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            {profile.name}
                          </h1>
                          <p className="mt-2 text-base text-zinc-200 sm:text-lg">
                            {profile.age} years · {profile.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-3 self-start sm:grid-cols-2 lg:grid-cols-1">
                    {quickFacts.map((fact) => {
                      const Icon = fact.icon;
                      return (
                        <div
                          key={fact.label}
                          className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"
                        >
                          <div className="mb-3 inline-flex rounded-xl border border-amber-500/25 bg-amber-500/10 p-2 text-amber-300">
                            <Icon className="h-4 w-4" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                            {fact.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">{fact.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Sparkles className="h-4 w-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      About this profile
                    </p>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-200">
                    {profile.short_description ||
                      `${profile.name} is featured for direct booking in ${profile.location}, with a clean gallery, clear rates, and fast contact options for private inquiries.`}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {profileHighlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-zinc-800 bg-black/30 p-4 text-sm text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Rates
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Indicative booking prices</h2>
                    </div>
                    <BadgeCheck className="h-5 w-5 text-amber-300" />
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {prices.map((row) => (
                      <li
                        key={row.label}
                        className="rounded-2xl border border-zinc-800 bg-black/30 p-4"
                      >
                        <p className="text-sm text-zinc-400">{row.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{formatInr(row.value)}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                {galleryUrls.length ? (
                  <section className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8">
                    <div className="mb-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Gallery
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Photo highlights</h2>
                    </div>
                    <ProfilePhotoHighlightsLightbox name={profile.name} images={galleryUrls} />
                  </section>
                ) : null}

                {videoUrls.length ? (
                  <section className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8">
                    <div className="mb-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Videos
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Available videos</h2>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {videoUrls.map((url, index) => (
                        <li
                          key={`${url}-${index}`}
                          className="overflow-hidden rounded-2xl border border-zinc-800 bg-black/30"
                        >
                          <video
                            src={url}
                            controls
                            preload="metadata"
                            className="aspect-video h-full w-full bg-zinc-900 object-cover"
                          >
                            <a href={url} target="_blank" rel="noopener noreferrer">
                              View video {index + 1}
                            </a>
                          </video>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>

              <aside className="xl:sticky xl:top-6 xl:self-start">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Book this profile
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Direct inquiry for {profile.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Fast contact options for availability, rates, and private booking details in{' '}
                    {profile.location}.
                  </p>

                  <div className="mt-5 rounded-2xl border border-zinc-800 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Starting from</p>
                    <p className="mt-2 text-3xl font-black text-white">
                      {formatInr(profile.price_one_shot)}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">1 shot indicative rate</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {profile.whatsapp ? (
                      <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Book on WhatsApp
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Why users like this page</p>
                    <ul className="mt-3 space-y-3 text-sm text-zinc-300">
                      <li className="flex gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span>Clean rates and photo-first browsing</span>
                      </li>
                      <li className="flex gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span>Private direct inquiry flow</span>
                      </li>
                      <li className="flex gap-2">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span>Quick contact on preferred chat apps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            {related.length > 0 ? (
              <section className="mt-16 border-t border-zinc-800 pt-12">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    More to explore
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Similar profiles you may like</h2>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {related.map((r) => (
                    <li key={r.id} className="h-full">
                      <Link
                        href={`/profiles/${r.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 transition hover:border-amber-500/30"
                      >
                        <div className="relative aspect-[4/5] w-full bg-zinc-900">
                          {r.main_image_url ? (
                            <Image
                              src={r.main_image_url}
                              alt={r.name}
                              fill
                              sizes="(max-width: 1024px) 50vw, 25vw"
                              className="object-cover transition group-hover:scale-[1.02]"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                              —
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-3">
                          <p className="font-semibold text-white">{r.name}</p>
                          <p className="text-xs text-zinc-500">
                            {r.age} · {r.location}
                          </p>
                          <p className="mt-auto pt-3 text-xs font-medium text-amber-400/90">
                            From {formatInr(r.price_one_shot)} · View profile
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </article>
      </Layout>
      <FloatingButtons />
    </>
  );
}
