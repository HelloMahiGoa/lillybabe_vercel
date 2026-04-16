import { Metadata } from 'next';
import Image from 'next/image';
import { Layout } from '@/components/layout/layout';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export const metadata: Metadata = {
  title: 'Contact LillyBabe — Chennai Escort Bookings & Questions',
  description:
    'Message LillyBabe on WhatsApp for Chennai escort bookings, availability, and simple questions. We reply as soon as we can.',
  keywords: [
    'contact Chennai escorts',
    'LillyBabe contact',
    'Chennai escort booking WhatsApp',
  ],
  openGraph: {
    title: 'Contact LillyBabe — Chennai Escort Bookings & Questions',
    description:
      'Get in touch with LillyBabe for bookings, pricing questions, and availability checks in Chennai.',
    url: 'https://lillybabe.com/contact-us',
    images: [
      {
        url: '/images/contact-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Contact LillyBabe — Chennai Escorts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LillyBabe — Chennai Escorts',
    description:
      'WhatsApp contact details for LillyBabe Chennai escort bookings.',
    images: ['/images/contact-banner.webp'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/contact-us',
  },
};

const WA_URL =
  'https://wa.me/918121426651?text=Hi%2C%20I%20saw%20your%20website%20LillyBabe%20and%20want%20to%20know%20today%27s%20available%20profiles.'; 

const IconWA = ({ cls = 'w-5 h-5' }: { cls?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${cls} flex-shrink-0`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function ContactUsPage() {
  return (
    <>
      <Layout>
        <main className="bg-black text-white">
          {/* Hero */}
          <section className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.webp"
                alt="Contact LillyBabe — Chennai Escorts"
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
                Contact · Chennai Escorts
              </p>

              <h1 className="font-black leading-[0.92] tracking-tight mb-5 text-[clamp(2.4rem,7vw,3.6rem)]">
                <span className="block text-white">One team,</span>
                <span className="block text-amber-400">one simple way to reach us</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                No long forms or complicated steps. If you want to know who is free today, what it
                costs, or how the booking works, just send a short message on WhatsApp.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
                A quick &quot;Hi, I saw LillyBabe. What&apos;s available today?&quot; is enough to
                start. We&apos;ll reply with options, photos, and clear next steps.
              </p>
            </div>
          </section>

          {/* Contact options */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-4 sm:pt-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-8 sm:mb-10 max-w-2xl">
              {/* WhatsApp */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-200 px-4 py-4 sm:px-5 sm:py-5"
              >
                <IconWA cls="w-6 h-6 text-[#25D366]" />
                <div className="flex-1">
                  <p className="text-xs text-gray-400 uppercase tracking-[0.16em] mb-1">
                    Primary
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    WhatsApp: +91 81214 26651
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Fastest way to get today&apos;s availability and pricing.
                  </p>
                </div>
              </a>
            </div>

            {/* Simple info list instead of form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                <p className="text-amber-300 font-semibold mb-2">What to include in your message</p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                  <li>Which area or hotel / apartment you&apos;re in</li>
                  <li>Rough time window (for example: tonight 8–10 PM)</li>
                  <li>Any preference: age range, type, or budget</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                <p className="text-amber-300 font-semibold mb-2">How we usually reply</p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                  <li>We share who is realistically available for your time and area</li>
                  <li>We confirm session price and simple rules up front</li>
                  <li>If it doesn&apos;t work for you, you can simply say no</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </Layout>

      <FloatingButtons />
    </>
  );
}
