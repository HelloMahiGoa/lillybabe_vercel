import { join } from 'path';
import { existsSync } from 'fs';
import { rm } from 'fs/promises';

/**
 * Deletes the image folder for a given profile/ad name
 * @param profileName - The name of the profile/ad
 * @param profileSlug - Optional slug for additional cleanup
 */
export async function deleteImageFolder(profileName: string, profileSlug?: string): Promise<void> {
  try {
    // Sanitize profile name for folder name
    const sanitizedProfileName = profileName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '');
    
    const publicDir = join(process.cwd(), 'public');
    const profilesDir = join(publicDir, 'profiles');
    const profileDir = join(profilesDir, sanitizedProfileName);
    
    // Check if folder exists and delete it
    if (existsSync(profileDir)) {
      await rm(profileDir, { recursive: true, force: true });
      console.log(`Successfully deleted profile folder: ${sanitizedProfileName}`);
    }
    
    // Also try to delete folder using slug if provided and different from name
    if (profileSlug && profileSlug !== sanitizedProfileName) {
      const profileDirBySlug = join(profilesDir, profileSlug);
      if (existsSync(profileDirBySlug)) {
        await rm(profileDirBySlug, { recursive: true, force: true });
        console.log(`Successfully deleted profile folder by slug: ${profileSlug}`);
      }
    }
  } catch (error) {
    console.warn('Failed to delete profile folder:', error);
    // Don't throw error - folder deletion failure shouldn't break the main operation
  }
}

/**
 * Extracts profile name from image URLs
 * @param imageUrls - Array of image URLs
 * @returns The profile name if found, null otherwise
 */
export function extractProfileNameFromUrls(imageUrls: string[]): string | null {
  if (!imageUrls || imageUrls.length === 0) return null;
  
  // Look for URLs in the format /profiles/{profile_name}/filename
  const profileUrlPattern = /\/profiles\/([^\/]+)\//;
  
  for (const url of imageUrls) {
    const match = url.match(profileUrlPattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}
