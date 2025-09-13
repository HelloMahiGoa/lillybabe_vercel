"use client";

import { useState, useEffect } from 'react';
import { User, MapPin, Calendar, Tag, DollarSign, Image as ImageIcon, Save, X } from 'lucide-react';

interface ProfileFormData {
  name: string;
  age: number;
  location: string;
  category: string;
  whatsapp_number: string;
  phone_number: string;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  featured: boolean;
  is_active: boolean;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
}

interface ProfileFormProps {
  initialData?: Partial<ProfileFormData>;
  onSubmit: (data: ProfileFormData) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
  mode: 'create' | 'edit';
}

const LOCATIONS = [
  'Adyar', 'Anna Nagar', 'Chennai Central', 'ECR', 'Guindy',
  'Kilpauk', 'Mylapore', 'Nungambakkam', 'OMR', 'T-Nagar'
];

const CATEGORIES = [
  'Russian', 'Tamil', 'Telugu', 'Kannada', 'Independent',
  'Housewife', 'Airhostess', 'College Girl', 'Model', 'Celebrity', 'Teen', 'VIP'
];

export const ProfileForm = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  loading = false,
  mode 
}: ProfileFormProps) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    age: 25,
    location: '',
    category: '',
    whatsapp_number: '+918121426651',
    phone_number: '+918121426651',
    pricing: {
      '1 Shot': '₹8,000',
      '2 Shots': '₹12,000',
      '3 Shots': '₹15,000',
      'Full Night': '₹25,000'
    },
    featured: false,
    is_active: true,
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormData, string>>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ProfileFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.age || formData.age < 18 || formData.age > 60) {
      newErrors.age = 'Age must be between 18 and 60';
    }

    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.whatsapp_number.trim()) {
      newErrors.whatsapp_number = 'WhatsApp number is required';
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    }

    // Validate pricing
    Object.entries(formData.pricing).forEach(([service, price]) => {
      if (!price.trim()) {
        newErrors.pricing = `${service} price is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const updateField = (field: keyof ProfileFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const updatePricing = (service: string, price: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [service]: price
      }
    }));
    // Clear pricing error
    if (errors.pricing) {
      setErrors(prev => ({ ...prev, pricing: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {mode === 'create' ? 'Create New Profile' : 'Edit Profile'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Basic Information</span>
            </h3>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter profile name"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => updateField('age', parseInt(e.target.value) || 0)}
                min="18"
                max="60"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.age ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.age && (
                <p className="text-sm text-red-600 mt-1">{errors.age}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <select
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select location</option>
                {LOCATIONS.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              {errors.location && (
                <p className="text-sm text-red-600 mt-1">{errors.location}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => updateField('category', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.category ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select category</option>
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && (
                <p className="text-sm text-red-600 mt-1">{errors.category}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Contact Information</span>
            </h3>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                value={formData.whatsapp_number}
                onChange={(e) => updateField('whatsapp_number', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.whatsapp_number ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="+918121426651"
              />
              {errors.whatsapp_number && (
                <p className="text-sm text-red-600 mt-1">{errors.whatsapp_number}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone_number}
                onChange={(e) => updateField('phone_number', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone_number ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="+918121426651"
              />
              {errors.phone_number && (
                <p className="text-sm text-red-600 mt-1">{errors.phone_number}</p>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900 flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Pricing Information</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(formData.pricing).map(([service, price]) => (
              <div key={service}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {service} *
                </label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => updatePricing(service, e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.pricing ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="₹0"
                />
              </div>
            ))}
          </div>
          {errors.pricing && (
            <p className="text-sm text-red-600">{errors.pricing}</p>
          )}
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Settings</h3>
          
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => updateField('featured', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Featured Profile</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => updateField('is_active', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Active Profile</span>
            </label>
          </div>
        </div>

        {/* SEO Information */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">SEO Information (Optional)</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Title
              </label>
              <input
                type="text"
                value={formData.meta_title || ''}
                onChange={(e) => updateField('meta_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="SEO title for search engines"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Keywords
              </label>
              <input
                type="text"
                value={formData.meta_keywords || ''}
                onChange={(e) => updateField('meta_keywords', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Keywords separated by commas"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meta Description
            </label>
            <textarea
              value={formData.meta_description || ''}
              onChange={(e) => updateField('meta_description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description for search engines"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? 'Saving...' : mode === 'create' ? 'Create Profile' : 'Update Profile'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
