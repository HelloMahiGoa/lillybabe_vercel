'use client';

import Image from 'next/image';
import { memo, useState } from 'react';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { HomepageExpandedSections } from '@/components/home/homepage-expanded-sections';
import { buildWhatsAppBookingUrl } from '@/lib/booking-links';

type PaymentTabKey = 'incall' | 'outcall';

const SESSION_PRICING = [
  { label: '1 Session', amount: '₹10,000 – ₹15,000' },
  { label: '2 Sessions', amount: '₹20,000 – ₹30,000' },
  { label: '3 Sessions', amount: '₹30,000 – ₹45,000' },
  { label: 'Full Night', amount: '₹35,000 – ₹50,000' },
] as const;

const PAYMENT_TAB_CONFIG: Record<
  PaymentTabKey,
  {
    label: string;
    subtitle: string;
    description: string;
    icon: typeof Users;
    highlights: string[];
    notes: { text: string; emphasis?: boolean }[];
  }
> = {
  incall: {
    label: 'Incall',
    subtitle: 'Private suites in town',
    description:
      "You come to us — small Chennai apartments we keep clean, quiet, and ready before you ring the bell. Good when you don't want hotel staff in your business.",
    icon: Users,
    highlights: ['Calm space, no lobby drama', "Money changes hands only after you've said hello"],
    notes: [
      { text: 'Room gets a quick clean and fresh air right before your slot — not the night before.' },
      { text: "You pay cash after she's in front of you; we don't do token UPI transfers upfront." },
      { text: "Want water, tea, dimmer lights? Say so when you book — we'll try." },
      { text: 'Running late or need longer? Ping early; someone else might be after you.' },
      { text: "Staff walk you in, then step back so you're not standing in a corridor wondering." },
    ],
  },
  outcall: {
    label: 'Outcall',
    subtitle: 'Hotel & home across Chennai',
    description:
      "She travels to your place — service apartment, gated villa, or hotel near Nungambakkam, ECR, wherever the night is. We confirm on WhatsApp so nobody's guessing.",
    icon: MapPin,
    highlights: ['City-wide, traffic-aware timing', 'Escorts who know hotel etiquette'],
    notes: [
      { text: "Outcall adds cab — that's separate from her session fee.", emphasis: true },
      { text: 'Long hops (roughly 10 km+) need cab money sent so we can actually book a car.', emphasis: true },
      { text: 'Check that your hotel allows visitors with ID — saves an awkward lobby fight.' },
      { text: "Surge pricing or 2 a.m. runs can bump the ride; we'll quote before she leaves." },
      { text: "You get driver + ETA texts before she's rolling — no vague she's nearby for an hour." },
    ],
  },
};

const PAYMENT_TAB_ENTRIES = Object.entries(PAYMENT_TAB_CONFIG) as Array<[
  PaymentTabKey,
  (typeof PAYMENT_TAB_CONFIG)[PaymentTabKey]
]>;


