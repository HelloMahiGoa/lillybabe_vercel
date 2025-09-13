'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckIcon,
  XMarkIcon,
  ArrowLeftIcon,
  StarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { Testimonial } from '@/types/admin';

interface TestimonialFormProps {
  testimonialId?: number;
}

export default function TestimonialForm({ testimonialId }: TestimonialFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
    location: '',
    profile_id: undefined as number | undefined,
    is_verified: false,
    is_active: true
  });
  const [profiles, setProfiles] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    fetchProfiles();
    if (testimonialId) {
      fetchTestimonial();
    }
  }, [testimonialId]);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('/api/admin/profiles?limit=1000');
      if (response.ok) {
        const data = await response.json();
        setProfiles(data.profiles || []);
      }
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
    }
  };

  const fetchTestimonial = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/testimonials/${testimonialId}`);
      if (response.ok) {
        const data = await response.json();
        setFormData({
          name: data.testimonial.name,
          rating: data.testimonial.rating,
          comment: data.testimonial.comment,
          location: data.testimonial.location || '',
          profile_id: data.testimonial.profile_id || undefined,
          is_verified: data.testimonial.is_verified,
          is_active: data.testimonial.is_active
        });
      }
    } catch (error) {
      console.error('Failed to fetch testimonial:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              name === 'profile_id' ? (value ? parseInt(value) : undefined) : value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      const url = testimonialId 
        ? `/api/admin/testimonials/${testimonialId}`
        : '/api/admin/testimonials';
      
      const method = testimonialId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/testimonials');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save testimonial');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save testimonial');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Customer Name *
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Customer name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="e.g., Chennai"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="profile_id" className="block text-sm font-medium text-gray-700">
                Associated Profile (Optional)
              </label>
              <select
                id="profile_id"
                name="profile_id"
                value={formData.profile_id || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a profile (optional)</option>
                {profiles.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Link this testimonial to a specific profile. Leave empty for general testimonials.
              </p>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Rating</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Star Rating *
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="focus:outline-none"
                  >
                    <StarIcon
                      className={`h-8 w-8 ${
                        star <= formData.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-900">
                  {formData.rating}/5 stars
                </span>
              </div>
            </div>
          </div>

          {/* Comment */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Review</h3>
            
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Customer Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Customer's review and experience..."
              />
            </div>
          </div>

          {/* Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Settings</h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Status
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_verified"
                    name="is_verified"
                    checked={formData.is_verified}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_verified" className="ml-2 block text-sm text-gray-900">
                    Verified Review
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Verified reviews are marked as trustworthy
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                    Active
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Inactive testimonials won't be visible to users
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ArrowLeftIcon className="-ml-1 mr-2 h-4 w-4" />
              Back
            </button>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => router.push('/admin/testimonials')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <XMarkIcon className="-ml-1 mr-2 h-4 w-4" />
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckIcon className="-ml-1 mr-2 h-4 w-4" />
                    {testimonialId ? 'Update Testimonial' : 'Create Testimonial'}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
