"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Star, 
  CheckCircle, 
  XCircle,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Eye,
  MousePointer,
  Upload,
  Camera,
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
  services: string[];
  pricing: {
    one_shot?: number;
    two_shot?: number;
    three_shot?: number;
    full_night?: number;
  };
  whatsapp: string;
  phone: string;
  availability: string;
  rating: number;
  views_count: number;
  clicks_count: number;
  is_verified: boolean;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  profile_images: ProfileImage[];
}

export default function ProfileDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadingImages, setUploadingImages] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadProfile();
    }
  }, [params.id]);

  const loadProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/profiles/${params.id}`);
      const result = await response.json();

      if (result.success) {
        setProfile(result.data);
      } else {
        console.error('Failed to load profile');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this profile? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/profiles/${params.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        router.push('/admin/profiles');
      } else {
        alert('Failed to delete profile');
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
      alert('Failed to delete profile');
    }
  };

  const handleToggleStatus = async (field: 'is_active' | 'is_featured' | 'is_verified', value: boolean) => {
    try {
      const response = await fetch(`/api/admin/profiles/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value })
      });

      if (response.ok) {
        setProfile(prev => prev ? { ...prev, [field]: value } : null);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    setUploadingImages(true);
    try {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('images', file);
      });
      formData.append('profileId', params.id as string);

      const response = await fetch('/api/admin/profiles/images', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        loadProfile(); // Reload to get updated images
      } else {
        alert('Failed to upload images');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Failed to upload images');
    } finally {
      setUploadingImages(false);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`/api/admin/profiles/images?imageId=${imageId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        loadProfile(); // Reload to get updated images
      } else {
        alert('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  const formatPrice = (pricing: Profile['pricing']) => {
    const prices = [];
    if (pricing.one_shot) prices.push(`1 Shot: ₹${pricing.one_shot}`);
    if (pricing.two_shot) prices.push(`2 Shot: ₹${pricing.two_shot}`);
    if (pricing.three_shot) prices.push(`3 Shot: ₹${pricing.three_shot}`);
    if (pricing.full_night) prices.push(`Full Night: ₹${pricing.full_night}`);
    return prices.length > 0 ? prices.join(', ') : 'No pricing set';
  };

  const getPrimaryImage = () => {
    if (!profile?.profile_images || profile.profile_images.length === 0) {
      return '/images/placeholder.jpg';
    }
    const primary = profile.profile_images.find(img => img.is_primary);
    return primary?.image_url || profile.profile_images[0]?.image_url || '/images/placeholder.jpg';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Profile not found</h3>
        <p className="text-gray-600 mb-4">The profile you're looking for doesn't exist.</p>
        <Link
          href="/admin/profiles"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Back to Profiles
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/profiles"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-gray-600">Profile Details</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link
            href={`/admin/profiles/${profile.id}/edit`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className={`font-medium ${profile.is_active ? 'text-green-600' : 'text-red-600'}`}>
                {profile.is_active ? 'Active' : 'Inactive'}
              </p>
            </div>
            <button
              onClick={() => handleToggleStatus('is_active', !profile.is_active)}
              className={`p-2 rounded-lg ${profile.is_active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
            >
              {profile.is_active ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Verified</p>
              <p className={`font-medium ${profile.is_verified ? 'text-green-600' : 'text-gray-600'}`}>
                {profile.is_verified ? 'Verified' : 'Unverified'}
              </p>
            </div>
            <button
              onClick={() => handleToggleStatus('is_verified', !profile.is_verified)}
              className={`p-2 rounded-lg ${profile.is_verified ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <CheckCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Featured</p>
              <p className={`font-medium ${profile.is_featured ? 'text-yellow-600' : 'text-gray-600'}`}>
                {profile.is_featured ? 'Featured' : 'Regular'}
              </p>
            </div>
            <button
              onClick={() => handleToggleStatus('is_featured', !profile.is_featured)}
              className={`p-2 rounded-lg ${profile.is_featured ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <Star className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <p className="font-medium text-gray-900">{profile.rating}/5.0</p>
            </div>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="text-gray-900">{profile.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <p className="text-gray-900">{profile.age} years</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <p className="text-gray-900 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                  {profile.location}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <p className="text-gray-900">{profile.category || 'Not specified'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                <p className="text-gray-900">{profile.nationality || 'Not specified'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height</label>
                <p className="text-gray-900">{profile.height || 'Not specified'}</p>
              </div>
            </div>
          </div>

          {/* Physical Attributes */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Physical Attributes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Body Type</label>
                <p className="text-gray-900">{profile.body_type || 'Not specified'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hair Color</label>
                <p className="text-gray-900">{profile.hair_color || 'Not specified'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Eye Color</label>
                <p className="text-gray-900">{profile.eye_color || 'Not specified'}</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-900">{formatPrice(profile.pricing)}</p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
                <p className="text-gray-900 flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1 text-green-500" />
                  {profile.whatsapp || 'Not provided'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="text-gray-900 flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-blue-500" />
                  {profile.phone || 'Not provided'}
                </p>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Eye className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Total Views</p>
                  <p className="text-lg font-semibold text-gray-900">{profile.views_count}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MousePointer className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Total Clicks</p>
                  <p className="text-lg font-semibold text-gray-900">{profile.clicks_count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="space-y-6">
          {/* Primary Image */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Images</h2>
            
            <div className="mb-4">
              <img
                src={getPrimaryImage()}
                alt={profile.name}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(getPrimaryImage())}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label htmlFor="image-upload" className="cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2">
                {uploadingImages ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                <span>{uploadingImages ? 'Uploading...' : 'Upload Images'}</span>
              </label>
              <input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploadingImages}
              />
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-2">
              {profile.profile_images.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.thumbnail_url || image.image_url}
                    alt={`${profile.name} image ${image.image_order + 1}`}
                    className="w-full h-20 object-cover rounded cursor-pointer"
                    onClick={() => setSelectedImage(image.image_url)}
                  />
                  {image.is_primary && (
                    <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                      Primary
                    </div>
                  )}
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>

            {profile.profile_images.length === 0 && (
              <p className="text-gray-500 text-center py-4">No images uploaded</p>
            )}
          </div>

          {/* Profile Metadata */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadata</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Created</label>
                <p className="text-gray-900 flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                  {new Date(profile.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Updated</label>
                <p className="text-gray-900 flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                  {new Date(profile.updated_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                <p className="text-gray-900">{profile.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-4xl">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
