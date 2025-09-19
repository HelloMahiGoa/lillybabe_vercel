'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, MapPin, Users, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NotFoundClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const popularLinks = [
    { href: '/escorts', label: 'All Escorts', icon: Users },
    { href: '/gallery', label: 'Gallery', icon: Heart },
    { href: '/locations', label: 'Locations', icon: MapPin },
    { href: '/contact-us', label: 'Contact Us', icon: Search },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main 404 section */}
          <div className="mb-12">
            <div className="relative mb-8">
              <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-pink-200 blur-sm -z-10">
                404
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off. Don't worry, we'll help you find what you're looking for!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Home className="w-5 h-5 group-hover:animate-bounce" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
              Go Back
            </button>
          </div>

          {/* Popular links section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-pink-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white group-hover:animate-bounce">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Help text */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Still can't find what you're looking for? 
              <Link href="/contact-us" className="text-pink-500 hover:text-pink-600 font-semibold ml-1">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
