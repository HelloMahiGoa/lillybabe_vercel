'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Upload, X, Plus, Trash2 } from 'lucide-react';
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
  }, [adId]);

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
      toast.loading('Uploading main photo...');
      const url = await handleFileUpload(file, 'main');
      setFormData(prev => ({ ...prev, main_photo_url: url }));
      toast.dismiss();
      toast.success('Main photo uploaded successfully');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to upload main photo');
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    try {
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
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="outline"
            onClick={() => router.push(`/user/ads/${adId}`)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Edit Ad
            </h1>
            <p className="text-sm text-gray-600 mt-1">Update your ad information</p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Enter your location"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      placeholder="Enter your category"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp_number}
                      onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                      placeholder="Enter WhatsApp number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone_number}
                      onChange={(e) => handleInputChange('phone_number', e.target.value)}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Profile Description</Label>
                  <Textarea
                    id="description"
                    value={formData.profile_description}
                    onChange={(e) => handleInputChange('profile_description', e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
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
            <Card>
              <CardHeader>
                <CardTitle>Services & Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="1shot">1 Shot</Label>
                    <Input
                      id="1shot"
                      value={formData.pricing['1 Shot']}
                      onChange={(e) => handlePricingChange('1 Shot', e.target.value)}
                      placeholder="e.g., ₹5,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="2shots">2 Shots</Label>
                    <Input
                      id="2shots"
                      value={formData.pricing['2 Shots']}
                      onChange={(e) => handlePricingChange('2 Shots', e.target.value)}
                      placeholder="e.g., ₹9,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="3shots">3 Shots</Label>
                    <Input
                      id="3shots"
                      value={formData.pricing['3 Shots']}
                      onChange={(e) => handlePricingChange('3 Shots', e.target.value)}
                      placeholder="e.g., ₹12,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullnight">Full Night</Label>
                    <Input
                      id="fullnight"
                      value={formData.pricing['Full Night']}
                      onChange={(e) => handlePricingChange('Full Night', e.target.value)}
                      placeholder="e.g., ₹25,000"
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
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main Photo */}
                <div>
                  <Label>Main Photo</Label>
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
                    />
                  </div>
                </div>

                {/* Gallery Images */}
                <div>
                  <Label>Gallery Images</Label>
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
                      />
                      <Plus className="h-6 w-6 text-gray-400" />
                    </div>
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
              disabled={saving}
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
      </div>
    </DashboardLayout>
  );
}
