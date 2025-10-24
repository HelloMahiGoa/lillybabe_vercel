import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/platform-auth';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string; // 'photo' or 'video'

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (type === 'photo') {
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(
          { success: false, error: 'Only image files are allowed' },
          { status: 400 }
        );
      }
      // Max 5MB for images
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: 'Image file size must be less than 5MB' },
          { status: 400 }
        );
      }
    } else if (type === 'video') {
      if (!file.type.startsWith('video/')) {
        return NextResponse.json(
          { success: false, error: 'Only video files are allowed' },
          { status: 400 }
        );
      }
      // Max 50MB for videos
      if (file.size > 50 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: 'Video file size must be less than 50MB' },
          { status: 400 }
        );
      }
    }

    // Create Supabase client with service role key for storage operations
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { success: false, error: 'Storage configuration missing' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let finalBuffer: Buffer;
    let filename: string;
    let contentType: string;

    // Process images with Sharp for AVIF conversion
    if (type === 'photo') {
      try {
        // Get image metadata
        const metadata = await sharp(buffer).metadata();
        
        // Calculate optimal dimensions
        const maxWidth = 800;
        const maxHeight = 1200;
        let targetWidth = metadata.width;
        let targetHeight = metadata.height;

        // Resize if image is too large
        if (metadata.width && metadata.height) {
          if (metadata.width > maxWidth || metadata.height > maxHeight) {
            const aspectRatio = metadata.width / metadata.height;
            if (aspectRatio > 1) {
              targetWidth = maxWidth;
              targetHeight = Math.round(maxWidth / aspectRatio);
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(maxHeight * aspectRatio);
            }
          }
        }

        // Convert to AVIF format
        finalBuffer = await sharp(buffer)
          .resize(targetWidth, targetHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .avif({
            quality: 80,
            effort: 6,
            chromaSubsampling: '4:2:0'
          })
          .toBuffer();

        // Generate filename with AVIF extension
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        filename = `${type}_${timestamp}_${randomString}.avif`;
        contentType = 'image/avif';

      } catch (sharpError) {
        console.error('Sharp processing error:', sharpError);
        return NextResponse.json(
          { success: false, error: 'Failed to process image' },
          { status: 500 }
        );
      }
    } else {
      // For videos, save as-is
      finalBuffer = buffer;
      const ext = file.name.split('.').pop();
      filename = `${type}-${Date.now()}.${ext}`;
      contentType = file.type;
    }

    // Upload to Supabase Storage
    const filePath = `users/${user.id}/${filename}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(filePath, finalBuffer, {
        contentType: contentType,
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      return NextResponse.json(
        { success: false, error: 'Failed to upload file to storage' },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      url: publicUrl,
      message: 'File uploaded successfully',
      ...(type === 'photo' && {
        optimization: {
          format: 'AVIF',
          originalSize: file.size,
          optimizedSize: finalBuffer.length,
          compressionRatio: Math.round(((file.size - finalBuffer.length) / file.size) * 100)
        }
      })
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