export const ContentSections = memo(() => {
  const [activePaymentTab, setActivePaymentTab] = useState<PaymentTabKey>('incall');
  const activePaymentContent = PAYMENT_TAB_CONFIG[activePaymentTab];
  const ActivePaymentIcon = activePaymentContent.icon;
  const whatsappBookingUrl = buildWhatsAppBookingUrl(
    "Hi, I saw your website LillyBabe and looking for escorts service in Chennai. Share me today's available profiles please."
  );

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Chennai <span className="text-red-500">Escorts</span> — Verified Profiles, No Guesswork
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            If you&apos;ve tried other Chennai escort listings, you already know the story: pretty pictures, then a total stranger at the door. We built LillyBabe around the opposite idea. Before anyone goes on our site, we&apos;ve sat across from her, checked the photos against the person, and made sure she&apos;s actually taking bookings in Tamil Nadu right now — not someone&apos;s old folder from three years ago.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <a
              href={whatsappBookingUrl}
              className="bg-zinc-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-zinc-700 transition-all duration-300 shadow-2xl transform hover:scale-105 min-h-[44px] flex items-center justify-center">
              <Phone className="inline w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">WhatsApp: +91 8121426651</span>
              <span className="sm:hidden">WhatsApp Us</span>
            </a>
          </div>
          <div className="bg-amber-500 h-px sm:h-1 w-24 sm:w-32 lg:w-48 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Why people still message us after ten-plus years
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We didn&apos;t grow this Chennai escort service with loud ads. Word spread because the girl who showed up looked like the profile, acted like the person we described, and the money only changed hands when you were already in the room. That&apos;s still how we run it.
            </p>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">The face in the picture walks in</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Our verified Chennai escorts don&apos;t get a listing until we&apos;ve met them. Hair colour changes, she takes a break — the profile gets pulled or updated. You&apos;re not booking a fantasy stock shot.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">Late nights are normal for us</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">A lot of our escort bookings land after dinner, after the flight lands, after the meeting runs long. We keep WhatsApp open for that, whether it&apos;s Anna Nagar at eleven or OMR past midnight.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">No advance — we mean it</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">We don&apos;t take UPI &quot;confirmation&quot; or wallet transfers before someone is standing in front of you. Cash after you&apos;re happy with how the Chennai escort booking went. Same rule for incall and hotel outcall.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">Same WhatsApp since we started</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Fly-by-night operators change numbers every few months. We didn&apos;t. If you saved us years ago, the contact still works — that matters when you want a trusted escort service in Chennai, not a one-off gamble.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/assets/look.jpg"
                alt="LillyBabe — verified Chennai escorts and independent escorts network"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500 border-2 sm:border-4 border-amber-500/30"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 bg-zinc-900 p-3 sm:p-4 lg:p-6 rounded-lg shadow-2xl border border-amber-500/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black fill-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg">Since 2010</h4>
                    <p className="text-xs sm:text-sm text-amber-300">In Chennai</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 bg-amber-500 text-black p-2 sm:p-3 lg:p-4 rounded-lg shadow-2xl border border-white/10">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black">500+</div>
                  <div className="text-xs sm:text-sm font-bold">Profiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 3: Chennai Escorts Services Details */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Escort Service in Chennai — Citywide, From ECR to Kilpauk
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our outcall escorts reach hotels and homes across T. Nagar, Anna Nagar, Adyar, Nungambakkam, Guindy, the IT stretch on OMR, and the beach road on ECR. Staying in a service apartment near the airport? We&apos;ll say honestly if timing works or if you should pick someone closer. No vague &quot;we&apos;ll try.&quot;
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">🏙️ One agency, whole map</h3>
            <p className="text-gray-300 leading-relaxed">
              From old-city lanes to the IT corridor, we route girls who actually agree to that distance. If you&apos;re in Mylapore or Mahabalipuram for the weekend, tell us the pin — we&apos;ll match someone who won&apos;t show up two hours late because the cab fare wasn&apos;t clear.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ Short bookings, not only full nights</h3>
            <p className="text-gray-300 leading-relaxed">
              Not every Chennai escort client wants dawn till dusk. A couple of hours after work, a stopover between flights — we price those honestly. Say what window you have when you text; we&apos;ll tell you who fits and what the session rate looks like.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
            Agency Girls, Independents, and What to Avoid in Chennai
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-amber-500/40">
              <h3 className="text-2xl font-bold text-white mb-4">🏢 Agency escorts — that&apos;s us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A proper Chennai escort agency gives you a phone number that answers, someone who rebooks if plans shift, and accountability when the rare problem happens. We only list premium and regular girls after a face-to-face check — Russian escorts, Tamil escorts, VIP profiles, they all sit in the same funnel.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Some women travel in from other cities for short stays; others live here year-round. Either way, the gallery isn&apos;t a free-for-all — if she&apos;s not active this week, she doesn&apos;t stay on the page.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">👩 Independent escorts in Chennai</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Independent escorts can be great — direct chat, sometimes lower overhead — but you&apos;re also the one chasing refunds when a contact line vanishes. A lot of fake &quot;independent&quot; ads float around South India right now.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We keep a small circle of independents we&apos;ve vetted the same way as our agency girls. Ask if you want that route; we&apos;ll tell you who&apos;s free and whether they&apos;re doing incall or outcall tonight.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">⚠️ Street pick-ups — we&apos;d skip them</h3>
              <p className="text-gray-300 leading-relaxed">
                Quick street deals in Chennai still come with the same stories: hygiene you can&apos;t verify, no profile to match, and zero comeback if something goes wrong. <strong className="text-amber-400">If you care about privacy and a verified escort booking, stick to a channel like ours or another outfit that actually answers the phone.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5: Find us on Google */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div>
            {/* Section Image */}
            <div className="p-4 lg:p-8">
              <Image
                src="/images/banners/10.png"
                alt="LillyBabe Chennai escorts — search and booking"
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="w-full h-auto object-contain rounded-2xl border border-white/20 shadow-2xl bg-black/20"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 bg-amber-500 px-6 py-3 rounded-full mb-6 shadow-lg">
                  <span className="text-2xl">🔍</span>
                  <span className="text-black font-black text-lg">FIND US ON GOOGLE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Most People Land Here After a Simple Search
                </h2>
                <div className="w-24 h-px bg-amber-500/60 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  A lot of clients tell us they typed <strong className="text-amber-400">&quot;Chennai escorts&quot;</strong> or <strong className="text-amber-400">&quot;escorts Chennai&quot;</strong> and ended up on <strong className="text-amber-400">LillyBabe.com</strong>. We don&apos;t control Google&apos;s rankings — nobody honest does — but we&apos;ve kept the site useful: real profiles, pages that load, and answers that match what you actually asked. Scroll the gallery, tap WhatsApp when someone fits, and we&apos;ll confirm who&apos;s free. Stale listings get removed; we&apos;d rather show fewer girls than fake availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How Escort Booking Works With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four straight steps. Most Chennai clients get a yes-or-no inside fifteen minutes — faster if it&apos;s late night and you already know the area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Say hello on WhatsApp</h3>
            <p className="text-gray-300">Message +91 8121426651 with what you want — Russian or local Tamil escort, hotel or home, rough time. We&apos;ll reply on WhatsApp with the best current options.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">See who&apos;s actually free</h3>
            <p className="text-gray-300">We&apos;ll send photos of girls on shift tonight — not a PDF from last month. Pick a face you like; we&apos;ll hold the slot while you confirm.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pin the meet (incall or outcall)</h3>
            <p className="text-gray-300">Hotel name and room, gated community rules, or our incall suite — whatever it is, send it clearly. We factor cab time for outcall across Chennai so nobody&apos;s guessing on the fare.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Settle in cash afterwards</h3>
            <p className="text-gray-300">Cash in hand once you&apos;ve met her — same-day escort booking, no wallet tricks upfront. If something felt off, tell us; we&apos;d rather fix a bad night than lose a straight client.</p>
          </div>
        </div>
      </section>

      {/* Section 3.6: Premium & Bachelor Party */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                💎 Luxury &amp; VIP Escort Requests in Chennai
              </h2>
              <div className="w-32 h-px bg-amber-500/60 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed text-lg mb-8 text-center max-w-4xl mx-auto">
                High-profile escorts and model-type bookings need a bit more conversation — dress code, language, whether she&apos;s fine at a five-star lobby versus a private suite. We&apos;ll match you with someone who&apos;s done that setting before. Rates sit above our standard Chennai escort pricing, but the no-advance rule doesn&apos;t change: cash after you&apos;re both in the room and comfortable.
              </p>

              <div className="bg-amber-500/8 rounded-2xl p-8 border border-amber-500/25">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 text-center">
                  🎉 Stag nights &amp; private groups
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  Throwing a bachelor send-off or a closed party in the city? <strong className="text-amber-400">LillyBabe</strong> can line up more than one escort for the same window if you give us a day&apos;s heads-up, a headcount, and a realistic venue. We coordinate arrival order and cab costs so you&apos;re not negotiating on the doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Random Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Gallery — Real Chennai Escort Photos (Rotating)
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            This grid pulls from profiles we&apos;re actually using right now — not a random internet scrape. Faces change as girls travel or pause; refresh if you want another sample. Spot someone you like? That&apos;s your cue to WhatsApp for tonight&apos;s lineup.
          </p>
        </div>
        <RandomImageGallery 
          count={20} 
          imageHeight="h-64" 
          showRefreshButton={true}
        />
      </section>

      {/* Section 3.7: Tab Wise Payment Details */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-950 rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-8 lg:p-12 space-y-12">
            <div className="text-center space-y-5">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Incall &amp; Outcall — How Paying Works
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Flip the tabs for hotel outcall versus our private incall suites. You&apos;ll see what we prep, how cab money works on long runs, and why the fee still lands after the meet — not on your phone screen beforehand.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="Payment options">
              {PAYMENT_TAB_ENTRIES.map(([key, config]) => {
                const Icon = config.icon;
                const isActive = key === activePaymentTab;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="payment-tab-panel"
                    className={`group flex items-center gap-4 rounded-full border px-6 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isActive
                        ? 'bg-amber-500 text-black border-amber-400 shadow-xl shadow-amber-500/40'
                        : 'bg-white/5 border-white/10 text-gray-200 hover:border-amber-400/40 hover:text-amber-200'
                    }`}
                    onClick={() => setActivePaymentTab(key)}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ${
                        isActive
                          ? 'bg-black/20 text-black'
                          : 'bg-amber-500/10 text-amber-300 group-hover:text-amber-200'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-amber-300'}`} />
                    </span>
                    <div className="text-left leading-tight">
                      <span className="block text-base font-semibold">{config.label}</span>
                      <span
                        className={`block text-sm ${
                          isActive ? 'text-black/80' : 'text-gray-400 group-hover:text-amber-200/90'
                        }`}
                      >
                        {config.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              id="payment-tab-panel"
              role="tabpanel"
              aria-live="polite"
              className="grid gap-10 lg:grid-cols-[1fr,1.1fr] items-start"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-black shadow-lg">
                    <ActivePaymentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {activePaymentContent.label} Experience
                    </h3>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {activePaymentContent.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activePaymentContent.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-amber-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {activePaymentContent.notes.map((note) => (
                    <div key={note.text} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-amber-300" />
                      <span
                        className={`text-base leading-relaxed ${
                          note.emphasis ? 'text-amber-200 font-semibold' : 'text-gray-200'
                        }`}
                      >
                        {note.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-950/80 rounded-2xl border border-white/8 p-8 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                  <h3 className="text-2xl font-bold text-white">Session Pricing</h3>
                </div>

                <div className="space-y-4">
                  {SESSION_PRICING.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 shadow-lg shadow-black/30"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-200">
                          ₹
                        </span>
                        <span className="text-lg font-semibold text-white">{tier.label}</span>
                      </div>
                      <span className="text-xl font-bold text-amber-300">{tier.amount}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-center text-sm text-gray-300">
                  Ballpark Chennai escort rates — your WhatsApp thread locks the number, including cab if you’re far out. No “surprise” thousands at the door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Outcall, Incall & Special Occasions */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-amber-400 mb-6">
                🎉 Outcall nights, hotel lounges & pool decks
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Plenty of our Chennai escorts are fine in a social setting — rooftop bar in Teynampet, a friend&apos;s villa pool, a quiet table before you head upstairs. Say what the vibe is when you text; we&apos;ll shortlist women who won&apos;t look lost in that crowd.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📅 Hold a slot without sending money first</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can pencil in tonight or tomorrow with zero wallet transfer. Too many agencies in this city took “booking fees” and vanished — we never did. We hold the time, she shows, you pay cash after.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">💰 Incall vs hotel outcall — both stay discreet</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Incall: you travel to our suite. Outcall: female escorts reach your hotel or flat with ID that matches what security asks. Not every girl does both; we&apos;ll say which fits your booking. Payment stays cash after the meet, whether it&apos;s a short session or the full night.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🔥 No cookie-cutter script</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Everyone walks in with different expectations. We won&apos;t hand you a fake checklist — we will ask what you want, see who&apos;s comfortable, and only then lock it. That&apos;s how you avoid the awkward “this isn&apos;t what I paid for” moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Single Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/7.jpg"
                alt="Pool Party Partner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why book through LillyBabe */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What you actually get from this Chennai escort agency
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            No brochure fluff — just what shows up on your phone and at the door when you book LillyBabe.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Names that are working tonight, not a PDF from last year.</strong> You tell us the type — Tamil escort, Russian escort, housewife vibe — we send who&apos;s actually on shift. You choose, we double-check, she heads out.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Replies that don&apos;t ghost you.</strong> Most WhatsApp pings get an answer in ten or fifteen minutes. If we&apos;re slammed, we say so — then we follow up instead of leaving you on unread.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">The number on chat is the number at the door.</strong> Session rate, cab if it&apos;s outcall, maybe a late-night bump — that&apos;s all spelled out before she leaves. Cash after, not a fresh invoice in the hallway.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">
                    🎯 A quick summary of what&apos;s included:
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>Current profiles with photos we&apos;ve personally verified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>No advance payment — cash after the meet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>Fair Chennai escort pricing talked through before anyone gets in a cab</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>Incall and outcall options depending on the girl</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>Short sessions (2–3 hours) and overnight bookings both available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>Quick response — usually under 15 minutes on WhatsApp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/9.jpg"
                alt="LillyBabe Chennai escort agency — booking benefits"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What makes LillyBabe different */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Why we&apos;re not another copy-paste escort site
          </h2>
          <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 space-y-4">
            <p>
              <strong className="text-white">Chennai&apos;s full of agencies recycling the same five photos.</strong> Clients tell us what actually matters: face matches photo, someone picks up the phone, and nobody&apos;s begging for UPI before a girl even leaves her house. That&apos;s the bar we built around.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">
                    🔥 Body types, ages, energy levels — a real mix
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Slim, curvy, tall, petite, older, younger-looking — preferences aren&apos;t weird, they&apos;re normal.</strong> Our gallery tries to show that range so you&apos;re not scrolling five clones with different names pasted on.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Don&apos;t see your type tonight? Ask anyway — someone might be off rotation or finishing another Chennai outcall and free in an hour.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">
                    ✨ People you can actually talk to for an hour
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">We drop girls who&apos;re tense, rude on text, or obviously counting minutes.</strong> You&apos;re paying for company, not a silent statue — so we bias toward escorts who can hold a conversation without making the room feel awkward.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Hair, nails, breath — basics matter. If we wouldn&apos;t sit across from her at dinner, we don&apos;t send her to your hotel.
                  </p>
                </div>
              </div>
            </div>

            {/* Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/8.jpg"
                alt="LillyBabe — diverse Chennai escorts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Chennai Escorts Services - What People Think */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        {/* First Row: Image Left, Content Right */}
        <div className="mb-16">
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/images/banners/5.jpg"
                  alt="Beautiful Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-amber-400 mb-4">
                  Hiring escorts in Chennai — what actually matters
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Most people want three things: nobody gossiping at the lobby, a woman who looks like her photo, and a price that doesn&apos;t mutate at midnight. <strong className="text-white">A real Chennai escort agency</strong> exists to handle those basics — not to sell you fairy tales.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The women we roster aren&apos;t random forwards. We&apos;ve shaken hands, checked ID where it matters, and watched how they speak to clients on text. That&apos;s the difference between a stiff evening and one that feels human.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    If something&apos;s off before she arrives, you tell us — we&apos;d rather reschedule than send you into a room already annoyed. That&apos;s easier when there&apos;s an agency phone that still answers next week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Content Left, Image Right */}
        <div>
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
                <Image
                  src="/images/banners/6.jpg"
                  alt="Beautiful Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-3xl font-bold text-amber-400 mb-4">
                  Short trips, long work weeks — still worth a good night
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Chennai pulls in consultants, ship crews, and folks who only have two free evenings before the flight out.</strong> Booking female escorts shouldn&apos;t feel like another project — it should be a clean WhatsApp thread and a door that opens on time.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Want dinner near the bay, a hotel night in Guindy, or just room service and conversation? Say it plainly; we&apos;ll match energy levels so you&apos;re not stuck with someone who only does one speed.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Good <strong className="text-white">escort service in Tamil Nadu&apos;s busiest city</strong> means she&apos;s present — not staring at her phone unless you both agreed this is a quiet night. That&apos;s the standard we push for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Story: From Dreams to Reality */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How we ended up running escort bookings for this long
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">LillyBabe began as a small Chennai crew</strong> tired of watching clients get ripped off by fake photos and UPI scams. The idea was boring on purpose: meet the girl first, post only what&apos;s real, and never take money before someone&apos;s actually in the room.
          </p>
          <div className="bg-amber-500/10 text-white p-8 rounded-2xl border border-amber-500/40">
            <h3 className="text-3xl font-bold">Repeat clients across Tamil Nadu &amp; visitors flying in</h3>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What we actually screen for</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Conversation, not just a pose</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Looks get you in the door; personality gets you invited back.</strong> We talk to women before we list them — not a five-minute chat, a real sense of whether they can handle a shy client, a drunk client, or a quiet hotel night without making it weirder.
                  </p>
                </div>
          
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Professional where it counts</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Punctuality, hygiene, how they treat drivers and security — we notice.</strong> You&apos;re not hiring a runway model for a spreadsheet; you&apos;re hiring someone who won&apos;t embarrass you in the lobby. That matters for premium escort bookings especially.
                  </p>
                </div>
            
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Lives outside this site</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">These are adults with day jobs, families, studies — not cardboard cutouts.</strong> That shows up in how they carry themselves over dinner or on a long cab ride to ECR. We prefer that over someone who&apos;s clearly checked out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Verified means we&apos;ve met her</h3>
              <p className="text-gray-300 mb-6 text-center font-bold">Gallery shots aren&apos;t scraped off Pinterest.</p>
              
              <h4 className="text-lg font-bold text-white mb-4">What we won&apos;t do</h4>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">If her hair, weight, or vibe shifts, we update or pull the listing.</strong> Sending someone else and hoping you won&apos;t notice isn&apos;t “marketing” — it&apos;s how you lose WhatsApp blocks. We&apos;d rather lose a booking than burn a client who trusted us with a Chennai escort search in the first place.
              </p>
            </div>
        
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Why Clients Keep Coming Back</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-white">Genuine, Enjoyable Company</h4>
                    <p className="text-sm text-gray-300">Companions who are actually good to be around</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-white">Available Around the Clock</h4>
                    <p className="text-sm text-gray-300">Flexible scheduling, day or night</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-white">Consistent Quality</h4>
                    <p className="text-sm text-gray-300">The same standard, every single booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19: 100% Genuine Chennai Escort Girls */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Real Chennai call girls &amp; escorts — who you book is who arrives
          </h2>
        </div>
          
        <div className="space-y-8 mb-16">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">We&apos;re not trying to win a poetry contest — we want you to leave the room glad you messaged us.</strong> That starts with genuine Chennai escort girls we&apos;ve actually spoken to: Russian speakers, local Tamil women, mallu profiles, older housewife types, younger college-age energy — when we say “available,” we mean someone on our roster, not a random forward.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Preferences change; our job is to match without judgement.</strong> Want a discreet outcall to a service apartment near OMR? Incall closer to Kilpauk? We&apos;ll say straight if timing or distance doesn&apos;t work instead of wasting your night.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">“Call girls Chennai” searches land on a lot of junk.</strong> We keep the same WhatsApp line and the same rule — cash after you&apos;ve met her — so people who found us years ago still know how to reach us.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Flying in for two days or stuck here on a long project?</strong> Tell us your hotel policy and ID situation up front; we route escorts who won&apos;t fight with security at 1 a.m.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">Booking independent escorts in Chennai online</strong> shouldn&apos;t mean twelve middlemen. One thread, clear rates, someone accountable if the night goes sideways — that&apos;s the whole pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Matchless Companionship with Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Companionship that fits the city — not a script
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <strong className="text-white">Between Marina evenings, filter coffee mornings, and traffic that never quite sleeps,</strong> Chennai has its own rhythm. The right escort isn&apos;t a trophy on your arm — it&apos;s someone who matches your energy whether you&apos;re in Adyar or crawling back from Mahabalipuram.
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">Some nights you want a slow dinner; others you want the door locked and the phone off.</strong> We book short sessions, overnights, and “just drive around and talk” evenings — whatever you label it, we&apos;ll match you with someone who signed up for that vibe.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Tourists, locals, folks on a visa stint — we&apos;ve heard most of it.</strong> Tell us if you need English-only, comfortable Tamil, or someone who won&apos;t mind a stop at a late-night dosa spot. That&apos;s the flexible side of a real Chennai escort service.
          </p>
        </div>
      </section>

      {/* Section 8: Variety of Escorts in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Russian, Tamil, VIP — labels that actually mean something here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We run outcall across Chennai</strong> — hotels, service flats, gated communities — and incall where a girl&apos;s comfortable hosting. Not every category is free every night; we&apos;ll tell you what&apos;s realistic instead of promising the moon.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Hotel &amp; room service</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Most guests already have a room — we work with that.</strong> Tell us the property name early; some places near Teynampet or Nungambakkam are strict about guest entry, and we&apos;d rather sort ID before she&apos;s in an auto halfway across the city.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">On time, low drama</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">She shows up dressed for the setting you described.</strong> Discreet escort service means no loud arguments at the gate, no Instagram live — just adults handling a private night like adults.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: GFE Experience in Chennai Escort */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            GFE in Chennai — when you want it to feel unforced
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Girlfriend-style time isn&apos;t about a checklist — it&apos;s about someone who reads the room.</strong> If you&apos;re lonely in a hotel on ECR or want a slow weekend without the relationship paperwork, say GFE when you text.
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">What GFE usually means with us</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              <strong className="text-white">We pick women who actually like longer bookings</strong> — the ones who won&apos;t treat dinner like a countdown. It&apos;s still a paid evening; we&apos;re honest about that. But the tone should feel like a date you didn&apos;t have to audition for.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Talk, not just small talk</h4>
                <p className="text-gray-300 text-sm">Enough English or Tamil to get through a meal without forced silence</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Touch that matches pacing</h4>
                <p className="text-gray-300 text-sm">She checks in instead of rushing the clock</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Headspace</h4>
                <p className="text-gray-300 text-sm">Someone who can relax with you after a long Chennai day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Affordable and Real Call Girls in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Fair rates for real call girls — not fantasy pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Chennai escort rates swing wildly online.</strong> We quote bands that match the girl&apos;s experience and the length of booking — starter sessions up to VIP nights — then stick to what we typed in WhatsApp.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">You see what you&apos;re paying for</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Cheap escort ads in Chennai often hide a second invoice.</strong> We&apos;d rather lose a cheap client than surprise you at the door — the session grid on this page is a guide; your chat confirms the number for tonight.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Direct WhatsApp, no daisy chain</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">You talk to the same desk that knows who&apos;s free.</strong> No “broker” forwarding your number to five strangers. That&apos;s how privacy stays intact — fewer people touching your phone number.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Why people keep searching us back</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">“Call girls Chennai” and “escorts near me” pull up dozens of pages.</strong> We stay in the mix because clients get a straight answer — yes she&apos;s free, no she&apos;s not, or here&apos;s a different option — instead of a week of excuses.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            <strong className="text-white">Professional doesn&apos;t mean cold — it means we show up when we say we will.</strong> Try one booking; if it&apos;s not your vibe, tell us. We&apos;d rather adjust than argue on the internet.
          </p>
        </div>
      </section>

      {/* Section 13: Our Amazing Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pick a lane — Tamil, Russian, model, or independent
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each link below goes to a focused page so you&apos;re not scrolling one endless list. Availability changes daily; WhatsApp is still the fastest way to see who&apos;s on tonight.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/teen.webp"
                alt="Teen Escorts in Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Teen Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Lively, fun, and easy to be around</p>
              <a href="/teen-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/housewife.webp"
                alt="Housewife Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Housewife Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Warm, grounded, and naturally at ease</p>
              <a href="/housewife-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/russian1.webp"
                alt="Russian Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Russian Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Striking looks with a confident, composed presence</p>
              <a href="/russian-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/independent.jpg"
                alt="Independent Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Independent Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Confident, self-assured, and direct</p>
              <a href="/independent-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/tamil.webp"
                alt="Tamil Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Tamil Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Local, genuine, with a natural warmth</p>
              <a href="/tamil-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/celebrity.webp"
                alt="Celebrity Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Celebrity Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Glamorous, polished, and used to the spotlight</p>
              <a href="/celebrity-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/mallu.webp"
                alt="Mallu Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Mallu Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Soft-spoken, genuine, and naturally appealing</p>
              <a href="/mallu-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/model.webp"
                alt="Model Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Model Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Photogenic, stylish, and effortlessly put-together</p>
              <a href="/model-escorts-in-chennai" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Detailed Escort Descriptions */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready when you are — matching beats browsing forever
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Backgrounds here range from students and hospitality grads to women who&apos;ve done this for years.</strong> What they share is a vetting call with us, up-to-date photos, and clear boundaries on what they&apos;re open to.
          </p>
        </div>
          
        <div className="text-center mt-12">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Tell us the vibe, not just the height</h3>
            <p className="text-lg text-gray-300 mb-6">
              Categories help, but the best Chennai escort booking happens when you say what kind of night you want — quiet, loud, English-heavy, Tamil-only, brand-new to this or old hand. We narrow the list, you pick, we lock logistics on WhatsApp.
            </p>
          </div>
        </div>
      </section>


      {/* Section 15: What Makes Our Chennai Escorts Stand Out */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Beyond the photo — what we actually filter for
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Pretty is easy to fake; reliability isn&apos;t.</strong> We pass on women who ghost on text, argue with drivers, or treat clients like ATM lines — because that&apos;s what gets agencies bad reviews, not a bad hair day.
          </p>
        </div>
            
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your pace, not ours</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Some clients want chatter; others want silence and touch.</strong> We try to pair you with someone who won&apos;t force a mood that isn&apos;t there — saves everyone the awkward &quot;so what do you do&quot; loop when you just want to switch off.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/beauty.png"
                alt="Chennai Escort Girl"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/sexy.png"
                alt="Chennai Escort Girl"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500 border-2 border-white/10"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">The boring stuff, handled</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">On-time, dressed for the setting, ID in hand for hotel security.</strong> Rates discussed before she moves — cab surcharges included when the map says so. Less theatre, more of what you paid for.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  You message; we coordinate. That&apos;s the point of using a Chennai escort agency instead of juggling ten random numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Booking in plain steps</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                <strong>WhatsApp first.</strong> Say area, timing, and whether you need hotel outcall or incall — we&apos;ll shortlist. Day slots, late nights, or a full weekend in the city all start the same way.
              </p>
              <p className="text-lg text-white leading-relaxed">
                You can browse category pages first or go straight to chat. Either way, we confirm who&apos;s free before anyone gets in a cab.
              </p>
            </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Hotels from Guindy to ECR — we&apos;ve done the awkward lobby dance before. Regulars come back because the process doesn&apos;t change: clear rate, clear ETA, cash after.
              </p>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-800 italic">
                  Say what you want without coding words. Age range, language, energy — specifics help; vague &quot;surprise me&quot; sometimes works, sometimes wastes an hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 16: Safety and Confidence */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Privacy for you, ground rules for everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Discreet escort service means your number doesn&apos;t get passed around — and our escorts get the same respect from us.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Trust built on repeat nights, not slogans</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Long-running Chennai escort services survive on word of mouth.</strong> If we burned clients or pushed women into unsafe meets, we&apos;d have folded years ago. Everyone on the roster is someone we&apos;ve actually met — not a CSV import.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Your phone number stays in one thread.</strong> We don&apos;t sell lists; we don&apos;t blast “offers.” Escorts get the same — we don&apos;t send them into sketchy situations without a check-in.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Consistency beats one amazing night.</strong> Same tone on WhatsApp, same cash-after rule, same willingness to hear if something went wrong — that&apos;s the boring part people actually rely on.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <Image
                src="/images/highprofilegirl.png"
                alt="High Profile Chennai Escort Girl"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-2xl border border-amber-500/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Same-day or next week — we&apos;ll say what&apos;s real</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Lines stay open 24/7 for messages — humans sleep, but someone checks in rotation. If you need a same-day Chennai escort booking, send area and time; if it&apos;s impossible, we&apos;ll say so instead of stalling.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Preferences aren&apos;t a niche feature here — they&apos;re the whole matchmaking bit. Tell us what you need; we&apos;ll tell you what&apos;s actually available.
              </p>
            </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Professionals on both sides: you show up bathed and respectful, she shows up on time and clear on what the night is. That&apos;s how repeat bookings happen — not luck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 20: What Sets Chennai Escorts at LillyBabe Apart */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Same standard, different faces
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            <strong className="text-white">Tamil, mallu, Russian, model-tier — labels help you search,</strong> but the line we draw is behaviour: punctual, hygienic, honest in photos. Everything else is taste.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Looks that match the pic</h3>
            <p className="text-gray-300 text-center">
              We&apos;d rather run a smaller gallery than leave fake airbrushing up. If her hair&apos;s different now, we update.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Can hold a room</h3>
            <p className="text-gray-300 text-center">
              Small talk, work rants, or comfortable silence — we roster women who read social cues instead of staring at the wall.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Same deal every booking</h3>
            <p className="text-gray-300 text-center">
              On time, discreet with staff, straight on cash — no favourites, no “special” surprise fees.
            </p>
          </div>
        </div>
      </section>

      {/* Section 21: Chennai Escorts Services Overview */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Services — independent, VIP, female, the lot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Short version: we coordinate people, time, and place.</strong> Longer version below — same WhatsApp for all of it.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Card 1 - Image Left, Text Right */}
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/images/banners/1.avif"
                  alt="Independent Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Independent Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Independents set their own boundaries — we just verify</strong> they&apos;re not going to vanish mid-thread. Popular with corporate travellers who want flexible chat without a call-centre voice.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You still get the agency safety net: if plans blow up, there&apos;s a desk that answers — not a dead contact number.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Text Left, Image Right */}
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
                <Image
                  src="/images/banners/2.avif"
                  alt="High Profile Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">High Profile Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">When the setting is a boardroom dinner or a five-star lobby,</strong> you want polished English, the right outfit, and zero drama. These bookings cost more; we quote clearly before she leaves.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  ETA depends on traffic — we don&apos;t promise “thirty minutes” if the map says ninety.
                </p>
              </div>
            </div>
          </div>
        
          {/* Card 3 - Image Left, Text Right */}
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/images/banners/3.avif"
                  alt="VIP Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">VIP Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">VIP here means experience + presentation,</strong> not a sticker slapped on every profile. Hospitality backgrounds help — they know how to move through a crowd without drawing the wrong attention.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Worth it when you&apos;re hosting out-of-town clients or treating yourself to a weekend that should feel expensive.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 4 - Text Left, Image Right */}
          <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
                <Image
                  src="/images/banners/4.avif"
                  alt="Female Chennai Escort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Female Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Female escorts for hotel outcall, home visits, or social plus-ones —</strong> all confirmed in writing before anyone travels. Boundaries are clear so nobody&apos;s negotiating in the hallway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 24: Client Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Reviews — short, unedited feedback
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don&apos;t run a public star wall; these are paraphrased notes clients sent back on WhatsApp — names shortened.
          </p>
        </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              &quot;Same girl as the photo, same rate we typed on WhatsApp. Didn&apos;t feel like a transaction — actually relaxed. Booking again next trip.&quot;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <p className="font-semibold text-white">Rahul L.</p>
                <p className="text-sm text-gray-300">Chennai</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              &quot;Work week in OMR — needed someone who could do dinner without awkward silence. On time, hotel ID sorted, no money drama before she walked in.&quot;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <p className="font-semibold text-white">Surya S.</p>
                <p className="text-sm text-gray-300">Bangalore</p>
              </div>
            </div>
          </div>
        
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              &quot;Tried three agencies in South India last year — only this number still saved in my phone. Same story: face matches, cash after, adults acting like adults.&quot;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <p className="font-semibold text-white">Arjun K.</p>
                <p className="text-sm text-gray-300">Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 28: Service Areas for Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Chennai escort service areas — &quot;near me&quot; without the gimmick
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Rough ETAs below — traffic laughs at fixed promises.</strong> Pin your location on WhatsApp; we&apos;ll say if tonight&apos;s realistic or if you should pick someone closer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* T-Nagar */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">T-Nagar</h3>
            <p className="text-gray-300 mb-3">Premium escort services in the shopping district</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">30 mins</span>
              <a href="/t-nagar-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Adyar */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Adyar</h3>
            <p className="text-gray-300 mb-3">Luxury escort experiences in high-end neighborhood</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/adyar-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* OMR */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">OMR</h3>
            <p className="text-gray-300 mb-3">Corporate escort services in IT corridor</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">60 mins</span>
              <a href="/omr-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Anna Nagar */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Anna Nagar</h3>
            <p className="text-gray-300 mb-3">Professional escort services in residential hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">40 mins</span>
              <a href="/anna-nagar-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* ECR */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">ECR</h3>
            <p className="text-gray-300 mb-3">Beachfront escort services along East Coast Road</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">75 mins</span>
              <a href="/ecr-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Kilpauk */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Kilpauk</h3>
            <p className="text-gray-300 mb-3">Budget-friendly escort services in central area</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/kilpauk-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Nungambakkam */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Nungambakkam</h3>
            <p className="text-gray-300 mb-3">High-profile escorts in upscale business district</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/nungambakkam-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Guindy */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Guindy</h3>
            <p className="text-gray-300 mb-3">Premium escort services in educational hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/guindy-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Teynampet */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Teynampet</h3>
            <p className="text-gray-300 mb-3">Exclusive escort services in business district</p>
            <div className="flex items-center justify-between">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">25 mins</span>
              <a href="/teynampet-escorts" className="text-amber-400 hover:text-amber-300 font-bold">View Area</a>
            </div>
          </div>
        </div>
      </section>

      <HomepageExpandedSections whatsappBookingUrl={whatsappBookingUrl} />

      {/* FAQ Section */}
      <section id="faq" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Quick answers</strong> — same topics as our structured FAQ for search engines, in plain language.
          </p>
        </div>

        {/* FAQ Accordion Style Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* FAQ 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Why book Chennai escorts through LillyBabe?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We only list escorts we have met in person,</strong> keep photos current, and take bookings on WhatsApp. You pay cash after you meet — we don&apos;t ask for advance UPI. Lines stay open around the clock for messages.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Are the escorts on LillyBabe verified?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes.</strong> A profile goes live only after we&apos;ve checked the person against her photos. If her look or availability changes, we update or remove the listing.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Which areas in Chennai do you cover?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Major zones across the city</strong> — Anna Nagar, T. Nagar, Teynampet, OMR, ECR, Nungambakkam, Adyar, Guindy, Kilpauk, Mahabalipuram, Mylapore, and more. Long hops may need cab fare clarified on WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  How do I book a Chennai escort safely?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Message us on WhatsApp</strong> with area, timing, and hotel or home outcall. We confirm who&apos;s free, agree the rate in chat, and you pay cash only after she arrives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  What types of escorts can I request?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Independent, Russian, Tamil, model, VIP, housewife, mallu, teen-age-range, celebrity-style</strong> — when available. Rosters change daily; ask on WhatsApp for tonight.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Is my privacy protected?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We don&apos;t sell or share your number.</strong> Chats stay on our booking lines; hotel visits go smoother when you confirm guest rules upfront.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 7 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  What are typical Chennai escort rates?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Depends on duration, category, and incall vs outcall plus cab.</strong> We quote a clear band on WhatsApp before anyone travels — use the homepage session grid as a guide, then confirm the exact figure in chat.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 8 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Can I book late at night or same day?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes, when someone on the roster is free.</strong> Late nights and same-day are normal; rush-hour traffic or long outcalls may shift ETA — we quote honestly.
                </p>
          </div>
        </div>
          </div>

          {/* FAQ 9 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
          </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  How do you handle safety?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We meet escorts before listing them</strong> and pull anyone who gets consistent complaints. You should show ID where hotels require it — that keeps everyone out of avoidable trouble.
                </p>
          </div>
          </div>
          </div>

          {/* FAQ 10 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Can I request specific preferences?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes — the more specific, the better the match.</strong> Language, body type, energy: say it plainly on WhatsApp and we&apos;ll tell you what&apos;s realistic tonight.
                </p>
          </div>
        </div>
        </div>
        
          {/* FAQ 11 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
          </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Overnight or travel bookings?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Overnights are common;</strong> multi-city travel needs more notice and a clear plan. Ask on WhatsApp with dates and we&apos;ll see who&apos;s open.
                </p>
          </div>
          </div>
          </div>

          {/* FAQ 12 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Social events or parties?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes, when you book someone who&apos;s comfortable in that setting.</strong> Describe the crowd and dress code — we&apos;ll shortlist escorts who won&apos;t look out of place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
ContentSections.displayName = 'ContentSections';

