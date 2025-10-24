'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Calendar, DollarSign, Check, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UserAd, AdPlan } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function RenewAdPage() {
  const router = useRouter();
  const params = useParams();
  const adId = params.id as string;

  const [ad, setAd] = useState<UserAd | null>(null);
  const [plans, setPlans] = useState<AdPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAdDetails();
    fetchPlans();
  }, [adId]);

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/user/ads/${adId}`);
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to load ad details');
        router.push('/user/ads');
        return;
      }

      if (!data.ad.is_expired) {
        toast.error('This ad is still active and cannot be renewed yet');
        router.push(`/user/ads/${adId}`);
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

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/user/plans');
      const data = await response.json();

      if (response.ok) {
        setPlans(data.plans || []);
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error);
    }
  };

  const handleRenew = async () => {
    if (!selectedPlan) {
      toast.error('Please select a plan');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`/api/user/ads/${adId}/renew`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan_id: selectedPlan
        })
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to create renewal');
        return;
      }

      toast.success('Renewal initiated! Proceed to payment.');
      router.push(`/user/payment/${adId}`);
    } catch (error) {
      console.error('Failed to renew ad:', error);
      toast.error('Failed to process renewal');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
            <div className="h-64 bg-gray-200 rounded mb-4" />
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
              <Button onClick={() => router.push('/user/ads')}>
                Back to My Ads
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  const selectedPlanDetails = plans.find(p => p.id === selectedPlan);

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
            onClick={() => router.push(`/user/ads/${adId}`)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Renew Ad
            </h1>
            <p className="text-sm text-gray-600">Extend your ad duration</p>
          </div>
          <Badge variant="default" className="bg-gray-500">
            Expired
          </Badge>
        </motion.div>

        {/* Current Ad Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
              <CardTitle className="text-lg">Current Ad Details</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="flex gap-4">
                {ad.main_photo_url && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={ad.main_photo_url}
                      alt={ad.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{ad.name}</h3>
                  <p className="text-sm text-gray-600">{ad.age} • {ad.location} • {ad.category}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="default" className="bg-orange-500">
                      {ad.views_count} Views
                    </Badge>
                    <Badge variant="default" className="bg-purple-500">
                      {ad.clicks_count} Clicks
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Select New Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <RefreshCw className="h-5 w-5 text-green-600" />
                Select Renewal Plan
              </CardTitle>
              <CardDescription>Choose a plan to extend your ad</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {plans.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Clock className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Loading plans...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {plans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all ${
                          selectedPlan === plan.id
                            ? 'border-2 border-green-500 bg-green-50 shadow-lg'
                            : 'border-2 border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        <CardContent className="p-4 text-center">
                          {selectedPlan === plan.id && (
                            <div className="absolute top-2 right-2">
                              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          )}
                          
                          <div className="mb-3">
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
                              selectedPlan === plan.id ? 'bg-green-500' : 'bg-gray-200'
                            }`}>
                              {plan.duration_days === 10 && <Zap className={`h-6 w-6 ${selectedPlan === plan.id ? 'text-white' : 'text-gray-600'}`} />}
                              {plan.duration_days === 20 && <Calendar className={`h-6 w-6 ${selectedPlan === plan.id ? 'text-white' : 'text-gray-600'}`} />}
                              {plan.duration_days === 30 && <RefreshCw className={`h-6 w-6 ${selectedPlan === plan.id ? 'text-white' : 'text-gray-600'}`} />}
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-lg text-gray-900">{plan.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{plan.duration_days} Days</p>
                          <div className="text-2xl font-bold text-green-600">
                            ₹{plan.price}
                          </div>
                          
                          {plan.duration_days === 30 && (
                            <Badge variant="default" className="mt-2 bg-purple-500">
                              Best Value
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary */}
        {selectedPlanDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Renewal Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Selected Plan:</span>
                    <span className="font-semibold">{selectedPlanDetails.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{selectedPlanDetails.duration_days} Days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New Expiry:</span>
                    <span className="font-semibold">
                      {new Date(Date.now() + selectedPlanDetails.duration_days * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">Total Amount:</span>
                      <span className="text-2xl font-bold text-green-600">₹{selectedPlanDetails.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            variant="outline"
            className="flex-1 h-12"
            onClick={() => router.push(`/user/ads/${adId}`)}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            onClick={handleRenew}
            disabled={!selectedPlan || submitting}
          >
            {submitting ? (
              <>
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <DollarSign className="h-5 w-5 mr-2" />
                Proceed to Payment
              </>
            )}
          </Button>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">ℹ️</div>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">Important Information:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Your ad will be reactivated after payment verification</li>
                    <li>All existing content (photos, videos, details) will be preserved</li>
                    <li>The new expiry date will be calculated from today</li>
                    <li>Payment verification usually takes 2-4 hours</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

