'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TodaysProfilesSection } from '@/components/locations/todays-profiles-section';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';

export function TNagarEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/t-nagar-escorts', 'T Nagar Escorts | Verified Girls in Central Chennai');
    trackEvent('page_view', 'location_page', 't_nagar_escorts');
  }, []);

  // Track location-specific interactions
  const handleLocationInteraction = (action: string, element: string) => {
    trackEvent('location_interaction', action, element);
    trackEvent('engagement', 't_nagar_page', `${action}_${element}`);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 't_nagar_cta', ctaType);
  };

  const features = [
    {
      icon: Heart,
      title: 'Best-connected central zone',
      description:
        'T Nagar links quickly to key hotel belts and business corridors, so escorts in T Nagar Chennai can often be coordinated faster than outer-city pickups.'
    },
    {
      icon: Shield,
      title: 'Trust-first profile filtering',
      description:
        'This section prioritizes verified profiles and real-time shortlisting, helping you avoid generic ads and confirm only workable options.'
    },
    {
      icon: Clock,
      title: 'Peak-hour ETA clarity',
      description:
        'Rush traffic around Pondy Bazaar and Usman Road can shift arrival time, so clear landmark sharing gives more accurate booking timelines.'
    },
    {
      icon: Users,
      title: 'Built for locals and visitors',
      description:
        'Whether you are local, on a work trip, or in a hotel, T Nagar remains one of the easiest areas to arrange discreet, same-day plans.'
    }
  ];

    const WA_URL = 'https://wa.me/918121426651?text=Hi%2C%20I%20want%20to%20book%20verified%20escorts%20in%20T%20Nagar%20Chennai.%20Please%20share%20available%20profiles.';
    const TRUST_BADGES = [
      'Profiles verified before listing',
      'Pay-after-meet, no advance',
      'Private WhatsApp coordination',
      'Hotel and apartment compatible',
    ];
    const STATS = [
      { value: '100%', label: 'Verified' },
      { value: '24/7', label: 'Response' },
      { value: '₹0', label: 'Advance' },
      { value: 'T Nagar', label: 'Coverage' },
    ];

    return (
      <div className="min-h-screen bg-black">
        <Header />

        {/* Breadcrumb — dark, on-brand */}
        <nav className="bg-zinc-950/80 border-b border-white/8 py-3 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link href="/locations" className="text-gray-400 hover:text-amber-400 transition-colors">
                Locations
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-amber-400 font-semibold">T Nagar Escorts</span>
            </div>
          </div>
        </nav>

        {/* Hero — homepage-style: full-bleed image, pill, H1, trust, CTAs, sidebar */}
        <section className="relative">
          <div className="absolute inset-0 -top-20">
            <Image
              src="/images/hero-bg.webp"
              alt="T Nagar Escorts — LillyBabe Chennai"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 min-h-[calc(100vh-8rem)] flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
              <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
                {/* Left column */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 sm:mb-8"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.18em]">
                      Escorts in T Nagar · Verified and Discreet
                    </span>
                  </motion.div>

                  <motion.h1
                    className="font-black leading-[0.88] tracking-tight mb-5 sm:mb-6"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="block text-white text-[clamp(2.75rem,10vw,6.5rem)]">T Nagar Escorts</span>
                    <span className="block text-amber-400 text-[clamp(2.75rem,10vw,6.5rem)]">Chennai</span>
                  </motion.h1>

                  <motion.div
                    className="flex items-center gap-3 mb-5 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <div className="h-px w-10 bg-amber-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base font-medium">
                      <strong className="text-white">Verified T Nagar escorts</strong>, discreet WhatsApp coordination, and no-advance clarity.
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-7 sm:mb-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    Book premium escorts in T Nagar Chennai with verified profiles, private WhatsApp confirmation, and clear no-advance policy.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  >
                    {TRUST_BADGES.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="text-white/80 text-xs font-medium">{item}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                  >
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 min-h-[52px]"
                      onClick={() => handleCTAClick('whatsapp_hero')}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Book on WhatsApp
                    </a>
                    <a
                      href="tel:+918121426651"
                      className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/25 min-h-[52px]"
                      onClick={() => handleCTAClick('call_hero')}
                    >
                      <Phone className="h-5 w-5" />
                      Contact Now
                    </a>
                    <Link
                      href="#portfolio"
                      className="sm:col-span-2 flex items-center justify-center gap-2 text-white/90 hover:text-white border border-white/20 hover:border-amber-400/50 hover:bg-amber-500/10 rounded-2xl py-3.5 text-sm font-semibold transition-all duration-200"
                    >
                      <span>Explore Gallery</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Right column — stats + image (desktop) */}
                <motion.div
                  className="hidden lg:flex flex-col gap-4"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-4 rounded-xl bg-white/5 border border-white/8"
                        >
                          <div className="text-2xl font-black text-amber-400 leading-none">{stat.value}</div>
                          <div className="text-gray-500 text-xs mt-1.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/images/verified-girls.png"
                      alt="T Nagar Chennai profile highlights"
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Local · Updated</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile stats */}
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
          </div>
        </section>

        <TodaysProfilesSection
          areaLabel="T Nagar"
          eyebrowText="Tonight in T Nagar"
          headingText="Fresh T Nagar Escorts You Can Book Now"
          descriptionText="These are the latest active profiles for T Nagar escorts in Chennai, curated for faster shortlisting and direct WhatsApp confirmation."
        />

        {/* Portfolio — dark theme */}
        <section id="portfolio" className="py-16 sm:py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Real Looks, <span className="text-amber-400">T Nagar Vibe</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Swipe this live gallery to preview style, mood, and photo quality before you book escorts in T Nagar Chennai. Use refresh to load a new mix instantly.
              </p>
            </motion.div>
            <div className="mb-8">
              <RandomImageGallery
                count={20}
                imageHeight="h-64"
                showRefreshButton={true}
                className="mb-8"
              />
            </div>
          </div>
        </section>

        {/* Features — dark cards, amber accent */}
        <section className="py-16 sm:py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Why T Nagar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Why T Nagar Commands Faster Premium Response
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Strong <strong className="text-white">T Nagar escorts</strong> coordination depends on exact location, verified shortlists, and timing clarity, not recycled sales language.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content — dark theme, two highlight blocks */}
        <section className="py-16 sm:py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                  Why T Nagar Remains the Smart Core for <span className="text-amber-400">central Chennai planning</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Chennai escorts in T Nagar</strong> are easier to plan because the area sits close to key hotels, serviced apartments, and major cross-city connectors.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  For areas near Pondy Bazaar, Usman Road, and G.N. Chetty Road, pickup feasibility is easier to estimate, which improves confirmation speed and reduces last-minute confusion.
                </p>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20">
                <Image src="/images/escort-bg.webp" alt="T Nagar Chennai street-style visual" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                  What This Page Is Crafted to Help You Decide
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  This page helps you shortlist <strong className="text-white">verified T Nagar escorts</strong> quickly, compare style fit, and judge what can be arranged for your exact time window.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  If you need same-evening booking, hotel coordination, or apartment planning in central Chennai, this section gives a cleaner path from browsing to confirmed <strong className="text-white">escorts in T Nagar</strong>.
                </p>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20 order-1 lg:order-2">
                <Image src="/images/background.jpg" alt="Book T Nagar Escorts Chennai" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </motion.div>

            {/* Local logistics + booking reality */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Smart T Nagar booking starts with <span className="text-amber-400">your exact stay location</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Hotel towers, apartments, and market roads need different coordination
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      A pickup near Pondy Bazaar moves differently from a quieter apartment lane, even within the same zone. Sharing the exact property or landmark helps us confirm realistic profiles and ETA instead of giving generic promises.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Rush-hour windows decide how fast <strong className="text-white">escorts in T Nagar</strong> plans can move
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Afternoon slots are usually easier, while evening shopping traffic can stretch travel time. For same-night escorts in T Nagar, precise timing and one fixed landmark prevent delays and back-and-forth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  What users expect from a high-trust <span className="text-amber-400">T Nagar escorts page</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Proof of <strong className="text-white">verified profiles</strong>, not keyword stuffing
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Most people searching escorts in T Nagar want fast proof: current-looking photos, clear rates, and a direct contact route. Trust elements like these convert better than broad claims.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Clear first message saves time for both sides
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      In a busy central zone, this simple format works best: preferred time, exact location, hotel or apartment, and your profile type. That structure gets faster matches and fewer follow-up delays.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nearby coverage + practical planning */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Central neighborhoods often merge into <span className="text-amber-400">T Nagar booking demand</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Many <strong className="text-white">T Nagar escorts</strong> searches are nearby central stays
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Users may search for T Nagar escorts while staying in Nandanam, Thyagaraya Road, or nearby hotel lanes. That overlap is normal, and central routing is usually still workable with clear location sharing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Honest area coverage beats fake citywide guarantees
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      T Nagar performs strongest for central Chennai requests. Clear coverage boundaries build trust and help set realistic expectations before confirmation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  What to send first for faster <span className="text-amber-400">T Nagar availability checks</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Share location, timing, and <strong className="text-white">T Nagar escorts</strong> setup in one message
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      The best first ping includes area or landmark, preferred time, hotel/apartment details, and profile preference. This lets us shortlist verified options quickly without repeated questions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Expect honest matches, not universal availability
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Some nights have multiple good matches, others fewer. We prioritize accurate availability over instant yes replies so your plan is dependable.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: T Nagar Girls Know How to Have Fun + image */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
                  The T Nagar Advantage for <span className="text-amber-400">last-minute central bookings</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  <strong className="text-white">T Nagar escorts</strong> are often easier to coordinate for short-notice requests because the area sits at a practical midpoint between hotels, shopping corridors, and business routes in central Chennai.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  It does not promise instant confirmation every time, but it gives enough structure to estimate ETA, confirm access rules, and decide quickly whether an <strong className="text-white">escorts in T Nagar</strong> request is realistically possible.
                </p>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20 order-1 lg:order-2">
                <Image src="/images/header.jpg" alt="Luxury T Nagar Escort Girls" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* T Nagar Escorts Make Every Visit An Adventure + Builds Real Friendships */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Why high-intent users search <span className="text-amber-400">T Nagar first</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      They are already based near central hotel clusters
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Many bookings come from travelers staying near T Nagar, Nandanam, and adjoining roads. For them, <strong className="text-white">Chennai escorts in T Nagar</strong> is a more relevant intent than a broad citywide listing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      They prefer one precise landmark over vague citywide claims
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Searchers usually want a clear anchor point. Using a known zone like T Nagar reduces confusion and improves confidence versus pages that repeat keywords without telling users where the plan actually starts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  What creates a smoother <span className="text-amber-400">T Nagar booking flow</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Mention the exact landmark, not just the area name
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      The zone is wide and traffic-sensitive, so sharing a hotel name, road, or pin improves response accuracy. This is especially important when confirming <strong className="text-white">verified escorts</strong> for same-evening plans.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Share timing and format up front
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      A hotel outcall, late-night apartment plan, and longer booking window each follow different constraints. Clear details help confirm realistic options faster, including <strong className="text-white">no advance</strong> expectations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Image + Meet Our Independent T Nagar Girls */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20 order-1">
                <Image src="/images/vip-girl1.png" alt="T Nagar Chennai profile visual" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
                  What a premium local page must <span className="text-amber-400">show without fluff</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  It should show current-looking profiles, direct contact flow, and local timing context so users can decide quickly. That delivers more value than repeating generic phrases around <strong className="text-white">T Nagar escorts Chennai</strong>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  That is why this page prioritizes verified profile browsing, practical logistics, and confident decision support for <strong className="text-white">escorts in T Nagar</strong> instead of template-style hype.
                </p>
              </div>
            </motion.div>

            {/* T Nagar Escorts Show You The Rich Culture + Your Perfect Partner */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Local context that actually <span className="text-amber-400">improves booking decisions</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Commercial belts and hotel clusters directly affect ETA
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Traffic behavior in T Nagar differs from quieter residential zones. Evening crowd density and access rules can quickly change what is realistic for <strong className="text-white">Chennai escorts</strong> coordination.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Central routing keeps backup plans viable
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      If plans shift to a nearby central area, T Nagar usually remains workable due to better route flexibility. That makes last-minute changes less risky than far-edge city pickups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Why specificity wins for <span className="text-amber-400">ranking and trust</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Search engines reward specific local usefulness
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      A page that explains landmarks, timing windows, and local logistics sends stronger quality signals than one repeating only keywords. Useful detail is what helps <strong className="text-white">T Nagar escorts</strong> pages rank sustainably.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Unique intent beats volume-style copy
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      The strongest version of this page is the one that genuinely helps users choose quickly and safely, not one that swaps area names into a citywide template. Unique intent increases trust and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local planning notes — dark + amber */}
        <section className="py-20 px-4 bg-zinc-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full" />
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Local planning notes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Concierge Notes Before Booking in <span className="text-amber-400">T Nagar</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                These practical signals make <strong className="text-white">escorts in T Nagar</strong> inquiries faster, cleaner, and easier to confirm.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Lead with the landmark", text: "Saying only “T Nagar” is too broad. A clear hotel, mall, or road junction helps confirm verified options faster.", label: "Location detail" },
                { title: "Use a realistic time window", text: "In peak traffic, a 30-60 minute window is more practical than minute-perfect ETA requests from the first message.", label: "Timing" },
                { title: "Check entry rules first", text: "For hotel or serviced apartment plans, guest-entry policy can be the deciding factor. Confirm access before locking the booking.", label: "Access" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 border border-white/10 hover:border-amber-500/30 rounded-2xl p-6 lg:p-8 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {item.text}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        T Nagar concierge note
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-semibold text-amber-400/90 uppercase tracking-wider">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-8 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div><span className="block text-2xl font-black text-amber-400">Central</span><span className="text-xs text-gray-500 uppercase tracking-wider">Area advantage</span></div>
              <div><span className="block text-2xl font-black text-amber-400">Clear</span><span className="text-xs text-gray-500 uppercase tracking-wider">Landmark helps</span></div>
              <div><span className="block text-2xl font-black text-amber-400">Realistic</span><span className="text-xs text-gray-500 uppercase tracking-wider">Timing matters</span></div>
            </motion.div>
          </div>
        </section>

        {/* FAQ — dark + amber */}
        <section className="py-20 px-4 bg-gray-900 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Refined Answers for <span className="text-amber-400"><strong>T Nagar</strong> Booking Questions</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Direct clarity on <strong className="text-white">T Nagar escorts</strong>, timing, verification, and booking flow.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  category: "Location & Service",
                  question: "Why does T Nagar perform well for central Chennai booking intent?",
                  answer: "T Nagar sits near key hotels, serviced apartments, and central routes, which usually makes planning smoother than farther Chennai zones. It is one of the strongest anchors for realistic same-day coordination."
                },
                {
                  category: "Verification & Safety",
                  question: "What makes this T Nagar page more trustworthy than generic listings?",
                  answer: "It focuses on current-looking profiles, direct communication, and practical logistics instead of recycled copy. You still confirm timing and profile fit directly on WhatsApp before finalizing."
                },
                {
                  category: "Booking Process",
                  question: "What should I message first for faster T Nagar options?",
                  answer: "Send area or landmark, preferred time, hotel/apartment setup, and profile preference in one message. This structure speeds up shortlisting and avoids repeated questions."
                },
                {
                  category: "Services Available",
                  question: "Do hotel and apartment bookings both work in T Nagar?",
                  answer: "Yes, both are possible, but property rules and timing decide feasibility. T Nagar is generally practical for central hotel and apartment coordination when access details are clear."
                },
                {
                  category: "Availability",
                  question: "Are late-night T Nagar bookings usually possible?",
                  answer: "Late-night demand is common, but actual availability depends on traffic, distance, and active roster. A time window gives better results than expecting instant confirmation."
                },
                {
                  category: "Pricing",
                  question: "What details matter before asking rates?",
                  answer: "Location, timing, profile type, and hotel/apartment coordination shape the final quote. Share these first for accurate pricing and faster confirmation."
                },
                {
                  category: "Privacy & Discretion",
                  question: "How do I keep booking communication private and simple?",
                  answer: "Keep messages concise: timing, location, and setup details only. In busy areas like T Nagar, privacy and speed improve when essentials are shared clearly from the start."
                },
                {
                  category: "Quality Assurance",
                  question: "What should I expect from this page experience?",
                  answer: "Expect practical guidance for escorts in T Nagar, clearer profile browsing, and realistic coordination cues for central Chennai. The goal is informed decisions, not generic promises."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="group bg-zinc-900 border border-white/10 hover:border-amber-500/30 rounded-2xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    className="w-full p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0 w-9 h-9 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center">
                          <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-semibold text-amber-400/90 uppercase tracking-wider block mb-1">
                            {faq.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center"
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {openFAQ === index ? (
                          <Minus className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Plus className="w-4 h-4 text-amber-400" />
                        )}
                      </motion.div>
                    </div>
                  </button>
                      
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                          <div className="ml-12 sm:ml-14">
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-14 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Need a private, quick confirmation?
                </h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
                  Call or WhatsApp now for <strong className="text-white">verified T Nagar escorts</strong>, live availability, and clear no-advance booking guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="tel:+918121426651"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    Call Concierge
                  </Link>
                  <Link
                    href="https://wa.me/918121426651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Concierge
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
