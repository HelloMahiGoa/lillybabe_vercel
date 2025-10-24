import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';
import { deleteImageFolder } from '@/lib/folder-cleanup';

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
        // Handle delete operation with special folder cleanup for profiles and ads
        if (entity === 'profiles' || entity === 'ads') {
          // First, get data to find associated folders
          const { data: itemsToDelete, error: fetchError } = await supabase
            .from(entity)
            .select('id, name, slug')
            .in('id', itemIds);

          if (fetchError) {
            console.error('Fetch error:', fetchError);
            return NextResponse.json(
              { error: `Failed to fetch ${entity} for deletion` },
              { status: 500 }
            );
          }

          // Delete items from database
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

          // Clean up image folders
          if (itemsToDelete && itemsToDelete.length > 0) {
            for (const item of itemsToDelete) {
              try {
                if (item.name) {
                  await deleteImageFolder(item.name, item.slug);
                }
              } catch (folderError) {
                console.warn(`Failed to delete folder for ${entity} ${item.id}:`, folderError);
                // Continue with other deletions even if one fails
              }
            }
          }
        } else {
          // Regular delete for other entities
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
