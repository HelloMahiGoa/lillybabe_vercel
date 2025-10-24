'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, DollarSign, Calendar, Eye, EyeOff, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AdPlan } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function AdPlansPage() {
  const [plans, setPlans] = useState<AdPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState<AdPlan | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    duration_days: '',
    price: '',
    video_required: true,
    featured: false,
    sort_order: ''
  });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/admin/ad-plans?include_inactive=true');
      if (response.ok) {
        const data = await response.json();
        setPlans(data.plans || []);
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error);
      toast.error('Failed to load plans');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.duration_days || !formData.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    const loadingToast = toast.loading(editingPlan ? 'Updating plan...' : 'Creating plan...');

    try {
      const url = editingPlan 
        ? `/api/admin/ad-plans/${editingPlan.id}`
        : '/api/admin/ad-plans';
      
      const method = editingPlan ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          duration_days: parseInt(formData.duration_days),
          price: parseFloat(formData.price),
          features: {
            ad_limit: 1,
            video_required: formData.video_required,
            featured: formData.featured
          },
          sort_order: formData.sort_order ? parseInt(formData.sort_order) : 0
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save plan');
      }

      toast.success(data.message || 'Plan saved successfully', { id: loadingToast });
      setShowForm(false);
      setEditingPlan(null);
      resetForm();
      fetchPlans();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong', { id: loadingToast });
    }
  };

  const handleEdit = (plan: AdPlan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      duration_days: plan.duration_days.toString(),
      price: plan.price.toString(),
      video_required: plan.features?.video_required ?? true,
      featured: plan.features?.featured ?? false,
      sort_order: plan.sort_order.toString()
    });
    setShowForm(true);
  };

  const handleToggleActive = async (plan: AdPlan) => {
    const loadingToast = toast.loading('Updating plan status...');

    try {
      const response = await fetch(`/api/admin/ad-plans/${plan.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_active: !plan.is_active
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update plan');
      }

      toast.success(data.message || 'Plan status updated', { id: loadingToast });
      fetchPlans();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong', { id: loadingToast });
    }
  };

  const handleDelete = async (planId: number) => {
    if (!confirm('Are you sure you want to delete this plan? This action cannot be undone.')) {
      return;
    }

    const loadingToast = toast.loading('Deleting plan...');

    try {
      const response = await fetch(`/api/admin/ad-plans/${planId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete plan');
      }

      toast.success(data.message || 'Plan deleted successfully', { id: loadingToast });
      fetchPlans();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong', { id: loadingToast });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      duration_days: '',
      price: '',
      video_required: true,
      featured: false,
      sort_order: ''
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPlan(null);
    resetForm();
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Ad Plans Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage pricing plans for ad postings (unified pricing for all users)
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Plan
        </Button>
      </div>

      {/* Create/Edit Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{editingPlan ? 'Edit Plan' : 'Create New Plan'}</span>
                <Button variant="outline" size="sm" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                {editingPlan ? 'Update plan details below' : 'Fill in the details to create a new pricing plan'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateOrUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Plan Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., 10 Days Plan"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration_days">Duration (Days) *</Label>
                    <Input
                      id="duration_days"
                      type="number"
                      value={formData.duration_days}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration_days: e.target.value }))}
                      placeholder="e.g., 10"
                      min="1"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₹) *</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="e.g., 500.00"
                      min="0"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sort_order">Sort Order</Label>
                    <Input
                      id="sort_order"
                      type="number"
                      value={formData.sort_order}
                      onChange={(e) => setFormData(prev => ({ ...prev, sort_order: e.target.value }))}
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="video_required"
                      checked={formData.video_required}
                      onChange={(e) => setFormData(prev => ({ ...prev, video_required: e.target.checked }))}
                      className="h-4 w-4 text-pink-500 rounded"
                    />
                    <Label htmlFor="video_required" className="cursor-pointer">
                      Require verification video
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                      className="h-4 w-4 text-pink-500 rounded"
                    />
                    <Label htmlFor="featured" className="cursor-pointer">
                      Featured placement
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    {editingPlan ? 'Update Plan' : 'Create Plan'}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Plans List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`relative overflow-hidden ${!plan.is_active ? 'opacity-60' : ''}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {plan.duration_days} days validity
                    </CardDescription>
                  </div>
                  <Badge variant={plan.is_active ? 'success' : 'secondary'}>
                    {plan.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{plan.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">per ad</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span>1 Ad posting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{plan.duration_days} days active</span>
                  </div>
                  {plan.features?.video_required && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Video Required
                      </Badge>
                    </div>
                  )}
                  {plan.features?.featured && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-300">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(plan)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleActive(plan)}
                  >
                    {plan.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(plan.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {plans.length === 0 && (
        <Card>
          <CardContent className="text-center py-16">
            <DollarSign className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No ad plans found</p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create First Plan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

