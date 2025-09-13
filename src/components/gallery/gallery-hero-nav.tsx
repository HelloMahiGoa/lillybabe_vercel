import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Users, Shield, Clock } from 'lucide-react';

const quickLinks = [
  {
    name: 'Teen Escorts',
    slug: 'teen-escorts',
    image: '/images/teen.webp',
    count: '50+',
    description: 'Young & Beautiful'
  },
  {
    name: 'Russian Escorts',
    slug: '#',
    image: '/images/russian1.webp',
    count: '30+',
    description: 'Exotic & Charming'
  },
  {
    name: 'Housewife Escorts',
    slug: '#',
    image: '/images/housewife.webp',
    count: '40+',
    description: 'Mature & Experienced'
  },
  {
    name: 'Independent Escorts',
    slug: '#',
    image: '/images/independent.jpg',
    count: '60+',
    description: 'Professional & Reliable'
  }
];

const features = [
  {
    icon: Shield,
    title: '100% Verified',
    description: 'All profiles are verified and authentic'
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Round the clock service across Chennai'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Only the best and most beautiful escorts'
  },
  {
    icon: Users,
    title: '500+ Profiles',
    description: 'Largest collection in Chennai'
  }
];

export function GalleryHeroNav() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Chennai Escorts Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover the most beautiful and verified escort girls in Chennai. 
            Browse through our extensive collection of premium profiles.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-200">500+</div>
              <div className="text-sm opacity-80">Beautiful Girls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-200">24/7</div>
              <div className="text-sm opacity-80">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-200">100%</div>
              <div className="text-sm opacity-80">Verified Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-200">15+</div>
              <div className="text-sm opacity-80">Areas Covered</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#gallery"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Gallery
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/${link.slug}`}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={link.image}
                      alt={link.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{link.name}</h3>
                  <p className="text-sm opacity-80 mb-2">{link.description}</p>
                  <div className="text-pink-200 font-semibold">{link.count} Available</div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-pink-200" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
