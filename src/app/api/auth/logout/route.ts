import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/platform-auth';

export async function POST(request: NextRequest) {
  try {
    // Clear session cookie
    await clearSessionCookie();

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });

  } catch (error) {
    console.error('Logout API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

