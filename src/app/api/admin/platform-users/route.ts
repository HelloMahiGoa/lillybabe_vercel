import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

// GET: List platform users
export async function GET(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const userTypeId = searchParams.get('user_type_id');
    const isActive = searchParams.get('is_active');

    let query = supabase
      .from('platform_users')
      .select(`
        *,
        user_type:user_types(id, name, description)
      `)
      .order('created_at', { ascending: false });

    if (userTypeId) {
      query = query.eq('user_type_id', parseInt(userTypeId));
    }

    if (isActive !== null && isActive !== undefined) {
      query = query.eq('is_active', isActive === 'true');
    }

    const { data: users, error } = await query;

    if (error) {
      console.error('Error fetching users:', error);
      // If table doesn't exist, return empty array gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('platform_users table does not exist. Returning empty data.');
        return NextResponse.json({ users: [] });
      }
      return NextResponse.json(
        { error: `Failed to fetch users: ${error.message}`, users: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({ users: users || [] });

  } catch (error: any) {
    console.error('Platform users API error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}`, users: [] },
      { status: 500 }
    );
  }
}

// PUT: Update user status
export async function PUT(request: NextRequest) {
  try {
    const admin = await getCurrentUser();
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { user_id, is_active } = body;

    if (!user_id || typeof is_active !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { error: updateError } = await supabase
      .from('platform_users')
      .update({ is_active })
      .eq('id', user_id);

    if (updateError) {
      console.error('Error updating user:', updateError);
      return NextResponse.json(
        { error: 'Failed to update user' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `User ${is_active ? 'activated' : 'deactivated'} successfully`
    });

  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

