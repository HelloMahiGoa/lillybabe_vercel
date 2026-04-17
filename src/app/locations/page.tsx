import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export const metadata: Metadata = {
  title: 'Chennai Escort Service Locations — All Key Areas Covered | LillyBabe',
  description:
    'See where we operate across Chennai — T. Nagar, Anna Nagar, OMR, ECR, Nungambakkam, Adyar, Guindy, Kilpauk, Teynampet and more. One WhatsApp number, city‑wide coverage.',
  keywords: [
    'Chennai escort locations',
    'T Nagar escorts',
    'Anna Nagar escorts',
    'OMR escorts',
    'ECR escorts',
    'Adyar escorts',
    'Nungambakkam escorts',
    'Guindy escorts',
    'Egmore escorts',
    'Kilpauk escorts',
    'Teynampet escorts',
    'Chennai escort service areas',
  ],
  openGraph: {
    title: 'Chennai Escort Service Locations — City‑wide Coverage',
    description:
      'Find out which parts of Chennai we cover and how bookings work in each area.',
    url: 'https://lillybabe.com/locations',
    images: [
      {
        url: '/images/locations-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escort Service Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escort Service Locations — City‑wide Coverage',
    description:
      'See LillyBabe escort service coverage across Chennai and nearby areas.',
    images: ['/images/locations-banner.webp'],
  },
  alternates: {
    canonical: '/locations',
  },
};

const LOCATIONS = [
  {
    name: 'T. Nagar',
    slug: 't-nagar-escorts',
    blurb:
      'Shopping, jewellery, and busy hotels. Most bookings here are short, same‑day visits.',
  },
  {
    name: 'Anna Nagar',
    slug: 'anna-nagar-escorts',
    blurb:
      'Planned residential lanes, apartments, and serviced rooms. Calm, private bookings.',
  },
  {
    name: 'OMR / IT Corridor',
    slug: 'omr-escorts',
    blurb:
      'IT parks and business hotels along the corridor — ideal for late‑evening and weekend meets.',
  },
  {
    name: 'ECR & East Coast',
    slug: 'ecr-escorts',
    blurb:
      'Resorts, villas, and sea‑facing stays — more notice helps us line up the right girl.',
  },
  {
    name: 'Adyar & Besant Nagar',
    slug: 'adyar-escorts',
    blurb:
      'Residential pockets near the beach. Popular for relaxed evening bookings and repeats.',
  },
  {
    name: 'Nungambakkam',
    slug: 'nungambakkam-escorts',
    blurb:
      'Central business and hotel hub — quick access for both incall and outcall sessions.',
  },
  {
    name: 'Guindy',
    slug: 'guindy-escorts',
    blurb:
      'Corporate offices and transit hotels. Works well for tight schedules around meetings.',
  },
  {
    name: 'Kilpauk',
    slug: 'kilpauk-escorts',
    blurb:
      'Mixed residential and clinics. Best with early confirmation so we can plan travel cleanly.',
  },
  {
    name: 'Teynampet',
    slug: 'teynampet-escorts',
    blurb:
      'Close to key roads and mid‑range hotels. Good balance between access and privacy.',
  },
];

export default function LocationsPage() {
  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          {/* Hero */}
          <section className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.webp"
                alt="Chennai Escort Service Locations — LillyBabe"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
              <p className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Service Areas · Chennai Escorts
              </p>

              <h1 className="font-black leading-[0.92] tracking-tight mb-5 text-[clamp(2.4rem,7vw,3.6rem)]">
                <span className="block text-white">Where we usually book</span>
                <span className="block text-amber-400">escort services in Chennai</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                We handle bookings across most of Chennai. Below is a quick look at common areas
                where clients meet our girls — apartments, hotels, serviced rooms, and resorts.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
                If your exact location isn&apos;t listed, send us a WhatsApp message with your area
                and hotel / apartment name. If we can cover it that day, we&apos;ll say so directly.
              </p>
            </div>
          </section>

          {/* Locations grid */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-4 sm:pt-6">
            <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Key service areas</h2>
              <span className="hidden sm:inline text-xs text-gray-500">
                Tap an area to see more details and example profiles.
              </span>
            </div>

            <Link
              href="/egmore-escorts"
              className="group mb-6 sm:mb-8 block rounded-2xl border border-amber-400/45 bg-gradient-to-r from-amber-500/12 via-zinc-950/90 to-zinc-900/90 p-4 sm:p-5 hover:border-amber-300/70 transition-all duration-200 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <span className="inline-flex items-center rounded-full border border-amber-300/60 bg-amber-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black mb-2">
                    Main Service Area
                  </span>
                  <p className="text-base sm:text-lg font-bold text-amber-200">Egmore Escorts - Priority Coverage</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Fast response, central access, and reliable same-day coordination from our most active area.
                  </p>
                </div>
                <span className="text-amber-200 text-xs sm:text-sm font-semibold group-hover:text-amber-100">
                  Open Egmore page →
                </span>
              </div>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {LOCATIONS.map((loc) => {
                return (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="group relative flex flex-col justify-between rounded-2xl transition-all duration-200 p-4 sm:p-5 border border-white/10 bg-zinc-950/80 hover:border-amber-500/40 hover:bg-zinc-900/80"
                >
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="font-semibold text-sm sm:text-base text-white">
                        {loc.name}
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                        Chennai
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                      {loc.blurb}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-[11px] sm:text-xs border-t border-white/5">
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200">
                      View area info
                    </span>
                    <span className="text-gray-500">Tap to open →</span>
                  </div>
                </Link>
              )})}
            </div>
          </section>
        </main>
      </Layout>

      <FloatingButtons />
    </>
  );
}
