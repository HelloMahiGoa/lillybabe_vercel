'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Escort } from '@/types/escort';

interface EscortCardProps {
  escort: Escort;
  showBadge?: boolean;
  className?: string;
}

export default function EscortCard({ escort, showBadge = true, className = '' }: EscortCardProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Verified':
        return 'bg-green-500 text-white';
      case 'Independent':
        return 'bg-blue-500 text-white';
      case 'Agency':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatPrice = (pricing: any) => {
    if (!pricing || typeof pricing !== 'object') return 'Contact for pricing';
    
    const prices = Object.values(pricing).filter(price => price && price !== '');
    if (prices.length === 0) return 'Contact for pricing';
    
    const minPrice = prices[0] as string;
    return minPrice;
  };

  return (
    <div className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {escort.main_photo_url ? (
          <Image
            src={escort.main_photo_url}
            alt={escort.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-6xl">👤</div>
          </div>
        )}
        
        {/* Badge */}
        {showBadge && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(escort.badge)}`}>
              {escort.badge}
            </span>
          </div>
        )}

        {/* Source Indicator */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            escort.source === 'admin' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {escort.source === 'admin' ? 'Admin' : 'User'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Age */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {escort.name}
          </h3>
          <span className="text-sm text-gray-500 font-medium">
            {escort.age}y
          </span>
        </div>

        {/* Location and Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">
            📍 {escort.location}
          </span>
          <span className="text-sm text-gray-600">
            🏷️ {escort.category}
          </span>
        </div>

        {/* Pricing */}
        <div className="mb-3">
          <div className="text-sm text-gray-600 mb-1">Starting from:</div>
          <div className="text-lg font-bold text-green-600">
            {formatPrice(escort.pricing)}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>👁️ {escort.views_count} views</span>
          <span>📞 {escort.clicks_count} contacts</span>
        </div>

        {/* Action Button */}
        <Link
          href={`/escorts/${escort.slug}`}
          className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
