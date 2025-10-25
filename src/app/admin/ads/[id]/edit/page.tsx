'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Upload, X, Plus, Trash2, User, MapPin, Phone, MessageCircle, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserAd } from '@/types/user-ads';
import toast from 'react-hot-toast';

const locations = [
  'Anna Nagar', 'T-Nagar', 'OMR', 'ECR', 'Nungambakkam', 
  'Adyar', 'Kilpauk', 'Guindy', 'Velachery', 'Teynampet', 
  'Besant Nagar', 'Chrompet', 'Tambaram'
];

export default function AdminEditAdPage() {
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
    gallery_images: [] as string[],
    approval_status: 'pending' as 'pending' | 'approved' | 'rejected',
    is_active: false,
    is_featured: false
  });

  useEffect(() => {
    fetchAdDetails();
  }, [adId]);

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/admin/ads/${adId}`);
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to load ad details');
        router.push('/admin/ads');
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
          '要 Shots': '',
          '3 Shots': '',
          'Full Night': ''
        },
        main_photo_url: data.ad.main_photo_url || '',
        gallery_images: data.ad.gallery_images || [],
        approval_status: data.ad.approval_status || 'pending',
        is_active: data.ad.is_active || false,
        is_featured: data.ad.is_featured || false
      });
    } catch (error) {
      console.error('Failed to fetch ad details:', error);
      toast.error('Failed to load ad details');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
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

    const response = await fetch('/api/admin/upload', {
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
      const response = await fetch(`/api/admin/ads/${adId}`, {
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
      router.push(`/admin/ads/${adId}`);
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || 'Failed to update ad');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading ad details...</p>
        </div>
      </div>
    );
  }

  if (!ad) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
          <p className="text-gray-600 mb-4">The ad you're trying to edit doesn't exist.</p>
          <Button onClick={() => router.push('/admin/ads')}>
            Back to All Ads
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push(`/admin/ads/${adId}`)}
              className="hover:bg-white/80 backdrop-blur-sm transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Admin Panel</span>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Edit Advertisement
            </h1>
            <p className="text-gray-600">Update ad information and manage settings</p>
          </div>
        </motion.div>

        {/* User Information */}
        {ad.user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-indigo-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  User Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">User Name</Label>
                    <Input value={(ad.user as any)?.full_name || 'N/A'} disabled className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Email</Label>
                    <Input value={(ad.user as any)?.email || 'N/A'} disabled className="border-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                      id="name"
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
                      id="age"
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
                      id="location"
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
                      id="category"
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
            transition={{ delay: 0.25 }}
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
                    <Input
                      value={formData.whatsapp_number}
                      onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                      placeholder="Enter WhatsApp number"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
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
            transition={{ delay: 0.28 }}
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
                  <Label className="text-sm font-semibold text-gray-700">Profile Description</Label>
                  <Textarea
                    value={formData.profile_description}
                    onChange={(e) => handleInputChange('profile_description', e.target.value)}
                    placeholder="Write a detailed description about this profile..."
                    rows={8}
                    className="border-2 border-gray-200 focus:border-green-500 transition-colors resize-none"
                  />
                  <p className="text-xs text-gray-500">This description will be displayed on the ad profile</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Admin Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Admin Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="approval_status">Approval Status</Label>
                  <select
                    id="approval_status"
                    value={formData.approval_status}
                    onChange={(e) => handleInputChange('approval_status', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => handleInputChange('is_active', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="is_active">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => handleInputChange('is_featured', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="is_featured">Featured</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-indigo-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  Services & Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
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
            transition={{ delay: 0.5 }}
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
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Button
            type="submit"
            disabled={saving}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white h-12"
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
            onClick={() => router.push(`/admin/ads/${adId}`)}
            className="px-8 h-12"
          >
            Cancel
          </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
