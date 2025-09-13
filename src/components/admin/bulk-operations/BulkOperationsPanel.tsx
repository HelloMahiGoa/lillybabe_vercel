'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  StarIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentDuplicateIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface BulkOperation {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  action: string;
  entity: string;
}

const bulkOperations: BulkOperation[] = [
  {
    id: 'activate-profiles',
    name: 'Activate Profiles',
    description: 'Activate multiple profiles at once',
    icon: EyeIcon,
    action: 'activate',
    entity: 'profiles'
  },
  {
    id: 'deactivate-profiles',
    name: 'Deactivate Profiles',
    description: 'Deactivate multiple profiles at once',
    icon: EyeSlashIcon,
    action: 'deactivate',
    entity: 'profiles'
  },
  {
    id: 'feature-profiles',
    name: 'Feature Profiles',
    description: 'Mark multiple profiles as featured',
    icon: StarIcon,
    action: 'feature',
    entity: 'profiles'
  },
  {
    id: 'unfeature-profiles',
    name: 'Unfeature Profiles',
    description: 'Remove featured status from profiles',
    icon: XCircleIcon,
    action: 'unfeature',
    entity: 'profiles'
  },
  {
    id: 'delete-profiles',
    name: 'Delete Profiles',
    description: 'Permanently delete multiple profiles',
    icon: TrashIcon,
    action: 'delete',
    entity: 'profiles'
  },
  {
    id: 'activate-categories',
    name: 'Activate Categories',
    description: 'Activate multiple categories',
    icon: CheckCircleIcon,
    action: 'activate',
    entity: 'categories'
  },
  {
    id: 'deactivate-categories',
    name: 'Deactivate Categories',
    description: 'Deactivate multiple categories',
    icon: XCircleIcon,
    action: 'deactivate',
    entity: 'categories'
  },
  {
    id: 'delete-categories',
    name: 'Delete Categories',
    description: 'Delete multiple categories',
    icon: TrashIcon,
    action: 'delete',
    entity: 'categories'
  },
  {
    id: 'activate-locations',
    name: 'Activate Locations',
    description: 'Activate multiple locations',
    icon: CheckCircleIcon,
    action: 'activate',
    entity: 'locations'
  },
  {
    id: 'deactivate-locations',
    name: 'Deactivate Locations',
    description: 'Deactivate multiple locations',
    icon: XCircleIcon,
    action: 'deactivate',
    entity: 'locations'
  },
  {
    id: 'delete-locations',
    name: 'Delete Locations',
    description: 'Delete multiple locations',
    icon: TrashIcon,
    action: 'delete',
    entity: 'locations'
  },
  {
    id: 'verify-testimonials',
    name: 'Verify Testimonials',
    description: 'Mark multiple testimonials as verified',
    icon: CheckCircleIcon,
    action: 'verify',
    entity: 'testimonials'
  },
  {
    id: 'unverify-testimonials',
    name: 'Unverify Testimonials',
    description: 'Remove verification from testimonials',
    icon: XCircleIcon,
    action: 'unverify',
    entity: 'testimonials'
  },
  {
    id: 'activate-testimonials',
    name: 'Activate Testimonials',
    description: 'Activate multiple testimonials',
    icon: EyeIcon,
    action: 'activate',
    entity: 'testimonials'
  },
  {
    id: 'deactivate-testimonials',
    name: 'Deactivate Testimonials',
    description: 'Deactivate multiple testimonials',
    icon: EyeSlashIcon,
    action: 'deactivate',
    entity: 'testimonials'
  },
  {
    id: 'delete-testimonials',
    name: 'Delete Testimonials',
    description: 'Delete multiple testimonials',
    icon: TrashIcon,
    action: 'delete',
    entity: 'testimonials'
  }
];

export default function BulkOperationsPanel() {
  const [selectedOperation, setSelectedOperation] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const currentOperation = bulkOperations.find(op => op.id === selectedOperation);

  useEffect(() => {
    if (selectedOperation) {
      fetchItems();
    }
  }, [selectedOperation]);

  const fetchItems = async () => {
    if (!currentOperation) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/${currentOperation.entity}`);
      if (response.ok) {
        const data = await response.json();
        
        // Handle different API response structures
        let items = [];
        if (data[currentOperation.entity]) {
          items = data[currentOperation.entity];
        } else if (data.profiles) {
          items = data.profiles;
        } else if (data.testimonials) {
          items = data.testimonials;
        } else if (data.categories) {
          items = data.categories;
        } else if (data.locations) {
          items = data.locations;
        }
        
        setItems(items);
      } else {
        console.error('Failed to fetch items:', response.status);
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id.toString()));
    }
  };

  const handleSelectItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const executeBulkOperation = async () => {
    if (!currentOperation || selectedItems.length === 0) return;

    const confirmed = confirm(
      `Are you sure you want to ${currentOperation.action} ${selectedItems.length} ${currentOperation.entity}?`
    );

    if (!confirmed) return;

    setExecuting(true);
    try {
      const response = await fetch(`/api/admin/bulk-operations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operation: currentOperation.action,
          entity: currentOperation.entity,
          itemIds: selectedItems,
        }),
      });

      if (response.ok) {
        alert(`Successfully ${currentOperation.action}d ${selectedItems.length} ${currentOperation.entity}`);
        setSelectedItems([]);
        fetchItems();
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to execute bulk operation');
      }
    } catch (error) {
      console.error('Bulk operation error:', error);
      alert('Failed to execute bulk operation');
    } finally {
      setExecuting(false);
    }
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'active' && item.is_active) ||
                         (filter === 'inactive' && !item.is_active);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Operation Selection */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Operation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bulkOperations.map((operation) => {
            const Icon = operation.icon;
            return (
              <button
                key={operation.id}
                onClick={() => setSelectedOperation(operation.id)}
                className={`p-4 border rounded-lg text-left hover:bg-gray-50 transition-colors ${
                  selectedOperation === operation.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Icon className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{operation.name}</div>
                    <div className="text-sm text-gray-500">{operation.description}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Item Selection */}
      {currentOperation && (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Select {currentOperation.entity.charAt(0).toUpperCase() + currentOperation.entity.slice(1)}
            </h3>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-900">
                    Select All ({filteredItems.length} items)
                  </span>
                </label>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <label className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id.toString())}
                        onChange={() => handleSelectItem(item.id.toString())}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-900">
                        {item.name || item.title}
                      </span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {item.is_active !== undefined && (
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          item.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.is_active ? 'Active' : 'Inactive'}
                        </span>
                      )}
                      {item.is_verified !== undefined && (
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          item.is_verified
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.is_verified ? 'Verified' : 'Unverified'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {selectedItems.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {selectedItems.length} items selected
                    </span>
                    <button
                      onClick={executeBulkOperation}
                      disabled={executing}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {executing ? 'Executing...' : `Execute ${currentOperation.action}`}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
