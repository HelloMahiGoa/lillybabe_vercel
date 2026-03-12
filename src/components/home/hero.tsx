'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const WA_URL =
  'https://wa.me/918121426651?text=Hi%2C%20I%20saw%20LillyBabe%20and%20want%20to%20book%20an%20escort%20in%20Chennai.';
const TG_BOOK_URL =
  'https://t.me/Tamil_Escorts?text=Hi%2C%20I%20saw%20LillyBabe%20and%20want%20to%20book%20an%20escort%20in%20Chennai.';
const TG_CHANNEL_URL = 'https://t.me/Tamil_Escorts_Official';
const TG_GROUP_URL   = 'https://t.me/Tamil_Escorts_Chennai';

const TRUST_BADGES = [
  'Real girls — no stock photos',
  'Pay after the meet, not before',
  'Verified profiles only',
  'Available 24/7 across Chennai',
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
const IconTG = ({ cls = 'w-5 h-5' }: { cls?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${cls} flex-shrink-0`}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const IconUsers = ({ cls = 'w-5 h-5' }: { cls?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${cls} flex-shrink-0`}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

export const Hero = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -top-20">
        <Image
          src="/images/hero-bg.webp"
          alt="Chennai Escorts Service — LillyBabe"
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
                  Chennai Escorts · Est. 2010
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
                  LillyBabe — Verified. Discreet. Real.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-7 sm:mb-8">
                Over 10 years running escort bookings in Chennai. Real photos, no advance payment,
                and the person in the profile is exactly who shows up.
              </p>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

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

                {/* 2. Telegram direct booking */}
                <a
                  href={TG_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8fc4] active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-sky-900/30 min-h-[56px]"
                >
                  <IconTG />
                  <span>Book on Telegram</span>
                </a>

                {/* 3. Telegram Channel */}
                <a
                  href={TG_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/6 hover:bg-white/10 active:scale-95 border border-sky-500/30 hover:border-sky-400/50 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm min-h-[56px]"
                >
                  <IconTG cls="w-4 h-4" />
                  <span className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[10px] text-sky-300/80 font-normal uppercase tracking-widest">View profiles</span>
                    <span>Telegram Channel</span>
                  </span>
                  <span className="ml-auto flex items-center gap-1 bg-sky-500/15 text-sky-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    10K+
                  </span>
                </a>

                {/* 4. Telegram Group */}
                <a
                  href={TG_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/6 hover:bg-white/10 active:scale-95 border border-amber-500/20 hover:border-amber-400/40 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm min-h-[56px]"
                >
                  <IconUsers cls="w-4 h-4" />
                  <span className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[10px] text-amber-300/80 font-normal uppercase tracking-widest">Community</span>
                    <span>Telegram Group</span>
                  </span>
                  <span className="ml-auto flex items-center gap-1 bg-amber-500/15 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    2K+
                  </span>
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
                    'Message us on WhatsApp or Telegram',
                    'Choose from available profiles',
                    'Confirm your time and location',
                    'Pay cash only after the meet',
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

              {/* Quick contact cards */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/50 rounded-xl p-4 transition-all duration-200 text-center"
                >
                  <IconWA cls="w-6 h-6 text-[#25D366]" />
                  <span className="text-white text-xs font-semibold">WhatsApp</span>
                  <span className="text-gray-500 text-[10px]">+91 81214 26651</span>
                </a>
                <a
                  href={TG_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 hover:border-[#229ED9]/50 rounded-xl p-4 transition-all duration-200 text-center"
                >
                  <IconTG cls="w-6 h-6 text-[#229ED9]" />
                  <span className="text-white text-xs font-semibold">Telegram</span>
                  <span className="text-gray-500 text-[10px]">@Tamil_Escorts</span>
                </a>
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
