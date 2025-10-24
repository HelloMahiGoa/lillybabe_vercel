import { NextRequest, NextResponse } from 'next/server';
import { loginUser, setSessionCookie } from '@/lib/platform-auth';

export async function POST(request: NextRequest) {
  try {
    console.log('Login API called');
    const body = await request.json();
    console.log('Login request body:', { email: body.email, hasPassword: !!body.password });

    // Validate required fields
    if (!body.email || !body.password) {
      console.log('Missing required fields');
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Login user
    console.log('Attempting login for:', body.email);
    const result = await loginUser(body.email, body.password);
    console.log('Login result:', { success: result.success, hasSession: !!result.session, error: result.error });

    if (!result.success || !result.session) {
      return NextResponse.json(
        { success: false, error: result.error || 'Login failed' },
        { status: 401 }
      );
    }

    // Set session cookie
    console.log('Setting session cookie');
    await setSessionCookie(result.session);

    return NextResponse.json({
      success: true,
      user: result.user,
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

