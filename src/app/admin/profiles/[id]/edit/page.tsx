"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Save, 
  X
} from 'lucide-react';

interface ProfileFormData {
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
    one_shot: number;
    two_shot: number;
    three_shot: number;
    full_night: number;
  };
  whatsapp: string;
  phone: string;
  availability: string;
  rating: number;
  is_verified: boolean;
  is_featured: boolean;
  is_active: boolean;
}

const categories = [
  'Russian', 'Tamil', 'Telugu', 'Independent', 'Kannada', 'Model', 
  'Housewife', 'College Girl', 'Celebrity', 'Air Hostess', 'Busty', 'Teen'
];

const locations = [
  'Chennai', 'T Nagar', 'Anna Nagar', 'Adyar', 'Mylapore', 'Velachery', 
  'Porur', 'OMR', 'ECR', 'Tambaram', 'Chromepet', 'Pallavaram', 'St. Thomas Mount',
  'Guindy', 'Saidapet', 'Teynampet', 'Egmore', 'Triplicane', 'Royapuram', 'Perambur',
  'Villivakkam', 'Ambattur', 'Avadi', 'Poonamallee', 'Sriperumbudur', 'Kanchipuram'
];

const bodyTypes = ['Slim', 'Average', 'Curvy', 'Plus Size', 'Athletic'];
const hairColors = ['Black', 'Brown', 'Blonde', 'Red', 'Other'];
const eyeColors = ['Brown', 'Blue', 'Green', 'Hazel', 'Black'];

export default function EditProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    age: 18,
    location: '',
    category: '',
    nationality: '',
    height: '',
    body_type: '',
    hair_color: '',
    eye_color: '',
    languages: [],
    services: [],
    pricing: {
      one_shot: 0,
      two_shot: 0,
      three_shot: 0,
      full_night: 0
    },
    whatsapp: '',
    phone: '',
    availability: 'Available Now',
    rating: 0,
    is_verified: true,
    is_featured: false,
    is_active: true
  });

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
        const profile = result.data;
        setFormData({
          name: profile.name || '',
          age: profile.age || 18,
          location: profile.location || '',
          category: profile.category || '',
          nationality: profile.nationality || '',
          height: profile.height || '',
          body_type: profile.body_type || '',
          hair_color: profile.hair_color || '',
          eye_color: profile.eye_color || '',
          languages: profile.languages || [],
          services: profile.services || [],
          pricing: {
            one_shot: profile.pricing?.one_shot || 0,
            two_shot: profile.pricing?.two_shot || 0,
            three_shot: profile.pricing?.three_shot || 0,
            full_night: profile.pricing?.full_night || 0
          },
          whatsapp: profile.whatsapp || '',
          phone: profile.phone || '',
          availability: profile.availability || 'Available Now',
          rating: profile.rating || 0,
          is_verified: profile.is_verified || false,
          is_featured: profile.is_featured || false,
          is_active: profile.is_active !== undefined ? profile.is_active : true
        });
      } else {
        console.error('Failed to load profile');
        router.push('/admin/profiles');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      router.push('/admin/profiles');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof ProfileFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePricingChange = (field: keyof ProfileFormData['pricing'], value: number) => {
    setFormData(prev => ({
      ...prev,
      pricing: { ...prev.pricing, [field]: value }
    }));
  };

  const handleArrayChange = (field: 'languages' | 'services', value: string, action: 'add' | 'remove') => {
    setFormData(prev => ({
      ...prev,
      [field]: action === 'add' 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch(`/api/admin/profiles/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        router.push(`/admin/profiles/${params.id}`);
      } else {
        const result = await response.json();
        alert(`Failed to update profile: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href={`/admin/profiles/${params.id}`}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <p className="text-gray-600">Update profile information and settings</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
              <input
                type="number"
                required
                min="18"
                max="60"
                value={formData.age}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
              <select
                required
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <input
                type="text"
                value={formData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
              <input
                type="text"
                placeholder="e.g., 5'6&quot;"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Physical Attributes */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Physical Attributes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Body Type</label>
              <select
                value={formData.body_type}
                onChange={(e) => handleInputChange('body_type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Body Type</option>
                {bodyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hair Color</label>
              <select
                value={formData.hair_color}
                onChange={(e) => handleInputChange('hair_color', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Hair Color</option>
                {hairColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Eye Color</label>
              <select
                value={formData.eye_color}
                onChange={(e) => handleInputChange('eye_color', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Eye Color</option>
                {eyeColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing (₹)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">1 Shot</label>
              <input
                type="number"
                min="0"
                value={formData.pricing.one_shot}
                onChange={(e) => handlePricingChange('one_shot', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">2 Shot</label>
              <input
                type="number"
                min="0"
                value={formData.pricing.two_shot}
                onChange={(e) => handlePricingChange('two_shot', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">3 Shot</label>
              <input
                type="number"
                min="0"
                value={formData.pricing.three_shot}
                onChange={(e) => handlePricingChange('three_shot', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Night</label>
              <input
                type="number"
                min="0"
                value={formData.pricing.full_night}
                onChange={(e) => handlePricingChange('full_night', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <select
                value={formData.availability}
                onChange={(e) => handleInputChange('availability', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="Available Now">Available Now</option>
                <option value="Available Today">Available Today</option>
                <option value="Available Tomorrow">Available Tomorrow</option>
                <option value="By Appointment">By Appointment</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) => handleInputChange('rating', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Status & Settings */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Status & Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => handleInputChange('is_active', e.target.checked)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                Active
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_verified"
                checked={formData.is_verified}
                onChange={(e) => handleInputChange('is_verified', e.target.checked)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="is_verified" className="ml-2 block text-sm text-gray-900">
                Verified
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_featured"
                checked={formData.is_featured}
                onChange={(e) => handleInputChange('is_featured', e.target.checked)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                Featured
              </label>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          <Link
            href={`/admin/profiles/${params.id}`}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isSaving ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
