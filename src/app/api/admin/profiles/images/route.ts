import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

// Image optimization function
async function optimizeImage(buffer: Buffer, format: 'webp' | 'avif' = 'webp'): Promise<Buffer> {
  try {
    const pipeline = sharp(buffer)
      .resize(800, 800, { 
        fit: 'inside', 
        withoutEnlargement: true 
      });

    if (format === 'webp') {
      return await pipeline.webp({ quality: 85 }).toBuffer();
    } else {
      return await pipeline.avif({ quality: 80 }).toBuffer();
    }
  } catch (error) {
    console.error('Image optimization error:', error);
    // Return original buffer if optimization fails
    return buffer;
  }
}

// Generate thumbnail
async function generateThumbnail(buffer: Buffer): Promise<Buffer> {
  try {
    return await sharp(buffer)
      .resize(300, 300, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toBuffer();
  } catch (error) {
    console.error('Thumbnail generation error:', error);
    return buffer;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const profileId = formData.get('profileId') as string;
    const images = formData.getAll('images') as File[];

    if (!profileId) {
      return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
    }

    if (!images || images.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 });
    }

    // Validate profile exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', profileId)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    const uploadedImages = [];
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      
      // Validate file type
      if (!image.type.startsWith('image/')) {
        continue; // Skip non-image files
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (image.size > maxSize) {
        continue; // Skip large files
      }

      try {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Optimize image to WebP
        const optimizedBuffer = await optimizeImage(buffer, 'webp');
        
        // Generate thumbnail
        const thumbnailBuffer = await generateThumbnail(buffer);

        // Upload optimized image
        const timestamp = Date.now();
        const imageFileName = `profiles/${profileId}/${timestamp}_${i}.webp`;
        const thumbnailFileName = `profiles/${profileId}/thumbnails/${timestamp}_${i}_thumb.webp`;

        // Upload main image
        const { data: imageUploadData, error: imageUploadError } = await supabase.storage
          .from('profile-images')
          .upload(imageFileName, optimizedBuffer, {
            contentType: 'image/webp',
            cacheControl: '3600'
          });

        if (imageUploadError) {
          console.error('Image upload error:', imageUploadError);
          continue;
        }

        // Upload thumbnail
        const { data: thumbnailUploadData, error: thumbnailUploadError } = await supabase.storage
          .from('profile-images')
          .upload(thumbnailFileName, thumbnailBuffer, {
            contentType: 'image/webp',
            cacheControl: '3600'
          });

        if (thumbnailUploadError) {
          console.error('Thumbnail upload error:', thumbnailUploadError);
        }

        // Get public URLs
        const { data: imageUrlData } = supabase.storage
          .from('profile-images')
          .getPublicUrl(imageFileName);

        const { data: thumbnailUrlData } = supabase.storage
          .from('profile-images')
          .getPublicUrl(thumbnailFileName);

        // Determine if this should be the primary image
        const isPrimary = formData.get('isPrimary') === 'true' && i === 0;

        // If this is set as primary, update other images to not be primary
        if (isPrimary) {
          await supabase
            .from('profile_images')
            .update({ is_primary: false })
            .eq('profile_id', profileId);
        }

        // Insert image record
        const { data: imageRecord, error: imageRecordError } = await supabase
          .from('profile_images')
          .insert({
            profile_id: parseInt(profileId),
            image_url: imageUrlData.publicUrl,
            thumbnail_url: thumbnailUrlData.publicUrl,
            image_order: i,
            is_primary: isPrimary
          })
          .select()
          .single();

        if (imageRecordError) {
          console.error('Image record error:', imageRecordError);
          continue;
        }

        uploadedImages.push({
          id: imageRecord.id,
          url: imageUrlData.publicUrl,
          thumbnailUrl: thumbnailUrlData.publicUrl,
          isPrimary: isPrimary,
          order: i
        });

      } catch (error) {
        console.error('Image processing error:', error);
        continue;
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        uploadedImages,
        count: uploadedImages.length
      }
    });

  } catch (error) {
    console.error('Image upload API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const profileId = searchParams.get('profileId');

    if (!profileId) {
      return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
    }

    // Get all images for profile
    const { data: images, error } = await supabase
      .from('profile_images')
      .select('*')
      .eq('profile_id', profileId)
      .order('image_order');

    if (error) {
      console.error('Get images error:', error);
      return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: images
    });

  } catch (error) {
    console.error('Get images API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get('imageId');

    if (!imageId) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    // Get image record first
    const { data: imageRecord, error: getError } = await supabase
      .from('profile_images')
      .select('*')
      .eq('id', imageId)
      .single();

    if (getError || !imageRecord) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Delete from storage
    const imagePath = imageRecord.image_url.split('/').pop();
    const thumbnailPath = imageRecord.thumbnail_url?.split('/').pop();

    if (imagePath) {
      await supabase.storage
        .from('profile-images')
        .remove([`profiles/${imageRecord.profile_id}/${imagePath}`]);
    }

    if (thumbnailPath) {
      await supabase.storage
        .from('profile-images')
        .remove([`profiles/${imageRecord.profile_id}/thumbnails/${thumbnailPath}`]);
    }

    // Delete from database
    const { error: deleteError } = await supabase
      .from('profile_images')
      .delete()
      .eq('id', imageId);

    if (deleteError) {
      console.error('Delete image error:', deleteError);
      return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    });

  } catch (error) {
    console.error('Delete image API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
