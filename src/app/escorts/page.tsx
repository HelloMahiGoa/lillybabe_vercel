import Link from 'next/link';
import type { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { TodaysProfilesSection } from '@/components/locations/todays-profiles-section';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { getEnabledProfileCount, getEnabledProfiles } from '@/lib/profiles/queries';
import { WhatsAppMessageTemplates } from '@/components/escorts/whatsapp-message-templates';

const escortsDescription =
  'Browse today’s available Chennai escort profiles with verified details, real photos, transparent rates, and direct WhatsApp booking support.';

export const metadata: Metadata = {
  title: 'Chennai Escorts Today | Verified Profiles & Gallery | LillyBabe',
  description: escortsDescription,
  keywords: [
    'Chennai escorts today',
    'verified escorts Chennai',
    'Chennai escorts gallery',
    'real escort profiles Chennai',
    'WhatsApp booking Chennai escorts',
  ],
  alternates: {
    canonical: '/escorts',
  },
  openGraph: {
    title: 'Chennai Escorts Today | Verified Profiles & Gallery',
    description: escortsDescription,
    url: 'https://lillybabe.com/escorts',
    siteName: 'LillyBabe',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escorts Today - LillyBabe',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts Today | Verified Profiles & Gallery',
    description: escortsDescription,
    images: ['/images/hero-bg.webp'],
  },
};

export const revalidate = 120;

const FAQS = [
  {
    q: 'How do I book from this escorts page?',
    a: 'Open any profile, check details and rates, then message directly on WhatsApp for live availability and confirmation.',
  },
  {
    q: 'Are listed profiles real and updated?',
    a: 'Profiles shown in today’s section are enabled listings with current details. If a profile is unavailable, it is marked clearly.',
  },
  {
    q: 'Do I need to pay advance to confirm?',
    a: 'Our booking flow is no-advance focused as mentioned across LillyBabe pages. Final details are confirmed directly on chat.',
  },
  {
    q: 'Which Chennai locations are covered?',
    a: 'Listings cover key city areas like Anna Nagar, T. Nagar, Nungambakkam, OMR, and nearby localities via dedicated pages.',
  },
];

export default async function EscortsPage() {
  const activeProfileCount = await getEnabledProfileCount();
  const topProfiles = await getEnabledProfiles(6);
  const freshnessText = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          <section className="sticky top-0 z-30 border-b border-amber-500/30 bg-black/85 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
              <p className="text-xs text-zinc-300">Live now: {activeProfileCount} active profiles</p>
              <div className="flex gap-2">
                <a
                  href="#todays-profiles"
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200 hover:border-amber-500"
                >
                  Today&apos;s Profiles
                </a>
                <a
                  href="https://wa.me/918121426651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-500"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </section>

          <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black py-14 sm:py-18">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                Chennai Escorts
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Today&apos;s verified escort profiles in Chennai
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                Skip fake ads and outdated listings. This page highlights currently available
                profiles, real gallery previews, and direct WhatsApp contact so you can book with
                confidence.
              </p>
              <p className="mt-3 text-xs text-zinc-500">Updated: {freshnessText}</p>
            </div>
          </section>

          {topProfiles.length > 0 ? (
            <section className="border-b border-zinc-800/80 bg-zinc-950/30 py-8">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-semibold text-white">Top viewed today</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topProfiles.map((p) => (
                    <Link
                      key={p.id}
                      href={`/profiles/${p.slug}`}
                      className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-500/60 hover:text-amber-200"
                    >
                      {p.name} - {p.location}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <TodaysProfilesSection
            sectionId="todays-profiles"
            areaLabel="Chennai"
            eyebrowText="Today&apos;s profiles"
            headingText="Available now across Chennai"
            descriptionText="Fresh active listings with clear rates and direct contact options."
          />

          <section className="border-y border-zinc-800/80 bg-zinc-950/50 py-12 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Gallery
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Chennai escort gallery previews
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  Browse sample profile images and shortlist the style you prefer before messaging
                  for live availability.
                </p>
              </div>
              <RandomImageGallery count={18} imageHeight="h-64" showRefreshButton />
            </div>
          </section>

          <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Why this escorts page is useful
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                  <h3 className="text-lg font-semibold text-white">Real profile visibility</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    See currently listed profiles with straightforward age, location, and rate
                    context instead of generic ad pages.
                  </p>
                </article>
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                  <h3 className="text-lg font-semibold text-white">Direct booking intent</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Every profile route supports direct WhatsApp contact so users can move from
                    browsing to booking without extra steps.
                  </p>
                </article>
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                  <h3 className="text-lg font-semibold text-white">Location-specific discovery</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Profiles include Chennai location context, improving relevance for area-based
                    searches and local booking queries.
                  </p>
                </article>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">Explore more Chennai categories</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Browse focused categories and location pages to find the right profile match
                  faster.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    ['Russian Escorts', '/russian-escorts-in-chennai'],
                    ['Independent Escorts', '/independent-escorts-in-chennai'],
                    ['Model Escorts', '/model-escorts-in-chennai'],
                    ['Tamil Escorts', '/tamil-escorts-in-chennai'],
                    ['Anna Nagar Escorts', '/anna-nagar-escorts'],
                    ['T. Nagar Escorts', '/t-nagar-escorts'],
                    ['Nungambakkam Escorts', '/nungambakkam-escorts'],
                    ['OMR Escorts', '/omr-escorts'],
                    ['All Locations', '/locations'],
                    ['Full Gallery', '/gallery'],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-500/60 hover:text-amber-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white">Frequently asked questions</h3>
                <div className="mt-4 space-y-3">
                  {FAQS.map((item) => (
                    <details
                      key={item.q}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 open:border-amber-500/40"
                    >
                      <summary className="cursor-pointer text-sm font-medium text-white">
                        {item.q}
                      </summary>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-zinc-800/80 bg-zinc-950/40 py-12 sm:py-16">
            <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Chennai escorts: what to expect before you book
              </h2>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">
                  1) Start with today&apos;s active profiles, not old ads
                </h3>
                <p className="mt-3 text-sm leading-8 text-zinc-300">
                  If you are searching for Chennai escorts, biggest mistake is wasting time on old
                  ads where availability is not clear. This page is made for fast, clean browsing.
                  You can check today&apos;s active profiles, open full details, compare rates, and
                  message directly. Simple flow, no unnecessary confusion. Instead of checking
                  twenty pages, shortlist two or three profiles and ask for live update. Usually
                  this gives quicker and better response. If your plan is area-based, check
                  location first (Anna Nagar, T. Nagar, OMR, Nungambakkam, etc.) so last-minute
                  timing issues won&apos;t happen.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">
                  2) Why profile quality matters more than just photos
                </h3>
                <p className="mt-3 text-sm leading-8 text-zinc-300">
                  A good profile means more than attractive photo. You need clear age, location,
                  pricing, and direct contact in one place. That is what makes booking safer and
                  easier. Many users searching call girls in Chennai are already tired of fake
                  gallery images or confusing rates. Here, profile details are kept practical and
                  straightforward, so before you message, you already know basic expectations. You
                  can quickly compare rate slabs, check city area, and then contact on WhatsApp
                  only if profile matches what you need.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">
                  3) Privacy-first booking flow for real users
                </h3>
                <p className="mt-3 text-sm leading-8 text-zinc-300">
                  Most users need one thing: smooth and private booking. No extra form filling, no
                  long call transfer, no complicated process. Here the flow is simple — view
                  profile, compare details, message directly. If you want fast response, use the
                  sticky WhatsApp button on top. If you want to decide calmly, check profile pages
                  and FAQ first, then message. This works well for late-night plans, same-day
                  bookings, and discreet inquiries. Clear flow means better trust, and better trust
                  means better booking experience.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">
                  4) Category and location links help you find the right match faster
                </h3>
                <p className="mt-3 text-sm leading-8 text-zinc-300">
                  Not everyone searches in the same way. Some users look for Russian escorts,
                  independent escorts, or model escorts. Some users search by area — Anna Nagar,
                  OMR, T. Nagar, and nearby zones. That is why this page gives both category links
                  and location links. If you already know your preference, use those links and save
                  time. If you are still exploring, check today&apos;s profile cards first and open
                  full profiles later. This combo works for first-time users and repeat users both.
                </p>
              </article>

              <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-emerald-200">
                  5) WhatsApp message templates (copy, paste, send)
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  Not sure what to text? Use one of these ready messages. This helps you get
                  faster, accurate replies.
                </p>
                <WhatsAppMessageTemplates />
              </article>
            </div>
          </section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </main>
      </Layout>
      <FloatingButtons />
    </>
  );
}
