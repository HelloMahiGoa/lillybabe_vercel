"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Edit, 
  Trash2, 
  Eye,
  Star,
  CheckCircle,
  XCircle,
  Upload,
  Users
} from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  services: string[];
  pricing: {
    one_shot?: number;
    two_shot?: number;
    three_shot?: number;
    full_night?: number;
  };
  availability: string;
  rating: number;
  is_verified: boolean;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  profile_images: Array<{
    id: number;
    image_url: string;
    is_primary: boolean;
  }>;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [bulkLoading, setBulkLoading] = useState(false);

  useEffect(() => {
    loadProfiles();
  }, [pagination.page, searchTerm, statusFilter, locationFilter]);

  const loadProfiles = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter }),
        ...(locationFilter && { location: locationFilter })
      });

      const response = await fetch(`/api/admin/profiles?${params}`);
      const result = await response.json();

      if (result.success) {
        setProfiles(result.data.profiles);
        setPagination(result.data.pagination);
      }
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this profile?')) return;

    try {
      const response = await fetch(`/api/admin/profiles/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        loadProfiles();
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const handleToggleStatus = async (id: number, field: 'is_active' | 'is_featured' | 'is_verified', value: boolean) => {
    try {
      const response = await fetch(`/api/admin/profiles/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value })
      });

      if (response.ok) {
        loadProfiles();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleSelectProfile = (id: number) => {
    setSelectedProfiles(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedProfiles.length === profiles.length) {
      setSelectedProfiles([]);
    } else {
      setSelectedProfiles(profiles.map(p => p.id));
    }
  };

  const handleBulkAction = async (action: string, data?: any) => {
    if (selectedProfiles.length === 0) {
      alert('Please select profiles first');
      return;
    }

    if (action === 'delete') {
      if (!confirm(`Are you sure you want to delete ${selectedProfiles.length} profiles? This action cannot be undone.`)) {
        return;
      }
    }

    setBulkLoading(true);
    try {
      const response = await fetch('/api/admin/profiles/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          profileIds: selectedProfiles,
          data
        })
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setSelectedProfiles([]);
        setShowBulkActions(false);
        loadProfiles();
      } else {
        alert(`Failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Bulk action error:', error);
      alert('Bulk action failed');
    } finally {
      setBulkLoading(false);
    }
  };

  const getPrimaryImage = (images: Profile['profile_images']) => {
    const primary = images?.find(img => img.is_primary);
    return primary?.image_url || images?.[0]?.image_url || '/images/placeholder.jpg';
  };

  const formatPrice = (pricing: Profile['pricing']) => {
    const prices = Object.values(pricing).filter(Boolean);
    return prices.length > 0 ? `₹${Math.min(...prices)}` : 'N/A';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profiles</h1>
          <p className="text-gray-600">Manage all profiles and their details</p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/admin/profiles/upload"
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center space-x-2"
          >
            <Upload className="h-4 w-4" />
            <span>Upload PDF</span>
          </Link>
          <Link
            href="/admin/profiles/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Profile</span>
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search profiles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="featured">Featured</option>
          </select>

          {/* Location Filter */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="Chennai">Chennai</option>
            <option value="T Nagar">T Nagar</option>
            <option value="Anna Nagar">Anna Nagar</option>
            <option value="Adyar">Adyar</option>
            <option value="Mylapore">Mylapore</option>
            <option value="Velachery">Velachery</option>
            <option value="Porur">Porur</option>
            <option value="OMR">OMR</option>
            <option value="ECR">ECR</option>
            <option value="Tambaram">Tambaram</option>
            <option value="Chromepet">Chromepet</option>
            <option value="Pallavaram">Pallavaram</option>
            <option value="St. Thomas Mount">St. Thomas Mount</option>
            <option value="Guindy">Guindy</option>
            <option value="Saidapet">Saidapet</option>
            <option value="Teynampet">Teynampet</option>
            <option value="Egmore">Egmore</option>
            <option value="Triplicane">Triplicane</option>
            <option value="Royapuram">Royapuram</option>
            <option value="Perambur">Perambur</option>
            <option value="Villivakkam">Villivakkam</option>
            <option value="Ambattur">Ambattur</option>
            <option value="Avadi">Avadi</option>
            <option value="Poonamallee">Poonamallee</option>
            <option value="Sriperumbudur">Sriperumbudur</option>
            <option value="Kanchipuram">Kanchipuram</option>
          </select>

          {/* View Mode */}
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedProfiles.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-blue-900">
                {selectedProfiles.length} profile{selectedProfiles.length > 1 ? 's' : ''} selected
              </span>
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {showBulkActions ? 'Hide Actions' : 'Show Actions'}
              </button>
            </div>
            <button
              onClick={() => setSelectedProfiles([])}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear Selection
            </button>
          </div>

          {showBulkActions && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <button
                onClick={() => handleBulkAction('activate')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 disabled:opacity-50"
              >
                Activate
              </button>
              <button
                onClick={() => handleBulkAction('deactivate')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 disabled:opacity-50"
              >
                Deactivate
              </button>
              <button
                onClick={() => handleBulkAction('feature')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 disabled:opacity-50"
              >
                Feature
              </button>
              <button
                onClick={() => handleBulkAction('unfeature')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 disabled:opacity-50"
              >
                Unfeature
              </button>
              <button
                onClick={() => handleBulkAction('verify')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Verify
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                disabled={bulkLoading}
                className="px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}

      {/* Profiles Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Selection Checkbox */}
              <div className="absolute top-2 left-2 z-10">
                <input
                  type="checkbox"
                  checked={selectedProfiles.includes(profile.id)}
                  onChange={() => handleSelectProfile(profile.id)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
              </div>
              
              {/* Profile Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={getPrimaryImage(profile.profile_images)}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-1">
                  {profile.is_verified && (
                    <CheckCircle className="h-5 w-5 text-green-500 bg-white rounded-full" />
                  )}
                  {profile.is_featured && (
                    <Star className="h-5 w-5 text-yellow-500 bg-white rounded-full" />
                  )}
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    profile.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {profile.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                  <span className="text-sm text-gray-500">{profile.age} years</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{profile.location}</p>
                <p className="text-sm font-medium text-pink-600 mb-3">From {formatPrice(profile.pricing)}</p>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/profiles/${profile.id}`}
                    className="flex-1 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors text-center"
                  >
                    <Eye className="h-3 w-3 inline mr-1" />
                    View
                  </Link>
                  <Link
                    href={`/admin/profiles/${profile.id}/edit`}
                    className="flex-1 bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors text-center"
                  >
                    <Edit className="h-3 w-3 inline mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedProfiles.length === profiles.length && profiles.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {profiles.map((profile) => (
                <tr key={profile.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedProfiles.includes(profile.id)}
                      onChange={() => handleSelectProfile(profile.id)}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={getPrimaryImage(profile.profile_images)}
                        alt={profile.name}
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{profile.name}</div>
                        <div className="text-sm text-gray-500">{profile.age} years</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{profile.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatPrice(profile.pricing)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        profile.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {profile.is_active ? 'Active' : 'Inactive'}
                      </span>
                      {profile.is_verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {profile.is_featured && <Star className="h-4 w-4 text-yellow-500" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/profiles/${profile.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/profiles/${profile.id}/edit`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(profile.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between bg-white rounded-lg border p-4">
          <div className="text-sm text-gray-700">
            Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
              disabled={pagination.page === 1}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="px-3 py-1 text-sm text-gray-700">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
              disabled={pagination.page === pagination.totalPages}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {profiles.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Users className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No profiles found</h3>
          <p className="text-gray-600 mb-4">Get started by adding your first profile</p>
          <Link
            href="/admin/profiles/new"
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Add Profile
          </Link>
        </div>
      )}
    </div>
  );
}
