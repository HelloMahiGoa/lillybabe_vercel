import { Metadata } from 'next';
import Image from 'next/image';
import { Layout } from '@/components/layout/layout';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';

export const metadata: Metadata = {
  title: 'Chennai Escorts Gallery — Verified Profiles | LillyBabe',
  description:
    'Browse a curated gallery of verified Chennai escort profiles. Real, recent photos and honest details so you know who you are booking.',
  keywords: [
    'Chennai escorts gallery',
    'Chennai escort photos',
    'verified escorts Chennai',
    'independent escorts Chennai gallery',
    'Russian escorts gallery Chennai',
  ],
  openGraph: {
    title: 'Chennai Escorts Gallery — Verified Profiles',
    description:
      'See a curated gallery of verified Chennai escort profiles with real, recent photos.',
    url: 'https://lillybabe.com/gallery',
    images: [
      {
        url: '/images/gallery-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chennai Escorts Gallery — Verified Profiles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts Gallery — Verified Profiles',
    description:
      'Browse a curated gallery of verified Chennai escort profiles with real, recent photos.',
    images: ['/images/gallery-banner.webp'],
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          {/* Hero */}
          <section className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.webp"
                alt="Chennai Escorts Gallery — LillyBabe"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Gallery · Chennai Escorts
                </p>

                <h1 className="font-black leading-[0.92] tracking-tight mb-5 text-[clamp(2.4rem,7vw,3.6rem)]">
                  <span className="block text-white">Gallery of</span>
                  <span className="block text-amber-400">Verified Chennai Escort Profiles</span>
                </h1>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-7 max-w-xl">
                  This gallery gives you a clear, honest look at the kind of girls we book every
                  day in Chennai. Photos are recent, profiles are checked, and we don&apos;t leave
                  outdated pictures up once someone is no longer available.
                </p>

                {/* Simple legend for how gallery works */}
                <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-400 mb-7">
                  <p>• When you see someone you like, message us on WhatsApp with the screenshot or description.</p>
                  <p>• We confirm availability, pricing, and timing before you commit.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Category tiles reusing homepage logic but in compact grid */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Browse by category
              </h2>
              <span className="text-xs text-gray-500 hidden sm:inline">
                Tap a category to see more photos and details.
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: 'Teen Escorts', image: '/images/teen.webp', slug: 'teen-escorts-in-chennai' },
                {
                  name: 'Housewife Escorts',
                  image: '/images/housewife.webp',
                  slug: 'housewife-escorts-in-chennai',
                },
                {
                  name: 'Russian Escorts',
                  image: '/images/russian1.webp',
                  slug: 'russian-escorts-in-chennai',
                },
                {
                  name: 'Independent Escorts',
                  image: '/images/independent.jpg',
                  slug: 'independent-escorts-in-chennai',
                },
                { name: 'Tamil Escorts', image: '/images/tamil.webp', slug: 'tamil-escorts-in-chennai' },
                {
                  name: 'Celebrity Escorts',
                  image: '/images/celebrity.webp',
                  slug: 'celebrity-escorts-in-chennai',
                },
                { name: 'Mallu Escorts', image: '/images/mallu.webp', slug: 'mallu-escorts-in-chennai' },
                { name: 'Model Escorts', image: '/images/model.webp', slug: 'model-escorts-in-chennai' },
              ].map((cat) => (
                <a
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width:640px) 50vw,(max-width:1024px) 25vw,20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                      <p className="text-white text-sm font-semibold leading-tight line-clamp-2">
                        {cat.name}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Random gallery grid */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Sample gallery — Chennai escorts
              </h2>
            </div>

            <RandomImageGallery count={24} imageHeight="h-64" showRefreshButton />
          </section>
        </main>
      </Layout>

      <FloatingButtons />
    </>
  );
}
