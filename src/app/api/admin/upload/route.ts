import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
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

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string;
    const profileName = formData.get('profileName') as string || 'default';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, WebP, and AVIF are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Convert image to AVIF format
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    try {
      // Get image metadata first
      const metadata = await sharp(buffer).metadata();
      
      // Calculate optimal dimensions based on original size
      const maxWidth = 800;
      const maxHeight = 1200;
      let targetWidth = metadata.width;
      let targetHeight = metadata.height;

      // Resize if image is too large
      if (metadata.width && metadata.height) {
        if (metadata.width > maxWidth || metadata.height > maxHeight) {
          const aspectRatio = metadata.width / metadata.height;
          if (aspectRatio > 1) {
            // Landscape
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth / aspectRatio);
          } else {
            // Portrait
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * aspectRatio);
          }
        }
      }

      // Process image with Sharp
      const processedImage = await sharp(buffer)
        .resize(targetWidth, targetHeight, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .avif({
          quality: 80, // Good balance between quality and file size
          effort: 6, // Higher effort for better compression
          chromaSubsampling: '4:2:0' // Standard chroma subsampling
        })
        .toBuffer();

      // Generate unique filename with AVIF extension
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const originalName = file.name.replace(/\.[^/.]+$/, ''); // Remove extension
      const avifFilename = `${originalName}_${timestamp}_${randomString}.avif`;

      // Create directory structure based on type
      let uploadDir: string;
      let publicUrl: string;
      
      if (type === 'qr-code') {
        // QR codes go to public/images/qr-codes/
        uploadDir = path.join(process.cwd(), 'public', 'images', 'qr-codes');
        publicUrl = `/images/qr-codes/${avifFilename}`;
      } else {
        // Profile images go to public/profiles/profile-name
        const sanitizedProfileName = profileName.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
        uploadDir = path.join(process.cwd(), 'public', 'profiles', sanitizedProfileName);
        publicUrl = `/profiles/${sanitizedProfileName}/${avifFilename}`;
      }
      
      // Create directory if it doesn't exist
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }

      // Save the processed AVIF image to local storage
      const filePath = path.join(uploadDir, avifFilename);
      await writeFile(filePath, processedImage);

      // Calculate compression statistics
      const compressionRatio = Math.round(((file.size - processedImage.length) / file.size) * 100);
      const sizeReduction = file.size - processedImage.length;

      return NextResponse.json({
        success: true,
        url: publicUrl,
        filename: avifFilename,
        originalSize: file.size,
        processedSize: processedImage.length,
        compressionRatio,
        sizeReduction,
        originalDimensions: {
          width: metadata.width,
          height: metadata.height
        },
        processedDimensions: {
          width: targetWidth,
          height: targetHeight
        },
        type: 'image/avif',
        originalType: file.type,
        storage: {
          location: 'local',
          path: filePath,
          publicUrl: publicUrl
        },
        optimization: {
          quality: 80,
          effort: 6,
          format: 'AVIF',
          chromaSubsampling: '4:2:0'
        }
      });

    } catch (sharpError) {
      console.error('Sharp processing error:', sharpError);
      return NextResponse.json(
        { error: 'Failed to process image. Please try a different image.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
