'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, MousePointer, Calendar, Clock, CheckCircle, XCircle, MapPin, User, Phone, MessageCircle, DollarSign, Image as ImageIcon, Video, Edit, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UserAd } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function AdDetailPage() {
  const router = useRouter();
  const params = useParams();
  const adId = params.id as string;

  const [ad, setAd] = useState<UserAd | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdDetails();
  }, [adId]);

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/user/ads/${adId}`);
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          toast.error('Please login to view ad details');
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
    } catch (error) {
      console.error('Failed to fetch ad details:', error);
      toast.error('Failed to load ad details');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = () => {
    if (!ad) return { variant: 'default' as const, text: 'Unknown', icon: Clock, color: 'gray' };
    if (ad.is_expired) return { variant: 'default' as const, text: 'Expired', icon: Clock, color: 'gray' };
    if (ad.approval_status === 'approved') return { variant: 'success' as const, text: 'Active', icon: CheckCircle, color: 'green' };
    if (ad.approval_status === 'pending') return { variant: 'warning' as const, text: 'Pending Approval', icon: Clock, color: 'orange' };
    if (ad.approval_status === 'rejected') return { variant: 'error' as const, text: 'Rejected', icon: XCircle, color: 'red' };
    return { variant: 'default' as const, text: 'Draft', icon: Clock, color: 'gray' };
  };

  const getDaysRemaining = () => {
    if (!ad?.end_date) return 0;
    const days = Math.ceil((new Date(ad.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, days);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
            <div className="h-64 bg-gray-200 rounded mb-4" />
            <div className="h-32 bg-gray-200 rounded" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!ad) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto">
          <Card className="text-center py-12">
            <CardContent>
              <XCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
              <p className="text-gray-600 mb-6">The ad you're looking for doesn't exist or has been deleted.</p>
              <Button onClick={() => router.push('/user/ads')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to My Ads
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  const status = getStatusBadge();

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/user/ads')}
            className="flex-shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{ad.name}</h1>
            <p className="text-sm text-gray-600">Ad Details</p>
          </div>
          <Badge variant={status.variant} className="flex-shrink-0">
            {status.text}
          </Badge>
        </motion.div>

        {/* Status Alert */}
        {ad.approval_status === 'rejected' && ad.rejection_reason && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 text-sm sm:text-base">Ad Rejected</h4>
                    <p className="text-sm text-red-700 mt-1">{ad.rejection_reason}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-3 sm:p-4 text-center">
                <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{ad.views_count}</div>
                <div className="text-xs text-gray-600">Views</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-3 sm:p-4 text-center">
                <MousePointer className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-purple-600">{ad.clicks_count}</div>
                <div className="text-xs text-gray-600">Clicks</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-3 sm:p-4 text-center">
                <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-green-600">{getDaysRemaining()}d</div>
                <div className="text-xs text-gray-600">Remaining</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Main Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="overflow-hidden border-2">
            {ad.main_photo_url ? (
              <div className="relative h-64 sm:h-96 bg-gray-100">
                <img
                  src={ad.main_photo_url}
                  alt={ad.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-64 sm:h-96 bg-gray-100 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-gray-300" />
              </div>
            )}
          </Card>
        </motion.div>

        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5 text-purple-600" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Age</label>
                  <p className="text-base font-semibold text-gray-900">{ad.age} years</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Location</label>
                  <p className="text-base font-semibold text-gray-900 flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {ad.location}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Category</label>
                  <p className="text-base font-semibold text-gray-900">{ad.category}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Plan</label>
                  <p className="text-base font-semibold text-gray-900">{ad.plan?.name || 'N/A'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-green-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">WhatsApp</label>
                  <p className="text-base font-semibold text-gray-900 flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    {ad.whatsapp_number}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="text-base font-semibold text-gray-900 flex items-center gap-1">
                    <Phone className="h-4 w-4 text-blue-500" />
                    {ad.phone_number}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {ad.pricing && Object.entries(ad.pricing).map(([service, price]) => (
                  <div key={service} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600">{service}</div>
                    <div className="text-lg font-bold text-gray-900">₹{price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Description */}
        {ad.profile_description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Description</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-gray-700 whitespace-pre-wrap">{ad.profile_description}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Gallery */}
        {ad.gallery_images && ad.gallery_images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="border-2">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ImageIcon className="h-5 w-5 text-pink-600" />
                  Gallery ({ad.gallery_images.length} photos)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {ad.gallery_images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Video Verification */}
        {ad.video_verification_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="border-2">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Video className="h-5 w-5 text-purple-600" />
                  Verification Video
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <video
                  src={ad.video_verification_url}
                  controls
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex gap-3 pb-6"
        >
          {ad.is_expired && (
            <Button
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white h-12"
              onClick={() => router.push(`/user/ads/${ad.id}/renew`)}
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              Renew Ad
            </Button>
          )}
          {ad.approval_status === 'rejected' && (
            <Button
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white h-12"
              onClick={() => router.push(`/user/ads/${ad.id}/edit`)}
            >
              <Edit className="h-5 w-5 mr-2" />
              Edit & Resubmit
            </Button>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

