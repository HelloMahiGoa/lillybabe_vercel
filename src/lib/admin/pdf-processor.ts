import pdfParse from 'pdf-parse';
import sharp from 'sharp';

export interface ExtractedImage {
  buffer: Buffer;
  pageNumber: number;
  width: number;
  height: number;
}

export interface ProfileData {
  name: string;
  age: number;
  location: string;
  nationality?: string;
  height?: string;
  bodyType?: string;
  hairColor?: string;
  eyeColor?: string;
  languages?: string[];
  services?: string[];
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  rating: number;
}

export class PDFProcessor {
  /**
   * Extract text content from PDF
   */
  static async extractText(pdfBuffer: Buffer): Promise<string> {
    try {
      const data = await pdfParse(pdfBuffer);
      return data.text;
    } catch (error) {
      throw new Error(`Failed to extract text from PDF: ${error}`);
    }
  }

  /**
   * Extract images from PDF pages
   */
  static async extractImages(pdfBuffer: Buffer): Promise<ExtractedImage[]> {
    try {
      // This is a simplified version. In production, you'd use a library like pdf2pic
      // or pdf-lib to extract images from PDF pages
      const images: ExtractedImage[] = [];
      
      // For now, we'll simulate image extraction
      // In a real implementation, you would:
      // 1. Use pdf-lib to get page count
      // 2. Convert each page to image using pdf2pic or similar
      // 3. Process each image with sharp
      
      return images;
    } catch (error) {
      throw new Error(`Failed to extract images from PDF: ${error}`);
    }
  }

  /**
   * Parse profile data from extracted text
   */
  static parseProfileData(text: string): ProfileData {
    const patterns = {
      name: /Name:\s*([^\n\r]+)/i,
      age: /Age:\s*(\d+)/i,
      location: /Location:\s*([^\n\r]+)/i,
      nationality: /Nationality:\s*([^\n\r]+)/i,
      height: /Height:\s*([^\n\r]+)/i,
      bodyType: /Body\s*Type:\s*([^\n\r]+)/i,
      hairColor: /Hair\s*Color:\s*([^\n\r]+)/i,
      eyeColor: /Eye\s*Color:\s*([^\n\r]+)/i,
      languages: /Languages:\s*([^\n\r]+)/i,
      services: /Services:\s*([^\n\r]+)/i,
      availability: /Availability:\s*([^\n\r]+)/i,
      rating: /Rating:\s*([\d.]+)/i,
      pricing: {
        '1 Shot': /1\s*Shot[:\s]*₹?([\d,]+)/i,
        '2 Shots': /2\s*Shots[:\s]*₹?([\d,]+)/i,
        '3 Shots': /3\s*Shots[:\s]*₹?([\d,]+)/i,
        'Full Night': /Full\s*Night[:\s]*₹?([\d,]+)/i
      }
    };

    const profileData: Partial<ProfileData> = {};

    // Extract basic information
    Object.entries(patterns).forEach(([key, pattern]) => {
      if (key === 'pricing') return; // Handle pricing separately
      
      const match = text.match(pattern as RegExp);
      if (match) {
        const value = match[1].trim();
        
        switch (key) {
          case 'age':
            profileData[key] = parseInt(value);
            break;
          case 'rating':
            profileData[key] = parseFloat(value);
            break;
          case 'languages':
            profileData[key] = value.split(',').map(lang => lang.trim());
            break;
          case 'services':
            profileData[key] = value.split(',').map(service => service.trim());
            break;
          default:
            (profileData as any)[key] = value;
        }
      }
    });

    // Extract pricing information
    const pricing: any = {};
    Object.entries(patterns.pricing).forEach(([type, pattern]) => {
      const match = text.match(pattern);
      if (match) {
        pricing[type] = `₹${match[1].replace(/,/g, '')}`;
      }
    });

    // Set default pricing if not found
    if (Object.keys(pricing).length === 0) {
      pricing['1 Shot'] = '₹5,000';
      pricing['2 Shots'] = '₹8,000';
      pricing['3 Shots'] = '₹12,000';
      pricing['Full Night'] = '₹25,000';
    }

    // Set defaults for missing fields
    return {
      name: profileData.name || 'Unknown',
      age: profileData.age || 25,
      location: profileData.location || 'Chennai',
      nationality: profileData.nationality,
      height: profileData.height,
      bodyType: profileData.bodyType,
      hairColor: profileData.hairColor,
      eyeColor: profileData.eyeColor,
      languages: profileData.languages || ['English'],
      services: profileData.services || ['Escort'],
      pricing,
      availability: profileData.availability || 'Available Now',
      rating: profileData.rating || 4.5
    };
  }

  /**
   * Optimize extracted images
   */
  static async optimizeImage(imageBuffer: Buffer): Promise<Buffer> {
    try {
      return await sharp(imageBuffer)
        .resize(800, 1200, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toBuffer();
    } catch (error) {
      throw new Error(`Failed to optimize image: ${error}`);
    }
  }

  /**
   * Generate thumbnails for images
   */
  static async generateThumbnail(imageBuffer: Buffer): Promise<Buffer> {
    try {
      return await sharp(imageBuffer)
        .resize(200, 300, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toBuffer();
    } catch (error) {
      throw new Error(`Failed to generate thumbnail: ${error}`);
    }
  }

  /**
   * Process PDF and extract all data
   */
  static async processPDF(pdfBuffer: Buffer): Promise<{
    text: string;
    images: ExtractedImage[];
    profileData: ProfileData;
  }> {
    try {
      // Extract text
      const text = await this.extractText(pdfBuffer);
      
      // Extract images
      const images = await this.extractImages(pdfBuffer);
      
      // Parse profile data
      const profileData = this.parseProfileData(text);
      
      return {
        text,
        images,
        profileData
      };
    } catch (error) {
      throw new Error(`Failed to process PDF: ${error}`);
    }
  }

  /**
   * Validate PDF file
   */
  static validatePDF(pdfBuffer: Buffer): boolean {
    // Check if it's a valid PDF by looking for PDF signature
    const pdfSignature = pdfBuffer.toString('ascii', 0, 4);
    return pdfSignature === '%PDF';
  }

  /**
   * Get PDF metadata
   */
  static async getPDFMetadata(pdfBuffer: Buffer): Promise<{
    pageCount: number;
    fileSize: number;
    title?: string;
    author?: string;
  }> {
    try {
      const data = await pdfParse(pdfBuffer);
      return {
        pageCount: data.numpages,
        fileSize: pdfBuffer.length,
        title: data.info?.Title,
        author: data.info?.Author
      };
    } catch (error) {
      throw new Error(`Failed to get PDF metadata: ${error}`);
    }
  }
}
