'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { buildWhatsAppBookingUrl } from '@/lib/booking-links';

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

    </div>
  );
};
