'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { QrCode, Copy, Check, Upload, CreditCard, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UpiQrCode } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function PaymentPage() {
  const router = useRouter();
  const params = useParams();
  const adId = params.adId as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [qrCode, setQrCode] = useState<UpiQrCode | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [paymentData, setPaymentData] = useState({
    payment_proof: null as File | null
  });

  const [adDetails, setAdDetails] = useState({
    plan_id: 0,
    plan_name: 'Loading...',
    amount: 0,
    duration: 0
  });

  useEffect(() => {
    fetchQrCode();
    fetchAdDetails();
  }, []);

  const fetchAdDetails = async () => {
    try {
      const response = await fetch(`/api/user/ads/${adId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.ad) {
          setAdDetails({
            plan_id: data.ad.plan?.id || 0,
            plan_name: data.ad.plan?.name || '10 Days Plan',
            amount: data.ad.plan?.price || 500,
            duration: data.ad.plan?.duration_days || 10
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch ad details:', error);
    }
  };

  const fetchQrCode = async () => {
    try {
      const response = await fetch('/api/user/payments?action=get-qr');
      if (response.ok) {
        const data = await response.json();
        setQrCode(data.qr_code);
      }
    } catch (error) {
      console.error('Failed to fetch QR code:', error);
    }
  };

  const copyUpiId = () => {
    if (qrCode) {
      navigator.clipboard.writeText(qrCode.upi_id);
      toast.success('UPI ID copied to clipboard!');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentData(prev => ({ ...prev, payment_proof: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentData.payment_proof) {
      toast.error('Please upload payment proof');
      setError('Please upload payment proof');
      return;
    }

    setLoading(true);
    setError('');

    const loadingToast = toast.loading('Submitting payment proof...');

    try {
      const formData = new FormData();
      formData.append('ad_id', adId);
      formData.append('plan_id', adDetails.plan_id.toString());
      formData.append('amount', adDetails.amount.toString());
      formData.append('upi_id', qrCode?.upi_id || '');
      formData.append('payment_proof', paymentData.payment_proof);

      const response = await fetch('/api/user/payments', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit payment');
      }

      toast.success('🎉 Payment submitted successfully!', { id: loadingToast });
      setSuccess(true);

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push('/user/ads');
      }, 3000);
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong', { id: loadingToast });
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <Card>
              <CardContent className="pt-12 pb-8">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Submitted!</h2>
                <p className="text-gray-600 mb-6">
                  Your payment proof has been submitted for verification.
                  You'll be notified once it's approved.
                </p>
                <Button
                  onClick={() => router.push('/user/ads')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Go to My Ads
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Page Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="flex items-center gap-3 p-4 sm:p-6 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"
            >
              <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Complete Payment
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">Scan QR code and upload payment proof</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column: Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Plan Details */}
            <Card className="border-2 border-purple-100 hover:shadow-xl transition-all">
              <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  Plan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-medium">{adDetails.plan_name}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{adDetails.duration} days</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      ₹{adDetails.amount}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UPI QR Code */}
            <Card className="border-2 border-blue-100 hover:shadow-xl transition-all">
              <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <QrCode className="h-5 w-5 text-blue-600" />
                  Scan to Pay
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Use any UPI app to scan and pay</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
                {qrCode ? (
                  <>
                    <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-gray-200">
                      <img
                        src={qrCode.qr_code_url}
                        alt="UPI QR Code"
                        className="w-full max-w-[200px] sm:max-w-[250px] mx-auto"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">UPI ID</Label>
                      <div className="flex gap-2">
                        <Input
                          value={qrCode.upi_id}
                          readOnly
                          className="flex-1 bg-gray-50 text-sm"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={copyUpiId}
                          className="w-16 sm:w-20 flex-shrink-0"
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs sm:text-sm text-blue-800 font-medium mb-2">Payment Instructions:</p>
                      <ol className="text-xs sm:text-sm text-blue-700 space-y-1 list-decimal list-inside">
                        <li>Open any UPI app (PhonePe, GPay, Paytm)</li>
                        <li>Scan the QR code above</li>
                        <li>Enter amount: ₹{adDetails.amount}</li>
                        <li>Complete the payment</li>
                        <li>Upload payment screenshot below</li>
                      </ol>
                    </div>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading payment details...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Upload Payment Proof */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-green-100 hover:shadow-xl transition-all">
              <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Upload className="h-5 w-5 text-green-600" />
                  Upload Payment Proof
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  After completing payment, upload screenshot as proof
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment_proof">Payment Screenshot *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                      <input
                        id="payment_proof"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="payment_proof" className="cursor-pointer">
                        {paymentData.payment_proof ? (
                          <div className="space-y-2">
                            <Check className="h-10 w-10 text-green-600 mx-auto" />
                            <p className="text-sm font-medium text-gray-900">
                              {paymentData.payment_proof.name}
                            </p>
                            <p className="text-xs text-gray-500">Click to change</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="h-10 w-10 text-gray-400 mx-auto" />
                            <p className="text-sm font-medium text-gray-900">
                              Upload Screenshot
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12 text-sm sm:text-base"
                  >
                    {loading ? 'Submitting...' : 'Submit Payment Proof'}
                  </Button>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Make sure your payment screenshot clearly shows the amount, date, and transaction status for faster verification (usually within 2-4 hours)
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

