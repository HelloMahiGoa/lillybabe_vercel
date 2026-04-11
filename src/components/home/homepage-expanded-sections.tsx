'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  MessageCircle,
  MapPin,
  Clock,
  UtensilsCrossed,
  Building2,
  Timer,
  Plane,
  Home,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

type HomepageExpandedSectionsProps = {
  whatsappBookingUrl: string;
};

const CATEGORY_SPOTLIGHT = [
  {
    href: '/russian-escorts-in-chennai',
    title: 'Russian escorts Chennai',
    blurb: 'International profiles when available — ask on WhatsApp for tonight’s list.',
    image: '/images/russian1.webp',
    accent: 'from-sky-500/20 to-indigo-500/10',
  },
  {
    href: '/tamil-escorts-in-chennai',
    title: 'Tamil escorts Chennai',
    blurb: 'Local language comfort, dinner-friendly company, city-wide outcall.',
    image: '/images/tamil.webp',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    href: '/independent-escorts-in-chennai',
    title: 'Independent escorts',
    blurb: 'Vetted independents with agency backup if plans shift.',
    image: '/images/independent.jpg',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    href: '/model-escorts-in-chennai',
    title: 'Model & VIP tier',
    blurb: 'Upscale settings — rates discussed clearly before anyone travels.',
    image: '/images/model.webp',
    accent: 'from-fuchsia-500/20 to-purple-500/10',
  },
] as const;

