import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

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

      // Create Supabase client with service role key for storage operations
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!supabaseUrl || !serviceRoleKey) {
        return NextResponse.json(
          { error: 'Storage configuration missing' },
          { status: 500 }
        );
      }

      const supabase = createClient(supabaseUrl, serviceRoleKey);

      // Generate unique filename with AVIF extension
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const originalName = file.name.replace(/\.[^/.]+$/, ''); // Remove extension
      const avifFilename = `${originalName}_${timestamp}_${randomString}.avif`;

      // Create storage path based on type
      let storagePath: string;
      
      if (type === 'qr-code') {
        // QR codes go to qr-codes/ folder
        storagePath = `qr-codes/${avifFilename}`;
      } else {
        // Profile images go to profiles/profile-name folder
        const sanitizedProfileName = profileName.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
        storagePath = `profiles/${sanitizedProfileName}/${avifFilename}`;
      }

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(storagePath, processedImage, {
          contentType: 'image/avif',
          upsert: false
        });

      if (uploadError) {
        console.error('Supabase upload error:', uploadError);
        return NextResponse.json(
          { error: 'Failed to upload file to storage' },
          { status: 500 }
        );
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(storagePath);

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
          location: 'supabase',
          path: storagePath,
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
