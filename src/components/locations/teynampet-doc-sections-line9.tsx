'use client';

import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Laptop,
  Luggage,
  Phone,
  Plane,
  Sparkles,
  Star,
  UserPlus,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { EGMORE_AREA_NAMES } from '@/constants/egmore-area-list';
import { EGMORE_DOC_LINE9_IMAGES } from '@/constants/egmore-page-images';

/** Icons for doc “figure / category” lines — illustrative only */
const FIGURE_CATEGORY_ROWS: { label: string; Icon: LucideIcon }[] = [
  { label: 'Models', Icon: Sparkles },
  { label: 'Indian Models', Icon: Star },
  { label: 'BHABHI JI', Icon: Heart },
  { label: 'Foreigner Models', Icon: Globe },
  { label: 'Receptionist', Icon: Building2 },
  { label: 'Air Hostess', Icon: Plane },
  { label: 'Call Center Working Girls/Women', Icon: Phone },
  { label: 'Hi-Tech Co. Girls/Women', Icon: Laptop },
  { label: 'Housewife', Icon: Home },
  { label: 'Collage Going Girls.', Icon: GraduationCap },
  { label: 'Travelling Escorts.', Icon: Luggage },
  { label: 'New Escort Staff on a daily basis.', Icon: UserPlus },
];

