'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PencilIcon,
  ArrowLeftIcon,
  EyeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  StarIcon,
  CurrencyRupeeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { Profile, Testimonial } from '@/types/admin';
import ImageModal from './ImageModal';

interface ProfileViewProps {
  profileId: number;
}

export default function ProfileView({ profileId }: ProfileViewProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProfile();
    fetchTestimonials();
  }, [profileId]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`/api/admin/profiles/${profileId}/testimonials`);
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data.testimonials || []);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/profiles/${profileId}`);
      if (response.ok) {
        const data = await response.json();
        setProfile(data.profile);
      } else {
        console.error('Failed to fetch profile');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const goToPreviousImage = () => {
    if (!profile) return;
    const allImages = [profile.main_photo_url, ...(profile.gallery_images || [])].filter(Boolean);
    setCurrentImageIndex(prev => prev === 0 ? allImages.length - 1 : prev - 1);
  };

  const goToNextImage = () => {
    if (!profile) return;
    const allImages = [profile.main_photo_url, ...(profile.gallery_images || [])].filter(Boolean);
    setCurrentImageIndex(prev => prev === allImages.length - 1 ? 0 : prev + 1);
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <p className="text-gray-500">Profile not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ArrowLeftIcon className="-ml-1 mr-2 h-4 w-4" />
          Back
        </button>
        
        <button
          onClick={() => router.push(`/admin/profiles/${profileId}/edit`)}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PencilIcon className="-ml-1 mr-2 h-4 w-4" />
          Edit Profile
        </button>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                {profile.main_photo_url ? (
                  <img
                    src={profile.main_photo_url}
                    alt={profile.name}
                    className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal(0)}
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}
              </div>
              
              {/* Gallery Images */}
              {profile.gallery_images && profile.gallery_images.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Gallery Images</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {profile.gallery_images.map((image, index) => (
                      <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImageModal(index + 1)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.age} years</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900 flex items-center">
                      <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                      {profile.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Slug</dt>
                    <dd className="mt-1 text-sm text-gray-900 font-mono">{profile.slug}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                    <dd className="mt-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        profile.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {profile.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">WhatsApp</dt>
                    <dd className="mt-1 text-sm text-gray-900 flex items-center">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                      {profile.whatsapp_number}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900 flex items-center">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                      {profile.phone_number}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing</h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {profile.pricing && Object.entries(profile.pricing).map(([service, price]) => (
                    <div key={service}>
                      <dt className="text-sm font-medium text-gray-500">{service}</dt>
                      <dd className="mt-1 text-sm text-gray-900 flex items-center">
                        <CurrencyRupeeIcon className="h-4 w-4 text-gray-400 mr-1" />
                        {price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Analytics */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-purple-500 mr-2" />
                  Analytics & Performance
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {profile.views_count?.toLocaleString() || 0}
                    </div>
                    <div className="text-sm text-blue-700 font-medium">Total Views</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {profile.clicks_count?.toLocaleString() || 0}
                    </div>
                    <div className="text-sm text-green-700 font-medium">Total Clicks</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {profile.views_count && profile.clicks_count ? 
                        ((profile.clicks_count / profile.views_count) * 100).toFixed(1) : '0.0'}%
                    </div>
                    <div className="text-sm text-purple-700 font-medium">CTR</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {testimonials.length}
                    </div>
                    <div className="text-sm text-orange-700 font-medium">Reviews</div>
                  </div>
                </div>
              </div>

              {/* SEO Information */}
              {(profile.meta_title || profile.meta_description || profile.meta_keywords) && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Information</h3>
                  <dl className="space-y-4">
                    {profile.meta_title && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Meta Title</dt>
                        <dd className="mt-1 text-sm text-gray-900">{profile.meta_title}</dd>
                      </div>
                    )}
                    {profile.meta_description && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Meta Description</dt>
                        <dd className="mt-1 text-sm text-gray-900">{profile.meta_description}</dd>
                      </div>
                    )}
                    {profile.meta_keywords && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Meta Keywords</dt>
                        <dd className="mt-1 text-sm text-gray-900">{profile.meta_keywords}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Timestamps */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Timestamps</h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Created</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {profile.updated_at ? new Date(profile.updated_at).toLocaleDateString() : 'N/A'}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Testimonials</h3>
            <button
              onClick={() => router.push(`/admin/testimonials/new?profile_id=${profileId}`)}
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Testimonial
            </button>
          </div>
          
          {testimonials.length === 0 ? (
            <div className="text-center py-8">
              <StarIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No testimonials yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                This profile doesn't have any testimonials yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        {testimonial.is_verified && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.comment}</p>
                      <div className="flex items-center text-xs text-gray-500 space-x-4">
                        {testimonial.location && (
                          <span>{testimonial.location}</span>
                        )}
                        <span>{new Date(testimonial.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
