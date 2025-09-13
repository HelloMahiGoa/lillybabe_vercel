import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Profile } from '@/types';
import { Star, MapPin, Shield, Crown } from 'lucide-react';

interface MobileGalleryProps {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
}

export function MobileGallery({ profiles, loading, error }: MobileGalleryProps) {
  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
              <div className="aspect-[3/4] bg-gray-300"></div>
              <div className="p-3">
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Profiles</h3>
        <p className="text-gray-600 mb-4 text-sm">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="text-gray-400 text-4xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Profiles Found</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Try adjusting your search criteria or filters to find more profiles.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 gap-4">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            href={`/escorts/${profile.slug}`}
            className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={profile.photo_url || '/images/placeholder.jpg'}
                alt={profile.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {profile.is_featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                )}
                {(profile as any).is_verified && (
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                )}
              </div>

              {/* Price badge */}
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {profile.pricing?.['1 Shot'] || 'Contact'}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-3">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                  {profile.name}
                </h3>
                <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs font-semibold">{profile.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                <span className="font-medium">{profile.age}y</span>
                <span className="capitalize">{profile.category}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{profile.location}</span>
                </div>
                <span className="text-blue-600">{profile.views_count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {profiles.length >= 20 && (
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            Load More Profiles
          </button>
        </div>
      )}
    </div>
  );
}