export function HomepageExpandedSections({ whatsappBookingUrl }: HomepageExpandedSectionsProps) {
  const occasions: {
    icon: LucideIcon;
    title: string;
    body: ReactNode;
  }[] = [
    {
      icon: UtensilsCrossed,
      title: 'Dinner & conversation',
      body: (
        <>
          Public-friendly energy, English or Tamil as you prefer, dress code matched to the restaurant.{' '}
          <strong className="text-gray-200">GFE</strong>-leaning without a stiff script.
        </>
      ),
    },
    {
      icon: Building2,
      title: 'Hotel / staycation',
      body: (
        <>
          Reception-friendly timing, ID clarity,{' '}
          <strong className="text-gray-200">service apartment escorts Chennai</strong> or branded hotels from Guindy to the bay.
        </>
      ),
    },
    {
      icon: Timer,
      title: 'Short window',
      body: (
        <>
          Tight schedule after work?{' '}
          <strong className="text-gray-200">Same day escort booking Chennai</strong> when the roster allows — we&apos;ll say no if traffic makes it silly.
        </>
      ),
    },
  ];

  return (
    <>
      {/* Bento: proof points + imagery */}
      <section className="max-w-7xl mx-auto px-4 mb-24" aria-labelledby="bento-heading">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Plan your evening</p>
          <h2 id="bento-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Chennai escort service — structured like a real booking desk
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We&apos;re not trying to cram every keyword into one sentence. You get clear steps,{' '}
            <strong className="text-gray-200">escorts in Chennai</strong> who fit the night you described, and rates before anyone moves — whether you&apos;re on OMR or near the airport.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-7 relative min-h-[280px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src="/images/banners/5.jpg"
              alt="Chennai escorts — discreet booking and verified profiles"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-2">Face = photo</p>
              <p className="text-white text-xl sm:text-2xl font-bold leading-snug max-w-lg">
                <strong className="text-white">Verified Chennai escorts</strong> only — we pull listings when someone&apos;s look or schedule changes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex-1 rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/10 to-black/40 p-6 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-amber-400 mb-3" aria-hidden />
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp &amp; Telegram</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-gray-200">Book escort WhatsApp Chennai</strong> — one thread, same team. Telegram when you want to browse profiles before you text.
              </p>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-zinc-900/80 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <MapPin className="w-7 h-7 text-sky-400 mb-2" aria-hidden />
                <h3 className="text-lg font-bold text-white mb-1">City-wide outcall</h3>
                <p className="text-gray-500 text-sm">
                  Anna Nagar to ECR — <strong className="text-gray-300">hotel escorts Chennai</strong> and service apartments, with cab logic spelled out.
                </p>
              </div>
              <Clock className="w-10 h-10 text-gray-600 hidden sm:block flex-shrink-0" aria-hidden />
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <Sparkles className="w-7 h-7 text-amber-400 mb-3" aria-hidden />
            <h3 className="text-lg font-bold text-white mb-2">No advance mantra</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <strong className="text-gray-200">No advance escorts Chennai</strong> isn&apos;t a slogan — it&apos;s how we&apos;ve stayed in business. Cash after you&apos;ve said hello in person.
            </p>
            <a
              href={whatsappBookingUrl}
              className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300"
            >
              Start on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-8 rounded-3xl border border-white/10 overflow-hidden bg-zinc-900 flex flex-col md:flex-row">
            <div className="relative md:w-1/2 min-h-[200px]">
              <Image
                src="/images/banners/6.jpg"
                alt="Incall and outcall Chennai escort options"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-xl font-bold text-white mb-3">Incall &amp; outcall — same rules</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-gray-200">Incall escorts Chennai</strong> suites stay low-profile;{' '}
                <strong className="text-gray-200">outcall</strong> to your hotel needs ID that matches reception. We say no when a setup is messy — better than a fight at the gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasion cards */}
      <section className="max-w-7xl mx-auto px-4 mb-24" aria-labelledby="occasion-heading">
        <div className="text-center mb-12">
          <h2 id="occasion-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            What kind of Chennai night are you booking?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Same <strong className="text-gray-200">Chennai escort agency</strong> — different pacing. Tell us which column fits; we&apos;ll narrow profiles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {occasions.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 hover:border-amber-500/30 transition-colors"
              >
                <Icon className="w-9 h-9 text-amber-400 mb-4" aria-hidden />
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 mb-24" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-3xl md:text-4xl font-black text-white text-center mb-4">
          From first ping to the door
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto text-sm sm:text-base">
          <strong className="text-gray-200">Escort booking Chennai</strong> doesn&apos;t need twelve steps — just four we actually follow.
        </p>
        <ol className="relative border-l border-amber-500/30 ml-4 sm:ml-6 space-y-10 pl-8 sm:pl-10">
          <li className="relative">
            <span className="absolute -left-[25px] sm:-left-[33px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black text-xs font-black border-4 border-gray-900">
              01
            </span>
            <h3 className="text-lg font-bold text-white mb-2">First message</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Send area, time window, and incall or hotel outcall. Chennai escort booking starts with context — not a one-word &quot;hi&quot;.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] sm:-left-[33px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black text-xs font-black border-4 border-gray-900">
              02
            </span>
            <h3 className="text-lg font-bold text-white mb-2">Match &amp; rate</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We reply with who&apos;s free and a band for <strong className="text-gray-200">verified escorts Chennai</strong> sessions. No pay-before-meet.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] sm:-left-[33px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black text-xs font-black border-4 border-gray-900">
              03
            </span>
            <h3 className="text-lg font-bold text-white mb-2">Lock logistics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hotel name, tower, ID rules, or our incall pin — confirmed on WhatsApp so cab and ETA stay honest.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] sm:-left-[33px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black text-xs font-black border-4 border-gray-900">
              04
            </span>
            <h3 className="text-lg font-bold text-white mb-2">After you meet</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cash once you&apos;re comfortable. <strong className="text-gray-200">Discreet escort service Chennai</strong> means settling in private, not at the lobby desk.
            </p>
          </li>
        </ol>
      </section>

      {/* Visitors vs locals */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="relative min-h-[280px] lg:min-h-[360px]">
            <Image
              src="/images/banners/7.jpg"
              alt="Visitors booking escorts near Chennai airport and hotels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/20 lg:from-black/80 lg:to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end lg:justify-center">
              <Plane className="w-8 h-8 text-sky-400 mb-3" aria-hidden />
              <h3 className="text-2xl font-black text-white mb-2">Flying in / hotel card</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Share tower, floor policy, and whether <strong className="text-white">Chennai escorts near me</strong> routing makes sense from the airport or IT corridor — we&apos;ll sanity-check distance before promising a time.
              </p>
            </div>
          </div>
          <div className="bg-zinc-950 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
            <Home className="w-8 h-8 text-amber-400 mb-3" aria-hidden />
            <h3 className="text-2xl font-black text-white mb-2">Local &amp; repeat clients</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Same <strong className="text-gray-200">Chennai call girls</strong> WhatsApp line for years — we remember rough preferences if you want continuity, and we&apos;ll tell you if a favourite is back on roster.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300 w-fit"
            >
              All Chennai escort locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category spotlight */}
      <section className="max-w-7xl mx-auto px-4 mb-24" aria-labelledby="spotlight-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 id="spotlight-heading" className="text-3xl md:text-4xl font-black text-white mb-2">
              Explore categories — then come back to WhatsApp
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              Category pages go deeper on <strong className="text-gray-200">Russian</strong>, <strong className="text-gray-200">Tamil</strong>,{' '}
              <strong className="text-gray-200">independent</strong>, and <strong className="text-gray-200">VIP escorts Chennai</strong>; the homepage stays the overview.
            </p>
          </div>
          <a
            href={whatsappBookingUrl}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-white font-bold text-sm hover:bg-[#1ebe5d] transition-colors min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5" />
            Ask tonight&apos;s roster
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORY_SPOTLIGHT.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b ${cat.accent} hover:border-amber-500/40 transition-all hover:-translate-y-1`}
            >
              <div className="relative h-44">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-5 pt-2">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">{cat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{cat.blurb}</p>
                <span className="text-amber-400 text-xs font-semibold inline-flex items-center gap-1">
                  Open page <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
