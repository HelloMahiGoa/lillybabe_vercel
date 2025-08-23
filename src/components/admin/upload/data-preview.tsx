"use client";

import { useState, useEffect } from 'react';
import { User, MapPin, Calendar, Star, Edit, Check, X } from 'lucide-react';

interface ExtractedData {
  name: string;
  age: number;
  location: string;
  nationality?: string;
  height?: string;
  bodyType?: string;
  hairColor?: string;
  eyeColor?: string;
  languages?: string[];
  services?: string[];
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  rating: number;
  images: string[];
}

export const DataPreview = () => {
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<ExtractedData | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // Listen for PDF processing events
    const handlePDFProcessed = (event: CustomEvent) => {
      const { profileData, imageUrls } = event.detail;
      
      const processedData: ExtractedData = {
        name: profileData.name || 'Unknown',
        age: profileData.age || 25,
        location: profileData.location || 'Chennai',
        nationality: profileData.nationality || 'Indian',
        height: profileData.height || '5\'6"',
        bodyType: profileData.bodyType || 'Slim',
        hairColor: profileData.hairColor || 'Black',
        eyeColor: profileData.eyeColor || 'Brown',
        languages: profileData.languages || ['English'],
        services: profileData.services || ['Escort'],
        pricing: profileData.pricing || {
          '1 Shot': '₹5,000',
          '2 Shots': '₹8,000',
          '3 Shots': '₹12,000',
          'Full Night': '₹25,000'
        },
        availability: profileData.availability || 'Available Now',
        rating: profileData.rating || 4.5,
        images: imageUrls && imageUrls.length > 0 ? imageUrls : [
          '/images/placeholder-profile.jpg',
          '/images/placeholder-profile.jpg',
          '/images/placeholder-profile.jpg'
        ]
      };

      setExtractedData(processedData);
      setEditedData(processedData);
    };

    window.addEventListener('pdfProcessed', handlePDFProcessed as EventListener);
    
    return () => {
      window.removeEventListener('pdfProcessed', handlePDFProcessed as EventListener);
    };
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setExtractedData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(extractedData);
    setIsEditing(false);
  };

  const handleCreateProfile = async () => {
    if (!editedData) return;
    
    setIsCreating(true);
    try {
      // Convert pricing format for API
      const pricing = {
        one_shot: parseInt(editedData.pricing['1 Shot'].replace(/[^\d]/g, '')),
        two_shot: parseInt(editedData.pricing['2 Shots'].replace(/[^\d]/g, '')),
        three_shot: parseInt(editedData.pricing['3 Shots'].replace(/[^\d]/g, '')),
        full_night: parseInt(editedData.pricing['Full Night'].replace(/[^\d]/g, ''))
      };

      // Prepare profile data
      const profileData = {
        name: editedData.name,
        age: editedData.age,
        location: editedData.location,
        category: 'Model', // Default category
        nationality: editedData.nationality,
        height: editedData.height,
        body_type: editedData.bodyType,
        hair_color: editedData.hairColor,
        eye_color: editedData.eyeColor,
        languages: editedData.languages,
        services: editedData.services,
        pricing,
        availability: editedData.availability,
        rating: editedData.rating,
        is_verified: true,
        is_featured: false,
        is_active: true
      };

      // Create profile
      const response = await fetch('/api/admin/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });

      if (!response.ok) {
        throw new Error('Failed to create profile');
      }

      const result = await response.json();
      
      // Redirect to the new profile
      window.location.href = `/admin/profiles/${result.data.id}`;
      
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Failed to create profile. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleFieldChange = (field: keyof ExtractedData, value: any) => {
    if (editedData) {
      setEditedData({
        ...editedData,
        [field]: value
      });
    }
  };

  const handlePricingChange = (type: string, value: string) => {
    if (editedData) {
      setEditedData({
        ...editedData,
        pricing: {
          ...editedData.pricing,
          [type]: value
        }
      });
    }
  };

  if (!extractedData) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Extracted Data Preview</h3>
        <div className="text-center py-8">
          <User className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No data extracted yet</p>
        </div>
      </div>
    );
  }

  const data = isEditing ? editedData! : extractedData;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Extracted Data Preview</h3>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-center space-x-1 text-sm text-green-600 hover:text-green-700"
              >
                <Check className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit className="h-4 w-4" />
              <span>Edit</span>
            </button>
          )}
        </div>
      </div>

      {/* Profile Images */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Extracted Images</h4>
        <div className="grid grid-cols-3 gap-2">
          {data.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Profile ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border border-gray-200"
              />
              {index === 0 && (
                <span className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1 rounded">
                  Primary
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Basic Information */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={data.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{data.name}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Age</label>
            {isEditing ? (
              <input
                type="number"
                value={data.age}
                onChange={(e) => handleFieldChange('age', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{data.age} years</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
          {isEditing ? (
            <input
              type="text"
              value={data.location}
              onChange={(e) => handleFieldChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          ) : (
            <p className="text-sm text-gray-900 flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {data.location}
            </p>
          )}
        </div>

        {/* Physical Attributes */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Height</label>
            {isEditing ? (
              <input
                type="text"
                value={data.height}
                onChange={(e) => handleFieldChange('height', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{data.height}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Body Type</label>
            {isEditing ? (
              <input
                type="text"
                value={data.bodyType}
                onChange={(e) => handleFieldChange('bodyType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{data.bodyType}</p>
            )}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">Pricing</label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(data.pricing).map(([type, price]) => (
              <div key={type} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-xs text-gray-600">{type}</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => handlePricingChange(type, e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <span className="text-xs font-medium text-gray-900">{price}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Services</label>
          <div className="flex flex-wrap gap-1">
            {data.services?.map((service, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-pink-100 text-pink-800">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Languages</label>
          <div className="flex flex-wrap gap-1">
            {data.languages?.map((language, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Availability & Rating */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Availability</label>
            <p className="text-sm text-green-600 font-medium">{data.availability}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-900 ml-1">{data.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex space-x-3">
          <button 
            onClick={handleCreateProfile}
            disabled={isCreating || !extractedData}
            className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isCreating ? 'Creating...' : 'Create Profile'}
          </button>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            disabled={!extractedData}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isEditing ? 'Cancel Edit' : 'Edit Data'}
          </button>
        </div>
      </div>
    </div>
  );
};
