'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layout } from '@/components/layout/layout';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.2 },
});

export function MalluEscortsPageClient() {
  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          {/* Hero */}
          <section className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.webp"
                alt="Mallu escorts in Chennai — LillyBabe"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
              <motion.p
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-5"
                {...fadeUp(0)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Gallery · Mallu escorts in Chennai
              </motion.p>

              <motion.h1
                className="font-black leading-[0.92] tracking-tight mb-5 text-[clamp(2.4rem,7vw,3.6rem)]"
                {...fadeUp(0.1)}
              >
                <span className="block text-white">Mallu escorts in Chennai</span>
                <span className="block text-amber-400">local Mallu/Kerala company that feels familiar</span>
              </motion.h1>

              <motion.p
                className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6"
                {...fadeUp(0.2)}
              >
                This page gives you a clear idea of the kind of Mallu escorts we usually work
                with in Chennai — local Mallu/Kerala women who know the city and bring a
                familiar, easy-going vibe. Think of it as a reference for style and feel, not
                a full catalogue.
              </motion.p>

              <motion.p
                className="text-gray-400 text-xs sm:text-sm max-w-xl"
                {...fadeUp(0.3)}
              >
                When you see a type of presence you like, just send a short WhatsApp or Telegram
                message. We reply with who is actually free today, current photos, and clear pricing
                before you decide.
              </motion.p>
            </div>
          </section>

          {/* What this category means */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 pt-4 sm:pt-6"
            {...fadeUp(0)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                <h2 className="text-sm sm:text-base font-semibold text-white mb-2">
                  What “Mallu escorts in Chennai” usually means here
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We use this label for women who are Mallu — from Kerala or familiar with South Indian culture, fluent
                  in Malayalam and English, and at ease with local culture. The focus is on
                  easy, conversation‑friendly company and a familiar vibe, not staged
                  behaviour or exaggerated promises.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                <h2 className="text-sm sm:text-base font-semibold text-white mb-2">
                  How bookings for this category usually work
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  You tell us your area, rough time, and what kind of evening you have in mind. We
                  check who actually fits that and is realistically available, then share a few
                  options. You can say yes, no, or ask for something different — there is no pressure
                  to confirm if it does not feel right.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sample gallery */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
            {...fadeUp(0)}
          >
            <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Sample gallery — Mallu escorts in Chennai
              </h2>
              <a
                href="https://t.me/Tamil_Escorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs text-amber-300 hover:text-amber-200"
              >
                See more on Telegram
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </a>
            </div>

            <RandomImageGallery count={24} imageHeight="h-64" showRefreshButton />
          </motion.section>

          {/* Section 1: When a Mallu escort is usually the right choice */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0)}
          >
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black shadow-[0_0_60px_rgba(251,191,36,0.25)]">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-24 right-0 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1.1fr] gap-6 sm:gap-8 items-stretch">
                {/* Image column */}
                <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px]">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/mallu-escorts.avif"
                      alt="Typical Mallu escort style seen in Chennai bookings"
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-gray-200">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-1.5">
                      Typical look &amp; setting
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-200/90 max-w-sm leading-relaxed">
                      Many Mallu escort bookings look like this: a hotel or serviced
                      apartment, casual or smart-casual outfits, and an evening that feels easy and relaxed.
                    </p>
                  </div>
                </div>

                {/* Text column */}
                <div className="relative px-4 sm:px-6 py-5 sm:py-7 text-xs sm:text-sm text-gray-300 flex flex-col gap-4">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      When this category fits best
                    </p>
                    <h2 className="text-lg sm:text-2xl font-bold text-white mb-3">
                      A Mallu escort suits you when you want local, easy-going company
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-2.5">
                      Most clients who ask for Mallu escorts in Chennai want someone who
                      speaks Malayalam and English, knows Chennai, and makes the evening feel
                      natural rather than formal. They are not chasing a specific “type”;
                      they want the room to feel comfortable and the conversation to flow easily.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      If you prefer local company, shared language, and a familiar cultural
                      vibe, this category usually fits better than very international or
                      high‑drama profiles.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/50 p-3 sm:p-4">
                      <p className="font-semibold text-white mb-1.5 text-[11px] sm:text-xs">
                        What people actually ask us for
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-400 text-[11px] sm:text-xs">
                        <li>“Someone local who speaks Malayalam and English.”</li>
                        <li>“Company for an evening — Mallu or Kerala preference.”</li>
                        <li>“A woman who knows Chennai and can put you at ease.”</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
                      <p className="font-semibold text-white mb-1.5 text-[11px] sm:text-xs">
                        What this time together is — and is not
                      </p>
                      <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
                        We frame every booking as time and company, not a list of promises. When
                        both sides treat it that way, the evening tends to feel more natural and less
                        like a performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: How we match you with a Mallu escort */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.05)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr]">
                <div className="p-5 sm:p-7">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
                    How we actually pick someone for you
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5 max-w-xl">
                    Instead of pushing random profiles, we move through a simple three‑step flow so
                    the Mallu escort suggested feels realistic for your time, area, and comfort
                    level.
                  </p>

                  <div className="relative pl-4 sm:pl-6">
                    <div className="absolute left-1.5 sm:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/80 via-amber-400/20 to-transparent" />

                    <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-gray-300">
                      <div className="relative flex gap-3">
                        <div className="mt-0.5">
                          <div className="w-4 h-4 rounded-full bg-black border border-amber-400 flex items-center justify-center text-[10px] text-amber-200">
                            1
                          </div>
                        </div>
                        <div>
                          <p className="text-amber-300 font-semibold mb-1">Your message</p>
                          <p className="text-gray-400 leading-relaxed">
                            You share three basics: where you are (or hotel name), a rough time
                            window, and whether you prefer quieter or more talkative company. A few
                            clear lines are enough.
                          </p>
                        </div>
                      </div>

                      <div className="relative flex gap-3">
                        <div className="mt-0.5">
                          <div className="w-4 h-4 rounded-full bg-black border border-amber-400 flex items-center justify-center text-[10px] text-amber-200">
                            2
                          </div>
                        </div>
                        <div>
                          <p className="text-amber-300 font-semibold mb-1">Our shortlisting</p>
                          <p className="text-gray-400 leading-relaxed">
                            We look at who is already on shift nearby, who fits that style, and who
                            can realistically reach you without rushing. If it is a tight window or a
                            far location, we tell you clearly.
                          </p>
                        </div>
                      </div>

                      <div className="relative flex gap-3">
                        <div className="mt-0.5">
                          <div className="w-4 h-4 rounded-full bg-black border border-amber-400 flex items-center justify-center text-[10px] text-amber-200">
                            3
                          </div>
                        </div>
                        <div>
                          <p className="text-amber-300 font-semibold mb-1">Your confirmation</p>
                          <p className="text-gray-400 leading-relaxed">
                            We share a small shortlist with current photos and clear pricing. You can
                            say yes, no, or ask for a different option. Nothing moves ahead until you
                            clearly confirm one profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-t lg:border-t-0 lg:border-l border-white/10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(251,191,36,0.08),transparent_55%)] p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                      What helps us match you faster
                    </p>
                    <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
                        <p className="font-semibold text-white mb-1.5">Clear time window</p>
                        <p className="text-gray-400 leading-relaxed">
                          Sharing something like “between 8pm and 9:30pm” is better than “later
                          tonight”. It makes it easier to match you with someone who will not have
                          to rush another booking.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
                        <p className="font-semibold text-white mb-1.5">Accurate location</p>
                        <p className="text-gray-400 leading-relaxed">
                          A hotel name or map pin lets us estimate travel time properly. That way,
                          the person we suggest is someone who can actually reach you comfortably,
                          not just in theory.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
                        <p className="font-semibold text-white mb-1.5">
                          No random forwards, only real options
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          We do not blast you with photos from old days or people who are not on
                          shift. When we reply, it is only with profiles who are actually free for
                          your timing and area.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Expectations and boundaries for Mallu escorts */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.1)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-24 right-[-40%] w-[80%] h-64 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.22),transparent_60%)] blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1.5fr_1.1fr] gap-0">
                <div className="p-5 sm:p-7 text-xs sm:text-sm text-gray-300">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                    Expectations that keep the evening smooth
                  </p>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Being clear about what the time together is — and is not
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4">
                    We treat every booking as time and company, not a list of scripted promises. A
                    Mallu escort may be warm, talkative, or happy to share a drink, but she is
                    still there in a professional setting with her own pace and comfort level.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p className="text-gray-300 leading-relaxed">
                        When both sides see it as shared time, not pressure, the evening usually
                        feels steadier and more natural.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <p className="text-gray-300 leading-relaxed">
                        If something does not feel right, saying it calmly early on is always better
                        than holding it in.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-white/10 bg-black/40 p-5 sm:p-6 flex flex-col justify-center text-xs sm:text-sm text-gray-300">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2.5">
                      Small things that make the booking go better
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Have the room or apartment ready and quiet before she arrives.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Keep your phone free so we can coordinate arrival cleanly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>
                          If you think you may want extra time, mention it early so we can adjust
                          the schedule.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Pricing overview */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.15)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(251,191,36,0.1),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1.1fr] gap-0">
                <div className="p-5 sm:p-7">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                    Pricing — always shared clearly first
                  </p>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    What the price range usually looks like
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Rates move a bit depending on area, time of day, and how long you want to spend
                    together. Mallu escorts can be in higher demand at certain times, so having
                    some flexibility often helps.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    When you message us, we share a clear amount for that specific day and slot — no
                    surprise add‑ons later. If the number does not feel right for you, you can
                    simply say so and we either adjust the plan or pause there.
                  </p>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-amber-500/20 bg-black/40 p-5 sm:p-6 flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                    What usually affects the quote
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-3 sm:px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[11px] sm:text-xs text-gray-200">
                          Central vs. far‑out locations
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-400">
                        Travel time + cab
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-3 sm:px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-[11px] sm:text-xs text-gray-200">
                          Weekday evenings vs. peak nights
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-400">
                        Demand on that day
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-3 sm:px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span className="text-[11px] sm:text-xs text-gray-200">
                          Shorter vs. longer time together
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-400">
                        Total hours booked
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] sm:text-xs text-gray-400">
                    We prefer simple, round numbers you can decide on quickly — no confusing slabs
                    or last‑minute changes.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Where Mallu escorts usually travel */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.2)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(251,191,36,0.12),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:46px_46px]" />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1.1fr]">
                <div className="p-5 sm:p-7">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                    Where these bookings normally happen
                  </p>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Central Chennai first, with room for planned trips
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Most Mallu escort bookings are in well‑connected parts of Chennai — T.
                    Nagar, Nungambakkam, Anna Nagar, OMR and nearby serviced apartments or
                    business‑class hotels. These areas make it easier for her to reach you on time
                    without stress.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Beach‑side or ECR plans are possible too, as long as there is clear notice,
                    sensible timing, and a plan for cab or safe transport both ways.
                  </p>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-white/10 bg-black/50 p-5 sm:p-6 flex flex-col justify-center gap-3">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                    If your location is a bit far out
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    Just send a map pin or hotel name when you message us. We will tell you
                    honestly if we can cover it that evening, if there is an extra cab cost, or if
                    it is better to plan from a different area.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-amber-200">
                    <span className="px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10">
                      T. Nagar / Nungambakkam
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10">
                      Anna Nagar / OMR
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10">
                      ECR &amp; beach‑side (with notice)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Simple next steps with WhatsApp & Telegram */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18"
            {...fadeUp(0.25)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-r from-black via-zinc-950 to-black text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -left-24 top-0 w-72 h-72 rounded-full bg-amber-500/18 blur-3xl" />
                <div className="absolute right-[-10%] bottom-[-20%] w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1.2fr] items-center gap-4 sm:gap-6 p-5 sm:p-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300 mb-3">
                    If this sounds close to what you want
                  </p>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Start with one clear message — we handle the rest
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    You do not have to fix every detail in your head before writing. Share your
                    area, an approximate time window, and that you are looking for a Mallu
                    escort in Chennai. We will reply with realistic options and only move ahead if
                    they feel right for you.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The idea is simple: clear photos, clear information, and no pressure. That way
                    both you and the person walking in know what to expect, and the time together
                    stays easy instead of complicated.
                  </p>
                </div>

                <div className="md:pl-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                    {[
                      'Share area &amp; time window',
                      'We reply with real options',
                      'You confirm only if it feels right',
                    ].map((step, idx) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-white/10 bg-black/40 p-3 flex flex-col gap-1"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/60 text-[11px] text-amber-200 mb-1">
                          {idx + 1}
                        </span>
                        <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://wa.me/918121426651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-amber-400 transition-colors"
                    >
                      WhatsApp: +91 81214 26651
                    </a>
                    <a
                      href="https://t.me/Tamil_Escorts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-amber-500/60 bg-transparent px-4 py-2 text-[11px] sm:text-xs font-semibold text-amber-200 hover:bg-amber-500/10 transition-colors"
                    >
                      Message on Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7: How a Mallu escort booking usually feels */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.3)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.16),transparent_60%)]" />
              </div>
              <div className="relative p-5 sm:p-6">
                <h2 className="text-sm sm:text-base font-semibold text-white mb-2.5">
                  How a Mallu escort booking usually feels from your side
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-amber-300 mb-1.5">
                      Arrival
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      She reaches, settles in, and you both ease into simple conversation. The goal
                      is for it to feel calm and comfortable, not rushed.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-amber-300 mb-1.5">
                      Middle of the evening
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      You talk about your day, maybe share some music or a drink, and move at a pace
                      that suits both of you. It should feel natural, not scripted.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-amber-300 mb-1.5">
                      Towards the end
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Things wind down steadily instead of suddenly. Many clients describe it as
                      feeling like they spent time with someone they already knew.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Small signals that the match is right */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.35)}
          >
            <div className="mb-5 sm:mb-7 text-xs sm:text-sm text-gray-300">
              <h2 className="text-sm sm:text-base font-semibold text-white mb-2">
                Small signals that you are with the right person
              </h2>
              <p className="text-gray-400 leading-relaxed">
                You cannot predict everything from a chat, but a few simple things during the
                evening usually tell you whether the match is working for both sides.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-xs sm:text-sm text-gray-300">
              {[
                'Conversation moves at a natural pace — you do not feel pushed to talk or perform.',
                'She respects your space and privacy, not checking your phone or belongings.',
                'If something is unclear, she asks rather than assuming or guessing.',
                'There is no rush to leave early or pressure to extend beyond what you agreed.',
              ].map((text, idx) => (
                <div
                  key={text}
                  className="relative rounded-3xl border border-white/10 bg-zinc-950/80 p-4 pl-5 flex items-start gap-3 overflow-hidden"
                >
                  <div className="relative mt-1">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 blur-[2px]" />
                    <div className="absolute inset-1 rounded-full border border-amber-400/70" />
                    <span className="absolute inset-1 flex items-center justify-center text-[10px] text-amber-200">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 9: When Mallu escorts are / are not a good fit */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12"
            {...fadeUp(0.4)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(74,222,128,0.2),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(248,113,113,0.2),transparent_55%)]" />
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 sm:p-6 border-b md:border-b-0 md:border-r border-white/10">
                  <h2 className="text-sm sm:text-base font-semibold text-white mb-2.5">
                    When a Mallu escort is likely a good fit
                  </h2>
                  <ul className="space-y-1.5 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>You prefer calm, relaxed company over very loud, flashy setups.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Your plan is simple: a few hours together in one place.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>You are comfortable with realistic limits on time and travel.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2.5">
                    When this category may not be the right one
                  </h3>
                  <ul className="space-y-1.5 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>You want long, late‑night drives far outside the city.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>You expect someone to ignore basic safety or health rules.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>
                        You are only open to a very narrow physical type with no flexibility.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-3 text-[11px] sm:text-xs text-gray-400">
                    In those cases, it is usually better to adjust the plan or consider a different
                    category instead of forcing a match.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 10: Timeline from first message to meeting */}
          <motion.section className="pb-10 sm:pb-12" {...fadeUp(0.45)}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 p-4 sm:p-6 text-xs sm:text-sm text-gray-300">
                <div className="pointer-events-none absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                <h2 className="relative text-sm sm:text-base font-semibold text-white mb-5">
                  Rough timeline from first message to meeting
                </h2>
                <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
                  {[
                    'You send a short WhatsApp or Telegram message with area, time, and preference for a Mallu escort.',
                    'We share a few realistic options and clear prices for each.',
                    'You confirm one option and we agree on the time window.',
                    'She starts towards you; we keep you updated if there is any delay.',
                    'You settle the amount as discussed and the rest of the time is yours.',
                  ].map((step, idx) => (
                    <div key={step} className="flex sm:flex-col items-start sm:items-stretch gap-2">
                      <div className="flex items-center sm:flex-col sm:items-start gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black border border-amber-400 text-[11px] text-amber-200">
                          {idx + 1}
                        </span>
                        <span className="hidden sm:block h-px flex-1 bg-amber-400/40" />
                      </div>
                      <p className="text-gray-400 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 11: Quick Q&A and contact reminder */}
          <motion.section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18"
            {...fadeUp(0.5)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 text-xs sm:text-sm text-gray-300">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(251,191,36,0.14),transparent_55%)]" />
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_0.9fr] gap-4 sm:gap-6 items-stretch">
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Two questions people often ask us about this category
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="font-semibold text-white mb-1.5">
                        “Can I ask for a specific Mallu escort again?”
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        If you had a good experience and she is still working with us and free for
                        your time, we try to make it happen. It still depends on her schedule and
                        how the day looks.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1.5">
                        “How early should I contact you if I want an Mallu escort?”
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        Weekdays often work with a few hours&apos; notice. For weekends, holidays,
                        or busy days in Chennai, it helps a lot if you reach out earlier so you have
                        more choice and less waiting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 bg-black/40 p-4 sm:p-6 flex flex-col justify-center">
                  <p className="text-[10px] text-amber-300 font-semibold tracking-[0.18em] uppercase mb-2">
                    Contact
                  </p>
                  <p className="text-gray-200 text-[11px] sm:text-xs max-w-xs leading-relaxed mb-3">
                    However you choose to reach us — WhatsApp or Telegram — the goal is the same:
                    quick, clear replies without any pressure.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-amber-200">
                    <span className="px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10">
                      WhatsApp for quick plans
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10">
                      Telegram for more photos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </Layout>

      <FloatingButtons />
    </>
  );
}

