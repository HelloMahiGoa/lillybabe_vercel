import { NextResponse } from 'next/server';
import { googleIndexingService } from '@/lib/google-indexing';

export async function GET() {
  try {
    // Test the service initialization
    const testUrl = 'https://lillybabe.com/test-page';
    const validation = googleIndexingService.validateUrl(testUrl);
    
    return NextResponse.json({
      success: true,
      message: 'Google indexing service is properly configured',
      test: {
        url: testUrl,
        validation,
        serviceInitialized: true
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Google indexing service configuration error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
