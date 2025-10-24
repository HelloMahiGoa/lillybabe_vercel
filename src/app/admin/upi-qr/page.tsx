'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UpiQrCode } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function UpiQrManagementPage() {
  const [qrCodes, setQrCodes] = useState<UpiQrCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    upi_id: '',
    qr_code_url: '',
    merchant_name: '',
    is_active: true
  });
  const [qrImageFile, setQrImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchQrCodes();
  }, []);

  const fetchQrCodes = async () => {
    try {
      const response = await fetch('/api/admin/upi-qr');
      if (response.ok) {
        const data = await response.json();
        setQrCodes(data.qr_codes || []);
      }
    } catch (error) {
      console.error('Failed to fetch QR codes:', error);
      toast.error('Failed to load QR codes');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      upi_id: '',
      qr_code_url: '',
      merchant_name: '',
      is_active: true
    });
    setQrImageFile(null);
    setPreviewUrl('');
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleEdit = (qr: UpiQrCode) => {
    setFormData({
      upi_id: qr.upi_id,
      qr_code_url: qr.qr_code_url,
      merchant_name: qr.merchant_name,
      is_active: qr.is_active
    });
    setPreviewUrl(qr.qr_code_url);
    setQrImageFile(null);
    setEditingId(qr.id);
    setShowAddForm(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
      }
      setQrImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.upi_id || !formData.merchant_name) {
      toast.error('Please fill all required fields');
      return;
    }

    if (!editingId && !qrImageFile) {
      toast.error('Please upload a QR code image');
      return;
    }

    setSubmitting(true);
    const loadingToast = toast.loading(editingId ? 'Updating QR code...' : 'Adding QR code...');

    try {
      let qrCodeUrl = formData.qr_code_url;

      // Upload image if new file selected
      if (qrImageFile) {
        const uploadFormData = new FormData();
        uploadFormData.append('file', qrImageFile);
        uploadFormData.append('type', 'qr-code');

        const uploadResponse = await fetch('/api/admin/upload', {
          method: 'POST',
          body: uploadFormData
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload QR code image');
        }

        const uploadData = await uploadResponse.json();
        qrCodeUrl = uploadData.url;
      }

      const response = await fetch('/api/admin/upi-qr', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...(editingId ? { id: editingId } : {}),
          upi_id: formData.upi_id,
          qr_code_url: qrCodeUrl,
          merchant_name: formData.merchant_name,
          is_active: formData.is_active
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(editingId ? 'QR code updated!' : 'QR code added!', { id: loadingToast });
        fetchQrCodes();
        resetForm();
      } else {
        toast.error(data.error || 'Failed to save QR code', { id: loadingToast });
      }
    } catch (error: any) {
      console.error('Failed to save QR code:', error);
      toast.error(error.message || 'Failed to save QR code', { id: loadingToast });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this QR code?')) return;

    const loadingToast = toast.loading('Deleting QR code...');

    try {
      const response = await fetch('/api/admin/upi-qr', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('QR code deleted!', { id: loadingToast });
        fetchQrCodes();
      } else {
        toast.error(data.error || 'Failed to delete QR code', { id: loadingToast });
      }
    } catch (error) {
      console.error('Failed to delete QR code:', error);
      toast.error('Failed to delete QR code', { id: loadingToast });
    }
  };

  const toggleStatus = async (id: number, currentStatus: boolean) => {
    const loadingToast = toast.loading('Updating status...');

    try {
      const response = await fetch('/api/admin/upi-qr', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !currentStatus })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`QR code ${!currentStatus ? 'activated' : 'deactivated'}!`, { id: loadingToast });
        fetchQrCodes();
      } else {
        toast.error(data.error || 'Failed to update status', { id: loadingToast });
      }
    } catch (error) {
      console.error('Failed to toggle status:', error);
      toast.error('Failed to update status', { id: loadingToast });
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            UPI QR Codes Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">Manage payment QR codes displayed to users</p>
        </div>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add QR Code
        </Button>
      </motion.div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-lg">
                {editingId ? 'Edit QR Code' : 'Add New QR Code'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="upi_id">UPI ID *</Label>
                    <Input
                      id="upi_id"
                      value={formData.upi_id}
                      onChange={(e) => setFormData(prev => ({ ...prev, upi_id: e.target.value }))}
                      placeholder="e.g., yourname@paytm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="merchant_name">Merchant Name *</Label>
                    <Input
                      id="merchant_name"
                      value={formData.merchant_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, merchant_name: e.target.value }))}
                      placeholder="e.g., LillyBabe Services"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qr_image">QR Code Image *</Label>
                  {previewUrl ? (
                    <div className="space-y-3">
                      <div className="relative inline-block">
                        <img
                          src={previewUrl}
                          alt="QR Code Preview"
                          className="w-48 h-48 object-contain border-2 border-gray-200 rounded-lg p-2 bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setQrImageFile(null);
                            setPreviewUrl('');
                            setFormData(prev => ({ ...prev, qr_code_url: '' }));
                          }}
                          className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          document.getElementById('qr_image')?.click();
                        }}
                      >
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                      <input
                        id="qr_image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label htmlFor="qr_image" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-3">
                          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                            <QrCode className="h-8 w-8 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Upload QR Code Image
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                    className="h-4 w-4 text-green-600"
                  />
                  <Label htmlFor="is_active" className="cursor-pointer">Active (show to users)</Label>
                </div>
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  >
                    {submitting ? 'Saving...' : (editingId ? 'Update QR Code' : 'Add QR Code')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* QR Codes List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-48 bg-gray-200 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : qrCodes.length === 0 ? (
          <Card className="border-2 border-dashed">
            <CardContent className="py-16 text-center">
              <QrCode className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No QR Codes Yet</h3>
              <p className="text-gray-600 mb-6">Add your first UPI QR code to start receiving payments</p>
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add QR Code
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qrCodes.map((qr, index) => (
              <motion.div
                key={qr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-2 ${qr.is_active ? 'border-green-200 hover:shadow-xl' : 'border-gray-200 opacity-60'} transition-all`}>
                  <CardContent className="p-6">
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant={qr.is_active ? 'success' : 'default'}>
                        {qr.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(qr)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(qr.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* QR Code Image */}
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200 mb-4">
                      <img
                        src={qr.qr_code_url}
                        alt={qr.merchant_name}
                        className="w-full h-48 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>

                    {/* QR Details */}
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-600">Merchant Name</label>
                        <p className="font-semibold text-gray-900">{qr.merchant_name}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">UPI ID</label>
                        <p className="font-mono text-sm text-gray-900">{qr.upi_id}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Added</label>
                        <p className="text-sm text-gray-700">{new Date(qr.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-4 border-t space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(qr.qr_code_url, '_blank')}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview QR
                      </Button>
                      <Button
                        variant={qr.is_active ? 'outline' : 'default'}
                        size="sm"
                        className={qr.is_active ? 'w-full border-orange-300 text-orange-700 hover:bg-orange-50' : 'w-full bg-green-600 text-white'}
                        onClick={() => toggleStatus(qr.id, qr.is_active)}
                      >
                        {qr.is_active ? (
                          <>
                            <XCircle className="h-4 w-4 mr-2" />
                            Deactivate
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Activate
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">ℹ️</div>
              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-1">How it works:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>One QR code is randomly selected and shown to users during payment</li>
                  <li>Having multiple QR codes helps distribute payments across accounts</li>
                  <li>Only active QR codes are shown to users</li>
                  <li>Upload your UPI QR code image directly - it will be automatically saved and optimized</li>
                  <li>Images are converted to AVIF format for faster loading</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

