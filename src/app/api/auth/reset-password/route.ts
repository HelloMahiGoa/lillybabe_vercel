import { NextRequest, NextResponse } from 'next/server';
import { resetPassword } from '@/lib/platform-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.token || !body.password) {
      return NextResponse.json(
        { success: false, message: 'Token and new password are required' },
        { status: 400 }
      );
    }

    const result = await resetPassword(body.token, body.password);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Reset password API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

