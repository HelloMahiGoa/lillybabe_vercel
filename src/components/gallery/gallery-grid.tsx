import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Profile } from '@/types';
import { Star, Clock, MapPin, Shield, Crown } from 'lucide-react';

interface GalleryGridProps {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
}

export function GalleryGrid({ profiles, loading, error }: GalleryGridProps) {
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
              <div className="aspect-[3/4] bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Profiles</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Profiles Found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search criteria or filters to find more profiles.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            href={`/escorts/${profile.slug}`}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={profile.photo_url || '/images/placeholder.jpg'}
                alt={profile.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {profile.is_featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    Featured
                  </div>
                )}
                {(profile as any).is_verified && (
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Verified
                  </div>
                )}
              </div>

              {/* Price badge */}
              <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {profile.pricing?.['1 Shot'] || 'Contact'}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">
                  {profile.name}
                </h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">{profile.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{profile.age} years</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="capitalize">{profile.category}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <span>{profile.views_count} views</span>
                </div>
              </div>

              {profile.meta_description && (
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {profile.meta_description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button (if needed) */}
      {profiles.length >= 50 && (
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Load More Profiles
          </button>
        </div>
      )}
    </div>
  );
}
