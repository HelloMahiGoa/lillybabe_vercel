'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { buildWhatsAppBookingUrl } from '@/lib/booking-links';
import {
  getHomepageLastUpdatedIso,
  getHomepageLastUpdatedLabel,
} from '@/lib/homepage-content';

const WA_URL = buildWhatsAppBookingUrl(
  'Hi, I saw LillyBabe and want to book an escort in Chennai.'
);
const HOMEPAGE_LAST_UPDATED_ISO = getHomepageLastUpdatedIso();
const HOMEPAGE_LAST_UPDATED_LABEL = getHomepageLastUpdatedLabel();

const TRUST_BADGES = [
  'Photos we took ourselves — not random stock',
  'You pay after you meet her, not before',
  'Every profile checked before it goes live',
  'Nights, weekends, OMR to ECR — we answer',
];

const STATS = [
  { value: '10+', label: 'Years Active' },
  { value: '24/7', label: 'Available' },
  { value: '100%', label: 'Verified' },
  { value: '₹0',   label: 'Advance' },
];

/* ── SVG icons ─────────────────────────────────────────────────────────── */
const IconWA = ({ cls = 'w-5 h-5' }: { cls?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${cls} flex-shrink-0`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const Hero = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -top-20">
        <Image
          src="/images/hero-bg.webp"
          alt="LillyBabe — verified Chennai escorts and escort service bookings"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Hero section */}
      <section className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">

            {/* ── LEFT / PRIMARY COLUMN ── */}
            <div>

              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.18em]">
                  Chennai escort service · Since 2010
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-black leading-[0.88] tracking-tight mb-5 sm:mb-6">
                <span className="block text-white text-[clamp(3rem,11vw,7.5rem)]">Chennai</span>
                <span className="block text-amber-400 text-[clamp(3rem,11vw,7.5rem)]">Escorts</span>
              </h1>

              {/* Divider + tagline */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="h-px w-10 bg-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base font-medium">
                  LillyBabe — verified Chennai escorts, discreet booking, real people.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-7">
                We&apos;ve been arranging bookings here for over a decade — not with recycled ads, but with
                girls we&apos;ve actually met. On WhatsApp, pick a time, and the woman who walks in
                is the one you saw. No advance; you settle in cash once you&apos;re happy.
              </p>

              <div className="mb-7 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Content last updated
                </span>
                <time
                  dateTime={HOMEPAGE_LAST_UPDATED_ISO}
                  className="text-xs font-medium text-white sm:text-sm"
                >
                  {HOMEPAGE_LAST_UPDATED_LABEL}
                </time>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                {TRUST_BADGES.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    <CheckCircle className="h-3 w-3 text-amber-400 flex-shrink-0" />
                    <span className="text-white/75 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* ── CTA BUTTONS — mobile-first stacked, then 2-col grid ── */}
              <div className="grid grid-cols-1 gap-3 sm:max-w-sm">

                {/* 1. WhatsApp — primary */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 min-h-[56px]"
                >
                  <IconWA />
                  <span>Book on WhatsApp</span>
                </a>

              </div>
            </div>

            {/* ── RIGHT COLUMN (desktop only) ── */}
            <div className="hidden lg:flex flex-col gap-4">

              {/* Stats grid */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-white/4 border border-white/6"
                    >
                      <div className="text-2xl font-black text-amber-400 leading-none">{stat.value}</div>
                      <div className="text-gray-500 text-xs mt-1.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="bg-black/60 backdrop-blur-md border border-amber-500/15 rounded-2xl p-5">
                <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  How It Works
                </p>
                <div className="space-y-0">
                  {[
                    'Ping us on WhatsApp with what you need',
                    'We send profiles that are actually free tonight',
                    'Lock time — hotel, home, or our incall spot',
                    'Cash after she arrives — not before',
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-[10px] font-black">
                        {i + 1}
                      </span>
                      <span className="text-gray-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile stats row ── */}
          <div className="mt-8 lg:hidden grid grid-cols-4 gap-2">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl py-3"
              >
                <div className="text-sm font-black text-amber-400 leading-none">{stat.value}</div>
                <div className="text-gray-500 text-[10px] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
