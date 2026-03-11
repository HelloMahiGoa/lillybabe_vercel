import Image from 'next/image';
import { memo, useState, useEffect } from 'react';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';

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
    subtitle: 'Cosy city suites',
    description: 'Step into our private, city-based suites that are cleaned, prepped, and set to your comfort before you arrive.',
    icon: Users,
    highlights: ['Cosy private lounges', 'Pay after you meet the girl and are satisfied'],
    notes: [
      { text: 'Suites are sanitized, scented, and aired out shortly before you walk in.' },
      { text: 'You settle the fee only when you meet the girl and are satisfied.' },
      { text: 'Snacks, bottled water, or softer lighting can be arranged with a quick heads-up.' },
      { text: 'Need extra time? Tell us earlier in the day so we can hold the next slot.' },
      { text: 'Your host will guide you in quietly and slip out once you’re comfortable.' },
    ],
  },
  outcall: {
    label: 'Outcall',
    subtitle: 'Hotel & home visits',
    description: 'Prefer meeting at your hotel room or home? We’ll reach you anywhere in Chennai with a quick confirmation on WhatsApp.',
    icon: MapPin,
    highlights: ['Flexible citywide timing', 'Trusted escorts on the go'],
    notes: [
      { text: 'Outcall: + Cab Charges', emphasis: true },
      { text: 'Trips over 10 km need the cab fare upfront so we can book the ride.', emphasis: true },
      { text: 'Please confirm your hotel reception allows guest entry with valid ID.' },
      { text: 'Late-night and rush-hour rides may cost a little extra for travel.' },
      { text: 'We text you the driver and companion ETA before they head your way.' },
    ],
  },
};

const PAYMENT_TAB_ENTRIES = Object.entries(PAYMENT_TAB_CONFIG) as Array<[
  PaymentTabKey,
  (typeof PAYMENT_TAB_CONFIG)[PaymentTabKey]
]>;

type TelegramPost = {
  id: number;
  text: string;
  date: number;
  imageFileIds?: string[];
};

type ModalState = { post: TelegramPost; imgIndex: number } | null;

const WA_URL = 'https://wa.me/918121426651';
const TG_MESSAGE =
  'Hi, I saw your website \"LillyBabe\" and looking for escorts service in chennai. Share me availablity of profiles please.';
const TG_URL = `https://t.me/Tamil_Escorts?text=${encodeURIComponent(TG_MESSAGE)}`;

