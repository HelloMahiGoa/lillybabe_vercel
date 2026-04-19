'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  MapPin,
  Sparkles,
  Crown,
  Gem,
  Building2,
  Headphones,
  MessageCircle,
  ChevronDown,
  Plus,
  Minus,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TodaysProfilesSection } from '@/components/locations/todays-profiles-section';
import { OMRDocSectionsLine9 } from '@/components/locations/omr-doc-sections-line9';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';
import { OMR_PAGE_IMAGES } from '@/constants/omr-page-images';
import { OMR_ESCORTS_FAQ } from '@/constants/omr-faq';
import {
  getHomepageLastUpdatedIso,
  getHomepageLastUpdatedLabel,
} from '@/lib/homepage-content';
import { emphasizePhrases } from '@/lib/emphasize-phrases';

const KW = {
  strong: 'font-bold text-amber-300',
  strongLight: 'font-bold text-rose-700',
  strongPink: 'font-bold text-pink-300',
  printInk: 'font-bold text-[#1c1917]',
  printPlum: 'font-bold text-[#f5e8ec]',
};

const BOOKING_STEPS: { title: string; detail: string }[] = [
  {
    title: 'Message on WhatsApp',
    detail:
      'Say you are looking along OMR or near your tech park, your rough timing, and whether you prefer a hotel meet or another arrangement. We reply with what fits.',
  },
  {
    title: 'Match & confirm',
    detail:
      'We shortlist from verified listings and confirm duration, venue rules (especially hotels), and expectations — still on chat, no pressure.',
  },
  {
    title: 'Meet, then pay',
    detail:
      'On our standard LillyBabe flow you settle after you meet — no advance. Carry agreed cash or the method you confirmed on WhatsApp.',
  },
];

const OMR_LAST_UPDATED_ISO = getHomepageLastUpdatedIso();
const OMR_LAST_UPDATED_LABEL = getHomepageLastUpdatedLabel();

