import { NextRequest, NextResponse } from 'next/server';
import { googleIndexingService } from '@/lib/google-indexing';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, type = 'URL_UPDATED', urls } = body;

    // Validate input
    if (!url && !urls) {
      return NextResponse.json(
        { success: false, message: 'URL or URLs array is required' },
        { status: 400 }
      );
    }

    // Handle single URL
    if (url) {
      const validation = googleIndexingService.validateUrl(url);
      if (!validation.valid) {
        return NextResponse.json(
          { success: false, message: validation.error },
          { status: 400 }
        );
      }

      const result = await googleIndexingService.requestIndexing(url, type);
      
      return NextResponse.json(result, {
        status: result.success ? 200 : 400
      });
    }

    // Handle multiple URLs
    if (urls && Array.isArray(urls)) {
      if (urls.length === 0) {
        return NextResponse.json(
          { success: false, message: 'URLs array cannot be empty' },
          { status: 400 }
        );
      }

      if (urls.length > 100) {
        return NextResponse.json(
          { success: false, message: 'Maximum 100 URLs allowed per batch' },
          { status: 400 }
        );
      }

      // Validate all URLs
      const validationErrors = urls
        .map((url: string) => ({ url, ...googleIndexingService.validateUrl(url) }))
        .filter(result => !result.valid);

      if (validationErrors.length > 0) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Some URLs are invalid',
            errors: validationErrors
          },
          { status: 400 }
        );
      }

      const results = await googleIndexingService.batchRequestIndexing(urls, type);
      
      const successCount = results.filter(r => r.success).length;
      const failureCount = results.length - successCount;

      return NextResponse.json({
        success: failureCount === 0,
        message: `Processed ${urls.length} URLs: ${successCount} successful, ${failureCount} failed`,
        results,
        summary: {
          total: urls.length,
          successful: successCount,
          failed: failureCount
        }
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid request format' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Google indexing API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Google Indexing API endpoint',
    endpoints: {
      'POST /api/admin/google-indexing': 'Submit URLs for indexing',
      parameters: {
        url: 'Single URL to index (string)',
        urls: 'Array of URLs to index (string[])',
        type: 'Indexing type: URL_UPDATED or URL_DELETED (default: URL_UPDATED)'
      }
    }
  });
}
