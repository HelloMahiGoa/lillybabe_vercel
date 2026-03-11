'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Locations', href: '/locations' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact-us' },
];

const WA_URL =
  'https://wa.me/918121426651?text=Hi%2C%20I%20saw%20LillyBabe%20and%20want%20to%20book%20an%20escort%20in%20Chennai.';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-white/8'
          : 'bg-gradient-to-b from-black/70 to-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <span className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-none">
              LILLY
            </span>
            <span className="text-amber-400 text-2xl sm:text-3xl font-black tracking-tight leading-none">
              BABE
            </span>
            <div className="w-2 h-2 rounded-full bg-amber-400 mb-1 ml-0.5 group-hover:bg-amber-300 transition-colors duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 hover:text-amber-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918121426651"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 81214 26651</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:-translate-y-px"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 py-4 rounded-b-2xl">
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-4 space-y-3">
              <a
                href="tel:+918121426651"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                +91 81214 26651
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-4 py-3.5 rounded-xl w-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