export function OMREscortsClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    trackPageView('/omr-escorts', 'OMR Escorts | Verified Girls in Chennai');
    trackEvent('page_view', 'location_page', 'omr_escorts');
  }, []);

  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 'omr_cta', ctaType);
  };

  const WA_URL =
    'https://wa.me/918121426651?text=Hi%2C%20I%20want%20to%20book%20verified%20escorts%20on%20OMR%20Chennai.%20Please%20share%20available%20profiles.';
  const TRUST_BADGES = [
    'Profiles verified before listing',
    'Pay after you meet — no advance',
    'Private WhatsApp coordination',
  ];
  const STATS = [
    { value: '100%', label: 'Verified' },
    { value: '24/7', label: 'Bookings' },
    { value: '₹0', label: 'Advance' },
    { value: 'OMR', label: 'Focus' },
  ];

  const introCards = [
    {
      icon: Gem,
      title: 'Value-first Chennai escorts',
      body: (
        <>
          Looking for <strong className={KW.strongPink}>OMR escorts</strong> with clear,{' '}
          <strong className={KW.strongPink}>honest rates</strong>? LillyBabe is a real platform where{' '}
          <strong className={KW.strongPink}>local independent call girls</strong> and agency-style listings come together —{' '}
          <strong className={KW.strongPink}>no middleman commission</strong> games on our side; coordination stays direct on
          WhatsApp.
        </>
      ),
    },
    {
      icon: Shield,
      title: 'Verified before publish',
      body: (
        <>
          Every ad is reviewed by our team. We do not publish random numbers —{' '}
          <strong className={KW.strongPink}>verification comes first</strong>, then the profile goes live. That is how we keep{' '}
          <strong className={KW.strongPink}>Chennai escorts</strong> listings safer and more reliable for you.
        </>
      ),
    },
    {
      icon: Heart,
      title: 'Companionship that fits OMR',
      body: (
        <>
          Our <strong className={KW.strongPink}>escort girls on OMR</strong> enjoy matching your mood — from café plans
          and hotel evenings to relaxed downtime. We focus on <strong className={KW.strongPink}>consensual</strong>,{' '}
          <strong className={KW.strongPink}>discreet</strong> bookings with adults who know what they want.
        </>
      ),
    },
  ];

  const experienceBlocks = [
    {
      tag: 'VIP & events',
      title: 'VIP escorts for classy evenings',
      copy: (
        <>
          Need a polished partner for a <strong className={KW.strongLight}>corporate dinner</strong>, birthday, or private
          celebration? Our <strong className={KW.strongLight}>VIP Chennai escorts</strong> are chosen for presence,
          conversation, and ease in upscale venues — including <strong className={KW.strongLight}>5-star hotels</strong> near
          Sholinganallur, Perungudi, and the city centre.
        </>
      ),
      accent: 'from-violet-500/20 to-fuchsia-500/10',
    },
    {
      tag: 'Tailored plans',
      title: 'Customised to your evening',
      copy: (
        <>
          No two clients are alike. Share your idea — quiet night in, city drive, or late check-in — and we align you with
          someone who fits. <strong className={KW.strongLight}>Romantic dates</strong>,{' '}
          <strong className={KW.strongLight}>sightseeing</strong>, or a low-key hotel meet: discuss details on WhatsApp.
        </>
      ),
      accent: 'from-rose-500/20 to-amber-500/10',
    },
    {
      tag: 'Hotels & timing',
      title: 'Doorstep coordination, clear timing',
      copy: (
        <>
          We work with familiar <strong className={KW.strongLight}>Chennai hotel</strong> patterns for smooth entry and
          privacy. Choose <strong className={KW.strongLight}>incall-style</strong> or{' '}
          <strong className={KW.strongLight}>outcall</strong> flows; rates and duration are confirmed upfront on chat — no
          confusion at the door.
        </>
      ),
      accent: 'from-cyan-500/15 to-emerald-500/10',
    },
    {
      tag: 'Always on',
      title: '24/7 OMR & Chennai',
      copy: (
        <>
          Spontaneous plan or odd-hour arrival? <strong className={KW.strongLight}>Chennai escorts</strong> on our roster are
          reachable round the clock. Message when you land — we respond fast for{' '}
          <strong className={KW.strongLight}>OMR</strong>, ECR junctions, and connected corridors.
        </>
      ),
      accent: 'from-amber-500/20 to-orange-500/10',
    },
  ];

  const chennaiAreas: { label: string; href: string }[] = [
    { label: 'T Nagar', href: '/t-nagar-escorts' },
    { label: 'Adyar', href: '/adyar-escorts' },
    { label: 'Anna Nagar', href: '/anna-nagar-escorts' },
    { label: 'Egmore', href: '/egmore-escorts' },
    { label: 'Nungambakkam', href: '/nungambakkam-escorts' },
    { label: 'Teynampet', href: '/teynampet-escorts' },
    { label: 'Guindy', href: '/guindy-escorts' },
    { label: 'OMR', href: '/omr-escorts' },
    { label: 'ECR', href: '/ecr-escorts' },
    { label: 'Kilpauk', href: '/kilpauk-escorts' },
  ];

  const faqItems = [...OMR_ESCORTS_FAQ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <nav className="border-b border-dashed border-amber-500/25 bg-[linear-gradient(90deg,rgba(24,24,27,0.97)_0%,rgba(9,9,11,0.98)_50%,rgba(24,24,27,0.97)_100%)] py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-400 transition-colors hover:text-amber-400">
            Home
          </Link>
          <span className="text-white/30">/</span>
          <Link href="/locations" className="text-gray-400 transition-colors hover:text-amber-400">
            Locations
          </Link>
          <span className="text-white/30">/</span>
          <span className="font-semibold text-amber-400">OMR escorts</span>
        </div>
      </nav>

      {/* Hero — full-bleed cinematic + bottom wave transition */}
      <section className="relative pb-0">
        <div className="absolute inset-0 -top-20">
          <Image
            src={OMR_PAGE_IMAGES.heroBg}
            alt="OMR escorts Chennai — LillyBabe verified escort service"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />
        </div>
        <div className="relative z-10 flex min-h-[calc(100vh-8rem)] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 sm:mb-8"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                    #1 Chennai escorts · OMR
                  </span>
                </motion.div>
                <motion.h1
                  className="mb-5 font-black leading-[0.9] tracking-tight sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <span className="block text-[clamp(2.5rem,9vw,5.5rem)] text-white">OMR</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400 bg-clip-text text-[clamp(2.5rem,9vw,5.5rem)] text-transparent">
                    Escorts Chennai
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mb-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
                >
                  Welcome to <strong className={KW.strong}>LillyBabe</strong> — a leading{' '}
                  <strong className={KW.strong}>Chennai escorts service agency</strong> with real profiles,{' '}
                  <strong className={KW.strong}>verified ads</strong>, and <strong className={KW.strong}>WhatsApp</strong>{' '}
                  booking. Whether you want <strong className={KW.strong}>affordable call girls on OMR</strong> or a
                  premium evening near tech parks and hotels, we help you shortlist fast.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="mb-7 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Content last updated
                  </span>
                  <time dateTime={OMR_LAST_UPDATED_ISO} className="text-xs font-medium text-white sm:text-sm">
                    {OMR_LAST_UPDATED_LABEL}
                  </time>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 flex flex-wrap gap-2"
                >
                  {TRUST_BADGES.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {b}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('whatsapp_hero')}
                    className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-[#1ebe5d] sm:text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Book on WhatsApp
                  </a>
                  <Link
                    href="#todays-profiles"
                    className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/15 py-4 text-sm font-semibold text-white/90 transition hover:border-amber-400/40 hover:bg-amber-500/10"
                  >
                    Today&apos;s profiles
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden flex-col gap-4 lg:flex"
              >
                <div className="rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400/90">Snapshot</p>
                  <div className="grid grid-cols-2 gap-3">
                    {STATS.map((s) => (
                      <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                        <div className="text-2xl font-black text-amber-400">{s.value}</div>
                        <div className="mt-1 text-[11px] text-zinc-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-rose-500/20">
                  <Image
                    src={OMR_PAGE_IMAGES.heroAside}
                    alt="OMR escorts — Chennai companion service"
                    width={420}
                    height={280}
                    className="h-44 w-full object-cover sm:h-52"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs text-white/90">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-amber-300" />
                      IT corridor & main roads
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-2 lg:hidden">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-black/40 py-3 text-center backdrop-blur-sm"
                >
                  <div className="text-sm font-black text-amber-400">{s.value}</div>
                  <div className="mt-1 text-[10px] text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none relative z-[1] h-10 w-full bg-black sm:h-14"
          style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
          aria-hidden
        />
      </section>

      <TodaysProfilesSection
        areaLabel="OMR"
        sectionId="todays-profiles"
        eyebrowText="Tonight on OMR"
        headingText="Fresh OMR Escorts You Can Book Now"
        descriptionText="These are the latest active profiles for OMR escorts in Chennai, curated for faster shortlisting and direct WhatsApp confirmation."
      />

      {/* Print insert: flat ink + paper (mirrors Egmore triptych) */}
      <section className="relative border-y-[3px] border-black bg-[#d4cfc4] py-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply [background-image:repeating-linear-gradient(0deg,#000_0,#000_1px,transparent_1px,transparent_3px)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12">
            <motion.article
              id="omr-doc-act-i"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-2 border-black bg-[#f2efe8] shadow-[10px_10px_0_0_#1c1917]"
            >
              <div className="border-b-2 border-black bg-black px-3 py-2 sm:px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white sm:text-[11px]">
                  I — OMR
                </span>
              </div>
              <div className="p-5 sm:p-8">
                <header className="mb-8 max-w-2xl border-b-2 border-dotted border-[#1c1917]/25 pb-6">
                  <h3 className="font-serif text-[clamp(1.65rem,3.5vw,2.65rem)] font-normal leading-[1.15] text-[#1c1917]">
                    Plain words from LillyBabe
                  </h3>
                  <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-[#44403c]">
                    Rates, locals, and how we work — stated upfront.
                  </p>
                </header>
                <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
                  <div className="border-2 border-black bg-[#ebe6dc] px-6 py-8 sm:px-8 sm:py-10">
                    <p className="font-serif text-[1.0625rem] leading-[1.82] text-[#1c1917] sm:text-lg">
                      Hello, everyone welcome to #1 Chennai Escorts Service Provider by LillyBabe. Would you like{' '}
                      <strong className={KW.printInk}>OMR escorts</strong> with only 10k per shot? If Yes, then no
                      further anywhere because we have a large number of local beautiful girls. Our site is a real platform
                      to offer endless escort service through hot and sexy girls without any{' '}
                      <strong className={KW.printInk}>commission</strong>.
                    </p>
                  </div>
                  <figure>
                    <div className="border-2 border-black bg-[#1c1917] p-1">
                      <Image
                        src={OMR_PAGE_IMAGES.docLine1}
                        alt="Chennai escorts OMR LillyBabe"
                        width={640}
                        height={420}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#57534e]">
                      Chennai · LillyBabe
                    </figcaption>
                  </figure>
                </div>
              </div>
            </motion.article>

            <motion.article
              id="omr-doc-act-ii"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-2 border-black bg-[#f2efe8] shadow-[10px_10px_0_0_#1c1917]"
            >
              <div className="border-b-2 border-black bg-black px-3 py-2 sm:px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white sm:text-[11px]">
                  II — Listings
                </span>
              </div>
              <div className="p-5 sm:p-8">
                <header className="mb-8 max-w-xl border-b-2 border-dotted border-[#1c1917]/25 pb-6">
                  <h3 className="font-serif text-[clamp(1.65rem,3.5vw,2.55rem)] font-normal leading-[1.15] text-[#1c1917]">
                    Checked before they go live
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#44403c]">
                    Profiles pass our desk first; nothing is pasted in blindly.
                  </p>
                </header>
                <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
                  <div className="relative aspect-[4/3] w-full border-2 border-black bg-[#292524] lg:order-1">
                    <Image
                      src={OMR_PAGE_IMAGES.docLine3}
                      alt="Chennai independent call girls OMR"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative border-2 border-black bg-[#f3f0e8] p-7 sm:p-9 lg:order-2">
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#8c3b3b]" aria-hidden />
                    <p className="pl-4 font-serif text-[1.0625rem] leading-[1.82] text-[#1c1917] sm:text-lg">
                      Here many <strong className={KW.printInk}>Chennai Independent call girls</strong> and escorts, publish
                      their profiles. Our call girls in Chennai are also infamous with regard to having actual sexual fun in
                      Chennai. No prostitute can work here without verifying the information through us, Firstly all
                      advertisements will be verified by our team then only we will publish it here. So don&apos;t hesitate to
                      book Low rate call girls on <strong className={KW.printInk}>OMR</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              id="omr-doc-act-iii"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-2 border-black bg-[#f2efe8] shadow-[10px_10px_0_0_#1c1917]"
            >
              <div className="border-b-2 border-black bg-[#1a0a10] px-3 py-2 sm:px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#e7d5da] sm:text-[11px]">
                  III — Companions
                </span>
              </div>
              <div className="p-5 sm:p-8">
                <header className="mb-8 border-b-2 border-dotted border-[#1c1917]/25 pb-6 text-center lg:text-left">
                  <h3 className="mx-auto max-w-2xl font-serif text-[clamp(1.65rem,3.5vw,2.65rem)] font-normal leading-[1.15] text-[#1c1917] lg:mx-0">
                    When the plan is a night out or a stay
                  </h3>
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#44403c] lg:mx-0">
                    Resorts, pools, groups — framed as time away, not hype.
                  </p>
                </header>
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-10">
                  <div className="flex flex-col justify-center border-2 border-black bg-[#2a151c] px-6 py-8 sm:px-9 sm:py-10">
                    <p className="font-serif text-[1.0625rem] leading-[1.82] text-[#f0e4e8] sm:text-lg">
                      And our <strong className={KW.printPlum}>escort girls on OMR</strong> are willing to play with you
                      with some of the greatest companions that you will ever get. By contracting{' '}
                      <strong className={KW.printPlum}>Chennai call girls</strong> when in the mood to have fun and get
                      downhearted with planning pool parties, one night stays, group games and so on at resorts we make it
                      easy to bring happy vibrations in your life.
                    </p>
                  </div>
                  <div className="relative min-h-[220px] border-2 border-black bg-black lg:min-h-[300px]">
                    <Image
                      src={OMR_PAGE_IMAGES.docLine5}
                      alt="OMR escorts Chennai call girls"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 border-t-2 border-white/10 bg-black/60 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#d6c4c9]">
                      OMR
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="border-2 border-black bg-black px-5 py-10 text-center sm:px-8 sm:py-12"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#a8a29e] sm:text-[11px]">
                Ease &amp; companionship
              </h3>
              <p className="mx-auto mt-4 max-w-3xl font-serif text-[1.0625rem] leading-[1.82] text-[#e7e5e0] sm:text-lg">
                To help you let go of all your worries and unfavorable feelings, the{' '}
                <strong className="font-semibold text-[#faf8f5]">Chennai escorts</strong> offer excellent{' '}
                <strong className="font-semibold text-[#faf8f5]">escort services</strong> and companionship therapies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="omr-gallery"
        className="scroll-mt-24 bg-[linear-gradient(135deg,#fff_0%,#fff_45%,#fff5f7_45%,#ffe4e6_100%)] py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl">
              Gallery — <span className="text-rose-600">OMR mood</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-zinc-600">
              A rotating set of visuals from our Chennai pool. For live availability, always message{' '}
              <strong className="font-bold text-zinc-900">WhatsApp</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-rose-200/60 bg-white/80 p-4 shadow-xl shadow-rose-100/50 backdrop-blur-sm sm:p-6">
            <RandomImageGallery count={16} imageHeight="h-56" showRefreshButton className="mb-0" />
          </div>
        </div>
      </section>

      <OMRDocSectionsLine9 />

        {/* Intro — asymmetric bento (staggered masonry feel) */}
        <section className="relative border-y border-white/10 bg-zinc-950 py-16 sm:py-20">
          <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-rose-600/15 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-600/10 blur-[100px]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                <Sparkles className="h-3.5 w-3.5" />
                Real Chennai escorts platform
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for <span className="text-amber-400">trust</span> &amp;{' '}
                <span className="text-pink-400">speed</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                Everything below reflects how we actually work: <strong className="text-zinc-200">verify first</strong>,
                then publish — so your time on <strong className="text-zinc-200">OMR</strong> is not wasted on fake ads.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3 md:items-start">
              {introCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm ${
                    i === 0
                      ? 'rounded-3xl md:translate-y-0'
                      : i === 1
                        ? 'rounded-none md:translate-y-6 md:rounded-2xl md:border-amber-500/20'
                        : 'rounded-2xl md:-translate-y-3 md:rounded-bl-[3rem] md:border-pink-500/15'
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex p-3 ring-1 ring-white/10 ${
                      i === 1 ? 'rounded-lg bg-amber-500/25' : 'rounded-xl bg-gradient-to-br from-amber-500/30 to-rose-600/20'
                    }`}
                  >
                    <c.icon className="h-6 w-6 text-amber-200" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{c.body}</p>
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Split: polaroid-style frame */}
        <section className="bg-gradient-to-b from-zinc-900 to-black py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-pink-600/40 via-amber-500/20 to-transparent blur-2xl" />
              <div className="relative w-full max-w-md rotate-[-2deg] rounded-sm bg-white p-3 pb-12 shadow-2xl ring-1 ring-black/20 transition-transform duration-500 hover:rotate-0">
                <div className="overflow-hidden bg-black">
                  <Image
                    src={OMR_PAGE_IMAGES.polaroid}
                    alt="Chennai escorts OMR — discreet bookings"
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                <span className="bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
                  Breathtaking variety
                </span>
                <br />
                of Chennai call girls
              </h2>
              <p className="mt-4 text-zinc-400">
                Chennai brings together <strong className="text-amber-200">college-style independents</strong>,{' '}
                <strong className="text-amber-200">Russian escorts</strong>,{' '}
                <strong className="text-amber-200">models</strong>, <strong className="text-amber-200">housewife</strong>{' '}
                profiles, and <strong className="text-amber-200">VIP</strong> options — all in one pipeline. We do not
                promise magic numbers; we promise <strong className="text-amber-200">real choice</strong> and{' '}
                <strong className="text-amber-200">fast replies</strong> on WhatsApp.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <Crown className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>
                    <strong className="text-white">Premium &amp; luxury</strong> requests — hotels, late nights, and
                    high-trust handovers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>
                    Familiar with <strong className="text-white">OMR</strong>, tech-park belts, and south Chennai traffic
                    windows.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Headphones className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>
                    <strong className="text-white">24/7</strong> coordination — message when you are ready, not when the
                    clock is polite.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Experience — ticket-stub cards */}
        <section className="border-y border-white/10 bg-[linear-gradient(180deg,#000_0%,#0f0f12_50%,#000_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center font-mono text-2xl font-black uppercase tracking-[0.15em] text-white sm:text-3xl"
            >
              Experiences people <span className="text-pink-400">actually book</span>
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {experienceBlocks.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative overflow-hidden rounded-sm border border-dashed border-white/20 bg-gradient-to-br ${b.accent} p-6 pt-8 backdrop-blur-sm`}
                >
                  <div className="absolute left-0 right-0 top-0 flex justify-between border-b border-dashed border-white/15 px-2 py-1">
                    <span className="text-[9px] font-mono text-zinc-500">ADM — {String(i + 1).padStart(3, '0')}</span>
                    <span className="text-[9px] font-mono text-zinc-500">CHN</span>
                  </div>
                  <span className="mb-3 mt-2 inline-block border border-amber-400/40 bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-200/90">
                    {b.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white">{b.title}</h3>
                  <p className="mt-3 border-t border-dotted border-white/10 pt-3 text-sm leading-relaxed text-zinc-300">
                    {b.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide: booking flow, locality, rates, safety, boundaries */}
        <section
          id="omr-booking-guide"
          className="scroll-mt-24 border-t border-white/10 bg-[linear-gradient(180deg,#0a0a0c_0%,#050506_100%)] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-500/70">Before you message</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Planning a booking on <span className="text-amber-400">OMR</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Straight answers on how we coordinate, what affects price, and what we do not do — so the page works as a
                real guide, not filler.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <CheckCircle2 className="h-5 w-5 text-amber-400" aria-hidden />
                  How booking works
                </h3>
                <ol className="mt-6 space-y-5">
                  {BOOKING_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-sm font-bold text-amber-300"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-zinc-200">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="space-y-8"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    <MapPin className="h-5 w-5 text-amber-400" aria-hidden />
                    OMR &amp; connectivity
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    OMR runs south from Madhya Kailash through tech hubs toward Sholinganallur — long stretches and peak-hour
                    slowdowns. Mention your hotel or landmark when you message — we factor traffic and guest policy into timing.
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Nearby areas we link often</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chennaiAreas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-amber-200/90 transition hover:border-amber-500/40 hover:bg-amber-500/10"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white">Rates &amp; transparency</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    Price depends on duration, profile, and timing — not a single number for every request. Share your budget
                    on WhatsApp; we reply with options that fit, including affordable and premium tiers. Nothing is charged as
                    advance on our standard LillyBabe flow; you settle after you meet.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-emerald-900/30 bg-emerald-950/20 p-6 sm:p-8"
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Shield className="h-5 w-5 text-emerald-400" aria-hidden />
                  Verification &amp; safety
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Listings are checked before they go live. We prioritise consistent contact details and genuine photos so you
                  are not chasing fake ads. If something looks off, tell us — we remove repeat offenders from rotation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="rounded-2xl border border-rose-900/30 bg-rose-950/15 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-white">Boundaries we stick to</h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-400 marker:text-rose-400/80">
                  <li>Adults only — both sides must be consenting.</li>
                  <li>Hotel meets only where guest policy and law allow; we do not bypass security rules.</li>
                  <li>Discretion goes both ways: no harassment, no haggling after a clear agreement.</li>
                  <li>We coordinate companionship; anything illegal is off the table.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ — alternating rail colours (last content block before footer) */}
        <section className="bg-gradient-to-b from-zinc-950 to-black py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center font-serif text-3xl font-black italic text-white">FAQ — OMR escorts</h2>
            <div className="space-y-3">
              {faqItems.map((faq, index) => (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-r-2xl border border-white/10 border-l-4 bg-white/[0.03] ${
                    index % 2 === 0 ? 'border-l-pink-500/70' : 'border-l-violet-500/70'
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    aria-expanded={openFAQ === index}
                  >
                    <span className="text-sm font-bold text-white sm:text-base">{faq.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-300">
                      {openFAQ === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="border-t border-white/10 px-5 pb-4 pt-3">
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {emphasizePhrases(faq.a, [...faq.emphasis], 'font-semibold text-zinc-200')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        <FloatingButtons />
    </div>
  );
}
