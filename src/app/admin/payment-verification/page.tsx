'use client';

import { useEffect, useState } from 'react';
import { Clock, Check, X, Eye, CreditCard, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Payment } from '@/types/user-ads';

export default function PaymentVerificationPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    fetchPendingPayments();
  }, []);

  const fetchPendingPayments = async () => {
    try {
      const response = await fetch('/api/admin/payment-verification?status=pending');
      if (response.ok) {
        const data = await response.json();
        setPayments(data.payments || []);
      }
    } catch (error) {
      console.error('Failed to fetch payments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (paymentId: number) => {
    setActionLoading(true);
    try {
      const response = await fetch('/api/admin/payment-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_id: paymentId,
          action: 'verify'
        })
      });

      if (response.ok) {
        setPayments(payments.filter(p => p.id !== paymentId));
        setSelectedPayment(null);
      }
    } catch (error) {
      console.error('Failed to verify payment:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async (paymentId: number) => {
    if (!rejectionReason) {
      alert('Please provide a rejection reason');
      return;
    }

    setActionLoading(true);
    try {
      const response = await fetch('/api/admin/payment-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_id: paymentId,
          action: 'reject',
          rejection_reason: rejectionReason
        })
      });

      if (response.ok) {
        setPayments(payments.filter(p => p.id !== paymentId));
        setSelectedPayment(null);
        setRejectionReason('');
      }
    } catch (error) {
      console.error('Failed to reject payment:', error);
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
        <h1 className="text-2xl font-semibold text-gray-900">Payment Verification</h1>
        <p className="text-sm text-gray-500 mt-1">
          Verify user payments and activate ads
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payments List */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pending Verification ({payments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {payments.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No pending payments</p>
              ) : (
                payments.map((payment) => (
                  <div
                    key={payment.id}
                    onClick={() => setSelectedPayment(payment)}
                    className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                      selectedPayment?.id === payment.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">₹{payment.amount}</span>
                        <Badge variant="warning" className="text-xs">Pending</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{payment.user?.full_name}</p>
                      <p className="text-xs text-gray-500">{payment.plan?.name}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(payment.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Payment Details */}
        <div className="lg:col-span-2">
          {selectedPayment ? (
            <Card>
              <CardHeader>
                <CardTitle>Verify Payment</CardTitle>
                <CardDescription>
                  Payment from {selectedPayment.user?.full_name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">User</p>
                    <p className="font-medium">{selectedPayment.user?.full_name}</p>
                    <p className="text-xs text-gray-500">{selectedPayment.user?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{selectedPayment.user?.phone_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Plan</p>
                    <p className="font-medium">{selectedPayment.plan?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="font-medium text-green-600 text-lg">₹{selectedPayment.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">UPI ID Used</p>
                    <p className="font-medium">{selectedPayment.upi_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{new Date(selectedPayment.created_at).toLocaleString()}</p>
                  </div>
                </div>

                {/* Payment Proof */}
                {selectedPayment.payment_proof_url && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Payment Screenshot</p>
                    <img
                      src={selectedPayment.payment_proof_url}
                      alt="Payment Proof"
                      className="w-full max-w-md rounded-lg border shadow-sm"
                    />
                  </div>
                )}

                {/* Ad Details */}
                {selectedPayment.ad && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-900 mb-2">Related Ad</p>
                    <p className="text-sm text-blue-800">{selectedPayment.ad.name}</p>
                    <p className="text-xs text-blue-700">Slug: {selectedPayment.ad.slug}</p>
                  </div>
                )}

                {/* Actions */}
                {selectedPayment.payment_status === 'pending' && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Rejection Reason (if rejecting)
                      </label>
                      <textarea
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        placeholder="Provide reason for rejection (e.g., invalid payment proof, unclear screenshot, wrong amount)..."
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleReject(selectedPayment.id)}
                        disabled={actionLoading}
                        variant="outline"
                        className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Reject Payment
                      </Button>
                      <Button
                        onClick={() => handleVerify(selectedPayment.id)}
                        disabled={actionLoading}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Verify Payment
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-16">
                <CreditCard className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a payment to verify</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

