'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, Clock, XCircle, Download, Eye, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/user/DashboardLayout';
import { Payment } from '@/types/user-ads';
import { AnimatedCounter } from '@/components/user/AnimatedCounter';
import toast from 'react-hot-toast';

export default function PaymentsPage() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'verified' | 'rejected'>('all');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await fetch('/api/user/payments');
      if (response.ok) {
        const data = await response.json();
        setPayments(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch payments:', error);
      toast.error('Failed to load payments');
    } finally {
      setLoading(false);
    }
  };

  const filteredPayments = payments.filter(payment => {
    if (filter === 'all') return true;
    return payment.payment_status === filter;
  });

  const getStatusBadge = (status: string) => {
    if (status === 'verified') return { variant: 'success' as const, text: 'Verified', icon: CheckCircle };
    if (status === 'pending') return { variant: 'warning' as const, text: 'Pending', icon: Clock };
    if (status === 'rejected') return { variant: 'error' as const, text: 'Rejected', icon: XCircle };
    return { variant: 'default' as const, text: status, icon: CreditCard };
  };

  const totalPaid = payments.filter(p => p.payment_status === 'verified').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments.filter(p => p.payment_status === 'pending').reduce((sum, p) => sum + p.amount, 0);

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"
          >
            <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Payment History
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Track all your transactions</p>
          </div>
        </motion.div>

        {/* Payment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    ₹<AnimatedCounter end={totalPaid} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Paid</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">
                    ₹<AnimatedCounter end={pendingAmount} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Pending</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 col-span-2 sm:col-span-1">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    <AnimatedCounter end={payments.length} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Transactions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-2 sm:p-3">
              <div className="flex gap-2 overflow-x-auto">
                {['all', 'pending', 'verified', 'rejected'].map((filterType) => (
                  <Button
                    key={filterType}
                    variant={filter === filterType ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(filterType as any)}
                    className={filter === filterType 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0' 
                      : 'hover:bg-green-50 hover:border-green-300'
                    }
                  >
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payments List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
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
            transition={{ delay: 0.4 }}
          >
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="py-12 sm:py-16 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CreditCard className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {filter === 'all' ? 'No Payments Yet' : `No ${filter} Payments`}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {filter === 'all' 
                    ? 'Your payment history will appear here once you create and pay for ads'
                    : `You don't have any ${filter} payments at the moment.`
                  }
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
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col gap-4">
                          {/* Payment Header */}
                          <div className="flex items-start gap-4">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg text-gray-900">₹{payment.amount}</h3>
                                <Badge variant={status.variant}>{status.text}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{payment.plan?.name || `Ad Plan #${payment.plan_id}`}</p>
                              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(payment.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Ad Information */}
                          {payment.ad && (
                            <div className="border-t pt-4">
                              <p className="text-xs font-semibold text-gray-700 mb-2">Payment for Ad:</p>
                              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                {payment.ad.main_photo_url && (
                                  <img 
                                    src={payment.ad.main_photo_url} 
                                    alt={payment.ad.name}
                                    className="w-16 h-16 rounded-lg object-cover"
                                  />
                                )}
                                <div className="flex-1">
                                  <h4 className="font-semibold text-sm text-gray-900">{payment.ad.name}</h4>
                                  <p className="text-xs text-gray-600">{payment.ad.location} • {payment.ad.category}</p>
                                  <Button
                                    variant="link"
                                    size="sm"
                                    className="h-auto p-0 text-xs text-blue-600 mt-1"
                                    onClick={() => router.push(`/user/ads/${payment.ad_id}`)}
                                  >
                                    View Ad Details →
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex gap-2">
                            {payment.payment_proof_url && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 hover:bg-blue-50 hover:border-blue-300"
                                onClick={() => window.open(payment.payment_proof_url, '_blank')}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View Proof
                              </Button>
                            )}
                          </div>

                          {/* Rejection Reason */}
                          {payment.payment_status === 'rejected' && payment.rejection_reason && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                              <p className="text-sm text-red-800">
                                <strong>Rejection Reason:</strong> {payment.rejection_reason}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