export function TeynampetDocSectionsLine9() {
  return (
    <>
      {/* docs line 9 — ink + folio split (same structure as Egmore) */}
      <section className="border-y border-stone-800 bg-[#0a0908] py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 lg:grid-cols-12 lg:gap-0 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden border border-stone-700/60 lg:col-span-5 lg:aspect-auto lg:min-h-[320px]"
          >
            <Image src={EGMORE_DOC_LINE9_IMAGES[0]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border border-stone-800 bg-[#12100e] px-6 py-8 sm:px-10 lg:col-span-7 lg:border-l-0 lg:px-12"
          >
            <p className="font-serif text-[1.05rem] leading-[1.85] text-stone-300 sm:text-lg">
              Escorts In <strong className="font-semibold text-stone-100">Teynampet Chennai</strong> We brings offer model independent
              genuine call girls/Women Seeking Men Chennai Justdial escorts our high class luxury and premium call girl agency
              service We are the best leading <strong className="font-semibold text-stone-100">Chennai escorts</strong>{' '}
              service providers in Chennai who can provide you with all kinds of hot and sexy female escorts near{' '}
              <strong className="font-semibold text-stone-100">5-star hotels</strong>. So, when you desire something special
              and unforgettable with a hot and beautiful call girl, then this is the right place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* line 15 — stacked banner + text slab */}
      <section className="relative overflow-hidden bg-[#070506] py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(136,19,55,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-sm border border-rose-950/45 bg-zinc-950 shadow-[0_28px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]"
          >
            <div className="relative aspect-[2.15/1] min-h-[188px] w-full sm:min-h-[220px] lg:aspect-[2.4/1]">
              <Image
                src={EGMORE_DOC_LINE9_IMAGES[3]}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64rem"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400/25 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06, duration: 0.4 }}
              className="relative z-10 -mt-8 mx-4 border border-amber-500/25 bg-gradient-to-r from-[#14110f] via-[#1c1412] to-[#14110f] px-4 py-4 shadow-lg shadow-black/40 sm:-mt-10 sm:mx-8 sm:px-7 sm:py-5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />
              <p className="text-center font-mono text-[0.78rem] leading-relaxed tracking-[0.01em] text-amber-100/95 sm:text-[0.8125rem]">
                Escort Services In Chennai (12000 SHOT 18000 NIGHT Doorstep Delivery Indian, Russian Best Quality Full Educated
                and Full Cooperative Independent Call Girl Escort Services in All Over Chennai).
              </p>
            </motion.div>

            <div className="border-t border-rose-950/35 bg-gradient-to-b from-zinc-950 to-[#0a0809] px-5 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10">
              <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent sm:mb-8" />
              <p className="text-center font-serif text-[1.0625rem] leading-[1.82] text-zinc-300 sm:text-lg">
                #1 Chennai&apos;s Escorts Service Provider. We Have All Types of Escorts. In this place You Can Get The best
                Call Girls in a cost efficient way Chennai Escort Service is a company which provides escort to you at a hotel
                room with free door to door delivery call and hire our sexy{' '}
                <strong className="font-semibold text-zinc-100">Chennai Escorts</strong> to come to your place and have a
                memorable adventure with them. The Best{' '}
                <strong className="font-semibold text-zinc-100">Russian Escort Service In Chennai</strong> Free Hotel &amp;
                Room Delivery!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* lines 17–18 — headline + body */}
      <section className="border-y border-rose-900/30 bg-[#1a0f14] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] font-light leading-snug text-[#f4e8ec]">
                Breathtaking Collection of the Call Girls in Chennai.
              </h2>
              <p className="mt-6 font-serif text-[1.0625rem] leading-[1.82] text-[#c9b4bc] sm:text-lg">
                We provide space on all kinds of girls of your choice. Our escorts are not only cooperative but they are
                aware of your needs. All types of call girls like{' '}
                <strong className="font-semibold text-[#dfd0d5]">Russian girls</strong>, Kazantzakis girls, Housewives,
                Indian college girls, TV Actress and Celebrities, Air Hostess, Travelling Escorts, VIP Models, Muslim girls,
                Afghani girls, Nepali girls, Manipur girls, Chinese girls, Bengali girls, Working girls, south Indian girls,
                Punjabi girls, etc.
              </p>
              <p className="mt-6 font-serif text-[1.0625rem] leading-[1.82] text-[#c9b4bc] sm:text-lg">
                <strong className="font-semibold text-[#dfd0d5]">Chennai</strong> providences our call girls who consist of a
                spectacular blend of college beauties, independent beauties and exotic Russian escorts and it is surely
                guaranteed that they are 100 percent above the board. Feeling like having a crazy night out in trendy cafes
                of Chennai or want to relax with a sensual massage? We&apos;ve got you covered. Chennai contains more than
                1,500 escorts with whom we are sure to find you a perfect match. Book Now or fill on our contact form to
                locate your dream partner!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#4a2a35]"
            >
              <Image src={EGMORE_DOC_LINE9_IMAGES[4]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* lines 20–21 — VIP */}
      <section className="bg-[#0d0c0f] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-2xl text-violet-200/95 sm:text-3xl">VIP Escorts of Classy Party.</h2>
              <p className="mt-5 font-serif text-[1.0625rem] leading-[1.82] text-zinc-400 sm:text-lg">
                In need of a beautiful partner to a major event? Our{' '}
                <strong className="font-semibold text-zinc-200">VIP Chennai escorts</strong> make a splash to a corporate
                event, fancy dinner, or birthday party. Their allure and elegance light up every moment, whether it is a
                high-profile event or a small and personal party. Level your experience -Book Now or fill our contact form
                to book a VIP escort now!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-full border-4 border-violet-900/40">
                <Image src={EGMORE_DOC_LINE9_IMAGES[5]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 384px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* lines 23–24 — customized */}
      <section className="bg-[#e8e4dc] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[240px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(28,25,23,0.12)]"
            >
              <Image src={EGMORE_DOC_LINE9_IMAGES[6]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl text-[#1c1917] sm:text-3xl">
                Customized Entertainment to Your Every Wish.
              </h2>
              <p className="mt-5 font-serif text-[1.0625rem] leading-[1.82] text-[#292524] sm:text-lg">
                We know no two clients are alike at Chennai in Masti. Our{' '}
                <strong className="font-semibold text-[#1c1917]">Chennai call girls</strong> can provide unique experiences,
                be it romantic dates with our more fashionable cafes in the city of Chennai to a crazy night in one of our
                luxury hotels. Fancy a date night or a sightseeing of the posh areas of Chennai? We make it happen. Make
                your own fantasy through our contact form or Book Now so that you make your ideal night!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* lines 26–27 — Masti */}
      <section className="relative overflow-hidden bg-[#051c18] py-20 sm:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-teal-500/50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pl-8 lg:px-8 lg:pl-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl text-teal-100/95 sm:text-3xl">
                Masti Chennai escorts: The best Chennai escort agency.
              </h2>
              <p className="mt-5 font-serif text-[1.0625rem] leading-[1.82] text-teal-100/75 sm:text-lg">
                Chennai in Masti is the best escort agency in Chennai as it has many years of experience and has a network of
                more than <strong className="font-semibold text-teal-50/95">1,500 escorts</strong>. We bring you unparalleled
                fun, privacy, and satisfaction, and are the best choice in Chennai. Do not compromise--Book Now, or on our
                contact form to see the best Chennai has to offer!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[5/4] w-full overflow-hidden border border-teal-800/50"
            >
              <Image src={EGMORE_DOC_LINE9_IMAGES[7]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* lines 29–30 — reservation */}
      <section className="bg-[#faf8f5] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl px-6 py-10 shadow-[0_8px_0_0_#1c1917] sm:px-10 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 overflow-hidden rounded-sm border border-stone-300"
            >
              <div className="relative aspect-[21/9] w-full">
                <Image src={EGMORE_DOC_LINE9_IMAGES[8]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42rem" />
              </div>
            </motion.div>
            <h2 className="text-center font-serif text-2xl text-[#1c1917] sm:text-3xl">Simple Reservation in Chennai.</h2>
            <p className="mt-2 text-center font-serif text-[1.0625rem] leading-[1.82] text-[#44403c] sm:text-lg">
              We collaborate with the best hotels in Chennai such as The Oberoi and The Claridge&apos;s to offer you private
              and secure rooms to meet. We will take care of all details in our{' '}
              <strong className="font-semibold text-[#1c1917]">Chennai escort service</strong> and allow a hustle free
              experience. Reserve using our contact form or Book now to have instant fun!
            </p>
          </div>
        </div>
      </section>

      {/* lines 40–41 — unleash (includes doc lines 32–33 five-star copy) */}
      <section className="bg-gradient-to-br from-[#1e0a1f] via-[#120a18] to-[#0a0610] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-[2rem] border border-fuchsia-900/40 lg:max-w-none"
            >
              <Image src={EGMORE_DOC_LINE9_IMAGES[11]} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl text-fuchsia-100/95 sm:text-3xl">
                Unleash Your Desires with Chennai in Masti
              </h2>
              <p className="mt-5 font-serif text-[1.0625rem] leading-[1.82] text-fuchsia-100/65 sm:text-lg">
                Explore a realm of romance and extravagance in Chennai escort service of Masti. Our escorts are here to help
                your wildest dreams come true be it steamy nights or even romantic outing. Book today through our contact
                form or Book Now to get the ultimate{' '}
                <strong className="font-semibold text-fuchsia-100/90">Chennai experience</strong>!
              </p>
              <div className="mt-10 border-t border-fuchsia-500/25 pt-8">
                <h3 className="font-serif text-xl text-fuchsia-200/90 sm:text-2xl">Call girls in 5 star hotel Chennai.</h3>
                <p className="mt-4 font-serif text-[1.0625rem] leading-[1.82] text-fuchsia-100/60 sm:text-lg">
                  You select incall escort service or outcall escort service 5 star hotel in Chennai as you please, our escort
                  service in the hotel in Chennai has offered you nice looking loving girls. You can have a ball and quench
                  your sexual desires with a beautiful Chennai ki call girl, with the assistance of our escort service. When
                  you can make everyone happy, you will have a better quality of life. You will be most tranquil in your
                  busy life. a wanton coach By passing the night at Chennai.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* lines 43–55 — figure / category: cork pinboard + sticky notes */}
      <section className="relative overflow-hidden border-y border-[#3d2f26] py-16 sm:py-24">
        {/* Cork + wood frame */}
        <div className="absolute inset-0 bg-[#5c4334]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 120% 80% at 20% 30%, rgba(255,220,180,0.12), transparent 50%),
              radial-gradient(circle at 1px 1px, rgba(40,25,15,0.12) 1px, transparent 0)
            `,
            backgroundSize: 'auto, 6px 6px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-3 rounded-sm border border-[#2a1f18]/60 shadow-[inset_0_0_80px_rgba(0,0,0,0.35)] sm:inset-5" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Masking-tape title strip */}
            <div className="relative mx-auto mb-12 max-w-xl">
              <div className="absolute -left-2 top-1/2 h-8 w-6 -translate-y-1/2 rotate-[-8deg] bg-[#c4a574]/40 blur-[1px]" aria-hidden />
              <div className="absolute -right-2 top-1/2 h-8 w-6 -translate-y-1/2 rotate-[8deg] bg-[#c4a574]/40 blur-[1px]" aria-hidden />
              <div className="relative rotate-[-1deg] bg-[#ebe4dc] px-6 py-4 shadow-[4px_6px_0_#2a1f18]">
                <p className="text-center font-mono text-[10px] font-bold uppercase leading-snug tracking-[0.18em] text-[#2c2219] sm:text-[11px]">
                  WE GIVE FIGURE such as:- CATEGORY.
                </p>
              </div>
            </div>

            <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {FIGURE_CATEGORY_ROWS.map(({ label, Icon }, i) => {
                const tilt = ['-rotate-[1.5deg]', 'rotate-[2deg]', '-rotate-[1deg]', 'rotate-[1.5deg]'][i % 4];
                const noteTint = i % 3 === 0 ? 'bg-[#fff9e8]' : i % 3 === 1 ? 'bg-[#fffef5]' : 'bg-[#fef3d9]';
                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.04, 0.35), duration: 0.35 }}
                    className={`relative list-none pt-6 ${tilt}`}
                  >
                    {/* Pushpin */}
                    <div
                      className="absolute left-1/2 top-0 z-[1] h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e85d5d] to-[#a31f1f] shadow-[0_2px_4px_rgba(0,0,0,0.4)] ring-1 ring-black/20"
                      aria-hidden
                    />
                    <div
                      className={`relative min-h-[7.5rem] border border-[#d4c4a8]/80 ${noteTint} px-4 pb-4 pt-5 shadow-[3px_5px_0_rgba(30,22,16,0.35),inset_0_1px_0_rgba(255,255,255,0.65)]`}
                    >
                      <div className="mb-3 flex items-center justify-between gap-2 border-b border-[#c9b896]/60 pb-2">
                        <span className="font-mono text-[9px] tabular-nums text-[#8a7a68]">{String(i + 1).padStart(2, '0')}</span>
                        <Icon className="h-5 w-5 shrink-0 text-[#5c4d3d]" strokeWidth={1.75} aria-hidden />
                      </div>
                      <p className="font-serif text-[0.9rem] leading-snug text-[#2a2118] sm:text-[0.95rem]">{label}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* lines 59–70 — SERVICES (after category block) */}
      <section className="relative overflow-hidden bg-[#060504] py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_70%_20%,rgba(180,50,80,0.08),transparent_50%),radial-gradient(ellipse_60%_40%_at_10%_80%,rgba(90,60,40,0.12),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-sm border border-[#2f2826] bg-[linear-gradient(168deg,#151210_0%,#0c0b09_42%,#12100e_100%)] shadow-[0_28px_90px_-28px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <motion.div
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] min-h-[260px] border-b border-[#2f2826] lg:aspect-auto lg:min-h-[min(100%,440px)] lg:border-b-0 lg:border-r"
              >
                <Image
                  src={EGMORE_DOC_LINE9_IMAGES[13]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-black/55" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent lg:hidden" />
              </motion.div>

              <div className="flex flex-col justify-center px-5 py-9 sm:px-9 sm:py-11 lg:px-10 lg:py-12">
                <div className="mb-8 border-b border-rose-950/40 pb-6">
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] font-light leading-tight text-[#f2e8ea]">
                    SERVICES:
                  </h2>
                </div>

                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5">
                  {(
                    [
                      'A-Level (5 star escort)',
                      'Strip-tease',
                      'BBBJ (Bareback Blowjob)',
                      'Spending time in hotel rooms',
                      'BJ (Blowjob Without a Condom)',
                      'Completion ( Oral to completion)',
                      'Covered (Covered blowjob Without a Condom)',
                      'DSL (Dick Sucking Lips)',
                      'DT (Dining At The Toes English Spanking)',
                      'Doggie (No behind Sex style)',
                    ] as const
                  ).map((line) => (
                    <li
                      key={line}
                      className="border-l-2 border-rose-900/35 py-1 pl-3 font-mono text-[0.78rem] leading-snug text-zinc-400 transition-colors hover:border-rose-500/55 hover:text-zinc-300 sm:text-[0.8125rem]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* lines 72–73 — area list: directory index (no links) */}
      <section className="relative border-t border-[#1f1812] bg-[#070605] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(180,130,70,0.07),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-sm border border-[#3d3228] bg-[linear-gradient(168deg,#12100e_0%,#0c0b09_45%,#151311_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            {/* Engraved edge + spine */}
            <div
              className="pointer-events-none absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-[#8b6914]/45 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#1a1612] to-transparent opacity-90"
              aria-hidden
            />
            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <header className="mb-10 max-w-2xl border-b border-[#2a231c] pb-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.55em] text-[#8b7355] sm:text-[11px]">Index</p>
                <h2 className="mt-4 font-serif text-[clamp(1.5rem,3.5vw,2.125rem)] font-light tracking-tight text-[#ebe4dc]">
                  Chennai Escorts Area List
                </h2>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-16 bg-gradient-to-r from-[#a67c52] to-transparent" />
                  <span className="font-serif text-lg leading-none text-[#5c4d3d]" aria-hidden>
                    ✦
                  </span>
                  <span className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#3d3228] to-transparent" />
                </div>
              </header>

              {/* Phone-book columns: names only, plain text */}
              <ul className="list-none [column-fill:_balance] columns-1 gap-x-10 gap-y-0 sm:columns-2 lg:columns-3 [column-rule:1px_solid_rgba(61,50,40,0.55)]">
                {EGMORE_AREA_NAMES.map((name) => (
                  <li
                    key={name}
                    className="mb-2 break-inside-avoid py-0.5 pl-1 font-serif text-[0.9375rem] leading-snug text-[#a8a095] sm:text-[0.95rem]"
                  >
                    <span className="mr-2 inline-block w-4 shrink-0 text-center font-mono text-[9px] text-[#5c4f42]">
                      ·
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