const TelegramPostsSection = () => {
  const [posts, setPosts] = useState<TelegramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalState>(null);

  // Always fetch fresh – bust any browser / Next.js cache
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/telegram-posts?_=${Date.now()}`, {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('failed');
        const data = await res.json();
        setPosts(data.posts ?? []);
      } catch {
        setError("Could not load today's available profiles.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const fmt = (epoch: number) =>
    new Date(epoch * 1000).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const openModal = (post: TelegramPost) => setModal({ post, imgIndex: 0 });
  const closeModal = () => setModal(null);
  const prevImg = () =>
    setModal((m) => (m ? { ...m, imgIndex: Math.max(0, m.imgIndex - 1) } : m));
  const nextImg = () =>
    setModal((m) =>
      m && m.post.imageFileIds
        ? { ...m, imgIndex: Math.min(m.post.imageFileIds.length - 1, m.imgIndex + 1) }
        : m
    );

  /* ── SVG icons ── */
  const IconWA = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
  const IconTG = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );

  if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-3xl overflow-hidden bg-gray-800/40 animate-pulse">
            <div className="aspect-[3/4] bg-gray-700/50" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-700/50 rounded-full w-3/4" />
              <div className="h-3 bg-gray-700/40 rounded-full w-1/2" />
              <div className="h-9 bg-gray-700/30 rounded-xl mt-3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="py-8 text-center text-sm text-red-300">{error}</p>
    );
  }

  if (!posts.length) {
    return (
      <p className="py-8 text-center text-sm text-gray-400">
        No profiles available right now — check back soon.
      </p>
    );
  }

  return (
    <>
      {/* ── Profile cards grid ── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => {
          const cover = post.imageFileIds?.[0];
          const totalPhotos = post.imageFileIds?.length ?? 0;
          const name = post.text.split('\n')[0].trim() || 'Profile';
          return (
            <button
              key={post.id}
              type="button"
              onClick={() => openModal(post)}
              className="group relative text-left rounded-3xl overflow-hidden flex flex-col bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-pink-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 border border-white/5 hover:border-pink-500/40"
            >
              {/* Portrait cover */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-800">
                {cover ? (
                  <Image
                    src={`/api/telegram-image/${encodeURIComponent(cover)}`}
                    alt={name}
                    fill
                    sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-600">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 opacity-40">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                    <span className="text-xs">No photo</span>
                  </div>
                )}

                {/* Dark gradient — bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top-left: availability badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Available
                </div>

                {/* Top-right: photo count */}
                {totalPhotos > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-1 rounded-full border border-white/10">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-pink-400">
                      <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm0 2h12v10H4V5zm5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3.5 4 2 2.5 2.5-3L13 14H7l-1.5-2z"/>
                    </svg>
                    {totalPhotos}
                  </div>
                )}

                {/* Bottom overlay: name + date */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10">
                  <p className="text-white font-bold text-base leading-tight line-clamp-1 drop-shadow-lg">
                    {name}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{fmt(post.date)}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-gray-900">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-150"
                >
                  <IconWA />
                  WhatsApp
                </a>
                <a
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-500 active:scale-95 text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-150"
                >
                  <IconTG />
                  Telegram
                </a>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Modal ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-3xl bg-[#0d0d12] border border-white/8 shadow-[0_0_80px_rgba(236,72,153,0.15)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close btn */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors backdrop-blur-sm border border-white/10"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>

            {/* Photo viewer */}
            {modal.post.imageFileIds && modal.post.imageFileIds.length > 0 && (
              <div className="relative">
                {/* Main image */}
                <div className="relative bg-black rounded-t-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={`/api/telegram-image/${encodeURIComponent(modal.post.imageFileIds[modal.imgIndex])}`}
                    alt={`Photo ${modal.imgIndex + 1}`}
                    fill
                    sizes="768px"
                    className="object-contain"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Counter pill */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                    {modal.imgIndex + 1} / {modal.post.imageFileIds.length}
                  </div>

                  {modal.post.imageFileIds.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImg}
                        disabled={modal.imgIndex === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl disabled:opacity-20 transition-all border border-white/10 backdrop-blur-sm"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={nextImg}
                        disabled={modal.imgIndex === modal.post.imageFileIds.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl disabled:opacity-20 transition-all border border-white/10 backdrop-blur-sm"
                      >
                        ›
                      </button>

                      {/* Dot strip */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {modal.post.imageFileIds.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setModal((m) => (m ? { ...m, imgIndex: i } : m))}
                            className={`rounded-full transition-all duration-200 ${
                              i === modal.imgIndex
                                ? 'w-6 h-2 bg-pink-500'
                                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail strip */}
                {modal.post.imageFileIds.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-black/40 scrollbar-hide">
                    {modal.post.imageFileIds.map((fid, i) => (
                      <button
                        key={fid}
                        type="button"
                        onClick={() => setModal((m) => (m ? { ...m, imgIndex: i } : m))}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                          i === modal.imgIndex
                            ? 'border-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]'
                            : 'border-white/10 opacity-50 hover:opacity-90'
                        }`}
                      >
                        <Image
                          src={`/api/telegram-image/${encodeURIComponent(fid)}`}
                          alt={`Thumb ${i + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Info panel */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Name + availability */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-bold text-xl leading-tight">
                    {modal.post.text.split('\n')[0].trim() || 'Profile'}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{fmt(modal.post.date)}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>

              {/* Full caption */}
              {modal.post.text.includes('\n') && (
                <p className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                  {modal.post.text.split('\n').slice(1).join('\n').trim()}
                </p>
              )}

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

              {/* Contact buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3.5 rounded-2xl transition-all text-sm shadow-lg shadow-emerald-900/30"
                >
                  <IconWA />
                  WhatsApp
                </a>
                <a
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-bold py-3.5 rounded-2xl transition-all text-sm shadow-lg shadow-sky-900/30"
                >
                  <IconTG />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ContentSections = memo(() => {
  const [activePaymentTab, setActivePaymentTab] = useState<PaymentTabKey>('incall');
  const activePaymentContent = PAYMENT_TAB_CONFIG[activePaymentTab];
  const ActivePaymentIcon = activePaymentContent.icon;

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Chennai <span className="text-red-500">Escorts</span> — Profiles You Can Actually Trust
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Most escort sites in Chennai show the same recycled photos and send someone completely different. We don&apos;t work like that. Every girl listed here is someone we&apos;ve personally met — we know their face, their availability, and how they operate. No surprises when you book.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <a
              href="https://wa.me/918121426651?text=Hi%2C%20I%20saw%20your%20website%20LillyBabe%20and%20looking%20for%20escorts%20service%20in%20chennai.%20Share%20me%20availablity%20of%20profiles%20please."
              className="bg-zinc-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-zinc-700 transition-all duration-300 shadow-2xl transform hover:scale-105 min-h-[44px] flex items-center justify-center">
              <Phone className="inline w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">WhatsApp: +91 8121426651</span>
              <span className="sm:hidden">WhatsApp Us</span>
            </a>
            <a href="#telegram-daily-section"
               className="bg-amber-500 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-amber-400 transition-all duration-300 shadow-2xl transform hover:scale-105 min-h-[44px] flex items-center justify-center">
              <MessageCircle className="inline w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">See Available Profiles</span>
              <span className="sm:hidden">View Profiles</span>
            </a>
          </div>
          <div className="bg-amber-500 h-px sm:h-1 w-24 sm:w-32 lg:w-48 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Why people come back to LillyBabe
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We&apos;ve been doing this since 2010. The reason clients return isn&apos;t the marketing — it&apos;s that the experience actually matches what we said it would be. Here&apos;s what that looks like in practice:
            </p>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">Same girl in the photos</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">We only post photos of girls we&apos;ve met in person. Every profile is checked before it goes live. If something changes, the profile comes down.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">Available late night too</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Most requests come in after 10 PM. We&apos;re used to it. Message at midnight, 2 AM, whenever — someone on our team will respond and sort it.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">No advance, no exceptions</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">We don&apos;t ask for money before the meet. That&apos;s a firm rule. Cash after the session, once you&apos;re satisfied — nothing else.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">10+ years, same number</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">We&apos;ve been on the same WhatsApp number since day one. Agencies that run scams don&apos;t last 10 years with repeat clients. We do.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/assets/look.jpg"
                alt="Chennai escort service — LillyBabe verified profiles"
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

      {/* Telegram Daily Posts Section (after Section 3) */}
      <section
        id="telegram-daily-section"
        className="max-w-6xl mx-auto px-4 mb-24 scroll-mt-28"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            📲 Daily Updates from Our Telegram Channel
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-7">
            See today&apos;s fresh updates directly from our official Telegram channel.
          </p>

          {/* Channel & Group animated buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Channel button */}
            <a
              href="https://t.me/Tamil_Escorts_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm text-white overflow-hidden shadow-lg shadow-sky-900/40 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              {/* animated gradient bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 bg-[length:200%_100%] animate-[shimmer_2.5s_linear_infinite]" />
              {/* glow ring */}
              <span className="absolute inset-0 rounded-2xl ring-2 ring-sky-400/30 group-hover:ring-sky-400/60 transition-all" />
              <span className="relative flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal text-sky-200/80 uppercase tracking-widest">Join our</span>
                  <span>Telegram Channel</span>
                </span>
                {/* member count pulse */}
                <span className="ml-1 flex items-center gap-1 bg-white/10 text-sky-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  10K+
                </span>
              </span>
            </a>

            {/* Group button */}
            <a
              href="https://t.me/Tamil_Escorts_Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm text-white overflow-hidden shadow-lg shadow-purple-900/40 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 bg-[length:200%_100%] animate-[shimmer_2.5s_linear_infinite_0.8s]" />
              <span className="absolute inset-0 rounded-2xl ring-2 ring-purple-400/30 group-hover:ring-purple-400/60 transition-all" />
              <span className="relative flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal text-purple-200/80 uppercase tracking-widest">Join our</span>
                  <span>Telegram Group</span>
                </span>
                <span className="ml-1 flex items-center gap-1 bg-white/10 text-purple-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  2K+
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <TelegramPostsSection />
        </div>
      </section>


      {/* Section 3: Chennai Escorts Services Details */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Chennai Escort Service — Wherever You Are in the City
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We cover all major areas of Chennai — from T. Nagar and Anna Nagar to OMR, ECR, and Nungambakkam. Whether you&apos;re at a hotel, service apartment, or your own place, we can work around your location and schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">🏙️ We cover all of Chennai</h3>
            <p className="text-gray-300 leading-relaxed">
              North Chennai, South Chennai, central business areas, IT corridors — our girls travel across the city. If you&apos;re not sure whether we cover your area, just ask. We&apos;ll tell you straight away rather than waste your time.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ Short sessions available</h3>
            <p className="text-gray-300 leading-relaxed">
              You don&apos;t need to book a full night. If you&apos;ve got 2–3 hours, that&apos;s enough. We can arrange a session that fits your window, at a price that matches the time. Just be upfront about how long you need when you message us.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
            Types of Escorts in Chennai — What&apos;s Actually the Difference
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-amber-500/40">
              <h3 className="text-2xl font-bold text-white mb-4">🏢 Agency escorts (what we offer)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With an agency you know who you&apos;re dealing with. There&apos;s a number to call, a track record, and someone who takes responsibility if something goes wrong. Our girls are only listed after we&apos;ve met them and confirmed the photos are real.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We also work with girls from other parts of India — some based in Chennai full-time, others available for visits. All go through the same check before they appear on the site.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">👩 Independent escorts</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Independent escorts deal directly with clients, which can work — but you have no backup if the profile is fake or the person doesn&apos;t show. Fraud is common in this category in Chennai right now.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We do have a few independent escorts in our network who we&apos;ve personally vetted. If you specifically want that option, ask and we&apos;ll let you know who&apos;s available.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">⚠️ Street escorts — skip these</h3>
              <p className="text-gray-300 leading-relaxed">
                We&apos;ll be direct: street-based escorts in Chennai carry real risks — safety, hygiene, and getting robbed are all common complaints. There&apos;s no accountability, no profile to check, and no recourse. <strong className="text-amber-400">If you&apos;re looking for a decent experience without the hassle, use an agency or a vetted independent.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5: Google Trusted Chennai Escorts Service Provider */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div>
            {/* Section Image */}
            <div className="p-4 lg:p-8">
              <Image
                src="/images/banners/10.png"
                alt="Chennai Escorts Service Trusted by Google"
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
                  <span className="text-black font-black text-lg">GOOGLE TRUSTED</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Google Trusted Chennai Escorts Service Provider.
                </h2>
                <div className="w-24 h-px bg-amber-500/60 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  If you found us through Google, that&apos;s not an accident. <strong className="text-amber-400">LillyBabe.com</strong> has been ranking for Chennai escort searches for years — not because of tricks, but because people keep coming back and the site stays updated. Search <strong className="text-amber-400">&quot;Chennai escorts&quot;</strong> and you&apos;ll usually find us near the top. From there, scroll the profiles, pick someone you like, and hit the WhatsApp button. That&apos;s the whole process. Photos on the site are current — we don&apos;t leave old profiles up once a girl is no longer available.
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
            How to book a Chennai escort through LillyBabe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four steps, no complications. Most bookings are sorted in under 15 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Send us a message</h3>
            <p className="text-gray-300">WhatsApp us at +91 8121426651. Tell us what you&apos;re looking for — type, area, time frame. We reply fast.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pick from available profiles</h3>
            <p className="text-gray-300">We&apos;ll send you who&apos;s free right now. You can also browse the profiles on this page. Choose whoever you like the look of.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Share your location and time</h3>
            <p className="text-gray-300">Tell us the address or area and when you want her there. We&apos;ll confirm travel time and arrange everything from our end.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pay after the session</h3>
            <p className="text-gray-300">Cash only, after you meet. No advance, no online transfer. If you&apos;re not happy with the experience, we want to know.</p>
          </div>
        </div>
      </section>

      {/* Section 3.6: Premium & Bachelor Party */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                💎 Premium Escort Bookings in Chennai
              </h2>
              <div className="w-32 h-px bg-amber-500/60 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed text-lg mb-8 text-center max-w-4xl mx-auto">
                Some clients want something specific — someone well-presented, comfortable in upscale settings, and easy to spend time with whether it&apos;s dinner, a hotel stay, or just a few hours. We have girls who are used to that kind of booking. Tell us what the occasion is and we&apos;ll match you with someone who fits. Pricing for premium bookings is higher, but still settled in cash after the session — same rule as always.
              </p>

              <div className="bg-amber-500/8 rounded-2xl p-8 border border-amber-500/25">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 text-center">
                  🎉 Bachelor parties and group bookings
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  Planning a bachelor night or a private get-together in Chennai? <strong className="text-amber-400">LillyBabe</strong> can arrange multiple girls for the same evening. It works best when you give us a day&apos;s notice and a clear headcount. We&apos;ll organise it cleanly — no chaos, no miscommunication on the night.
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
            Chennai Escorts Gallery — Current Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            These are real photos from our active profiles. We update this regularly — if someone is no longer available, their photos come down. See someone you like? Message us and we&apos;ll check if she&apos;s free today.
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
                Incall &amp; Outcall Payment's
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Tap between the tabs to see how the sessions work, what to expect on the day, and the little extras we’ve lined up so you can book with confidence.
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
                  These figures give you a realistic idea of what to set aside. Your WhatsApp chat will confirm the exact amount along with any travel add-ons if needed.
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
                🎉 Outcall, pool parties & nights out in Chennai
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Our girls are comfortable in social settings — pool parties, private dinners, hotel bars, late-night drives. If you want someone who can actually hold a conversation and not look out of place at a party, that&apos;s something we can arrange. Just tell us the occasion when you message.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📅 Pre-booking with no deposit</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can lock in a booking for later tonight or tomorrow without paying anything upfront. We introduced this because of how many clients had been burned by other agencies taking money and disappearing. We don&apos;t take deposits — ever. Book a slot, we hold it for you, you pay after.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">💰 Incall and outcall options</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Incall means you go to her location — usually a private room or apartment. Outcall means she comes to your hotel or flat. Both are available depending on who you book. We&apos;ll tell you which option is possible for your chosen girl when you enquire. All payments are cash, on the day, after the session.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🔥 No fixed scripts — each session is different</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every client is different, every girl is different. We don&apos;t promise a fixed list of things. What we do promise is that you can talk openly about what you&apos;re looking for before you commit — no awkwardness, no guessing. If it&apos;s something our girls are comfortable with, we&apos;ll match you accordingly.
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
            What you actually get when you book through LillyBabe
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Not a sales pitch — just a plain list of what&apos;s included and what to expect from start to finish.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">A list of real girls who are actually free today.</strong> Not a catalogue of old profiles — we keep the list current. You pick, we check, we confirm.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Fast responses.</strong> We don&apos;t make you wait hours for a reply. Most enquiries get sorted within 10–15 minutes. If we&apos;re tied up, we&apos;ll tell you and get back shortly.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">No surprise charges.</strong> The rate is agreed upfront during the WhatsApp chat. What we discuss is what you pay — in cash, after the session. Nothing added on the day.
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
                      <span>Affordable rates with transparent pricing discussed upfront</span>
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
                alt="Benefits with Our Chennai Escorts Agency"
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
            What makes LillyBabe different from other Chennai escort agencies
          </h2>
          <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 space-y-4">
            <p>
              <strong className="text-white">There are a lot of escort agencies in Chennai.</strong> Most of them use the same copied content, the same recycled photos, and the same tactics. Here&apos;s what we actually do differently — based on the things clients tell us matter most.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">
                    🔥 Different body types, not just one look
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">We have slim girls, curvy girls, tall girls, petite girls.</strong> People have different preferences and that&apos;s completely normal. Our profile list reflects that — you&apos;re not stuck choosing from 5 girls who all look the same.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    If you have a specific type in mind and you don&apos;t see it in the Telegram channel right now, ask us. Availability changes daily and we may have someone who fits.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">
                    ✨ Girls who are easy to be around
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">The girls we work with are relaxed, friendly, and comfortable in the job.</strong> That makes a big difference to the experience. You&apos;re not dealing with someone who&apos;s visibly uncomfortable or watching the clock from the minute she arrives.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Hygiene and presentation are things we take seriously on our end. We won&apos;t send someone who isn&apos;t going to make a good impression — that&apos;s bad for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/8.jpg"
                alt="LillyBabe Escort Agency Special Features"
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
                  What to Keep in Mind When Hiring Chennai Escorts
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Safety, discretion, and a genuine connection are what most people are looking for. <strong className="text-white">Booking through a reputable agency</strong> like LillyBabe gives you all three — no guesswork, no surprises.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our Chennai escorts are educated, well-presented, and comfortable in their work. That combination makes the difference between a forgettable encounter and one you&apos;ll remember for the right reasons.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Every companion on our roster is known to us personally. We&apos;ve met them, verified their details, and ensured they&apos;re in good standing. That gives you confidence before you even make the call.
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
                  Make the Most of Your Time in Chennai with the Right Company
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">A lot of people visiting or living in Chennai lead demanding schedules.</strong> Between work, travel, and everything else, finding genuinely enjoyable company can feel like one more thing on a long list.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    That&apos;s where our Chennai escorts make a real difference. Whether you want a relaxed evening, a dinner companion, or just someone interesting to spend time with — we can arrange it without the hassle.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our companions are <strong className="text-white">warm, engaging, and genuinely good company.</strong> They&apos;re not counting the minutes — they&apos;re there to make the time worthwhile.
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
            How LillyBabe Became Chennai&apos;s Trusted Escort Agency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">LillyBabe started with a simple idea:</strong> build an escort service in Chennai that people could actually trust — one where what you see is what you get, and where every interaction feels natural and pressure-free.
          </p>
          <div className="bg-amber-500/10 text-white p-8 rounded-2xl border border-amber-500/40">
            <h3 className="text-3xl font-bold">Trusted by Thousands Across Chennai</h3>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Chennai Escorts Stand Apart</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Real Connections, Not Just a Transaction</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">What sets us apart is the quality of the company, not just the appearance.</strong> Our companions are selected for their personality as much as their looks — they&apos;re conversational, relaxed, and genuinely good at making you feel at ease.
                  </p>
                </div>
          
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Safety and Professionalism as Standards</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">When you choose LillyBabe, you&apos;re choosing an agency that takes standards seriously.</strong> We screen every escort carefully — background, presentation, and professionalism all matter to us. That rigour translates directly into a better, safer experience for you.
                  </p>
                </div>
            
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Real People with Real Lives</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Our escorts aren&apos;t just profiles on a page.</strong> Many have backgrounds in hospitality, fitness, performance, or business. They bring genuine warmth and personality to every meeting — whether it&apos;s a dinner, a business event, or a quiet evening in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Verified Profiles. No Surprises.</h3>
              <p className="text-gray-300 mb-6 text-center font-bold">Every photo is recent and every profile is real.</p>
              
              <h4 className="text-lg font-bold text-white mb-4">Our Promise to You</h4>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">The person in the photo is the person who shows up.</strong> We don&apos;t use old pictures or misleading profiles. If something changes, we&apos;ll tell you. That&apos;s not just good practice — it&apos;s the foundation of every long-term client relationship we&apos;ve built.
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
            Genuine Chennai Escort Girls — Verified and Ready to Meet
          </h2>
        </div>
          
        <div className="space-y-8 mb-16">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">At LillyBabe, our focus is on giving you a companionship experience that actually delivers.</strong> Every escort in our Chennai roster has been personally vetted — for personality, presentation, and reliability. What you see in the profile is who you&apos;ll meet.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">We have a genuine range of companions to suit different preferences.</strong> Whether you&apos;re looking for a local Tamil beauty, a polished independent escort, a mature and grounded companion, or something more international — the options are real and available right now.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Our call girls in Chennai are known for being genuinely enjoyable company</strong> — not just in terms of appearance, but in how they engage. They&apos;re warm, attentive, and professional. Clients who book once tend to come back.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Whether you&apos;re visiting Chennai for the first time or you&apos;re a regular in the city,</strong> the booking process is simple and discreet. Reach out via WhatsApp, tell us what you&apos;re looking for, and we&apos;ll handle the rest.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">LillyBabe makes it straightforward to find and book independent escorts in Chennai online</strong> — no unnecessary steps, no misleading claims. Just a reliable service that respects your time and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Matchless Companionship with Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Unmatched Companionship with Chennai Escorts
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <strong className="text-white">Chennai has a lot going for it</strong> — a vibrant nightlife, beautiful coastal stretches, great food, and a pace of life that can be as busy or as relaxed as you want. Having the right company makes all of it better.
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">Our Chennai escorts offer a range of companionship experiences</strong> — from intimate one-on-one evenings and overnight arrangements to girlfriend-style company for dinner, social events, or travel. Every experience is tailored to what you&apos;re looking for.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Whether you&apos;re a solo traveller, a visiting professional, or someone local who simply wants enjoyable company,</strong> our companions are perfectly suited to the occasion. They bring warmth, charm, and a genuine presence — and they know how to make an evening feel effortless. This is what good escort service in Chennai looks like.
          </p>
        </div>
      </section>

      {/* Section 8: Variety of Escorts in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Explore the Full Range of Escorts Available in Chennai
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">As one of Chennai&apos;s leading escort agencies,</strong> we offer out-call services direct to your hotel, apartment, or preferred location across the city.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Hotel & In-Room Services</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">We work with a network of discreet, well-located hotels across Chennai.</strong> Whether you prefer to stay where you are or need a private space arranged, we can accommodate both. Out-call services bring your companion directly to you.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Punctual, Professional, Discreet</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Your companion arrives on time, presents well, and handles the entire visit with professionalism.</strong> We take your privacy seriously — discretion is not an afterthought, it&apos;s built into how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: GFE Experience in Chennai Escort */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Girlfriend Experience (GFE) in Chennai
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">If you&apos;re spending time alone in Chennai and want company that feels natural and unhurried,</strong> the Girlfriend Experience is something worth considering.
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Girlfriend Experience (GFE)</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              <strong className="text-white">Our GFE companions are selected specifically for their ability to put you at ease.</strong> This isn&apos;t a scripted service — it&apos;s genuine warmth, real conversation, and the kind of relaxed intimacy that makes you feel like you&apos;re spending time with someone who actually wants to be there.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Real Conversation</h4>
                <p className="text-gray-300 text-sm">Engaging, genuine interaction — no awkward silences</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Physical Comfort</h4>
                <p className="text-gray-300 text-sm">Natural affection in a relaxed, no-pressure setting</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Emotional Ease</h4>
                <p className="text-gray-300 text-sm">Company that genuinely makes you feel good</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Affordable and Real Call Girls in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Affordable and Verified Call Girls in Chennai
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Looking for genuine call girls in Chennai at fair prices?</strong> LillyBabe offers a broad range — from budget-friendly options to premium VIP companions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Verified and Honestly Priced</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">We have one of the most extensive verified selections of call girls in Chennai,</strong> with pricing that reflects what you actually get — not inflated to impress. Every girl is real, every profile is current, and every booking is handled straightforwardly.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Real Photos, Direct Contact</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">At LillyBabe, authenticity matters.</strong> Browse real photos of available companions, connect via WhatsApp, and confirm availability in minutes. No middlemen, no unnecessary delays.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Chennai&apos;s Most Trusted Call Girl Service</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">When people search for &quot;call girls in Chennai&quot; or &quot;Chennai escort service,&quot;</strong> LillyBabe consistently comes up — not because of claims, but because of results. We&apos;ve built a reputation by delivering what we say we will.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            <strong className="text-white">Professionalism, privacy, and real companions — that&apos;s the LillyBabe standard.</strong> Book today and see the difference for yourself.
          </p>
        </div>
      </section>

      {/* Section 13: Our Amazing Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Browse Our Chennai Escort Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a wide range of companion types to match your preferences — from independent escorts to international beauties. Each category has its own distinct style and personality.
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
            Chennai Escorts Ready to Meet — Find Your Match
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Our roster includes companions from a wide range of backgrounds,</strong> each verified and available in Chennai. Different personalities, different styles — all genuinely good at what they do.
          </p>
        </div>
          
        <div className="text-center mt-12">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Choose Your Companion</h3>
            <p className="text-lg text-gray-300 mb-6">
              Every companion in our Chennai network has been personally verified — real photos, confirmed availability, and a track record with our clients. Browse the categories above to find someone who fits what you&apos;re looking for, then get in touch via WhatsApp to confirm and book.
            </p>
          </div>
        </div>
      </section>


      {/* Section 15: What Makes Our Chennai Escorts Stand Out */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Makes Our Chennai Escorts Worth Choosing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Good looks matter, but they&apos;re not the whole picture.</strong> Our companions are selected for personality, reliability, and the kind of presence that makes a booking feel genuinely worthwhile.
          </p>
        </div>
            
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Experience, Your Way</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Our Chennai escorts adapt to what you need from the evening.</strong> A relaxed dinner, a night in, a social event, or simply good conversation — they&apos;re comfortable in all of it. There&apos;s no template. They read the room and respond accordingly.
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
              <h3 className="text-2xl font-bold text-white mb-6 text-center">The Practical Side Done Right</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Our companions are presentable, punctual, and professional.</strong> Pricing is honest and discussed upfront. There are no hidden extras or last-minute complications. We&apos;ve stripped away the friction that makes booking with other agencies frustrating.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Working with LillyBabe means you get to focus on the experience itself. We handle the logistics so you don&apos;t have to think about them.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How Booking Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                <strong>Booking is simple.</strong> Send us a message on WhatsApp, let us know what you&apos;re looking for, and we&apos;ll suggest companions that fit. Available for day and evening bookings — outings, hotel visits, or longer arrangements.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Browse profiles, pick who interests you, and we&apos;ll confirm availability and logistics. Your escort arrives at your chosen location on time and exactly as described.
              </p>
            </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                We work with a trusted network of hotels across Chennai and handle coordination discreetly. Clients range from first-timers to regulars — and they come back because the service is consistent and reliable.
              </p>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-800 italic">
                  A note on preferences: Tell us honestly what you&apos;re looking for. The more specific you are, the better we can match you with the right companion. We don&apos;t judge — we just want the booking to work for you.
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
            Book with Confidence — Safety is Built In
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Your wellbeing and privacy are not afterthoughts. They&apos;re how we operate.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Clients Trust LillyBabe</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">We&apos;ve been running this service long enough to know what actually matters to clients:</strong> reliability, honesty, and the confidence that nothing unexpected is going to happen. Every escort we work with is known to us — not just a name on a list.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Privacy is handled with care on both sides.</strong> We don&apos;t store unnecessary information, we don&apos;t share client details, and we don&apos;t put our companions in situations that compromise their safety either.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">What makes our Chennai escorts genuinely good?</strong> Consistency. The quality of the experience doesn&apos;t depend on the day or the booking number. We maintain the same standards across every client and every companion.
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
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Book Our Chennai Escorts with Full Confidence</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                We&apos;re available around the clock. Reach out whenever works for you, describe what you&apos;re looking for, and we&apos;ll find the right companion. Whether that&apos;s same-day or advance booking, we&apos;ll accommodate it.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Our roster covers a wide range of types and personalities — so if you have specific preferences, we can usually meet them. We&apos;re a full-service agency, not a niche operation.
              </p>
            </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Every client is approached individually. Preferences are taken seriously and followed through on. Our companions are professionals who take their work seriously — that&apos;s why the experience holds up across multiple bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 20: What Sets Chennai Escorts at LillyBabe Apart */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Sets Our Chennai Escorts Apart
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            <strong className="text-white">LillyBabe maintains a carefully selected roster of companions</strong> — Tamil beauties, Indian escorts, Russian models, and more. The common thread isn&apos;t type or look; it&apos;s the standard we hold every single one of them to.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Genuine Attractiveness</h3>
            <p className="text-gray-300 text-center">
              Each companion is selected for their natural looks and overall presentation — no filters, no outdated photos.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Company</h3>
            <p className="text-gray-300 text-center">
              Our Chennai escorts are articulate and easy to talk to — capable of holding a real conversation beyond small talk.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Consistent Professionalism</h3>
            <p className="text-gray-300 text-center">
              Punctual, discreet, and composed — our escorts handle every booking the same way, regardless of the client.
            </p>
          </div>
        </div>
      </section>

      {/* Section 21: Chennai Escorts Services Overview */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Chennai Escort Services — What We Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">From independent companions to high-profile escorts,</strong> our service covers a broad range. Here&apos;s a closer look at what&apos;s available.
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
                  <strong className="text-white">Independent escorts in Chennai work on their own terms,</strong> which typically means a more personal and flexible experience. They&apos;re popular with corporate clients and travellers who want a companion who&apos;s easy to talk to and completely at ease.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All independent escorts in our network have been vetted directly by us. You get the freedom of booking an independent escort with the reliability of an agency behind it.
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
                  <strong className="text-white">Our high profile escorts in Chennai are for clients who want something above the standard.</strong> These companions are polished, well-presented, and experienced with upscale settings — dinners, corporate events, hotel visits.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Select from verified profiles, confirm availability, and your escort will arrive at your location within the hour. The process is smooth and the experience matches what&apos;s promised.
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
                  <strong className="text-white">Many of our VIP companions come from hospitality and entertainment backgrounds,</strong> which shows. They know how to conduct themselves in public, hold their own in social settings, and make every moment feel effortless.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you&apos;re spending time in Chennai and want company that genuinely elevates the experience, a VIP escort from LillyBabe is worth considering.
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
                  <strong className="text-white">Our female escorts in Chennai are available for a range of arrangements</strong> — outcall to your hotel, apartment visits, social outings, and longer bookings. Every companion is verified, professional, and clear on what the booking involves. No ambiguity, no complications.
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
            What Clients Say About Our Chennai Escorts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A few words from people who&apos;ve booked through LillyBabe — in their own words.
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
              &quot;Smooth process from start to finish. The escort was exactly as described — no surprises. She was easy to talk to and made the whole evening feel comfortable. I&apos;ll be booking again.&quot;
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
              &quot;I was in Chennai for work and wanted some decent company. The escort was punctual, well-presented, and genuinely good conversation. Made the trip considerably more enjoyable.&quot;
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
              &quot;I&apos;ve used a few escort services before. LillyBabe is the most reliable I&apos;ve come across. The girl showed up exactly as described and handled herself professionally throughout. No issues at all.&quot;
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
            Where We Operate — Chennai Escort Service Areas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We cover all major areas across Chennai.</strong> Wherever you&apos;re staying or based, we can arrange a companion nearby.
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

      {/* FAQ Section */}
      <section id="faq" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Common questions about our Chennai escort service,</strong> answered directly.
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
              What makes LillyBabe the best Chennai escort service?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">LillyBabe is Chennai's most trusted escort service</strong> with verified profiles, genuine photos, 24/7 availability, and complete privacy. All escorts are thoroughly vetted for safety and professionalism.
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
              Are all Chennai escorts on your site verified?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely! Every girl is real</strong> - we've met them, talked to them, and checked their photos. No fake profiles, no old pictures. We ensure they're who they say they are.
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
              What areas in Chennai do you serve?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We serve all major areas</strong> including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, Kilpauk, Guindy, and Mylapore. Escorts are available throughout the city.
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
              How can I book a Chennai escort safely?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Booking is simple and secure.</strong> Contact us via phone or WhatsApp, discuss your requirements, and we'll arrange everything with complete privacy and discretion.
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
              What types of Chennai escorts do you offer?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We've got all types</strong> - independent, Russian beauties, Tamil girls, models, celebrities, VIP, and housewives. Whatever you're into, we've got the perfect match.
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
                  Is my privacy guaranteed?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely! Complete privacy is our top priority.</strong> All interactions are confidential, and we never share client information with anyone.
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
              What are the rates for Chennai escorts?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Prices vary based on your preferences and duration.</strong> We offer options from affordable to premium VIP experiences. Contact us for detailed pricing.
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
              Are your Chennai escorts available 24/7?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes! Our service operates 24/7.</strong> You can book appointments at any time, day or night, for immediate or advance bookings.
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
                  How do you ensure safety and security?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We take safety very seriously!</strong> We have strict protocols in place to protect everyone's well-being. All escorts undergo thorough background checks.
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
                  <strong className="text-white">Absolutely!</strong> You can request specific preferences like age, ethnicity, and physical attributes. We'll find the perfect match for your experience!
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
                  Do you offer overnight or travel services?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes!</strong> Our escorts offer overnight and travel companionship services for clients who need longer-term arrangements or business trips.
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
                  Are escorts available for social events?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely!</strong> Our escorts are perfect for accompanying you to social events or parties. They're professional, charming, and will make your experience memorable!
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

