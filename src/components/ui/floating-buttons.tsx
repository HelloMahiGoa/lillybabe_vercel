'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { BOOKING_TELEGRAM_URL, buildWhatsAppBookingUrl } from '@/lib/booking-links';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const waUrl = buildWhatsAppBookingUrl(
      "Hi, I found your website LillyBabe and I'm looking for escort service in Chennai. Please share available profiles."
    );
    window.open(waUrl, '_blank');
  };

  const handleTelegram = () => {
    window.open(BOOKING_TELEGRAM_URL, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group w-12 h-12 bg-zinc-800 hover:bg-amber-500 border border-white/10 hover:border-amber-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
      >
        <ChevronUp className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-200" />
      </button>

      {/* WhatsApp */}
      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={26}
          height={26}
          className="w-6 h-6 object-contain"
        />
      </button>

      {/* Telegram */}
      <button
        onClick={handleTelegram}
        aria-label="Chat on Telegram"
        className="w-12 h-12 bg-[#229ED9] hover:bg-[#1a8fc4] rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </button>
    </div>
  );
};
