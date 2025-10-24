'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, MessageCircle, Calendar, Shield, FileText, CreditCard, Eye, CheckCircle, XCircle, Clock, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlatformUser, UserAd, Payment } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function UserDetailPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;

  const [user, setUser] = useState<PlatformUser | null>(null);
  const [ads, setAds] = useState<UserAd[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchUserDetails();
    fetchUserAds();
    fetchUserPayments();
  }, [userId]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`/api/admin/platform-users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        toast.error('Failed to load user details');
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      toast.error('Failed to load user');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserAds = async () => {
    try {
      const response = await fetch(`/api/admin/platform-users/${userId}/ads`);
      if (response.ok) {
        const data = await response.json();
        setAds(data.ads || []);
      }
    } catch (error) {
      console.error('Failed to fetch user ads:', error);
    }
  };

  const fetchUserPayments = async () => {
    try {
      const response = await fetch(`/api/admin/platform-users/${userId}/payments`);
      if (response.ok) {
        const data = await response.json();
        setPayments(data.payments || []);
      }
    } catch (error) {
      console.error('Failed to fetch user payments:', error);
    }
  };

  const toggleUserStatus = async () => {
    if (!user) return;

    setActionLoading(true);
    try {
      const response = await fetch('/api/admin/platform-users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          is_active: !user.is_active
        })
      });

      if (response.ok) {
        setUser({ ...user, is_active: !user.is_active });
        toast.success(`User ${user.is_active ? 'blocked' : 'activated'} successfully`);
      } else {
        toast.error('Failed to update user status');
      }
    } catch (error) {
      console.error('Failed to toggle user status:', error);
      toast.error('Failed to update user status');
    } finally {
      setActionLoading(false);
    }
  };

  const getAdStatusBadge = (ad: UserAd) => {
    if (ad.is_expired) return { variant: 'default' as const, text: 'Expired', color: 'gray' };
    if (ad.approval_status === 'approved') return { variant: 'success' as const, text: 'Active' };
    if (ad.approval_status === 'pending') return { variant: 'warning' as const, text: 'Pending' };
    if (ad.approval_status === 'rejected') return { variant: 'error' as const, text: 'Rejected' };
    return { variant: 'default' as const, text: 'Draft' };
  };

  const getPaymentStatusBadge = (status: string) => {
    if (status === 'verified') return { variant: 'success' as const, text: 'Verified', icon: CheckCircle };
    if (status === 'pending') return { variant: 'warning' as const, text: 'Pending', icon: Clock };
    if (status === 'rejected') return { variant: 'error' as const, text: 'Rejected', icon: XCircle };
    return { variant: 'default' as const, text: status, icon: CreditCard };
  };

  const totalSpent = payments.filter(p => p.payment_status === 'verified').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments.filter(p => p.payment_status === 'pending').reduce((sum, p) => sum + p.amount, 0);

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6" />
          <div className="h-64 bg-gray-200 rounded mb-4" />
          <div className="h-48 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6">
        <Card className="text-center py-12">
          <CardContent>
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Not Found</h3>
            <Button onClick={() => router.push('/admin/platform-users')}>
              Back to Users
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            onClick={() => router.push('/admin/platform-users')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.full_name}</h1>
            <p className="text-sm text-gray-600">Platform User Details</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={user.is_active ? 'success' : 'error'}>
            {user.is_active ? 'Active' : 'Blocked'}
          </Badge>
          <Badge variant="default" className={user.user_type_id === 1 ? 'bg-blue-500' : 'bg-purple-500'}>
            {user.user_type_id === 1 ? 'Independent' : 'Agency'}
          </Badge>
        </div>
      </motion.div>

      {/* User Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-2">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              User Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <p className="text-base font-semibold text-gray-900 mt-1">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </label>
                <p className="text-base font-semibold text-gray-900 mt-1">{user.phone_number}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </label>
                <p className="text-base font-semibold text-gray-900 mt-1">{user.whatsapp_number || user.phone_number}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Registered
                </label>
                <p className="text-base font-semibold text-gray-900 mt-1">
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Account Status
                </label>
                <p className="text-base font-semibold text-gray-900 mt-1">
                  {user.is_active ? '✅ Active' : '🚫 Blocked'}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">User ID</label>
                <p className="text-xs font-mono text-gray-700 mt-1 break-all">{user.id}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-6 border-t flex gap-3">
              <Button
                variant={user.is_active ? 'outline' : 'default'}
                className={user.is_active ? 'border-red-300 text-red-700 hover:bg-red-50' : 'bg-green-600 hover:bg-green-700 text-white'}
                onClick={toggleUserStatus}
                disabled={actionLoading}
              >
                {user.is_active ? (
                  <>
                    <Ban className="h-4 w-4 mr-2" />
                    Block User
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Activate User
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{ads.length}</div>
              <div className="text-xs text-gray-600">Total Ads</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {ads.filter(a => a.approval_status === 'approved' && !a.is_expired).length}
              </div>
              <div className="text-xs text-gray-600">Active Ads</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-blue-600">₹{totalSpent}</div>
              <div className="text-xs text-gray-600">Total Paid</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{payments.length}</div>
              <div className="text-xs text-gray-600">Payments</div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* User Ads */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-2">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              User Ads ({ads.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {ads.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No ads created yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ads.map((ad) => {
                  const status = getAdStatusBadge(ad);
                  return (
                    <Card key={ad.id} className="border hover:shadow-lg transition-all cursor-pointer" onClick={() => router.push(`/admin/ads/${ad.id}`)}>
                      <div className="relative h-40 bg-gray-100">
                        {ad.main_photo_url ? (
                          <img src={ad.main_photo_url} alt={ad.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <FileText className="h-12 w-12 text-gray-300" />
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <Badge variant={status.variant}>{status.text}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-bold text-sm text-gray-900 truncate">{ad.name}</h4>
                        <p className="text-xs text-gray-600">{ad.location} • {ad.category}</p>
                        <div className="grid grid-cols-3 gap-1 mt-2">
                          <div className="text-center p-1 bg-blue-50 rounded">
                            <div className="text-xs font-bold text-blue-600">{ad.views_count}</div>
                            <div className="text-xs text-gray-600">Views</div>
                          </div>
                          <div className="text-center p-1 bg-purple-50 rounded">
                            <div className="text-xs font-bold text-purple-600">{ad.clicks_count}</div>
                            <div className="text-xs text-gray-600">Clicks</div>
                          </div>
                          <div className="text-center p-1 bg-green-50 rounded">
                            <div className="text-xs font-bold text-green-600">
                              {ad.plan?.duration_days || 0}d
                            </div>
                            <div className="text-xs text-gray-600">Plan</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* User Payments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-2">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              Payment History ({payments.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {payments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No payments yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {payments.map((payment) => {
                  const status = getPaymentStatusBadge(payment.payment_status);
                  return (
                    <Card key={payment.id} className="border hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          {/* Payment Icon */}
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                            <CreditCard className="h-6 w-6 text-white" />
                          </div>

                          {/* Payment Details */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-lg text-gray-900">₹{payment.amount}</h4>
                              <Badge variant={status.variant}>{status.text}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{payment.plan?.name || 'Ad Plan'}</p>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                              <div>
                                <span className="text-gray-600">Date:</span>
                                <span className="ml-1 font-medium">{new Date(payment.created_at).toLocaleDateString()}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">UPI:</span>
                                <span className="ml-1 font-medium truncate">{payment.upi_id}</span>
                              </div>
                            </div>

                            {/* Related Ad */}
                            {payment.ad && (
                              <div className="mt-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
                                <p className="text-xs text-purple-700">
                                  <strong>For Ad:</strong> {payment.ad.name}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col gap-2">
                            {payment.payment_proof_url && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(payment.payment_proof_url, '_blank')}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                Proof
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => router.push(`/admin/payment-verification?selected=${payment.id}`)}
                            >
                              Manage
                            </Button>
                          </div>
                        </div>

                        {/* Rejection Reason */}
                        {payment.payment_status === 'rejected' && payment.rejection_reason && (
                          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-xs text-red-800">
                              <strong>Rejected:</strong> {payment.rejection_reason}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Account Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-2 border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 text-base">Account Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant={user.is_active ? 'outline' : 'default'}
                className={user.is_active ? 'border-red-300 text-red-700 hover:bg-red-50' : 'bg-green-600 hover:bg-green-700 text-white'}
                onClick={toggleUserStatus}
                disabled={actionLoading}
              >
                {user.is_active ? (
                  <>
                    <Ban className="h-4 w-4 mr-2" />
                    Block User Account
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Activate User Account
                  </>
                )}
              </Button>
              {!user.is_active && (
                <div className="text-sm text-red-600 flex items-center">
                  ⚠️ User is currently blocked and cannot login or create ads
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

