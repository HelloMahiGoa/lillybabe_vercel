import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';
import { rm } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

// POST - Execute bulk operations
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Create Supabase client
    const supabase = createAdminSupabaseClient();
    if (!supabase) {
      console.error('[Admin Bulk Operations API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { operation, entity, itemIds } = body;

    if (!operation || !entity || !itemIds || !Array.isArray(itemIds)) {
      return NextResponse.json(
        { error: 'Invalid request parameters' },
        { status: 400 }
      );
    }

    let result;
    let updateData: any = {};

    // Prepare update data based on operation
    switch (operation) {
      case 'activate':
        updateData = { is_active: true };
        break;
      case 'deactivate':
        updateData = { is_active: false };
        break;
      case 'feature':
        if (entity === 'profiles') {
          updateData = { featured: true };
        }
        break;
      case 'unfeature':
        if (entity === 'profiles') {
          updateData = { featured: false };
        }
        break;
      case 'verify':
        if (entity === 'testimonials') {
          updateData = { is_verified: true };
        }
        break;
      case 'unverify':
        if (entity === 'testimonials') {
          updateData = { is_verified: false };
        }
        break;
      case 'delete':
        // Handle delete operation with special folder cleanup for profiles
        if (entity === 'profiles') {
          // First, get profile data to find associated folders
          const { data: profilesToDelete, error: fetchError } = await supabase
            .from('profiles')
            .select('id, name, slug')
            .in('id', itemIds);

          if (fetchError) {
            console.error('Fetch error:', fetchError);
            return NextResponse.json(
              { error: 'Failed to fetch profiles for deletion' },
              { status: 500 }
            );
          }

          // Delete profiles from database
          const { error: deleteError } = await supabase
            .from(entity)
            .delete()
            .in('id', itemIds);

          if (deleteError) {
            console.error('Delete error:', deleteError);
            return NextResponse.json(
              { error: `Failed to delete ${entity}` },
              { status: 500 }
            );
          }

          // Clean up profile folders
          if (profilesToDelete && profilesToDelete.length > 0) {
            for (const profile of profilesToDelete) {
              try {
                // Try to delete folder by name
                if (profile.name) {
                  const sanitizedProfileName = profile.name.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
                  const profileDir = path.join(process.cwd(), 'public', 'profiles', sanitizedProfileName);
                  
                  if (existsSync(profileDir)) {
                    await rm(profileDir, { recursive: true, force: true });
                    console.log(`Successfully deleted profile folder: ${sanitizedProfileName}`);
                  }
                }
                
                // Also try to delete folder using slug if different from name
                if (profile.slug && profile.slug !== profile.name) {
                  const profileDirBySlug = path.join(process.cwd(), 'public', 'profiles', profile.slug);
                  if (existsSync(profileDirBySlug)) {
                    await rm(profileDirBySlug, { recursive: true, force: true });
                    console.log(`Successfully deleted profile folder by slug: ${profile.slug}`);
                  }
                }
              } catch (folderError) {
                console.warn(`Failed to delete folder for profile ${profile.id}:`, folderError);
                // Continue with other deletions even if one fails
              }
            }
          }
        } else {
          // Regular delete for non-profile entities
          const { error: deleteError } = await supabase
            .from(entity)
            .delete()
            .in('id', itemIds);

          if (deleteError) {
            console.error('Delete error:', deleteError);
            return NextResponse.json(
              { error: `Failed to delete ${entity}` },
              { status: 500 }
            );
          }
        }

        return NextResponse.json({
          message: `Successfully deleted ${itemIds.length} ${entity}`,
          affectedCount: itemIds.length
        });

      default:
        return NextResponse.json(
          { error: 'Invalid operation' },
          { status: 400 }
        );
    }

    // Execute update operation
    const { data, error } = await supabase
      .from(entity)
      .update(updateData)
      .in('id', itemIds)
      .select();

    if (error) {
      console.error('Bulk operation error:', error);
      return NextResponse.json(
        { error: `Failed to ${operation} ${entity}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: `Successfully ${operation}d ${itemIds.length} ${entity}`,
      affectedCount: itemIds.length,
      data
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
