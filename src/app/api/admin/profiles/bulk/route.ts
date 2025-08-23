import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, profileIds, data } = body;

    if (!action || !profileIds || !Array.isArray(profileIds) || profileIds.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let result;
    let message = '';

    switch (action) {
      case 'delete':
        // Delete multiple profiles
        const { error: deleteError } = await supabase
          .from('profiles')
          .delete()
          .in('id', profileIds);

        if (deleteError) {
          console.error('Bulk delete error:', deleteError);
          return NextResponse.json({ error: 'Failed to delete profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles deleted successfully`;
        break;

      case 'activate':
        // Activate multiple profiles
        const { error: activateError } = await supabase
          .from('profiles')
          .update({ is_active: true })
          .in('id', profileIds);

        if (activateError) {
          console.error('Bulk activate error:', activateError);
          return NextResponse.json({ error: 'Failed to activate profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles activated successfully`;
        break;

      case 'deactivate':
        // Deactivate multiple profiles
        const { error: deactivateError } = await supabase
          .from('profiles')
          .update({ is_active: false })
          .in('id', profileIds);

        if (deactivateError) {
          console.error('Bulk deactivate error:', deactivateError);
          return NextResponse.json({ error: 'Failed to deactivate profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles deactivated successfully`;
        break;

      case 'feature':
        // Feature multiple profiles
        const { error: featureError } = await supabase
          .from('profiles')
          .update({ is_featured: true })
          .in('id', profileIds);

        if (featureError) {
          console.error('Bulk feature error:', featureError);
          return NextResponse.json({ error: 'Failed to feature profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles featured successfully`;
        break;

      case 'unfeature':
        // Unfeature multiple profiles
        const { error: unfeatureError } = await supabase
          .from('profiles')
          .update({ is_featured: false })
          .in('id', profileIds);

        if (unfeatureError) {
          console.error('Bulk unfeature error:', unfeatureError);
          return NextResponse.json({ error: 'Failed to unfeature profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles unfeatured successfully`;
        break;

      case 'verify':
        // Verify multiple profiles
        const { error: verifyError } = await supabase
          .from('profiles')
          .update({ is_verified: true })
          .in('id', profileIds);

        if (verifyError) {
          console.error('Bulk verify error:', verifyError);
          return NextResponse.json({ error: 'Failed to verify profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles verified successfully`;
        break;

      case 'unverify':
        // Unverify multiple profiles
        const { error: unverifyError } = await supabase
          .from('profiles')
          .update({ is_verified: false })
          .in('id', profileIds);

        if (unverifyError) {
          console.error('Bulk unverify error:', unverifyError);
          return NextResponse.json({ error: 'Failed to unverify profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles unverified successfully`;
        break;

      case 'update':
        // Update multiple profiles with specific data
        if (!data) {
          return NextResponse.json({ error: 'Update data is required' }, { status: 400 });
        }

        const { error: updateError } = await supabase
          .from('profiles')
          .update(data)
          .in('id', profileIds);

        if (updateError) {
          console.error('Bulk update error:', updateError);
          return NextResponse.json({ error: 'Failed to update profiles' }, { status: 500 });
        }

        message = `${profileIds.length} profiles updated successfully`;
        break;

      case 'change_category':
        // Change category for multiple profiles
        if (!data?.category) {
          return NextResponse.json({ error: 'Category is required' }, { status: 400 });
        }

        const { error: categoryError } = await supabase
          .from('profiles')
          .update({ category: data.category })
          .in('id', profileIds);

        if (categoryError) {
          console.error('Bulk category change error:', categoryError);
          return NextResponse.json({ error: 'Failed to change category' }, { status: 500 });
        }

        message = `${profileIds.length} profiles moved to ${data.category} category`;
        break;

      case 'change_location':
        // Change location for multiple profiles
        if (!data?.location) {
          return NextResponse.json({ error: 'Location is required' }, { status: 400 });
        }

        const { error: locationError } = await supabase
          .from('profiles')
          .update({ location: data.location })
          .in('id', profileIds);

        if (locationError) {
          console.error('Bulk location change error:', locationError);
          return NextResponse.json({ error: 'Failed to change location' }, { status: 500 });
        }

        message = `${profileIds.length} profiles moved to ${data.location}`;
        break;

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message,
      affectedCount: profileIds.length
    });

  } catch (error) {
    console.error('Bulk operations API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
