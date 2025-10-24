// Image optimization utilities

import sharp from 'sharp';

// Maximum dimensions for different image types
const IMAGE_LIMITS = {
  main: {
    width: 1200,
    height: 1600,
    quality: 85
  },
  gallery: {
    width: 1000,
    height: 1200,
    quality: 80
  },
  thumbnail: {
    width: 300,
    height: 300,
    quality: 75
  }
};

/**
 * Optimize an image buffer for the specified type
 */
export async function optimizeImage(
  buffer: Buffer,
  type: 'main' | 'gallery' | 'thumbnail',
  format: 'avif' | 'webp' | 'jpeg' = 'avif'
): Promise<Buffer> {
  try {
    const limits = IMAGE_LIMITS[type];
    
    // Get image metadata
    const metadata = await sharp(buffer).metadata();
    
    // Configure sharp processor
    let processor = sharp(buffer);
    
    // Resize if image is larger than limits (maintaining aspect ratio)
    if (metadata.width && metadata.height) {
      if (metadata.width > limits.width || metadata.height > limits.height) {
        processor = processor.resize({
          width: limits.width,
          height: limits.height,
          fit: 'inside',
          withoutEnlargement: true
        });
      }
    }
    
    // Convert to the appropriate format
    switch (format) {
      case 'avif':
        processor = processor.avif({ quality: limits.quality });
        break;
      case 'webp':
        processor = processor.webp({ quality: limits.quality });
        break;
      default:
        processor = processor.jpeg({ quality: limits.quality, mozjpeg: true });
        break;
    }
    
    // Process and return the buffer
    return await processor.toBuffer();
  } catch (error) {
    console.error('Image optimization error:', error);
    // Return the original buffer if optimization fails
    return buffer;
  }
}

/**
 * Validate an image buffer
 */
export async function validateImage(buffer: Buffer): Promise<{
  valid: boolean;
  reason?: string;
  metadata?: sharp.Metadata;
}> {
  try {
    // Get image metadata
    const metadata = await sharp(buffer).metadata();
    
    // Check if it's a valid image format
    const validFormats = ['jpeg', 'jpg', 'png', 'webp', 'avif'];
    if (!metadata.format || !validFormats.includes(metadata.format.toLowerCase())) {
      return {
        valid: false,
        reason: `Invalid image format: ${metadata.format || 'unknown'}. Allowed formats: JPEG, PNG, WebP, AVIF`
      };
    }
    
    // Check image dimensions
    if (!metadata.width || !metadata.height) {
      return {
        valid: false,
        reason: 'Unable to determine image dimensions'
      };
    }
    
    // Check minimum dimensions
    if (metadata.width < 200 || metadata.height < 200) {
      return {
        valid: false,
        reason: `Image too small: ${metadata.width}x${metadata.height}. Minimum size: 200x200`
      };
    }
    
    // Check maximum dimensions
    if (metadata.width > 5000 || metadata.height > 5000) {
      return {
        valid: false,
        reason: `Image too large: ${metadata.width}x${metadata.height}. Maximum size: 5000x5000`
      };
    }
    
    // Check file size in metadata
    if (metadata.size && metadata.size > 10 * 1024 * 1024) { // 10MB
      return {
        valid: false,
        reason: `Image file too large: ${Math.round(metadata.size / (1024 * 1024))}MB. Maximum size: 10MB`
      };
    }
    
    return {
      valid: true,
      metadata
    };
  } catch (error) {
    console.error('Image validation error:', error);
    return {
      valid: false,
      reason: error instanceof Error ? error.message : 'Unknown error validating image'
    };
  }
}
