'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Profile, ProfileFormData } from '@/types/admin';
import ImageUpload from './ImageUpload';

interface ProfileFormProps {
  profileId?: number;
}

export default function ProfileForm({ profileId }: ProfileFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    slug: '',
    age: 18,
    location: '',
    category: '',
    whatsapp_number: '+918121426651',
    phone_number: '+918121426651',
    main_photo_url: '',
    gallery_images: [],
    pricing: {
      "1 Shot": "₹12,000",
      "2 Shots": "₹24,000",
      "3 Shots": "₹35,000",
      "Full Night": "₹40,000"
    },
    featured: false,
    is_active: true,
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    canonical_url: '',
    schema_markup: null,
  });

  useEffect(() => {
    fetchCategories();
    fetchLocations();
    if (profileId) {
      fetchProfile();
    } else {
      // Check for pre-filled data from URL parameters (for PDF profiles)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('name')) {
        const preFilledData = {
          name: urlParams.get('name') || '',
          slug: urlParams.get('slug') || '',
          age: parseInt(urlParams.get('age') || '25'),
          location: urlParams.get('location') || '',
          category: urlParams.get('category') || '',
          whatsapp_number: urlParams.get('whatsapp_number') || '+918121426651',
          phone_number: urlParams.get('phone_number') || '+918121426651',
          main_photo_url: urlParams.get('main_photo_url') || '',
          gallery_images: urlParams.get('gallery_images') ? JSON.parse(urlParams.get('gallery_images')!) : [],
          pricing: {
            "1 Shot": "₹12,000",
            "2 Shots": "₹24,000",
            "3 Shots": "₹35,000",
            "Full Night": "₹40,000"
          },
          featured: false,
          is_active: true,
          meta_title: urlParams.get('meta_title') || '',
          meta_description: urlParams.get('meta_description') || '',
          meta_keywords: urlParams.get('meta_keywords') || '',
          og_title: urlParams.get('og_title') || '',
          og_description: urlParams.get('og_description') || '',
          og_image: urlParams.get('og_image') || '',
          twitter_title: urlParams.get('twitter_title') || '',
          twitter_description: urlParams.get('twitter_description') || '',
          twitter_image: urlParams.get('twitter_image') || '',
          canonical_url: urlParams.get('canonical_url') || '',
          schema_markup: null,
        };
        setFormData(preFilledData);
      }
    }
  }, [profileId]);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`/api/admin/profiles/${profileId}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data.profile);
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/admin/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories?.map((cat: any) => cat.name) || []);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/admin/locations');
      if (response.ok) {
        const data = await response.json();
        setLocations(data.locations?.map((loc: any) => loc.name) || []);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let updatedFormData = { ...formData };
      
      // If this is a new profile and we have images in temp_uploads, move them to the final directory
      if (!profileId && formData.name && formData.name.trim()) {
        const movedFiles = await moveTempFilesToProfile(formData.name);
        if (movedFiles) {
          // Use the updated URLs from the move operation
          updatedFormData = {
            ...updatedFormData,
            main_photo_url: movedFiles.mainPhotoUrl || updatedFormData.main_photo_url,
            gallery_images: movedFiles.galleryImages || updatedFormData.gallery_images
          };
        }
      }

      const url = profileId 
        ? `/api/admin/profiles/${profileId}`
        : '/api/admin/profiles';
      
      const method = profileId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        router.push('/admin/profiles');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to save profile');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  // Function to move files from temp_uploads to the final profile directory
  const moveTempFilesToProfile = async (profileName: string) => {
    try {
      const response = await fetch('/api/admin/move-temp-files', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profileName: profileName,
          mainPhotoUrl: formData.main_photo_url,
          galleryImages: formData.gallery_images
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Update the URLs in formData to reflect the new paths
        if (result.mainPhotoUrl) {
          setFormData(prev => ({ ...prev, main_photo_url: result.mainPhotoUrl }));
        }
        if (result.galleryImages) {
          setFormData(prev => ({ ...prev, gallery_images: result.galleryImages }));
        }
        
        // Return the updated URLs so they can be used in the profile save
        return {
          mainPhotoUrl: result.mainPhotoUrl,
          galleryImages: result.galleryImages
        };
      }
    } catch (error) {
      console.error('Failed to move temp files:', error);
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePricingChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [key]: value
      }
    }));
  };

  const generateSlug = () => {
    const slug = formData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  const generateMetaTitle = () => {
    const metaTitle = `${formData.name} - ${formData.category} Escort in ${formData.location} | LillyBabe`;
    setFormData(prev => ({ ...prev, meta_title: metaTitle }));
  };

  const generateMetaDescription = () => {
    const metaDescription = `Meet ${formData.name}, a beautiful ${formData.age} year old ${formData.category} escort in ${formData.location}. Premium escort services with verified photos and reviews. Contact now for booking.`;
    setFormData(prev => ({ ...prev, meta_description: metaDescription }));
  };

  const generateMetaKeywords = () => {
    const keywords = [
      formData.name,
      `${formData.category} escort`,
      `escort in ${formData.location}`,
      'Chennai escort',
      'premium escort service',
      'verified escort',
      'independent escort',
      'escort booking'
    ].join(', ');
    setFormData(prev => ({ ...prev, meta_keywords: keywords }));
  };

  const generateAllSEO = () => {
    generateMetaTitle();
    generateMetaDescription();
    generateMetaKeywords();
  };

  // Callback functions for ImageUpload components
  const handleMainImageUploaded = useCallback((url: string) => {
    setFormData(prev => ({ ...prev, main_photo_url: url }));
  }, []);

  const handleGalleryImagesUploaded = useCallback((urls: string[]) => {
    setFormData(prev => ({ ...prev, gallery_images: urls }));
  }, []);

  const handleGalleryImageUploaded = useCallback(() => {
    // Dummy function for gallery type
  }, []);

  // Generate a profile name for upload
  const getProfileNameForUpload = () => {
    if (profileId) {
      // For existing profiles, use the current name
      return formData.name || 'default';
    } else {
      // For new profiles, use the name if available, otherwise use a temporary name
      if (formData.name && formData.name.trim()) {
        return formData.name;
      } else {
        // Use a temporary name that will be updated when the profile is saved
        return 'temp_uploads';
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Slug</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={generateSlug}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                >
                  Generate
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="18"
                max="60"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp_number"
                value={formData.whatsapp_number}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(formData.pricing).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700">{key}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handlePricingChange(key, e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Images</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Photo</label>
              <ImageUpload
                currentImage={formData.main_photo_url}
                onImageUploaded={handleMainImageUploaded}
                type="main"
                profileName={getProfileNameForUpload()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
              <ImageUpload
                currentImages={formData.gallery_images}
                onImageUploaded={handleGalleryImageUploaded}
                onImagesUploaded={handleGalleryImagesUploaded}
                type="gallery"
                profileName={getProfileNameForUpload()}
              />
            </div>
          </div>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Featured Profile</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Active Profile</label>
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
          
          {/* Auto-Generate Button */}
          <div className="mb-4">
            <button
              type="button"
              onClick={generateAllSEO}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Auto-Generate SEO Fields
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Title</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="meta_title"
                  value={formData.meta_title}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={generateMetaTitle}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                >
                  Generate
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Description</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  name="meta_description"
                  value={formData.meta_description}
                  onChange={handleChange}
                  rows={3}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={generateMetaDescription}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                >
                  Generate
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Keywords</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="meta_keywords"
                  value={formData.meta_keywords}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={generateMetaKeywords}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => router.push('/admin/profiles')}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? 'Saving...' : (profileId ? 'Update Profile' : 'Create Profile')}
          </button>
        </div>
      </form>
    </div>
  );
}
