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
  const [generating, setGenerating] = useState(false);
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
    profile_description: '',
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
    const metaDescription = `Meet ${formData.name}, a beautiful ${formData.age} year old ${formData.category} escort in ${formData.location}. Genuine escort services with verified photos and reviews. Contact now for booking.`;
    setFormData(prev => ({ ...prev, meta_description: metaDescription }));
  };

  const generateMetaKeywords = () => {
    const keywords = [
      formData.name,
      `${formData.category} escort`,
      `escort in ${formData.location}`,
      'Chennai escort',
      'Chennai escorts',
      'Chennai escort service',
      'Chennai escort agency',
      'Chennai escort girls',
      'genuine escorts service',
      'verified escort',
      'independent escort in chennai',
      'escort booking'
    ].join(', ');
    setFormData(prev => ({ ...prev, meta_keywords: keywords }));
  };

  const generateAllSEO = () => {
    generateMetaTitle();
    generateMetaDescription();
    generateMetaKeywords();
    generateOGFields();
    generateTwitterFields();
    generateCanonicalUrl();
    generateSchemaMarkup();
  };

  const generateOGFields = () => {
    const ogTitle = `${formData.name} - Premium ${formData.category} in ${formData.location}`;
    const ogDescription = `Experience unforgettable moments with ${formData.name}, a stunning ${formData.age} year old ${formData.category} in ${formData.location}. Genuine, verified, and professional services available 24/7.`;
    setFormData(prev => ({ 
      ...prev, 
      og_title: ogTitle,
      og_description: ogDescription,
      og_image: prev.main_photo_url || ''
    }));
  };

  const generateTwitterFields = () => {
    const twitterTitle = `${formData.name} - ${formData.category} in ${formData.location} | LillyBabe`;
    const twitterDescription = `Meet ${formData.name}, beautiful ${formData.age} year old ${formData.category} in ${formData.location}. Premium services with verified photos and genuine reviews.`;
    setFormData(prev => ({ 
      ...prev, 
      twitter_title: twitterTitle,
      twitter_description: twitterDescription,
      twitter_image: prev.main_photo_url || ''
    }));
  };

  const generateCanonicalUrl = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
    const slug = formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const canonicalUrl = `${baseUrl}/escorts/${slug}`;
    setFormData(prev => ({ ...prev, canonical_url: canonicalUrl }));
  };

  const generateSchemaMarkup = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
    const slug = formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": formData.name,
      "alternateName": [`${formData.name} ${formData.category}`, `${formData.category} in ${formData.location}`],
      "description": `Professional ${formData.category} services in ${formData.location}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formData.location,
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "telephone": formData.whatsapp_number,
      "url": `${baseUrl}/escorts/${slug}`,
      "sameAs": [baseUrl],
      "knowsAbout": [
        `${formData.category} services`,
        `${formData.location} escort services`,
        "Professional companionship",
        "Premium entertainment"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": formData.location
      },
      "offers": {
        "@type": "Service",
        "name": `${formData.category} Services`,
        "description": `Professional ${formData.category} services in ${formData.location}`,
        "provider": {
          "@type": "Person",
          "name": formData.name
        },
        "areaServed": {
          "@type": "Place",
          "name": formData.location
        }
      }
    };
    
    setFormData(prev => ({ ...prev, schema_markup: schemaMarkup }));
  };

  const generateAIContent = async (type: 'seo' | 'profile_description') => {
    if (!formData.name || !formData.location || !formData.category) {
      alert('Please fill in the basic information (name, location, category) first');
      return;
    }

    setGenerating(true);
    try {
      const response = await fetch('/api/admin/ai-generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          profileData: {
            name: formData.name,
            age: formData.age,
            location: formData.location,
            category: formData.category,
            pricing: formData.pricing
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.content) {
          setFormData(prev => ({ ...prev, ...data.content }));
        }
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to generate content');
      }
    } catch (error) {
      console.error('AI generation error:', error);
      alert('Failed to generate content');
    } finally {
      setGenerating(false);
    }
  };

  const generateProfileDescription = () => generateAIContent('profile_description');
  const generateAllAISEO = () => generateAIContent('seo');

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

        {/* Profile Description */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Description</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Description (min 150 words)
                </label>
                <button
                  type="button"
                  onClick={generateProfileDescription}
                  disabled={generating}
                  className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {generating ? 'Generating...' : 'AI Generate'}
                </button>
              </div>
              <textarea
                name="profile_description"
                value={formData.profile_description}
                onChange={handleChange}
                rows={8}
                placeholder="Write a compelling profile description that highlights personality, interests, and professional approach..."
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.profile_description?.length || 0} characters
              </p>
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
          
          {/* Auto-Generate Buttons */}
          <div className="mb-4 flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={generateAllSEO}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Auto-Generate All SEO Fields
            </button>
            <button
              type="button"
              onClick={generateAllAISEO}
              disabled={generating}
              className="inline-flex items-center px-4 py-2 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {generating ? 'Generating...' : 'AI Generate All SEO'}
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
            
            {/* Open Graph Fields */}
            <div className="border-t pt-4">
              <h4 className="text-md font-medium text-gray-800 mb-3">Open Graph (Facebook)</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">OG Title</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="og_title"
                      value={formData.og_title}
                      onChange={handleChange}
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={generateOGFields}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">OG Description</label>
                  <textarea
                    name="og_description"
                    value={formData.og_description}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">OG Image URL</label>
                  <input
                    type="text"
                    name="og_image"
                    value={formData.og_image}
                    onChange={handleChange}
                    placeholder="Auto-filled from main photo"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Twitter Fields */}
            <div className="border-t pt-4">
              <h4 className="text-md font-medium text-gray-800 mb-3">Twitter Card</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Twitter Title</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="twitter_title"
                      value={formData.twitter_title}
                      onChange={handleChange}
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={generateTwitterFields}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Twitter Description</label>
                  <textarea
                    name="twitter_description"
                    value={formData.twitter_description}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Twitter Image URL</label>
                  <input
                    type="text"
                    name="twitter_image"
                    value={formData.twitter_image}
                    onChange={handleChange}
                    placeholder="Auto-filled from main photo"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Technical SEO */}
            <div className="border-t pt-4">
              <h4 className="text-md font-medium text-gray-800 mb-3">Technical SEO</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Canonical URL</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="canonical_url"
                      value={formData.canonical_url}
                      onChange={handleChange}
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={generateCanonicalUrl}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Schema Markup (JSON-LD)</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                      name="schema_markup"
                      value={formData.schema_markup ? JSON.stringify(formData.schema_markup, null, 2) : ''}
                      onChange={(e) => {
                        try {
                          const parsed = JSON.parse(e.target.value);
                          setFormData(prev => ({ ...prev, schema_markup: parsed }));
                        } catch {
                          // Invalid JSON, keep as string
                          setFormData(prev => ({ ...prev, schema_markup: e.target.value }));
                        }
                      }}
                      rows={4}
                      placeholder="JSON-LD structured data will be generated automatically"
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    />
                    <button
                      type="button"
                      onClick={generateSchemaMarkup}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
                    >
                      Generate
                    </button>
                  </div>
                </div>
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
