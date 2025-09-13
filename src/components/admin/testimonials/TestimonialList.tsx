'use client';

import { useState, useEffect } from 'react';
import { 
  PencilIcon,
  TrashIcon,
  PlusIcon,
  StarIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { Testimonial } from '@/types/admin';

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchTestimonials();
  }, [currentPage]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`/api/admin/testimonials?page=${currentPage}&limit=${itemsPerPage}`);
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data.testimonials || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalItems(data.pagination?.total || 0);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (testimonialId: number) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const response = await fetch(`/api/admin/testimonials/${testimonialId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete testimonial');
    }
  };

  const handleToggleVerification = async (testimonialId: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${testimonialId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_verified: !currentStatus,
        }),
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to update testimonial');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update testimonial');
    }
  };

  const handleToggleStatus = async (testimonialId: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${testimonialId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_active: !currentStatus,
        }),
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to update testimonial');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update testimonial');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <StarIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No testimonials</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding a new testimonial.
            </p>
            <div className="mt-6">
              <button
                onClick={() => window.location.href = '/admin/testimonials/new'}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                Add Testimonial
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header with Add Testimonial button */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Testimonials</h3>
              <button
                onClick={() => window.location.href = '/admin/testimonials/new'}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                Add Testimonial
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-48">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {testimonials.map((testimonial) => (
                  <tr key={testimonial.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(testimonial.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-900">
                          {testimonial.rating}/5
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {testimonial.profile_id ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Profile #{testimonial.profile_id}
                        </span>
                      ) : (
                        <span className="text-gray-500">General</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {testimonial.is_verified ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircleIcon className="h-3 w-3 mr-1" />
                            Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            <XCircleIcon className="h-3 w-3 mr-1" />
                            Unverified
                          </span>
                        )}
                        {testimonial.is_active ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            Inactive
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="flex items-center justify-center space-x-1">
                        <button
                          onClick={() => handleToggleVerification(testimonial.id, testimonial.is_verified)}
                          className={`inline-flex items-center px-2 py-1 text-xs rounded border ${
                            testimonial.is_verified
                              ? 'text-red-700 bg-red-50 border-red-200 hover:bg-red-100'
                              : 'text-green-700 bg-green-50 border-green-200 hover:bg-green-100'
                          }`}
                          title={testimonial.is_verified ? 'Unverify' : 'Verify'}
                        >
                          {testimonial.is_verified ? 'Unverify' : 'Verify'}
                        </button>
                        <button
                          onClick={() => handleToggleStatus(testimonial.id, testimonial.is_active)}
                          className={`inline-flex items-center px-2 py-1 text-xs rounded border ${
                            testimonial.is_active
                              ? 'text-red-700 bg-red-50 border-red-200 hover:bg-red-100'
                              : 'text-green-700 bg-green-50 border-green-200 hover:bg-green-100'
                          }`}
                          title={testimonial.is_active ? 'Deactivate' : 'Activate'}
                        >
                          {testimonial.is_active ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          onClick={() => window.location.href = `/admin/testimonials/${testimonial.id}/edit`}
                          className="inline-flex items-center p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded border border-transparent hover:border-indigo-200"
                          title="Edit Testimonial"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(testimonial.id)}
                          className="inline-flex items-center p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded border border-transparent hover:border-red-200"
                          title="Delete Testimonial"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                             </tbody>
             </table>
           </div>
         </div>
         )}

         {/* Pagination */}
         {totalPages > 1 && (
           <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
             <div className="flex-1 flex justify-between sm:hidden">
               <button
                 onClick={() => handlePageChange(currentPage - 1)}
                 disabled={currentPage === 1}
                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                   currentPage === 1
                     ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                     : 'bg-white text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 Previous
               </button>
               <button
                 onClick={() => handlePageChange(currentPage + 1)}
                 disabled={currentPage === totalPages}
                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                   currentPage === totalPages
                     ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                     : 'bg-white text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 Next
               </button>
             </div>
             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
               <div>
                 <p className="text-sm text-gray-700">
                   Showing{' '}
                   <span className="font-medium">{((currentPage - 1) * itemsPerPage) + 1}</span>
                   {' '}to{' '}
                   <span className="font-medium">
                     {Math.min(currentPage * itemsPerPage, totalItems)}
                   </span>
                   {' '}of{' '}
                   <span className="font-medium">{totalItems}</span>
                   {' '}results
                 </p>
               </div>
               <div>
                 <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                   <button
                     onClick={() => handlePageChange(currentPage - 1)}
                     disabled={currentPage === 1}
                     className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                       currentPage === 1
                         ? 'text-gray-300 cursor-not-allowed'
                         : 'text-gray-500 hover:bg-gray-50'
                     }`}
                   >
                     <span className="sr-only">Previous</span>
                     <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </button>
                   
                   {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                     let pageNum;
                     if (totalPages <= 5) {
                       pageNum = i + 1;
                     } else if (currentPage <= 3) {
                       pageNum = i + 1;
                     } else if (currentPage >= totalPages - 2) {
                       pageNum = totalPages - 4 + i;
                     } else {
                       pageNum = currentPage - 2 + i;
                     }
                     
                     return (
                       <button
                         key={pageNum}
                         onClick={() => handlePageChange(pageNum)}
                         className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                           currentPage === pageNum
                             ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                             : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                         }`}
                       >
                         {pageNum}
                       </button>
                     );
                   })}
                   
                   <button
                     onClick={() => handlePageChange(currentPage + 1)}
                     disabled={currentPage === totalPages}
                     className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                       currentPage === totalPages
                         ? 'text-gray-300 cursor-not-allowed'
                         : 'text-gray-500 hover:bg-gray-50'
                     }`}
                   >
                     <span className="sr-only">Next</span>
                     <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                     </svg>
                   </button>
                 </nav>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   );
 }
