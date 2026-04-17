import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export const metadata: Metadata = {
  title: 'Chennai Escorts Blog Ã¢â‚¬â€ Guides, Safety & Booking Advice | LillyBabe',
  description:
    'Read practical guides and safety advice about booking escorts in Chennai. No hype, just clear information so you can make better decisions.',
  keywords: [
    'Chennai escorts blog',
    'Chennai escort guides',
    'escort safety tips Chennai',
    'how to book escorts in Chennai',
  ],
  openGraph: {
    title: 'Chennai Escorts Blog Ã¢â‚¬â€ Guides, Safety & Booking Advice',
    description:
      'Practical articles about choosing, booking, and staying safe with Chennai escort services.',
    url: 'https://lillybabe.com/blog',
    images: [
      {
        url: '/images/blog.avif',
        width: 1200,
        height: 630,
        alt: 'Chennai Escorts Blog Ã¢â‚¬â€ Guides & Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts Blog Ã¢â‚¬â€ Guides, Safety & Booking Advice',
    description:
      'Straightforward articles to help you understand how Chennai escort bookings really work.',
    images: ['/images/blog.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/blog',
  },
};

const POSTS = [
  {
    slug: 'how-to-find-perfect-chennai-escort-guide',
    title: 'How to choose the right Chennai escort for you',
    blurb:
      'A grounded guide on what actually matters when you pick a profile Ã¢â‚¬â€ beyond photos and price.',
    category: 'Guide',
  },
  {
    slug: 'chennai-escort-privacy-protection-guide',
    title: 'Privacy and discretion: how we handle your details',
    blurb:
      'What we collect, what we do not store, and how bookings stay between you and us.',
    category: 'Safety',
  },
  {
    slug: 'chennai-escort-services-types-explained',
    title: 'Different types of escort services in Chennai, explained',
    blurb:
      'Agency vs independent, hotel vs apartment, incall vs outcall Ã¢â‚¬â€ and what each really means.',
    category: 'Guide',
  },
  {
    slug: 'chennai-escort-rates-pricing-guide',
    title: 'Rates and pricing: what affects the cost in Chennai',
    blurb:
      'Why prices vary so much, what is reasonable, and how to avoid unrealistic offers.',
    category: 'Money',
  },
  {
    slug: 'chennai-escort-safety-tips-guide',
    title: 'Staying safe when you meet Ã¢â‚¬â€ simple rules that matter',
    blurb:
      'CommonÃ¢â‚¬â€˜sense safety steps for hotels, apartments, and travel within Chennai.',
    category: 'Safety',
  },
  {
    slug: 'best-areas-chennai-escort-services-locations',
    title: 'Which areas of Chennai work best for bookings',
    blurb:
      'A quick look at common locations, what kind of bookings they suit, and what to expect.',
    category: 'Locations',
  },
];

export default function BlogPage() {
  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          {/* Hero */}
          <section className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.webp"
                alt="Chennai Escorts Blog Ã¢â‚¬â€ LillyBabe"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
              <p className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Blog Ã‚Â· Chennai Escorts
              </p>

              <h1 className="font-black leading-[0.92] tracking-tight mb-5 text-[clamp(2.4rem,7vw,3.4rem)]">
                <span className="block text-white">Simple guides for booking</span>
                <span className="block text-amber-400">escorts safely in Chennai</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
                These articles are written to be straightforward and practical. No hype, no fake
                promises Ã¢â‚¬â€ just real information so you can decide what is right for you before you
                book.
              </p>
            </div>
          </section>

          {/* Posts list */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-4 sm:pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-200 p-4 sm:p-5"
                >
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300 mb-2">
                      {post.category}
                    </p>
                    <h2 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-amber-200">
                      {post.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {post.blurb}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] sm:text-xs">
                    <span className="text-amber-300 font-semibold group-hover:text-amber-200">
                      Read article
                    </span>
                    <span className="text-gray-500">Tap to open Ã¢â€ â€™</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </Layout>

      <FloatingButtons />
    </>
  );
}
