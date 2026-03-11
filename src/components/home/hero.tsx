'use client';

import Image from 'next/image';
import { MessageCircle, ChevronDown, CheckCircle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  totalProfiles?: number;
}

const WA_BOOK =
  'https://wa.me/918121426651?text=Hi%2C%20I%20saw%20LillyBabe%20and%20want%20to%20book%20an%20escort%20in%20Chennai.';
const WA_DISCOUNT =
  'https://wa.me/918121426651?text=Hi%2C%20I%27d%20like%20to%20claim%20the%2010%25%20discount%20from%20LillyBabe.';

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
  { value: '₹0', label: 'Advance' },
];

const HOW_IT_WORKS = [
  'Message us on WhatsApp',
  'Choose from available profiles',
  'Confirm your time and location',
  'Pay cash only after the meet',
];

export const Hero = ({ totalProfiles = 0 }: HeroProps) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  const scrollToProfiles = () => {
    document.querySelector('#telegram-daily-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waUrl = timeLeft > 0 ? WA_DISCOUNT : WA_BOOK;

  return (
    <div className="relative">
      {/* ── Background ── */}
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
        {/* Left-heavy gradient so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* ── Main section ── */}
      <section className="relative z-10 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">

            {/* ── Left column ── */}
            <div>

              {/* Pill tag */}
              <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Chennai Escorts Service · Est. 2010
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-black leading-[0.88] tracking-tight mb-6">
                <span className="block text-white text-[clamp(3.5rem,10vw,7.5rem)]">
                  Chennai
                </span>
                <span className="block text-amber-400 text-[clamp(3.5rem,10vw,7.5rem)]">
                  Escorts
                </span>
              </h1>

              {/* Divider + tagline */}
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px w-14 bg-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-base sm:text-lg font-medium">
                  LillyBabe — Verified. Discreet. Real.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mb-9">
                We&apos;ve run escort bookings in Chennai for over 10 years. Real photos, no advance
                payment, and the person in the profile is exactly who shows up.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {TRUST_BADGES.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-white/80 text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-0.5 min-h-[52px]"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  {timeLeft > 0
                    ? `Book Now — 10% Off  ${formatTime(timeLeft)}`
                    : 'Book on WhatsApp'}
                </a>

                <button
                  onClick={scrollToProfiles}
                  className="inline-flex items-center justify-center gap-3 bg-white/8 hover:bg-white/14 border border-white/20 hover:border-amber-400/50 text-white hover:text-amber-400 font-semibold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm min-h-[52px]"
                >
                  <Users className="h-5 w-5 flex-shrink-0" />
                  View Today&apos;s Profiles
                </button>
              </div>
            </div>

            {/* ── Right column (desktop only) ── */}
            <div className="hidden lg:flex flex-col gap-4">

              {/* Available today card */}
              {totalProfiles > 0 && (
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center">
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                      Available Today
                    </span>
                  </div>
                  <div className="text-6xl font-black text-white leading-none mb-2">
                    {totalProfiles}
                  </div>
                  <div className="text-gray-500 text-sm">Verified profiles updated today</div>
                </div>
              )}

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
                <div className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  How It Works
                </div>
                <div className="space-y-0">
                  {HOW_IT_WORKS.map((step, i) => (
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
          <div className="mt-10 lg:hidden grid grid-cols-4 gap-2.5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl py-4"
              >
                <div className="text-base font-black text-amber-400 leading-none">{stat.value}</div>
                <div className="text-gray-500 text-[10px] mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
          <button
            onClick={scrollToProfiles}
            className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-amber-400 transition-colors duration-200 group"
            aria-label="Scroll to profiles"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </section>
    </div>
  );
};
