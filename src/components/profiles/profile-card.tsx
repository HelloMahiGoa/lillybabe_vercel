'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, MapPin, MessageCircle, Phone, Heart, Check, Eye } from 'lucide-react';
import { Profile } from '@/types';

interface ProfileCardProps {
  profile: Profile;
  variant?: 'default' | 'compact';
  isUserAd?: boolean;
}

export const ProfileCard = ({ profile, variant = 'default', isUserAd = false }: ProfileCardProps) => {
  // Ensure pricing exists and has the expected structure
  const pricing = profile.pricing || {
    '1 Shot': '₹8,000',
    '2 Shots': '₹12,000',
    '3 Shots': '₹15,000',
    'Full Night': '₹25,000'
  };

  // Handle missing properties gracefully
  const availability = 'Available Now'; // Default value
  const distance = 'Nearby'; // Default value

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
      {/* Profile Image */}
      <div className="relative h-64 sm:h-72">
        <Image
          src={profile.photo_url || '/images/independent-1.jpg'}
          alt={profile.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/independent-1.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 shadow-lg">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          <span className="hidden sm:inline">{availability}</span>
          <span className="sm:hidden">Online</span>
        </div>
        
        {/* Verified Badge */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg">
          <Check className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-12 sm:top-16 left-3 sm:left-4 bg-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          {profile.category}
        </div>
        
        {/* Ads Badge for User Ads */}
        {isUserAd && (
          <div className="absolute top-12 sm:top-16 right-3 sm:right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            Ads
          </div>
        )}
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 truncate">{profile.name}, {profile.age}</h3>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">{profile.location}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-200">{distance}</div>
            </div>
            <div className="text-right ml-2">
              <div className="flex items-center gap-1 mb-1 sm:mb-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current" />
                <span className="text-lg sm:text-xl font-bold">{profile.rating}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-200">
                ({profile.reviews_count || 0} reviews)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="p-4 sm:p-6">
        <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-center text-base sm:text-lg">Pricing</h4>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {Object.entries(pricing).map(([service, price]) => (
            <div key={service} className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-pink-100 hover:shadow-md transition-shadow">
              <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{service}</div>
              <div className="text-sm sm:text-lg font-bold text-pink-600">{price}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <Link href={isUserAd ? `/ads/${profile.slug}` : `/escorts/${profile.slug}`} className="flex-1">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
              onClick={async () => {
                // Track profile click
                try {
                  await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      profileId: profile.id,
                      actionType: 'click'
                    }),
                  });
                } catch (trackingError) {
                  console.error('Analytics tracking error:', trackingError);
                }
              }}
            >
              <Eye className="h-4 w-4" />
              View Profile
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="p-3 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-200 active:scale-95"
          >
            <Heart className="h-5 w-5 text-gray-400" />
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Response Rate: {profile.response_rate || 90}%</span>
            <span>Verified Profile</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-700 mt-2 font-medium">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-blue-500" />
              <span>{profile.views_count || 0} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{profile.reviews_count || 0} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
