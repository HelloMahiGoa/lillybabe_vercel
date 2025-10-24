'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, User, MapPin, Phone, MessageCircle, DollarSign, Image as ImageIcon, Video, Eye, MousePointer, Calendar, CheckCircle, XCircle, Clock, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { UserAd } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function AdminAdDetailPage() {
  const router = useRouter();
  const params = useParams();
  const adId = params.id as string;

  const [ad, setAd] = useState<UserAd | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    fetchAdDetails();
  }, [adId]);

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/admin/ads/${adId}`);
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to load ad');
        router.push('/admin/ads');
        return;
      }

      setAd(data.ad);
    } catch (error) {
      console.error('Failed to fetch ad:', error);
      toast.error('Failed to load ad');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    if (!ad) return;

    setActionLoading(true);
    const loadingToast = toast.loading('Approving ad...');

    try {
      const response = await fetch('/api/admin/ads-approval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ad_id: ad.id,
          action: 'approve'
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Ad approved successfully!', { id: loadingToast });
        fetchAdDetails(); // Refresh
      } else {
        toast.error(data.error || 'Failed to approve ad', { id: loadingToast });
      }
    } catch (error) {
      console.error('Failed to approve ad:', error);
      toast.error('Failed to approve ad', { id: loadingToast });
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!ad || !rejectionReason) {
      toast.error('Please provide a rejection reason');
      return;
    }

    setActionLoading(true);
    const loadingToast = toast.loading('Rejecting ad...');

    try {
      const response = await fetch('/api/admin/ads-approval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ad_id: ad.id,
          action: 'reject',
          rejection_reason: rejectionReason
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Ad rejected successfully!', { id: loadingToast });
        fetchAdDetails(); // Refresh
        setRejectionReason('');
      } else {
        toast.error(data.error || 'Failed to reject ad', { id: loadingToast });
      }
    } catch (error) {
      console.error('Failed to reject ad:', error);
      toast.error('Failed to reject ad', { id: loadingToast });
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="h-96 bg-gray-200 rounded mb-4" />
          <div className="h-48 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (!ad) {
    return (
      <div className="p-6">
        <Card className="text-center py-12">
          <CardContent>
            <XCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
            <Button onClick={() => router.push('/admin/ads')}>
              Back to Ads
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusBadge = () => {
    if (ad.is_expired) return { variant: 'default' as const, text: 'Expired', color: 'gray' };
    if (ad.approval_status === 'approved') return { variant: 'success' as const, text: 'Approved' };
    if (ad.approval_status === 'pending') return { variant: 'warning' as const, text: 'Pending Approval' };
    if (ad.approval_status === 'rejected') return { variant: 'error' as const, text: 'Rejected' };
    return { variant: 'default' as const, text: 'Draft' };
  };

  const status = getStatusBadge();

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/admin/ads')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{ad.name}</h1>
            <p className="text-sm text-gray-600">Ad Review & Details</p>
          </div>
        </div>
        <Badge variant={status.variant} className="text-base px-4 py-2">
          {status.text}
        </Badge>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{ad.views_count}</div>
              <div className="text-xs text-gray-600">Views</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <MousePointer className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{ad.clicks_count}</div>
              <div className="text-xs text-gray-600">Clicks</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4 text-center">
              <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {ad.end_date ? Math.max(0, Math.ceil((new Date(ad.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))) : 0}d
              </div>
              <div className="text-xs text-gray-600">Days Left</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-orange-600">₹{ad.plan?.price || 0}</div>
              <div className="text-xs text-gray-600">Plan Price</div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Main Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="overflow-hidden border-2">
          {ad.main_photo_url ? (
            <div className="relative h-96 bg-gray-100">
              <img
                src={ad.main_photo_url}
                alt={ad.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <ImageIcon className="h-16 w-16 text-gray-300" />
            </div>
          )}
        </Card>
      </motion.div>

      {/* User & Basic Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 h-full">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                User Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <p className="text-base font-semibold text-gray-900">{(ad.user as any)?.full_name || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="text-base font-semibold text-gray-900">{(ad.user as any)?.email || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="text-base font-semibold text-gray-900">{(ad.user as any)?.phone_number || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">User Type</label>
                  <div className="mt-1">
                    <Badge variant={(ad.user as any)?.user_type_id === 1 ? 'default' : 'secondary'}>
                      {(ad.user as any)?.user_type_id === 1 ? 'Independent Escort' : 'Agency'}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => router.push(`/admin/platform-users/${ad.user_id}`)}
                >
                  View Full User Profile →
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ad Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 h-full">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-600" />
                Ad Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Age</label>
                    <p className="text-base font-semibold text-gray-900">{ad.age} years</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Location</label>
                    <p className="text-base font-semibold text-gray-900">{ad.location}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Category</label>
                  <p className="text-base font-semibold text-gray-900">{ad.category}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Plan</label>
                  <p className="text-base font-semibold text-gray-900">{ad.plan?.name || 'N/A'} - ₹{ad.plan?.price || 0}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Created</label>
                  <p className="text-sm text-gray-700">{new Date(ad.created_at).toLocaleString()}</p>
                </div>
                {ad.start_date && (
                  <div>
                    <label className="text-sm text-gray-600">Active Period</label>
                    <p className="text-sm text-gray-700">
                      {new Date(ad.start_date).toLocaleDateString()} - {ad.end_date ? new Date(ad.end_date).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contact & Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    WhatsApp
                  </label>
                  <p className="text-base font-semibold text-gray-900">{ad.whatsapp_number}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500" />
                    Phone
                  </label>
                  <p className="text-base font-semibold text-gray-900">{ad.phone_number}</p>
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
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-orange-600" />
                Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-3">
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
      </div>

      {/* Description */}
      {ad.profile_description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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
          transition={{ delay: 0.6 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-pink-600" />
                Gallery ({ad.gallery_images.length} photos)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {ad.gallery_images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.open(img, '_blank')}>
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
          transition={{ delay: 0.7 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                Verification Video
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <video
                src={ad.video_verification_url}
                controls
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Payment Info */}
      {ad.payment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Amount</label>
                  <p className="text-2xl font-bold text-green-600">₹{ad.payment.amount}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Status</label>
                  <div className="mt-1">
                    <Badge variant={
                      ad.payment.payment_status === 'verified' ? 'success' :
                      ad.payment.payment_status === 'pending' ? 'warning' : 'error'
                    }>
                      {ad.payment.payment_status}
                    </Badge>
                  </div>
                </div>
                {ad.payment.payment_proof_url && (
                  <div className="col-span-2">
                    <label className="text-sm text-gray-600 mb-2 block">Payment Proof</label>
                    <img
                      src={ad.payment.payment_proof_url}
                      alt="Payment Proof"
                      className="max-w-md rounded-lg border shadow-sm cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => window.open(ad.payment.payment_proof_url, '_blank')}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Rejection Info */}
      {ad.approval_status === 'rejected' && ad.rejection_reason && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-1">Rejection Reason</h4>
                  <p className="text-sm text-red-700">{ad.rejection_reason}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Approval Actions */}
      {ad.approval_status === 'pending' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-900">Review Ad</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Rejection Reason (if rejecting)
                </label>
                <Textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Provide reason for rejection (e.g., inappropriate content, fake verification video, policy violation)..."
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleReject}
                  disabled={actionLoading || !rejectionReason}
                  variant="outline"
                  className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject Ad
                </Button>
                <Button
                  onClick={handleApprove}
                  disabled={actionLoading}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Approve Ad
                </Button>
              </div>

              {ad.payment?.payment_status !== 'verified' && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    ⚠️ Note: Payment is {ad.payment?.payment_status || 'not verified'}. Consider verifying payment first.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

