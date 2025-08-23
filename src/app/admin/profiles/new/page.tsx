"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Save, 
  Upload, 
  X, 
  Plus,
  Star,
  CheckCircle,
  Eye
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
  'Chennai', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Kolkata', 
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
];

const bodyTypes = ['Slim', 'Average', 'Curvy', 'Plus Size', 'Athletic'];
const hairColors = ['Black', 'Brown', 'Blonde', 'Red', 'Other'];
const eyeColors = ['Brown', 'Blue', 'Green', 'Hazel', 'Black'];

export default function NewProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
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
    is_verified: false,
    is_featured: false,
    is_active: true
  });

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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First create the profile
      const profileResponse = await fetch('/api/admin/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to create profile');
      }

      const profileResult = await profileResponse.json();
      const profileId = profileResult.data.id;

      // Then upload images if any
      if (uploadedImages.length > 0) {
        const formDataImages = new FormData();
        uploadedImages.forEach((image, index) => {
          formDataImages.append('images', image);
          formDataImages.append('isPrimary', index === 0 ? 'true' : 'false');
        });
        formDataImages.append('profileId', profileId.toString());

        const imagesResponse = await fetch('/api/admin/profiles/images', {
          method: 'POST',
          body: formDataImages
        });

        if (!imagesResponse.ok) {
          console.error('Failed to upload images');
        }
      }

      router.push('/admin/profiles');
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Failed to create profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Profile</h1>
          <p className="text-gray-600">Add a new profile with all details and images</p>
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
          </div>
        </div>

        {/* Status & Settings */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Status & Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Image Upload */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Images</h2>
          
          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <label htmlFor="image-upload" className="cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Upload Images
              </label>
              <input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">Upload multiple images. First image will be the primary image.</p>
          </div>

          {/* Uploaded Images Preview */}
          {uploadedImages.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Uploaded Images ({uploadedImages.length})</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    {index === 0 && (
                      <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                        Primary
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>{isLoading ? 'Creating...' : 'Create Profile'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
