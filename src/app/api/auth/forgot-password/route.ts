import { NextRequest, NextResponse } from 'next/server';
import { requestPasswordReset } from '@/lib/platform-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const result = await requestPasswordReset(body.email);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Forgot password API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

