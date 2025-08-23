'use client';

import { Button } from '@/components/ui/button';
import { Star, Heart, MapPin, MessageCircle, Phone, Check } from 'lucide-react';
import Image from 'next/image';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  photo_url: string;
  rating: number;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  distance: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  // Ensure pricing exists and has the expected structure
  const pricing = profile.pricing || {
    '1 Shot': '₹8,000',
    '2 Shots': '₹12,000',
    '3 Shots': '₹15,000',
    'Full Night': '₹25,000'
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Profile Image */}
      <div className="relative h-80">
        <Image
          src={profile.photo_url}
          alt={profile.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          {profile.availability || 'Available Now'}
        </div>
        
        {/* Verified Badge */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
          <Check className="h-5 w-5" />
        </div>
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">{profile.name}, {profile.age}</h3>
              <div className="flex items-center gap-2 text-sm mb-1">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
              <div className="text-sm text-gray-200">{profile.distance || 'Nearby'}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="text-xl font-bold">{profile.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-4 text-center text-lg">Pricing</h4>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {Object.entries(pricing).map(([service, price]) => (
            <div key={service} className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-4 text-center border border-pink-100 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-600 mb-2">{service}</div>
              <div className="text-lg font-bold text-pink-600">{price}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            variant="primary" 
            size="lg" 
            className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Message
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="flex-1 border-2 border-pink-300 text-pink-600 hover:bg-pink-50 py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="p-3 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-200 active:scale-95"
          >
            <Heart className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};
