'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface IndexingResult {
  success: boolean;
  message: string;
  requestId?: string;
  error?: string;
}

interface BatchResult {
  success: boolean;
  message: string;
  results: IndexingResult[];
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
}

export default function GoogleIndexingPanel() {
  const [singleUrl, setSingleUrl] = useState('');
  const [batchUrls, setBatchUrls] = useState('');
  const [indexingType, setIndexingType] = useState<'URL_UPDATED' | 'URL_DELETED'>('URL_UPDATED');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IndexingResult | BatchResult | null>(null);
  const [activeTab, setActiveTab] = useState<'single' | 'batch'>('single');

  const handleSingleIndexing = async () => {
    if (!singleUrl.trim()) {
      setResult({
        success: false,
        message: 'Please enter a URL',
        error: 'URL is required'
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/admin/google-indexing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: singleUrl.trim(),
          type: indexingType
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to submit indexing request',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBatchIndexing = async () => {
    if (!batchUrls.trim()) {
      setResult({
        success: false,
        message: 'Please enter URLs',
        error: 'URLs are required'
      });
      return;
    }

    const urls = batchUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    if (urls.length === 0) {
      setResult({
        success: false,
        message: 'Please enter at least one valid URL',
        error: 'No valid URLs found'
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/admin/google-indexing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urls,
          type: indexingType
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to submit batch indexing request',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getResultIcon = (success: boolean) => {
    if (success) {
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    }
    return <XCircleIcon className="h-5 w-5 text-red-500" />;
  };

  const getResultColor = (success: boolean) => {
    return success ? 'text-green-700 bg-green-50 border-green-200' : 'text-red-700 bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Google Indexing</h1>
        <p className="mt-1 text-sm text-gray-500">
          Submit URLs to Google for faster indexing. This helps Google discover and index your pages more quickly.
        </p>
      </div>

      {/* Indexing Type Selection */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Indexing Type
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="URL_UPDATED"
              checked={indexingType === 'URL_UPDATED'}
              onChange={(e) => setIndexingType(e.target.value as 'URL_UPDATED' | 'URL_DELETED')}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">URL Updated (for new/updated pages)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="URL_DELETED"
              checked={indexingType === 'URL_DELETED'}
              onChange={(e) => setIndexingType(e.target.value as 'URL_UPDATED' | 'URL_DELETED')}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">URL Deleted (for removed pages)</span>
          </label>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('single')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'single'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Single URL
          </button>
          <button
            onClick={() => setActiveTab('batch')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'batch'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Batch URLs
          </button>
        </nav>
      </div>

      {/* Single URL Tab */}
      {activeTab === 'single' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div>
              <label htmlFor="single-url" className="block text-sm font-medium text-gray-700 mb-2">
                URL to Index
              </label>
              <input
                type="url"
                id="single-url"
                value={singleUrl}
                onChange={(e) => setSingleUrl(e.target.value)}
                placeholder="https://lillybabe.com/example-page"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleSingleIndexing}
              disabled={isLoading || !singleUrl.trim()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Submit for Indexing
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Batch URLs Tab */}
      {activeTab === 'batch' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div>
              <label htmlFor="batch-urls" className="block text-sm font-medium text-gray-700 mb-2">
                URLs to Index (one per line)
              </label>
              <textarea
                id="batch-urls"
                value={batchUrls}
                onChange={(e) => setBatchUrls(e.target.value)}
                placeholder="https://lillybabe.com/page1&#10;https://lillybabe.com/page2&#10;https://lillybabe.com/page3"
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Enter one URL per line. Maximum 100 URLs per batch.
              </p>
            </div>
            <button
              onClick={handleBatchIndexing}
              disabled={isLoading || !batchUrls.trim()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Submit Batch for Indexing
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className={`p-4 rounded-lg border ${getResultColor(result.success)}`}>
          <div className="flex items-start">
            {getResultIcon(result.success)}
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium">
                {result.success ? 'Indexing Request Successful' : 'Indexing Request Failed'}
              </h3>
              <p className="mt-1 text-sm">{result.message}</p>
              
              {'error' in result && result.error && (
                <p className="mt-1 text-sm opacity-75">Error: {result.error}</p>
              )}

              {'summary' in result && result.summary && (
                <div className="mt-3 text-sm">
                  <p>Summary: {result.summary.successful} successful, {result.summary.failed} failed out of {result.summary.total} total</p>
                </div>
              )}

              {'results' in result && result.results && (
                <div className="mt-3">
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium">View detailed results</summary>
                    <div className="mt-2 space-y-2">
                      {result.results.map((item, index) => (
                        <div key={index} className={`p-2 rounded text-xs ${getResultColor(item.success)}`}>
                          <div className="flex items-center">
                            {getResultIcon(item.success)}
                            <span className="ml-2">{item.message}</span>
                          </div>
                          {item.error && (
                            <p className="mt-1 opacity-75">Error: {item.error}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Information Panel */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <ExclamationTriangleIcon className="h-5 w-5 text-blue-400 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Important Notes</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Google indexing requests are not guaranteed to be processed immediately</li>
                <li>Only URLs from your verified domain will be accepted</li>
                <li>Rate limits apply - avoid submitting the same URL multiple times</li>
                <li>Use "URL Updated" for new or modified pages, "URL Deleted" for removed pages</li>
                <li>Batch processing includes a 1-second delay between batches to respect rate limits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
