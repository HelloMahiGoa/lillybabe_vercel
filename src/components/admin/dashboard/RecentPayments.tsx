'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Payment } from '@/types/user-ads';

export default function RecentPayments() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentPayments();
  }, []);

  const fetchRecentPayments = async () => {
    try {
      const response = await fetch('/api/admin/payment-verification?status=all');
      if (response.ok) {
        const data = await response.json();
        // Get only the 5 most recent
        setPayments((data.payments || []).slice(0, 5));
      }
    } catch (error) {
      console.error('Failed to fetch recent payments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Recent Payments</CardTitle>
        <Button
          variant="link"
          size="sm"
          onClick={() => router.push('/admin/payments')}
          className="text-sm"
        >
          View All →
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : payments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <CreditCard className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">No payments yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border"
                onClick={() => router.push(`/admin/payment-verification?selected=${payment.id}`)}
              >
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  payment.payment_status === 'verified' ? 'bg-green-100' :
                  payment.payment_status === 'pending' ? 'bg-orange-100' : 'bg-red-100'
                }`}>
                  {payment.payment_status === 'verified' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : payment.payment_status === 'pending' ? (
                    <Clock className="h-5 w-5 text-orange-600" />
                  ) : (
                    <CreditCard className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">₹{payment.amount}</p>
                    <Badge
                      variant={
                        payment.payment_status === 'verified' ? 'success' :
                        payment.payment_status === 'pending' ? 'warning' : 'error'
                      }
                      className="text-xs"
                    >
                      {payment.payment_status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    {(payment.user as any)?.full_name || 'Unknown User'} • {payment.plan?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(payment.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

