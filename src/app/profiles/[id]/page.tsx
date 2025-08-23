"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  CheckCircle, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Eye, 
  Heart,
  Share2,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface ProfileImage {
  id: number;
  image_url: string;
  thumbnail_url?: string;
  is_primary: boolean;
  image_order: number;
}

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  category: string;
  nationality: string;
  height: string;
  body_type: string;
  hair_color: string;
  eye_color: string;
  languages: string[];
  pricing: {
    one_shot?: number;
    two_shot?: number;
    three_shot?: number;
    full_night?: number;
  };
  availability: string;
  rating: number;
  views_count: number;
  is_verified: boolean;
  is_featured: boolean;
  whatsapp?: string;
  phone?: string;
  profile_images: ProfileImage[];
  created_at: string;
}

export default function ProfileDetailPage() {
  const params = useParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [relatedProfiles, setRelatedProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadProfile();
      trackView();
    }
  }, [params.id]);

  const loadProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/profiles/${params.id}`);
      const result = await response.json();

      if (result.success) {
        setProfile(result.data);
        loadRelatedProfiles(result.data.location, result.data.category);
      } else {
        console.error('Failed to load profile');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadRelatedProfiles = async (location: string, category: string) => {
    try {
      const response = await fetch(`/api/profiles?location=${location}&category=${category}&limit=4`);
      const result = await response.json();

      if (result.success) {
        // Filter out current profile
        const filtered = result.data.profiles.filter((p: Profile) => p.id !== parseInt(params.id as string));
        setRelatedProfiles(filtered.slice(0, 3));
      }
    } catch (error) {
      console.error('Error loading related profiles:', error);
    }
  };

  const trackView = async () => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'view',
          profileId: parseInt(params.id as string)
        })
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  const trackClick = async (clickType: string) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'click',
          profileId: parseInt(params.id as string),
          clickType
        })
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  const getPrimaryImage = () => {
    if (!profile?.profile_images || profile.profile_images.length === 0) {
      return '/images/placeholder.jpg';
    }
    const primary = profile.profile_images.find(img => img.is_primary);
    return primary?.image_url || profile.profile_images[0]?.image_url || '/images/placeholder.jpg';
  };

  const formatPrice = (pricing: Profile['pricing']) => {
    const prices = [];
    if (pricing.one_shot) prices.push(`1 Shot: ₹${pricing.one_shot}`);
    if (pricing.two_shot) prices.push(`2 Shot: ₹${pricing.two_shot}`);
    if (pricing.three_shot) prices.push(`3 Shot: ₹${pricing.three_shot}`);
    if (pricing.full_night) prices.push(`Full Night: ₹${pricing.full_night}`);
    return prices.length > 0 ? prices : ['Contact for pricing'];
  };

  const handleWhatsApp = () => {
    trackClick('whatsapp');
    if (profile?.whatsapp) {
      window.open(`https://wa.me/${profile.whatsapp}`, '_blank');
    }
  };

  const handleCall = () => {
    trackClick('phone');
    if (profile?.phone) {
      window.open(`tel:${profile.phone}`, '_blank');
    }
  };

  const nextImage = () => {
    if (profile?.profile_images) {
      setSelectedImageIndex((prev) => 
        prev === profile.profile_images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (profile?.profile_images) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? profile.profile_images.length - 1 : prev - 1
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-8">The profile you're looking for doesn't exist or is no longer available.</p>
          <Link
            href="/profiles"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Browse All Profiles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/profiles"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Profiles</span>
            </Link>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full ${isFavorite ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={getPrimaryImage()}
                  alt={profile.name}
                  className="w-full h-96 object-cover cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {profile.is_featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                  {profile.is_verified && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verified
                    </span>
                  )}
                </div>

                {/* View Count */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {profile.views_count} views
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {profile.profile_images && profile.profile_images.length > 1 && (
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {profile.profile_images.map((image, index) => (
                      <img
                        key={image.id}
                        src={image.thumbnail_url || image.image_url}
                        alt={`${profile.name} ${index + 1}`}
                        className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-pink-500"
                        onClick={() => {
                          setSelectedImageIndex(index);
                          setShowImageModal(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {profile.location}
                    </span>
                    <span>{profile.age} years</span>
                    <span>{profile.category}</span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-6 w-6 fill-current" />
                  <span className="text-xl font-semibold text-gray-900 ml-1">{profile.rating}</span>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Personal Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="text-gray-900">{profile.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height:</span>
                      <span className="text-gray-900">{profile.height || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Body Type:</span>
                      <span className="text-gray-900">{profile.body_type || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hair Color:</span>
                      <span className="text-gray-900">{profile.hair_color || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Eye Color:</span>
                      <span className="text-gray-900">{profile.eye_color || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nationality:</span>
                      <span className="text-gray-900">{profile.nationality || 'Not specified'}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">{profile.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-600">Available for bookings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {formatPrice(profile.pricing).map((price, index) => (
                    <div key={index} className="bg-pink-50 rounded-lg p-3 text-center">
                      <span className="text-pink-600 font-medium">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Contact {profile.name}</h3>
              <div className="space-y-3">
                {profile.whatsapp && (
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </button>
                )}
                {profile.phone && (
                  <button
                    onClick={handleCall}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </button>
                )}
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Available: {profile.availability}</p>
                  <p className="flex items-center justify-center mt-1">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {profile.rating} rating
                  </p>
                </div>
              </div>
            </div>

            {/* Related Profiles */}
            {relatedProfiles.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Related Profiles</h3>
                <div className="space-y-4">
                  {relatedProfiles.map((relatedProfile) => (
                    <Link
                      key={relatedProfile.id}
                      href={`/profiles/${relatedProfile.id}`}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={relatedProfile.profile_images?.[0]?.thumbnail_url || relatedProfile.profile_images?.[0]?.image_url || '/images/placeholder.jpg'}
                        alt={relatedProfile.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{relatedProfile.name}</p>
                        <p className="text-sm text-gray-600">{relatedProfile.location} • {relatedProfile.age}y</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && profile.profile_images && profile.profile_images.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-4xl w-full h-full flex items-center justify-center">
            <img
              src={profile.profile_images[selectedImageIndex]?.image_url}
              alt={`${profile.name} ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Navigation */}
            {profile.profile_images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            
            {/* Close Button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} of {profile.profile_images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
