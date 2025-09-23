import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createAdminSupabaseClient } from '@/lib/admin-supabase';
import { readdir, rm, stat } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

// POST - Clean up orphaned profile folders
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
      console.error('[Cleanup API] Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      );
    }

    const { dryRun = true } = await request.json();

    // Get all profile folders
    const profilesDir = path.join(process.cwd(), 'public', 'profiles');
    
    if (!existsSync(profilesDir)) {
      return NextResponse.json({
        message: 'Profiles directory does not exist',
        foldersChecked: 0,
        orphanedFolders: [],
        deletedFolders: []
      });
    }

    const allFolders = await readdir(profilesDir);
    
    // Filter out files, keep only directories
    const directories = [];
    for (const folder of allFolders) {
      const folderPath = path.join(profilesDir, folder);
      const folderStat = await stat(folderPath);
      if (folderStat.isDirectory() && folder !== 'temp_uploads') {
        directories.push(folder);
      }
    }

    // Get all active profiles from database
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('id, name, slug');

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch profiles' },
        { status: 500 }
      );
    }

    // Create a set of valid folder names
    const validFolderNames = new Set<string>();
    
    if (profiles) {
      for (const profile of profiles) {
        // Add sanitized name
        if (profile.name) {
          const sanitizedName = profile.name.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
          validFolderNames.add(sanitizedName);
        }
        
        // Add slug
        if (profile.slug) {
          validFolderNames.add(profile.slug);
        }
      }
    }

    // Find orphaned folders
    const orphanedFolders = directories.filter(folder => !validFolderNames.has(folder));
    const deletedFolders: string[] = [];

    // Delete orphaned folders if not in dry run mode
    if (!dryRun && orphanedFolders.length > 0) {
      for (const folder of orphanedFolders) {
        try {
          const folderPath = path.join(profilesDir, folder);
          await rm(folderPath, { recursive: true, force: true });
          deletedFolders.push(folder);
          console.log(`Successfully deleted orphaned folder: ${folder}`);
        } catch (deleteError) {
          console.warn(`Failed to delete orphaned folder ${folder}:`, deleteError);
        }
      }
    }

    return NextResponse.json({
      message: dryRun 
        ? `Found ${orphanedFolders.length} orphaned folders (dry run mode)`
        : `Successfully deleted ${deletedFolders.length} orphaned folders`,
      foldersChecked: directories.length,
      orphanedFolders: orphanedFolders,
      deletedFolders: deletedFolders,
      dryRun: dryRun
    });

  } catch (error) {
    console.error('Cleanup API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
