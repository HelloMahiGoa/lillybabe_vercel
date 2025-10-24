import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/platform-auth';

// DEPRECATED: This endpoint is kept for backward compatibility
// The system now uses pay-per-ad model for all user types
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // All users now use pay-per-ad system
    return NextResponse.json({
      success: true,
      subscription: null,
      has_active_subscription: false,
      message: 'Subscription system is deprecated. All users now pay per ad.'
    });

  } catch (error: any) {
    console.error('Subscription API error:', error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

