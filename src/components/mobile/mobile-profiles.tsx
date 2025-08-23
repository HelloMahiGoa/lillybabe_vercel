import { Button } from '@/components/ui/button';
import { Star, Heart, MapPin, MessageCircle, Phone, Check, ChevronRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

interface MobileProfilesProps {
  profiles: Profile[];
}

// Initial profiles (fallback)
const initialProfiles = [
  {
    id: 1,
    name: 'Priya',
    age: 24,
    location: 'T-Nagar',
    photo_url: '/images/models/model-1.webp',
    rating: 4.9,
    pricing: {
      '1 Shot': '₹8,000',
      '2 Shots': '₹12,000',
      '3 Shots': '₹15,000',
      'Full Night': '₹25,000'
    },
    availability: 'Available Now',
    distance: '2.5 km away'
  },
  {
    id: 2,
    name: 'Anjali',
    age: 26,
    location: 'Adyar',
    photo_url: '/images/models/model-2.webp',
    rating: 4.8,
    pricing: {
      '1 Shot': '₹10,000',
      '2 Shots': '₹15,000',
      '3 Shots': '₹18,000',
      'Full Night': '₹30,000'
    },
    availability: 'Available Now',
    distance: '4.1 km away'
  },
  {
    id: 3,
    name: 'Meera',
    age: 22,
    location: 'OMR',
    photo_url: '/images/models/model-3.webp',
    rating: 4.7,
    pricing: {
      '1 Shot': '₹7,000',
      '2 Shots': '₹11,000',
      '3 Shots': '₹14,000',
      'Full Night': '₹22,000'
    },
    availability: 'Available Now',
    distance: '6.8 km away'
  },
  {
    id: 4,
    name: 'Sofia',
    age: 25,
    location: 'ECR',
    photo_url: '/images/russian1.webp',
    rating: 4.9,
    pricing: {
      '1 Shot': '₹12,000',
      '2 Shots': '₹18,000',
      '3 Shots': '₹22,000',
      'Full Night': '₹35,000'
    },
    availability: 'Available Now',
    distance: '8.2 km away'
  }
];

// Additional profiles for load more
const additionalProfiles = [
  {
    id: 5,
    name: 'Riya',
    age: 23,
    location: 'Anna Nagar',
    photo_url: '/images/models/model-4.webp',
    rating: 4.8,
    pricing: {
      '1 Shot': '₹9,000',
      '2 Shots': '₹13,000',
      '3 Shots': '₹16,000',
      'Full Night': '₹28,000'
    },
    availability: 'Available Now',
    distance: '3.2 km away'
  },
  {
    id: 6,
    name: 'Zara',
    age: 27,
    location: 'Velachery',
    photo_url: '/images/models/model-5.webp',
    rating: 4.9,
    pricing: {
      '1 Shot': '₹11,000',
      '2 Shots': '₹16,000',
      '3 Shots': '₹20,000',
      'Full Night': '₹32,000'
    },
    availability: 'Available Now',
    distance: '5.7 km away'
  },
  {
    id: 7,
    name: 'Kavya',
    age: 21,
    location: 'Porur',
    photo_url: '/images/models/model-6.webp',
    rating: 4.7,
    pricing: {
      '1 Shot': '₹8,500',
      '2 Shots': '₹12,500',
      '3 Shots': '₹15,500',
      'Full Night': '₹26,000'
    },
    availability: 'Available Now',
    distance: '7.3 km away'
  },
  {
    id: 8,
    name: 'Nisha',
    age: 24,
    location: 'Mylapore',
    photo_url: '/images/models/model-7.webp',
    rating: 4.8,
    pricing: {
      '1 Shot': '₹10,500',
      '2 Shots': '₹15,500',
      '3 Shots': '₹19,000',
      'Full Night': '₹31,000'
    },
    availability: 'Available Now',
    distance: '4.8 km away'
  }
];

export const MobileProfiles = ({ profiles: propProfiles }: MobileProfilesProps) => {
  const [profiles, setProfiles] = useState(propProfiles);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Update profiles when props change
  useEffect(() => {
    if (propProfiles && propProfiles.length > 0) {
      setProfiles(propProfiles);
      setHasMore(propProfiles.length >= 12); // If we have 12 or more, there might be more
    }
  }, [propProfiles]);

  const handleViewAll = () => {
    // Could load more profiles or navigate to full profiles page
    console.log('View all profiles clicked');
  };

  const handleMessage = (profileName: string) => {
    const message = encodeURIComponent(`Hi ${profileName}, I'm interested in booking your services. Please provide more details.`);
    const phoneNumber = '919876543210';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = (profileName: string) => {
    const phoneNumber = '919876543210';
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleFavorite = (profileId: number) => {
    setFavorites(prev => 
      prev.includes(profileId) 
        ? prev.filter(id => id !== profileId)
        : [...prev, profileId]
    );
  };

  const handleLoadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    try {
      // Calculate next page
      const currentPage = Math.floor(profiles.length / 12) + 1;
      
      const params = new URLSearchParams({
        page: (currentPage + 1).toString(),
        limit: '6',
        sortBy: 'featured'
      });

      const response = await fetch(`/api/profiles?${params}`);
      const result = await response.json();

      if (result.success && result.data.profiles.length > 0) {
        // Convert API profiles to display format
        const convertedProfiles = result.data.profiles.map((profile: any) => ({
          id: profile.id,
          name: profile.name,
          age: profile.age,
          location: profile.location,
          photo_url: profile.profile_images?.find((img: any) => img.is_primary)?.image_url || '/placeholder-profile.jpg',
          rating: profile.rating,
          pricing: {
            '1 Shot': profile.pricing?.one_shot ? `₹${profile.pricing.one_shot.toLocaleString()}` : '₹8,000',
            '2 Shots': profile.pricing?.two_shot ? `₹${profile.pricing.two_shot.toLocaleString()}` : '₹12,000',
            '3 Shots': profile.pricing?.three_shot ? `₹${profile.pricing.three_shot.toLocaleString()}` : '₹15,000',
            'Full Night': profile.pricing?.full_night ? `₹${profile.pricing.full_night.toLocaleString()}` : '₹25,000'
          },
          availability: profile.availability,
          distance: 'Nearby'
        }));
        
        setProfiles(prev => [...prev, ...convertedProfiles]);
        
        // Check if there are more profiles to load
        if (result.data.profiles.length < 6) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more profiles:', error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-6 bg-white dark:bg-gray-800 mobile-profiles">
      <div className="px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Available Now</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verified escorts ready to meet</p>
          </div>
          <button 
            onClick={handleViewAll}
            className="flex items-center gap-1 text-pink-600 dark:text-pink-400 text-sm font-medium hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
          >
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Profile Cards */}
        <div className="space-y-4">
          {profiles.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500">
                <div className="text-lg font-semibold mb-2">No profiles available</div>
                <div className="text-sm">Check back later for new profiles</div>
              </div>
            </div>
          )}
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 mobile-profile-card">
              {/* Profile Header */}
              <div className="relative h-64">
                <Image
                  src={profile.photo_url}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  {profile.availability}
                </div>
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                  <Check className="h-5 w-5" />
                </div>
                
                {/* Profile Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-xl font-bold mb-1 mobile-profile-title">{profile.name}, {profile.age}</h3>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <MapPin className="h-4 w-4" />
                        <span className="mobile-profile-location">{profile.location}</span>
                      </div>
                      <div className="text-sm text-gray-200 mobile-profile-distance">{profile.distance}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-bold">{profile.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="p-4 mobile-profile-content">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">Pricing</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(profile.pricing).map(([service, price]) => (
                    <div key={service} className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-3 text-center border border-pink-100 dark:border-gray-600 mobile-pricing-card">
                      <div className="text-xs text-gray-600 dark:text-gray-300 mb-1 mobile-pricing-service">{service}</div>
                      <div className="text-sm font-bold text-pink-600 dark:text-pink-400 mobile-pricing-price">{price}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleMessage(profile.name)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message
                  </button>
                  <button 
                    onClick={() => handleCall(profile.name)}
                    className="flex-1 border-2 border-pink-300 dark:border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-700 py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </button>
                  <button 
                    onClick={() => handleFavorite(profile.id)}
                    className={`p-3 border-2 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 active:scale-95 ${
                      favorites.includes(profile.id) 
                        ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20' 
                        : 'border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${
                      favorites.includes(profile.id) 
                        ? 'text-pink-500 fill-current' 
                        : 'text-gray-400'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          {hasMore ? (
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="border-2 border-pink-300 dark:border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-700 py-3 px-8 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load More Profiles'
              )}
            </button>
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              All profiles loaded
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
