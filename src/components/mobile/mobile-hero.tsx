"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Heart, Star, Shield, Users, Zap } from 'lucide-react';
import { MobileHeader } from './mobile-header';

export const MobileHero = () => {
  const handleBrowseEscorts = () => {
    const profilesSection = document.querySelector('.mobile-profiles');
    if (profilesSection) {
      profilesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    const message = encodeURIComponent('Hi, I would like to book an escort service. Please provide more details.');
    const phoneNumber = '919876543210';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mobile-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-8 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      {/* Mobile Header */}
      <MobileHeader />
      
      {/* App Content */}
      <div className="relative z-10 px-4 pt-6 pb-8">
        {/* Welcome Message */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">#1 Chennai Escorts</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300">
              Chennai Escort
            </span>
          </h1>
          
          <p className="text-pink-100 dark:text-gray-300 text-base leading-relaxed max-w-sm mx-auto">
            Discover beautiful, verified escorts in Chennai. Book instantly, pay after meeting. 100% safe & discreet.
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-xs text-pink-200 dark:text-gray-300 font-medium">Verified Escorts</div>
          </div>
          <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-white mb-1">4.9</div>
            <div className="text-xs text-pink-200 dark:text-gray-300 font-medium">Customer Rating</div>
          </div>
          <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs text-pink-200 dark:text-gray-300 font-medium">Available</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-white text-xs font-medium">100% Safe</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-white text-xs font-medium">Verified</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-white text-xs font-medium">Instant</span>
          </div>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="space-y-4">
          <Button 
            onClick={handleBrowseEscorts}
            variant="primary" 
            size="lg" 
            className="w-full bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 text-purple-900 dark:text-gray-100 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 rounded-2xl py-5 text-lg font-semibold shadow-2xl transition-all duration-300 active:scale-95 border-2 border-white/20"
          >
            <MapPin className="h-5 w-5 mr-3" />
            Browse All Escorts
          </Button>
          <Button 
            onClick={handleBookNow}
            variant="secondary_gradient" 
            size="lg" 
            className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700 text-white rounded-2xl py-5 text-lg font-semibold shadow-2xl transition-all duration-300 active:scale-95 border-2 border-pink-400/20"
          >
            <Clock className="h-5 w-5 mr-3" />
            Book Now - 24/7
          </Button>
        </div>

        {/* Floating Trust Card */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold">Live Support</div>
                  <div className="text-xs text-pink-200 dark:text-gray-300">Online Now</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
