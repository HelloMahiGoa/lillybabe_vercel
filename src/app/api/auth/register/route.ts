import { NextRequest, NextResponse } from 'next/server';
import { registerUser, setSessionCookie } from '@/lib/platform-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email || !body.password || !body.full_name || !body.user_type_id) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate terms acceptance
    if (!body.terms_accepted) {
      return NextResponse.json(
        { success: false, error: 'You must accept the terms and conditions' },
        { status: 400 }
      );
    }

    // Validate user type
    if (![1, 2].includes(body.user_type_id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid user type' },
        { status: 400 }
      );
    }

    // Register user
    const result = await registerUser({
      email: body.email,
      password: body.password,
      full_name: body.full_name,
      phone_number: body.phone_number || '',
      whatsapp_number: body.whatsapp_number || body.phone_number || '',
      user_type_id: body.user_type_id,
      terms_accepted: body.terms_accepted
    });

    if (!result.success || !result.session) {
      return NextResponse.json(
        { success: false, error: result.error || 'Registration failed' },
        { status: 400 }
      );
    }

    // Set session cookie
    await setSessionCookie(result.session);

    return NextResponse.json({
      success: true,
      user: result.user,
      message: 'Registration successful'
    });

  } catch (error) {
    console.error('Registration API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

