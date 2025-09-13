import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Users, Shield, Clock, Phone, MessageCircle } from 'lucide-react';

const quickActions = [
  {
    name: 'Teen Escorts',
    slug: 'teen-escorts',
    image: '/images/teen.webp',
    count: '50+',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Russian Escorts',
    slug: '#',
    image: '/images/russian1.webp',
    count: '30+',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Housewife',
    slug: '#',
    image: '/images/housewife.webp',
    count: '40+',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Independent',
    slug: '#',
    image: '/images/independent.jpg',
    count: '60+',
    color: 'from-green-500 to-teal-500'
  }
];

export function MobileHeroNav() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative px-4 py-6">
        {/* Main Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Chennai Escorts Gallery
          </h1>
          <p className="text-sm opacity-90 mb-6 leading-relaxed">
            Discover the most beautiful and verified escort girls in Chennai
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg font-bold text-pink-200">500+</div>
              <div className="text-xs opacity-80">Beautiful Girls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg font-bold text-pink-200">24/7</div>
              <div className="text-xs opacity-80">Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg font-bold text-pink-200">100%</div>
              <div className="text-xs opacity-80">Verified</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="#gallery"
              className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-sm hover:bg-pink-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Browse Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex gap-3">
              <Link
                href="tel:+918121426651"
                className="flex-1 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/918121426651"
                className="flex-1 bg-green-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Category Actions */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-center mb-4 opacity-90">Popular Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.slug}
                href={`/${action.slug}`}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={action.image}
                      alt={action.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{action.name}</h3>
                    <p className="text-xs opacity-80">{action.count} Available</p>
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Shield className="h-6 w-6 text-green-300 mx-auto mb-2" />
              <div className="text-xs font-semibold">Verified Profiles</div>
              <div className="text-xs opacity-80">100% Authentic</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Clock className="h-6 w-6 text-blue-300 mx-auto mb-2" />
              <div className="text-xs font-semibold">24/7 Available</div>
              <div className="text-xs opacity-80">Always Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
