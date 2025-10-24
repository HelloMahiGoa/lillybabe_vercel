'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, MapPin, Tag, User, Phone, Upload as UploadIcon,
  Video, DollarSign, FileText, ArrowRight, ArrowLeft, Check, X,
  Image as ImageIcon, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/ui/file-upload';
import { VideoUpload } from '@/components/ui/video-upload';
import DashboardLayout from '@/components/user/DashboardLayout';
import { AdPlan } from '@/types/user-ads';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

const STEPS = [
  { id: 1, name: 'Plan', icon: CreditCard },
  { id: 2, name: 'Info', icon: User },
  { id: 3, name: 'Photos', icon: UploadIcon },
  { id: 4, name: 'Video', icon: Video },
  { id: 5, name: 'Pricing', icon: DollarSign },
  { id: 6, name: 'Review', icon: Check }
];

export default function CreateAdPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [plans, setPlans] = useState<AdPlan[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  const [formData, setFormData] = useState({
    // Step 1
    plan_id: 0,
    
    // Step 2
    name: '',
    age: '',
    location: '',
    category: '',
    whatsapp_number: '',
    phone_number: '',
    
    // Step 3
    main_photo_url: '',
    gallery_images: [] as string[],
    
    // Step 4
    video_verification_url: '',
    
    // Step 5
    pricing: {
      "1 Shot": '',
      "2 Shots": '',
      "3 Shots": '',
      "Full Night": ''
    },
    profile_description: ''
  });

  useEffect(() => {
    fetchUser();
    fetchCategories();
    fetchLocations();
    fetchPlans();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/user');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/user/plans');
      if (response.ok) {
        const data = await response.json();
        setPlans(data.plans || []);
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || []);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

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

  const validateStep = () => {
    setError('');
    switch (step) {
      case 1:
        if (!formData.plan_id) {
          toast.error('Please select a plan to continue');
          return false;
        }
        toast.success('Plan selected! Let\'s add your details.');
        break;
      case 2:
        if (!formData.name || !formData.age || !formData.location || !formData.category || !formData.phone_number) {
          toast.error('Please fill in all required fields');
          return false;
        }
        toast.success('Great! Now let\'s add some photos.');
        break;
      case 3:
        if (!formData.main_photo_url) {
          toast.error('Please upload at least the main photo');
          return false;
        }
        toast.success('Photos uploaded! Time for verification video.');
        break;
      case 4:
        if (!formData.video_verification_url) {
          toast.error('Verification video is required');
          return false;
        }
        toast.success('Perfect! Now set your pricing.');
        break;
      case 5:
        if (!formData.pricing["1 Shot"] || !formData.pricing["Full Night"]) {
          toast.error('Please fill in at least 1 Shot and Full Night pricing');
          return false;
        }
        if (!formData.profile_description || formData.profile_description.length < 50) {
          toast.error('Profile description must be at least 50 characters');
          return false;
        }
        toast.success('Almost done! Review your ad.');
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setError('');
    setStep(step + 1);
  };

  const handleBack = () => {
    setError('');
    setStep(step - 1);
  };

  const handleUploadFile = async (file: File, type: 'photo' | 'video'): Promise<string> => {
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);
    uploadFormData.append('type', type);

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

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setError('');

    const loadingToast = toast.loading('Creating your ad...');

    try {
      const response = await fetch('/api/user/ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age)
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to create ad');
      }

      toast.success('Ad created successfully! Proceed to payment.', { id: loadingToast });
      
      // Redirect to payment after a short delay
      setTimeout(() => {
        router.push(`/user/payment/${data.ad.id}`);
      }, 1000);
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong', { id: loadingToast });
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const selectedPlan = plans.find(p => p.id === formData.plan_id);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Progress Steps */}
        <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between min-w-max sm:min-w-0">
            {STEPS.map((s, index) => (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-all",
                      step >= s.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    )}
                  >
                    {step > s.id ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <s.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden sm:block">{s.name}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-all",
                      step > s.id ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-gray-200"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">
                  {step === 1 && 'Select Your Plan'}
                  {step === 2 && 'Basic Information'}
                  {step === 3 && 'Upload Photos'}
                  {step === 4 && 'Verification Video'}
                  {step === 5 && 'Pricing & Description'}
                  {step === 6 && 'Review & Submit'}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {step === 1 && 'Choose a plan that suits your needs'}
                  {step === 2 && 'Enter your ad details'}
                  {step === 3 && 'Upload main photo and gallery images'}
                  {step === 4 && 'Upload your selfie verification video'}
                  {step === 5 && 'Set your pricing and write description'}
                  {step === 6 && 'Review all details before submitting'}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                {/* Step 1: Plan Selection */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {plans.map((plan) => (
                      <div
                        key={plan.id}
                        onClick={() => setFormData(prev => ({ ...prev, plan_id: plan.id }))}
                        className={cn(
                          "p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg",
                          formData.plan_id === plan.id
                            ? "border-pink-500 bg-pink-50 shadow-md"
                            : "border-gray-200 hover:border-pink-200"
                        )}
                      >
                        <div className="text-center">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900">{plan.name}</h3>
                          <div className="my-3 sm:my-4">
                            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                              ₹{plan.price}
                            </span>
                          </div>
                          <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs">
                            {plan.duration_days} Days
                          </Badge>
                          <div className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                            <p>📝 {plan.features.ad_limit} Ad</p>
                            <p>📹 Video verification required</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 2: Basic Information */}
                {step === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g., Priya"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="e.g., 25"
                        min="18"
                        max="50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Select
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        required
                      >
                        <option value="">Select location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone_number">Phone Number *</Label>
                      <Input
                        id="phone_number"
                        type="tel"
                        value={formData.phone_number}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                        placeholder="10-digit number"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp_number">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp_number"
                        type="tel"
                        value={formData.whatsapp_number}
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp_number: e.target.value }))}
                        placeholder="Same or different number"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Photos Upload */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Main Photo *</Label>
                      <FileUpload
                        onUpload={(file) => handleUploadFile(file, 'photo').then(url => {
                          setFormData(prev => ({ ...prev, main_photo_url: url }));
                          return url;
                        })}
                        onRemove={() => setFormData(prev => ({ ...prev, main_photo_url: '' }))}
                        value={formData.main_photo_url}
                        label="Upload Main Photo"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Gallery Images (Optional)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {formData.gallery_images.map((url, index) => (
                          <div key={index} className="relative group">
                            <img src={url} alt="" className="w-full h-32 object-cover rounded-lg" />
                            <button
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({
                                  ...prev,
                                  gallery_images: prev.gallery_images.filter((_, i) => i !== index)
                                }));
                              }}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                        
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                            <input
                              type="file"
                              id="gallery-upload"
                              multiple
                              accept="image/*"
                              className="hidden"
                              onChange={async (e) => {
                                const files = Array.from(e.target.files || []);
                                if (files.length === 0) return;
                                
                                toast.loading(`Uploading ${files.length} image(s)...`, { id: 'gallery-upload' });
                                
                                try {
                                  const uploadPromises = files.map(file => handleUploadFile(file, 'photo'));
                                  const urls = await Promise.all(uploadPromises);
                                  
                                  setFormData(prev => ({
                                    ...prev,
                                    gallery_images: [...prev.gallery_images, ...urls]
                                  }));
                                  
                                  toast.success(`${urls.length} image(s) uploaded successfully!`, { id: 'gallery-upload' });
                                } catch (error) {
                                  console.error('Upload error:', error);
                                  toast.error('Failed to upload some images', { id: 'gallery-upload' });
                                }
                                
                                // Reset input
                                e.target.value = '';
                              }}
                            />
                            <label htmlFor="gallery-upload" className="cursor-pointer">
                              <div className="flex flex-col items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                                  <ImageIcon className="h-5 w-5 text-pink-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Add Photos</p>
                                <p className="text-xs text-gray-500">
                                  Select multiple images (max 5MB each)
                                </p>
                              </div>
                            </label>
                          </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Video Verification */}
                {step === 4 && (
                  <div className="space-y-4">
                    <VideoUpload
                      onUpload={(file) => handleUploadFile(file, 'video').then(url => {
                        setFormData(prev => ({ ...prev, video_verification_url: url }));
                        return url;
                      })}
                      onRemove={() => setFormData(prev => ({ ...prev, video_verification_url: '' }))}
                      value={formData.video_verification_url}
                    />
                  </div>
                )}

                {/* Step 5: Pricing & Description */}
                {step === 5 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price_1_shot">1 Shot Price *</Label>
                        <Input
                          id="price_1_shot"
                          value={formData.pricing["1 Shot"]}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            pricing: { ...prev.pricing, "1 Shot": e.target.value }
                          }))}
                          placeholder="₹5000"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price_2_shots">2 Shots Price</Label>
                        <Input
                          id="price_2_shots"
                          value={formData.pricing["2 Shots"]}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            pricing: { ...prev.pricing, "2 Shots": e.target.value }
                          }))}
                          placeholder="₹8000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price_3_shots">3 Shots Price</Label>
                        <Input
                          id="price_3_shots"
                          value={formData.pricing["3 Shots"]}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            pricing: { ...prev.pricing, "3 Shots": e.target.value }
                          }))}
                          placeholder="₹12000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price_full_night">Full Night Price *</Label>
                        <Input
                          id="price_full_night"
                          value={formData.pricing["Full Night"]}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            pricing: { ...prev.pricing, "Full Night": e.target.value }
                          }))}
                          placeholder="₹20000"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Profile Description * (Min. 50 characters)</Label>
                      <Textarea
                        id="description"
                        value={formData.profile_description}
                        onChange={(e) => setFormData(prev => ({ ...prev, profile_description: e.target.value }))}
                        placeholder="Describe yourself, your services, and what makes you special..."
                        rows={6}
                        className="min-h-[150px]"
                        required
                      />
                      <p className="text-xs text-gray-500">
                        {formData.profile_description.length} / 50 characters minimum
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 6: Review */}
                {step === 6 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">Selected Plan</h4>
                      <p className="text-sm sm:text-base text-blue-800">{selectedPlan?.name} - ₹{selectedPlan?.price}</p>
                      <p className="text-xs sm:text-sm text-blue-700">{selectedPlan?.duration_days} days validity</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                      <div>
                        <p className="text-gray-600">Name</p>
                        <p className="font-medium text-gray-900">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Age</p>
                        <p className="font-medium text-gray-900">{formData.age} years</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Location</p>
                        <p className="font-medium text-gray-900">{formData.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Category</p>
                        <p className="font-medium text-gray-900">{formData.category}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Main Photo</p>
                      <img src={formData.main_photo_url} alt="" className="w-full h-48 object-cover rounded-lg" />
                    </div>

                    {formData.gallery_images.length > 0 && (
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">Gallery ({formData.gallery_images.length} images)</p>
                        <div className="grid grid-cols-3 gap-2">
                          {formData.gallery_images.slice(0, 3).map((url, i) => (
                            <img key={i} src={url} alt="" className="h-20 sm:h-24 object-cover rounded-lg" />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-xs sm:text-sm text-green-800">
                        ✓ Verification video uploaded
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Description</p>
                      <p className="text-xs sm:text-sm text-gray-900 line-clamp-3">{formData.profile_description}</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-red-600">{error}</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-2 sm:gap-3 pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 h-11 sm:h-10 text-sm sm:text-base"
                    >
                      <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                      Back
                    </Button>
                  )}

                  {step < 6 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 h-11 sm:h-10 text-sm sm:text-base bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-1 sm:ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 h-11 sm:h-auto text-xs sm:text-base bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    >
                      {loading ? 'Creating...' : (
                        <>
                          <span className="hidden sm:inline">Create Ad & Proceed to Payment</span>
                          <span className="sm:hidden">Create & Pay</span>
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}

