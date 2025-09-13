import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { rename, readdir, rmdir, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

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

    const { profileName, mainPhotoUrl, galleryImages } = await request.json();

    if (!profileName) {
      return NextResponse.json(
        { error: 'Profile name is required' },
        { status: 400 }
      );
    }

    // Sanitize profile name for file system
    const sanitizedProfileName = profileName.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
    
    // Define paths
    const tempDir = path.join(process.cwd(), 'public', 'profiles', 'temp_uploads');
    const finalDir = path.join(process.cwd(), 'public', 'profiles', sanitizedProfileName);
    
    // Create final directory if it doesn't exist
    if (!existsSync(finalDir)) {
      await mkdir(finalDir, { recursive: true });
    }

    const movedFiles = {
      mainPhotoUrl: mainPhotoUrl,
      galleryImages: galleryImages || []
    };

    // Move main photo if it exists in temp_uploads
    if (mainPhotoUrl && mainPhotoUrl.includes('/profiles/temp_uploads/')) {
      const fileName = path.basename(mainPhotoUrl);
      const tempFilePath = path.join(tempDir, fileName);
      const finalFilePath = path.join(finalDir, fileName);
      
      if (existsSync(tempFilePath)) {
        await rename(tempFilePath, finalFilePath);
        movedFiles.mainPhotoUrl = `/profiles/${sanitizedProfileName}/${fileName}`;
      }
    }

    // Move gallery images if they exist in temp_uploads
    if (galleryImages && Array.isArray(galleryImages)) {
      const movedGalleryImages = [];
      
      for (const imageUrl of galleryImages) {
        if (imageUrl && imageUrl.includes('/profiles/temp_uploads/')) {
          const fileName = path.basename(imageUrl);
          const tempFilePath = path.join(tempDir, fileName);
          const finalFilePath = path.join(finalDir, fileName);
          
          if (existsSync(tempFilePath)) {
            await rename(tempFilePath, finalFilePath);
            movedGalleryImages.push(`/profiles/${sanitizedProfileName}/${fileName}`);
          } else {
            // Keep the original URL if file doesn't exist in temp
            movedGalleryImages.push(imageUrl);
          }
        } else {
          // Keep the original URL if it's not from temp_uploads
          movedGalleryImages.push(imageUrl);
        }
      }
      
      movedFiles.galleryImages = movedGalleryImages;
    }

    // Clean up temp_uploads directory if it's empty
    try {
      if (existsSync(tempDir)) {
        const tempFiles = await readdir(tempDir);
        if (tempFiles.length === 0) {
          // Use rmdir instead of unlink for directories
          await rmdir(tempDir);
        }
      }
    } catch (error) {
      // Ignore errors if directory doesn't exist or can't be deleted
    }

    return NextResponse.json({
      success: true,
      message: 'Files moved successfully',
      mainPhotoUrl: movedFiles.mainPhotoUrl,
      galleryImages: movedFiles.galleryImages
    });

  } catch (error) {
    console.error('Move temp files error:', error);
    return NextResponse.json(
      { error: 'Failed to move files' },
      { status: 500 }
    );
  }
}
