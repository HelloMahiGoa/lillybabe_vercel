'use client';

import { useEffect, useState } from 'react';
import { Clock, Check, X, Eye, Video, Image as ImageIcon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserAd } from '@/types/user-ads';

export default function AdsApprovalPage() {
  const [ads, setAds] = useState<UserAd[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAd, setSelectedAd] = useState<UserAd | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    fetchPendingAds();
  }, []);

  const fetchPendingAds = async () => {
    try {
      const response = await fetch('/api/admin/ads-approval?status=pending');
      if (response.ok) {
        const data = await response.json();
        setAds(data.ads || []);
      }
    } catch (error) {
      console.error('Failed to fetch ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (adId: number) => {
    setActionLoading(true);
    try {
      const response = await fetch('/api/admin/ads-approval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ad_id: adId,
          action: 'approve'
        })
      });

      if (response.ok) {
        setAds(ads.filter(ad => ad.id !== adId));
        setSelectedAd(null);
      }
    } catch (error) {
      console.error('Failed to approve ad:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async (adId: number) => {
    if (!rejectionReason) {
      alert('Please provide a rejection reason');
      return;
    }

    setActionLoading(true);
    try {
      const response = await fetch('/api/admin/ads-approval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ad_id: adId,
          action: 'reject',
          rejection_reason: rejectionReason
        })
      });

      if (response.ok) {
        setAds(ads.filter(ad => ad.id !== adId));
        setSelectedAd(null);
        setRejectionReason('');
      }
    } catch (error) {
      console.error('Failed to reject ad:', error);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Ad Approvals</h1>
        <p className="text-sm text-gray-500 mt-1">
          Review and approve pending ads from users
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ads List */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pending Approval ({ads.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {ads.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No pending ads</p>
              ) : (
                ads.map((ad) => (
                  <div
                    key={ad.id}
                    onClick={() => setSelectedAd(ad)}
                    className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                      selectedAd?.id === ad.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {ad.main_photo_url && (
                        <img
                          src={ad.main_photo_url}
                          alt={ad.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{ad.name}</h4>
                        <p className="text-sm text-gray-600">{ad.age} • {ad.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="warning" className="text-xs">Pending</Badge>
                          {ad.user?.user_type_id === 1 && (
                            <Badge variant="primary" className="text-xs">Independent</Badge>
                          )}
                          {ad.user?.user_type_id === 2 && (
                            <Badge variant="secondary" className="text-xs">Agency</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Ad Details */}
        <div className="lg:col-span-2">
          {selectedAd ? (
            <Card>
              <CardHeader>
                <CardTitle>Review Ad Details</CardTitle>
                <CardDescription>
                  Submitted by {selectedAd.user?.full_name} ({selectedAd.user?.email})
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{selectedAd.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Age</p>
                    <p className="font-medium">{selectedAd.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">{selectedAd.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium">{selectedAd.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{selectedAd.phone_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="font-medium">{selectedAd.whatsapp_number}</p>
                  </div>
                </div>

                {/* Main Photo */}
                {selectedAd.main_photo_url && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Main Photo</p>
                    <img
                      src={selectedAd.main_photo_url}
                      alt={selectedAd.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Gallery */}
                {selectedAd.gallery_images && selectedAd.gallery_images.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Gallery ({selectedAd.gallery_images.length} images)</p>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedAd.gallery_images.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt=""
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification Video */}
                {selectedAd.video_verification_url && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Verification Video</p>
                    <video
                      src={selectedAd.video_verification_url}
                      controls
                      className="w-full max-h-96 rounded-lg bg-black"
                    />
                  </div>
                )}

                {/* Pricing */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Pricing</p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(selectedAd.pricing).map(([key, value]) => (
                      <div key={key} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600">{key}</p>
                        <p className="font-medium text-gray-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Description</p>
                  <p className="text-sm text-gray-900 p-4 bg-gray-50 rounded-lg">
                    {selectedAd.profile_description}
                  </p>
                </div>

                {/* Payment Info */}
                {selectedAd.payment && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-900 mb-2">Payment Information</p>
                    <div className="text-sm text-blue-800 space-y-1">
                      <p>Amount: ₹{selectedAd.payment.amount}</p>
                      <p>Transaction ID: {selectedAd.payment.transaction_id}</p>
                      <p>Status: {selectedAd.payment.payment_status}</p>
                    </div>
                  </div>
                )}

                {/* Rejection Reason Input */}
                {selectedAd.approval_status === 'pending' && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Rejection Reason (if rejecting)
                      </label>
                      <textarea
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        placeholder="Provide reason for rejection..."
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleReject(selectedAd.id)}
                        disabled={actionLoading}
                        variant="outline"
                        className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Reject Ad
                      </Button>
                      <Button
                        onClick={() => handleApprove(selectedAd.id)}
                        disabled={actionLoading}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Approve Ad
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-16">
                <Eye className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select an ad to review</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

