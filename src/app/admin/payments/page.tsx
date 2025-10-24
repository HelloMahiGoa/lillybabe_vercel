'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Eye, CheckCircle, XCircle, Clock, Calendar, User, FileText, DollarSign, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Payment } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function AdminAllPaymentsPage() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'verified' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllPayments();
  }, []);

  const fetchAllPayments = async () => {
    try {
      const response = await fetch('/api/admin/payment-verification?status=all');
      const data = await response.json();
      
      if (response.ok) {
        // Fetch ad details for each payment
        const paymentsWithAds = await Promise.all(
          (data.payments || []).map(async (payment: Payment) => {
            if (payment.ad_id) {
              try {
                const adResponse = await fetch(`/api/admin/ads/${payment.ad_id}`);
                if (adResponse.ok) {
                  const adData = await adResponse.json();
                  return { ...payment, ad: adData.ad };
                }
              } catch (err) {
                console.error('Failed to fetch ad:', err);
              }
            }
            return payment;
          })
        );
        
        setPayments(paymentsWithAds);
      } else {
        toast.error('Failed to load payments');
      }
    } catch (error) {
      console.error('Failed to fetch payments:', error);
      toast.error('Failed to load payments');
    } finally {
      setLoading(false);
    }
  };

  const filteredPayments = payments.filter(payment => {
    // Filter by status
    const statusMatch = 
      filter === 'all' ? true :
      payment.payment_status === filter;

    // Filter by search term
    const searchMatch = searchTerm === '' || 
      (payment.user as any)?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (payment.user as any)?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transaction_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.ad?.name?.toLowerCase().includes(searchTerm.toLowerCase());

    return statusMatch && searchMatch;
  });

  const getStatusBadge = (status: string) => {
    if (status === 'verified') return { variant: 'success' as const, text: 'Verified', icon: CheckCircle };
    if (status === 'pending') return { variant: 'warning' as const, text: 'Pending', icon: Clock };
    if (status === 'rejected') return { variant: 'error' as const, text: 'Rejected', icon: XCircle };
    return { variant: 'default' as const, text: status, icon: CreditCard };
  };

  const stats = {
    total: payments.length,
    pending: payments.filter(p => p.payment_status === 'pending').length,
    verified: payments.filter(p => p.payment_status === 'verified').length,
    rejected: payments.filter(p => p.payment_status === 'rejected').length,
    totalAmount: payments.filter(p => p.payment_status === 'verified').reduce((sum, p) => sum + p.amount, 0),
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              All Payments
            </h1>
            <p className="text-sm text-gray-600 mt-1">Complete payment records and analytics</p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-xs text-gray-600">Total</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
              <div className="text-xs text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.verified}</div>
              <div className="text-xs text-gray-600">Verified</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <div className="text-xs text-gray-600">Rejected</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-purple-600">₹{stats.totalAmount}</div>
              <div className="text-xs text-gray-600">Revenue</div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by user, email, ad name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {['all', 'pending', 'verified', 'rejected'].map((f) => (
                  <Button
                    key={f}
                    variant={filter === f ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(f as any)}
                    className={filter === f ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' : ''}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payments List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="h-24 bg-gray-200 rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredPayments.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 border-dashed">
            <CardContent className="py-16 text-center">
              <CreditCard className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {filter === 'all' ? 'No Payments Found' : `No ${filter} Payments`}
              </h3>
              <p className="text-gray-600">
                {searchTerm ? 'Try adjusting your search' : 'Payment records will appear here once users make payments'}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {filteredPayments.map((payment, index) => {
              const status = getStatusBadge(payment.payment_status);
              return (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row gap-4">
                        {/* Left: Payment Info */}
                        <div className="flex-1">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-xl text-gray-900">₹{payment.amount}</h3>
                                <Badge variant={status.variant}>{status.text}</Badge>
                              </div>
                              <p className="text-sm text-gray-600">{payment.plan?.name || `Plan #${payment.plan_id}`}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                <Calendar className="inline h-3 w-3 mr-1" />
                                {new Date(payment.created_at).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {/* User Info */}
                          <div className="p-3 bg-blue-50 rounded-lg mb-3">
                            <p className="text-xs font-semibold text-blue-900 mb-1">User Information:</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-blue-700">Name:</span>
                                <p className="font-semibold text-blue-900">{(payment.user as any)?.full_name || 'N/A'}</p>
                              </div>
                              <div>
                                <span className="text-blue-700">Email:</span>
                                <p className="font-semibold text-blue-900">{(payment.user as any)?.email || 'N/A'}</p>
                              </div>
                              <div>
                                <span className="text-blue-700">Phone:</span>
                                <p className="font-semibold text-blue-900">{(payment.user as any)?.phone_number || 'N/A'}</p>
                              </div>
                              <div>
                                <span className="text-blue-700">Type:</span>
                                <p className="font-semibold text-blue-900">
                                  {(payment.user as any)?.user_type_id === 1 ? 'Independent' : 'Agency'}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Payment Details */}
                          <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                            <div className="p-2 bg-gray-50 rounded">
                              <span className="text-gray-600">UPI ID:</span>
                              <p className="font-semibold text-gray-900 truncate">{payment.upi_id}</p>
                            </div>
                            <div className="p-2 bg-gray-50 rounded">
                              <span className="text-gray-600">Duration:</span>
                              <p className="font-semibold text-gray-900">{payment.plan?.duration_days || 'N/A'} days</p>
                            </div>
                          </div>

                          {/* Rejection Reason */}
                          {payment.payment_status === 'rejected' && payment.rejection_reason && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-3">
                              <p className="text-xs text-red-800">
                                <strong>Rejection:</strong> {payment.rejection_reason}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Right: Ad Info */}
                        <div className="lg:w-80">
                          {payment.ad ? (
                            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                              <CardHeader className="p-3">
                                <CardTitle className="text-sm flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-purple-600" />
                                  Payment for Ad:
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-3 pt-0">
                                {/* Ad Thumbnail */}
                                {payment.ad.main_photo_url && (
                                  <div className="mb-3">
                                    <img
                                      src={payment.ad.main_photo_url}
                                      alt={payment.ad.name}
                                      className="w-full h-32 object-cover rounded-lg"
                                    />
                                  </div>
                                )}
                                
                                {/* Ad Details */}
                                <div className="space-y-2">
                                  <h4 className="font-bold text-sm text-gray-900">{payment.ad.name}</h4>
                                  <div className="text-xs text-gray-600 space-y-1">
                                    <p>Age: {payment.ad.age} years</p>
                                    <p>Location: {payment.ad.location}</p>
                                    <p>Category: {payment.ad.category}</p>
                                    <div className="flex items-center gap-2 pt-2">
                                      <Badge variant={
                                        payment.ad.approval_status === 'approved' ? 'success' :
                                        payment.ad.approval_status === 'pending' ? 'warning' : 'error'
                                      } className="text-xs">
                                        {payment.ad.approval_status}
                                      </Badge>
                                      {payment.ad.is_expired && (
                                        <Badge variant="default" className="text-xs bg-gray-500">
                                          Expired
                                        </Badge>
                                      )}
                                    </div>
                                  </div>

                                  <Button
                                    variant="link"
                                    size="sm"
                                    className="h-auto p-0 text-xs text-purple-600 mt-2"
                                    onClick={() => router.push(`/admin/ads/${payment.ad_id}`)}
                                  >
                                    View Ad Details →
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ) : (
                            <Card className="border-2 border-gray-200 bg-gray-50">
                              <CardContent className="p-4 text-center">
                                <FileText className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                                <p className="text-xs text-gray-500">No ad linked</p>
                              </CardContent>
                            </Card>
                          )}

                          {/* Actions */}
                          <div className="mt-3 space-y-2">
                            {payment.payment_proof_url && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full hover:bg-blue-50"
                                onClick={() => window.open(payment.payment_proof_url, '_blank')}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Payment Proof
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full hover:bg-purple-50"
                              onClick={() => router.push(`/admin/payment-verification?selected=${payment.id}`)}
                            >
                              <CreditCard className="h-4 w-4 mr-2" />
                              Manage Payment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Results Info */}
      {!loading && (
        <div className="text-center text-sm text-gray-500">
          Showing {filteredPayments.length} of {payments.length} payments
          {stats.totalAmount > 0 && (
            <span className="ml-2">
              • Total Revenue: <strong className="text-green-600">₹{stats.totalAmount}</strong>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

