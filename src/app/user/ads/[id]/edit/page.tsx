'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Upload, X, Plus, Trash2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UserAd } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function EditAdPage() {
  const router = useRouter();
  const params = useParams();
  const adId = params.id as string;

  const [ad, setAd] = useState<UserAd | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [locations, setLocations] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    category: '',
    whatsapp_number: '',
    phone_number: '',
    profile_description: '',
    pricing: {
      '1 Shot': '',
      '2 Shots': '',
      '3 Shots': '',
      'Full Night': ''
    },
    main_photo_url: '',
    gallery_images: [] as string[]
  });

  useEffect(() => {
    fetchAdDetails();
    fetchLocations();
  }, [adId]);

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/locations');
      if (response.ok) {
        const data = await response.json();
        setLocations(data.locations || []);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    }
  };

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/user/ads/${adId}`);
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          toast.error('Please login to edit ad');
          router.push('/login');
          return;
        }
        if (response.status === 404) {
          toast.error('Ad not found');
          router.push('/user/ads');
          return;
        }
        toast.error(data.error || 'Failed to load ad details');
        return;
      }

      setAd(data.ad);
      setFormData({
        name: data.ad.name || '',
        age: data.ad.age?.toString() || '',
        location: data.ad.location || '',
        category: data.ad.category || '',
        whatsapp_number: data.ad.whatsapp_number || '',
        phone_number: data.ad.phone_number || '',
        profile_description: data.ad.profile_description || '',
        pricing: data.ad.pricing || {
          '1 Shot': '',
          '2 Shots': '',
          '3 Shots': '',
          'Full Night': ''
        },
        main_photo_url: data.ad.main_photo_url || '',
        gallery_images: data.ad.gallery_images || []
      });
    } catch (error) {
      console.error('Failed to fetch ad details:', error);
      toast.error('Failed to load ad details');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePricingChange = (service: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [service]: value
      }
    }));
  };

  const handleFileUpload = async (file: File, type: 'main' | 'gallery'): Promise<string> => {
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);
    uploadFormData.append('type', 'photo');

    const response = await fetch('/api/user/upload', {
      method: 'POST',
      body: uploadFormData
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.url;
  };

  const handleMainPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingPhoto(true);
      toast.loading('Uploading main photo...');
      const url = await handleFileUpload(file, 'main');
      setFormData(prev => ({ ...prev, main_photo_url: url }));
      toast.dismiss();
      toast.success('Main photo uploaded successfully');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to upload main photo');
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    try {
      setUploadingGallery(true);
      toast.loading('Uploading gallery images...');
      const uploadPromises = Array.from(files).map(file => handleFileUpload(file, 'gallery'));
      const urls = await Promise.all(uploadPromises);
      
      setFormData(prev => ({
        ...prev,
        gallery_images: [...prev.gallery_images, ...urls]
      }));
      
      toast.dismiss();
      toast.success(`${urls.length} images uploaded successfully`);
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to upload gallery images');
    } finally {
      setUploadingGallery(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.location || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSaving(true);
    const loadingToast = toast.loading('Saving changes...');

    try {
      const response = await fetch(`/api/user/ads/${adId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update ad');
      }

      toast.dismiss();
      toast.success('Ad updated successfully!');
      router.push(`/user/ads/${adId}`);
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || 'Failed to update ad');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading ad details...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!ad) {
    return (
      <DashboardLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
            <p className="text-gray-600 mb-4">The ad you're trying to edit doesn't exist.</p>
            <Button onClick={() => router.push('/user/ads')}>
              Back to My Ads
            </Button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push(`/user/ads/${adId}`)}
                className="hover:bg-white/80 backdrop-blur-sm transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="h-4 w-4" />
                <span>Edit Your Ad</span>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Edit Advertisement
                  </h1>
                  <p className="text-gray-600">Update your ad information and make it shine ✨</p>
                </div>
                {ad?.approval_status === 'approved' && !ad?.is_expired && (
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 max-w-md">
                    <p className="text-sm text-orange-800 font-medium">
                      <span className="font-bold">⚠️ Important:</span> Editing this active ad will reset its approval status to pending.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 border-4 border-pink-600 border-t-transparent rounded-full"
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-pink-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">👤</span>
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Name *</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter name"
                          className="border-2 border-gray-200 focus:border-pink-500 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Age *</Label>
                        <Input
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          placeholder="Enter age"
                          className="border-2 border-gray-200 focus:border-pink-500 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Location *</Label>
                        <select
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full h-10 px-3 border-2 border-gray-200 rounded-md focus:border-pink-500 transition-colors"
                          required
                        >
                          <option value="">Select location</option>
                          {locations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Category *</Label>
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full h-10 px-3 border-2 border-gray-200 rounded-md focus:border-pink-500 transition-colors"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="Independent">Independent</option>
                          <option value="Model">Model</option>
                          <option value="Housewife">Housewife</option>
                          <option value="Mallu">Mallu</option>
                          <option value="Tamil">Tamil</option>
                          <option value="Russian">Russian</option>
                          <option value="Teen">Teen</option>
                          <option value="Celebrity">Celebrity</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">📞</span>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">WhatsApp Number *</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">+91</span>
                          <Input
                            value={formData.whatsapp_number}
                            onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                            placeholder="Enter WhatsApp number"
                            className="pl-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                        <Input
                          value={formData.phone_number}
                          onChange={(e) => handleInputChange('phone_number', e.target.value)}
                          placeholder="Enter phone number"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Description Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">📝</span>
                      Profile Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-gray-700">Tell us about yourself</Label>
                      <Textarea
                        value={formData.profile_description}
                        onChange={(e) => handleInputChange('profile_description', e.target.value)}
                        placeholder="Write a detailed description about yourself, your interests, services, and what makes you special..."
                        rows={8}
                        className="border-2 border-gray-200 focus:border-green-500 transition-colors resize-none"
                      />
                      <p className="text-xs text-gray-500">This description will be displayed on your ad profile</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">💰</span>
                      Services & Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">1 Shot</Label>
                        <Input
                          value={formData.pricing['1 Shot']}
                          onChange={(e) => handlePricingChange('1 Shot', e.target.value)}
                          placeholder="e.g., ₹5,000"
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">2 Shots</Label>
                        <Input
                          value={formData.pricing['2 Shots']}
                          onChange={(e) => handlePricingChange('2 Shots', e.target.value)}
                          placeholder="e.g., ₹9,000"
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">3 Shots</Label>
                        <Input
                          value={formData.pricing['3 Shots']}
                          onChange={(e) => handlePricingChange('3 Shots', e.target.value)}
                          placeholder="e.g., ₹12,000"
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">Full Night</Label>
                        <Input
                          value={formData.pricing['Full Night']}
                          onChange={(e) => handlePricingChange('Full Night', e.target.value)}
                          placeholder="e.g., ₹25,000"
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Photos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">📸</span>
                      Photos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Main Photo */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Main Photo</Label>
                      <div className="mt-2">
                        {formData.main_photo_url ? (
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                            <img
                              src={formData.main_photo_url}
                              alt="Main photo"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <Upload className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleMainPhotoUpload}
                          className="mt-2"
                          disabled={uploadingPhoto}
                        />
                        {uploadingPhoto && (
                          <div className="mt-2 text-sm text-gray-600">Uploading...</div>
                        )}
                      </div>
                    </div>

                    {/* Gallery Images */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Gallery Images</Label>
                      <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.gallery_images.map((url, index) => (
                          <div key={index} className="relative">
                            <div className="w-full h-24 rounded-lg overflow-hidden">
                              <img
                                src={url}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                              onClick={() => removeGalleryImage(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                        <div className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            disabled={uploadingGallery}
                          />
                          <Plus className="h-6 w-6 text-gray-400" />
                        </div>
                        {uploadingGallery && (
                          <div className="mt-2 text-sm text-gray-600">Uploading images...</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <Button
                  type="submit"
                  disabled={saving || uploadingPhoto || uploadingGallery}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white h-12"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push(`/user/ads/${adId}`)}
                  className="px-8 h-12"
                >
                  Cancel
                </Button>
              </motion.div>
            </form>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
