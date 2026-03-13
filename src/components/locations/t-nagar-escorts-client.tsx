'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';

export function TNagarEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/t-nagar-escorts', 'T Nagar Escorts | Great Escort Services in T Nagar Chennai');
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
      title: 'Perfect Location',
      description: 'T Nagar is where all the action happens in Chennai! Shopping, dining, business meetings - our girls know all the best spots and can guide you around like locals.'
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'We\'ve been working in T Nagar for years and know what makes a great experience. Our girls are handpicked and genuinely care about making your time special.'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Whether you need someone for lunch, dinner, or late night fun, we\'re here whenever you need us. T Nagar never sleeps, and neither do we!'
    },
    {
      icon: Users,
      title: 'Real & Verified',
      description: 'No fake profiles or surprises here. Every girl you see is real, verified, and excited to meet you. What you see is exactly what you get!'
    }
  ];

    const WA_URL = 'https://wa.me/918121426651?text=Hi%2C%20I%20saw%20LillyBabe%20T%20Nagar%20escorts%20page%20and%20want%20to%20book%20in%20T%20Nagar%20Chennai.';
    const TRUST_BADGES = [
      'Real girls — no stock photos',
      'Pay after the meet, not before',
      'Verified profiles in T Nagar',
      'Available 24/7 in Chennai',
    ];
    const STATS = [
      { value: '24/7', label: 'Available' },
      { value: '100%', label: 'Verified' },
      { value: '₹0', label: 'Advance' },
      { value: '10+', label: 'Years' },
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
                      T Nagar Escorts · Chennai
                    </span>
                  </motion.div>

                  <motion.h1
                    className="font-black leading-[0.88] tracking-tight mb-5 sm:mb-6"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="block text-white text-[clamp(2.75rem,10vw,6.5rem)]">T Nagar</span>
                    <span className="block text-amber-400 text-[clamp(2.75rem,10vw,6.5rem)]">Escorts</span>
                  </motion.h1>

                  <motion.div
                    className="flex items-center gap-3 mb-5 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <div className="h-px w-10 bg-amber-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base font-medium">
                      Premium company in Chennai&apos;s heart — Verified. Discreet. Real.
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-7 sm:mb-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    Amazing company right in T Nagar. Our girls know the area like the back of their hand — shopping, dining, or private time. Same girl in the photos, no advance payment.
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
                      Call Now
                    </a>
                    <Link
                      href="#portfolio"
                      className="sm:col-span-2 flex items-center justify-center gap-2 text-white/90 hover:text-white border border-white/20 hover:border-amber-400/50 hover:bg-amber-500/10 rounded-2xl py-3.5 text-sm font-semibold transition-all duration-200"
                    >
                      <span>View Gallery</span>
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
                      alt="Verified T Nagar Escorts — LillyBabe"
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Premium · Verified</span>
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
                Our Beautiful <span className="text-amber-400">T Nagar</span> Escorts
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Meet some of our most popular girls who love working in T Nagar. Real, verified, and ready to show you a great time in Chennai&apos;s most happening area.
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
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Why T Nagar Girls Are Special
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here&apos;s what makes our T Nagar experience different from the rest.
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
                  Why T Nagar is <span className="text-amber-400">Perfect</span> for You
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  T Nagar is where Chennai comes alive — shopping, dining, and a vibe that&apos;s just electric. Our girls love working here and know all the best spots.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you&apos;re here for business or to explore, our T Nagar girls can take you shopping, grab dinner at the coolest places, or just hang out and have a great time.
                </p>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20">
                <Image src="/images/escort-bg.webp" alt="Premium T Nagar Escort Services" fill className="object-cover" />
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
                  What Makes Our T Nagar <span className="text-amber-400">Girls Special</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Our T Nagar girls are smart, fun, and know how to make any situation comfortable — professional when needed, relaxed when you want to have fun.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  They know T Nagar inside out. Whether you want to hit the shops, try amazing food, or chill in your hotel, they&apos;re up for anything and will make sure you have the best time.
                </p>
              </div>
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20 order-1 lg:order-2">
                <Image src="/images/background.jpg" alt="Book T Nagar Escorts Chennai" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </motion.div>

            {/* T Nagar Escorts Know All The Secret Spots + Why Our Service Is Special */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  T Nagar Escorts Know All The <span className="text-amber-400">Secret Spots</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Local T Nagar Escort Girls Show You Hidden Places
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      You know what&apos;s cool about our T Nagar escorts? They&apos;re not just pretty faces — they&apos;re like having a local friend who knows all the best spots! These girls have been around T Nagar for years and know where to find the tastiest street food, the cheapest saree shops, and all those little places that only locals know about. It&apos;s like getting a backstage pass to the real T Nagar!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Know The Best Times To Visit
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      T Nagar has its own schedule, and our call girls know it inside out! Want to shop without the crazy crowds? They&apos;ll tell you exactly when to go. Looking for the freshest flowers or the best deals? They know when vendors set up and when prices drop. It&apos;s like having a personal T Nagar insider who&apos;s always got your back!
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Why Our T Nagar Escort Service Is <span className="text-amber-400">Special</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Who Actually Care
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Here&apos;s the thing about our T Nagar escort girls — they&apos;re not just doing a job, they actually love this place! Most of them grew up around here, so they know all the cool stories about every street and building. When you&apos;re with them, you can tell they&apos;re genuinely excited to show you around. It&apos;s like hanging out with a friend who&apos;s super proud of their neighborhood!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Independent T Nagar Escorts Make Real Connections
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our independent T Nagar escorts are different because they actually remember you! They&apos;ll ask about your family, remember your favorite foods, and suggest places based on what you like. It&apos;s not just about the money — these girls genuinely want you to have an amazing time. That&apos;s why people keep coming back to our T Nagar escort service!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Image + What Makes Our T Nagar Girls Special */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/20 order-1">
                <Image src="/images/background.jpg" alt="Book T Nagar Escorts Chennai" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
                  What Makes Our T Nagar <span className="text-amber-400">Girls Special</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Our T Nagar girls aren&apos;t just pretty faces — they&apos;re smart, fun, and know how to make any situation comfortable. They&apos;ve got that perfect mix of being professional when needed and totally relaxed when you want to just have fun.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you want to hit the shops, try some amazing food, or just chill in your hotel room, they&apos;re up for anything. They know T Nagar inside out and will make sure you have the best time possible.
                </p>
              </div>
            </motion.div>

            {/* T Nagar Escorts Show You The Best Lifestyle + Creates Amazing Memories */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  T Nagar Escorts Show You The Best <span className="text-amber-400">Lifestyle</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Are Shopping Experts
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      You know what&apos;s awesome about our T Nagar call girls? They&apos;re shopping pros! These girls know exactly which shops have the best deals, when the big sales happen, and how to bargain like they&apos;ve been doing it their whole lives. They&apos;ll help you save money while getting exactly what you want. It&apos;s like having a personal shopping buddy who knows all the tricks!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Know All The Best Food Spots
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      The food in T Nagar is absolutely amazing, and our escort girls are total food lovers! They know where to find the most delicious biryani, which street vendor makes the best chaat, and where you can get authentic South Indian breakfast that&apos;ll make your taste buds dance. They&apos;ll take you on a food adventure you&apos;ll be talking about for months!
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  T Nagar Escort Service Creates <span className="text-amber-400">Amazing Memories</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Help You Make Amazing Memories
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Every time you hang out with our T Nagar escort girls, you&apos;re making memories that&apos;ll stick with you forever! Whether it&apos;s finally finding that perfect saree after searching all day, stumbling upon a beautiful hidden temple, or just cracking up over some amazing street food, these moments turn into stories you&apos;ll be telling your friends for years to come.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Are More Than Just Friends
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our T Nagar call girls don&apos;t just tag along — they become part of your whole experience! They get excited when you find something cool, they celebrate your great deals, and they really care about making sure you have the best time ever. It&apos;s the difference between exploring alone and having a real friend who knows all the awesome places and people!
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
                  T Nagar Girls Know How to <span className="text-amber-400">Have Fun</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  T Nagar is famous for shopping, and our girls are just as amazing! They know all the best deals, the coolest stores, and the most fun places to hang out. It&apos;s like having your own personal guide to the best of Chennai.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  These girls are perfect for any occasion — whether you need someone for a business dinner, want to explore the city, or just want to relax and have a good time. They&apos;re confident, charming, and know how to fit right into T Nagar&apos;s exciting vibe.
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
                  T Nagar Escorts Make Every Visit <span className="text-amber-400">An Adventure</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Know All The Latest Happenings
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      T Nagar is always buzzing with something new, and our escort girls are always in the know! They know about the newest shops opening up, the coolest events happening, and all the latest spots that are trending. Whether it&apos;s a festival, a new restaurant, or just some amazing street performance, they&apos;ll make sure you don&apos;t miss any of the fun stuff!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Match Your Energy Perfectly
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Feeling super energetic? Let&apos;s go shopping and explore everything! Want to just chill and relax? We&apos;ll find a cozy café and hang out. Our T Nagar call girls are really good at reading your mood and matching your energy. They&apos;ll make sure your day goes exactly how you want it — whether that&apos;s action-packed or totally laid back!
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  T Nagar Escort Service Builds <span className="text-amber-400">Real Friendships</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Remember All The Details
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Here&apos;s what makes our T Nagar escort girls so special — they actually listen and remember stuff about you! They&apos;ll remember your favorite foods, which shops you loved, and all the stories you shared with them. When you come back to visit, they&apos;ll ask about your family, remember what you like, and make you feel like you&apos;re catching up with an old friend!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Independent T Nagar Escorts Give You Real Care
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our independent T Nagar escorts aren&apos;t just working for a paycheck — they genuinely want you to have an amazing time! They&apos;ll go the extra mile to make sure you&apos;re comfortable, happy, and having tons of fun. It&apos;s that personal attention and real care that makes the difference between just okay and absolutely amazing!
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
                <Image src="/images/vip-girl1.png" alt="Independent T Nagar Escorts" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
                  Meet Our <span className="text-amber-400">Independent</span> T Nagar Girls
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Our independent T Nagar girls work for themselves, which means they really care about making you happy. They&apos;re not just doing a job — they genuinely want to give you an amazing experience and build a real connection.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you want to meet once or become a regular, these girls are super flexible and will work around your schedule. They&apos;re all about making things easy and fun for you, while keeping everything completely private and discreet.
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
                  T Nagar Escorts Show You The Rich <span className="text-amber-400">Culture</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Know All The Temples And Traditions
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      T Nagar isn&apos;t just about shopping — it&apos;s packed with amazing culture and traditions! Our call girls know all the beautiful temples, what different festivals mean, and all the cool stories behind local traditions. They&apos;ll take you to places that regular tourists never get to see and share the real heart of Chennai&apos;s culture with you!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Know The Best Artisans
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      The craftsmanship in T Nagar is absolutely mind-blowing! From amazing jewelry making to traditional textile weaving, our escort girls know exactly where to find the most talented artisans. They&apos;ll show you how everything is made, introduce you to the actual craftspeople, and help you appreciate all the incredible skill that goes into every single piece!
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  T Nagar Escort Service — Your <span className="text-amber-400">Perfect Partner</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Escort Girls Are Always There For You
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Need help finding your way around? Want to know the best time to visit somewhere? Or just want someone cool to chat with while you explore? Our T Nagar escort girls are always ready to help! They&apos;re like having a local best friend who knows everything about the area and is always excited to show you around!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      T Nagar Call Girls Make Every Second Count
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our T Nagar call girls totally get that your time here is super valuable, and they make sure every single moment is absolutely amazing! They&apos;ll plan your day perfectly, make sure you see everything you want to see, and create experiences that you&apos;ll remember forever. It&apos;s not just about visiting places — it&apos;s about making memories that&apos;ll last a lifetime!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials — dark + amber */}
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
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Client Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                What Our T Nagar <span className="text-amber-400">Clients</span> Say
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Real feedback from people who had a great time with our T Nagar girls.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { name: "Rajesh K.", location: "T Nagar", rating: 5, text: "Had such a great time! The girl I met was so much fun and knew all the best places in T Nagar. Made my business trip way more interesting than usual!", service: "Business Trip", date: "2 days ago" },
                { name: "Arun S.", location: "T Nagar", rating: 5, text: "Wow, these girls really know T Nagar! We went shopping and she helped me find some amazing deals. Plus she was super cool to hang out with.", service: "Shopping", date: "1 week ago" },
                { name: "Vikram M.", location: "T Nagar", rating: 5, text: "Honestly, one of the best experiences I've had. The girl was gorgeous, fun, and totally got the vibe of T Nagar. Already planning to book again!", service: "Premium", date: "3 days ago" },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 border border-white/10 hover:border-amber-500/30 rounded-2xl p-6 lg:p-8 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location} · {testimonial.date}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-semibold text-amber-400/90 uppercase tracking-wider">{testimonial.service}</span>
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
              <div><span className="block text-2xl font-black text-amber-400">800+</span><span className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</span></div>
              <div><span className="block text-2xl font-black text-amber-400">4.9/5</span><span className="text-xs text-gray-500 uppercase tracking-wider">Rating</span></div>
              <div><span className="block text-2xl font-black text-amber-400">24/7</span><span className="text-xs text-gray-500 uppercase tracking-wider">Support</span></div>
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
                Got Questions? <span className="text-amber-400">We Have Answers</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Common questions about our T Nagar girls and services.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  category: "Location & Service",
                  question: "Why should I choose T Nagar for escorts?",
                  answer: "T Nagar is where all the action is in Chennai! It's got amazing shopping, great restaurants, and a really fun vibe. Our girls love working here because there's always something exciting happening, and they know all the best spots to take you."
                },
                {
                  category: "Verification & Safety",
                  question: "Are your T Nagar girls real and safe?",
                  answer: "Yes, 100%! All our girls are real, verified, and totally safe. We check everyone thoroughly - real photos, background checks, the works. No fake profiles or surprises here. What you see is exactly what you get!"
                },
                {
                  category: "Booking Process",
                  question: "How do I book a girl in T Nagar?",
                  answer: "Super easy! Just give us a call or message us on WhatsApp. We'll get you sorted right away. Everything is completely private and discreet. Most of the time we can get you someone same day if you want!"
                },
                {
                  category: "Services Available",
                  question: "What can I do with T Nagar escorts?",
                  answer: "Pretty much anything you want! They can come to your hotel, go out with you to restaurants and shopping, or just hang out. They're up for whatever makes you happy - just let us know what you're looking for."
                },
                {
                  category: "Availability",
                  question: "Are T Nagar girls available anytime?",
                  answer: "Pretty much! T Nagar never sleeps and neither do we. Whether you need someone for lunch, dinner, or late night fun, we're here whenever you need us. Just call and we'll see what we can do!"
                },
                {
                  category: "Pricing",
                  question: "How much do T Nagar escorts cost?",
                  answer: "Our rates are fair and upfront - no hidden surprises. The price depends on how long you want to spend together and what you want to do. Just call us and we'll give you a straight answer on pricing."
                },
                {
                  category: "Privacy & Discretion",
                  question: "Will my privacy be protected?",
                  answer: "Absolutely! We take privacy super seriously, especially in a busy place like T Nagar. Your info stays completely private - we never share anything with anyone. Everything is handled discreetly and securely."
                },
                {
                  category: "Quality Assurance",
                  question: "What should I expect from T Nagar girls?",
                  answer: "You can expect to have a really great time! Our girls are beautiful, fun, smart, and know how to make you feel comfortable. They understand T Nagar's vibe and will make sure you have an amazing experience that you'll remember."
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
                  Still have questions about T Nagar?
                </h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
                  Call or message us — we&apos;re happy to help with anything about our T Nagar services.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="tel:+918121426651"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Link>
                  <Link
                    href="https://wa.me/918121426651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
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
