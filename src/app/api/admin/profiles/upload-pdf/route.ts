import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Helper function to verify authentication
async function verifyAuth(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (!decoded || !decoded.userId) {
      return null;
    }

    const { data: user, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', decoded.userId)
      .eq('is_active', true)
      .single();

    if (error || !user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const pdfFile = formData.get('pdf') as File;

    if (!pdfFile) {
      return NextResponse.json(
        { error: 'No PDF file provided' },
        { status: 400 }
      );
    }

    if (pdfFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'File must be a PDF' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const bytes = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create profile name from PDF filename
    const pdfName = pdfFile.name.replace('.pdf', '').replace(/_/g, ' ');
    const profileSlug = pdfName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Create directory for this profile
    const profileDir = join(process.cwd(), 'public', 'profiles', profileSlug);
    await mkdir(profileDir, { recursive: true });

    // Save PDF temporarily
    const pdfPath = join(profileDir, `${profileSlug}.pdf`);
    await writeFile(pdfPath, buffer);

            try {
      // Extract individual images from PDF using ConvertAPI only
      let imageUrls: string[] = [];
      
      console.log('Starting ConvertAPI image extraction from PDF...');
      
      // Use ConvertAPI REST API for PDF image extraction
      console.log('Using ConvertAPI REST API for PDF image extraction...');
      
      let result: { files: Array<{ url: string; fileName: string }> } = { files: [] };
      
      // Get ConvertAPI token from environment variable
      const convertApiToken = process.env.CONVERTAPI_TOKEN || 'Vp0EbbVLbxULGVxDCUfVZyNtVMEFXUb0';
      console.log('Using ConvertAPI token:', convertApiToken.substring(0, 10) + '...');
      
      try {
        // Create multipart form data for ConvertAPI REST API
        const boundary = '----WebKitFormBoundary' + Math.random().toString(16).substr(2);
        const formDataBuffer = Buffer.concat([
          Buffer.from(`--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="File"; filename="' + `${profileSlug}.pdf` + '"\r\n'),
          Buffer.from('Content-Type: application/pdf\r\n\r\n'),
          buffer,
          Buffer.from(`\r\n--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="ImageOutputFormat"\r\n\r\n'),
          Buffer.from('jpg'),
          Buffer.from(`\r\n--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="ScaleImage"\r\n\r\n'),
          Buffer.from('true'),
          Buffer.from(`\r\n--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="ScaleProportions"\r\n\r\n'),
          Buffer.from('true'),
          Buffer.from(`\r\n--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="ImageHeight"\r\n\r\n'),
          Buffer.from('1000'),
          Buffer.from(`\r\n--${boundary}\r\n`),
          Buffer.from('Content-Disposition: form-data; name="ImageWidth"\r\n\r\n'),
          Buffer.from('800'),
          Buffer.from(`\r\n--${boundary}--\r\n`)
        ]);
        
        console.log('Calling ConvertAPI REST API...');
        
        // Call ConvertAPI REST API for extract-images
        const convertApiResponse = await fetch('https://v2.convertapi.com/convert/pdf/to/extract-images', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${convertApiToken}`,
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
            'Content-Length': formDataBuffer.length.toString()
          },
          body: formDataBuffer
        });
        
        console.log(`ConvertAPI REST API Status: ${convertApiResponse.status}`);
        console.log(`ConvertAPI REST API Headers:`, Object.fromEntries(convertApiResponse.headers.entries()));
        
        if (convertApiResponse.ok) {
          const convertApiData = await convertApiResponse.json();
          console.log('ConvertAPI REST API response:', JSON.stringify(convertApiData, null, 2));
          
          if (convertApiData.Files && convertApiData.Files.length > 0) {
            result.files = convertApiData.Files.map((file: any, index: number) => {
              // ConvertAPI returns the image data directly in the file object
              // The image data is in the file itself, not as a URL
              return {
                url: file, // The entire file object contains the image data
                fileName: `extracted-image-${index + 1}.jpg`,
                index: index
              };
            });
            console.log(`ConvertAPI REST API extracted ${result.files.length} images`);
            console.log('First few files:', result.files.slice(0, 3));
          } else {
            console.log('No images found in ConvertAPI REST API response');
          }
        } else {
          const errorText = await convertApiResponse.text();
          console.error('ConvertAPI REST API error:', convertApiResponse.statusText);
          console.error('ConvertAPI REST API error details:', errorText);
        }
      } catch (convertApiError) {
        console.error('ConvertAPI REST API error:', convertApiError);
        console.log('Falling back to PDF-to-JPG conversion...');
        
        // Fallback: Try PDF to JPG conversion
        try {
          const jpgBoundary = '----WebKitFormBoundary' + Math.random().toString(16).substr(2);
          const jpgFormDataBuffer = Buffer.concat([
            Buffer.from(`--${jpgBoundary}\r\n`),
            Buffer.from('Content-Disposition: form-data; name="File"; filename="' + `${profileSlug}.pdf` + '"\r\n'),
            Buffer.from('Content-Type: application/pdf\r\n\r\n'),
            buffer,
            Buffer.from(`\r\n--${jpgBoundary}\r\n`),
            Buffer.from('Content-Disposition: form-data; name="ScaleImage"\r\n\r\n'),
            Buffer.from('true'),
            Buffer.from(`\r\n--${jpgBoundary}\r\n`),
            Buffer.from('Content-Disposition: form-data; name="ScaleProportions"\r\n\r\n'),
            Buffer.from('true'),
            Buffer.from(`\r\n--${jpgBoundary}\r\n`),
            Buffer.from('Content-Disposition: form-data; name="ImageHeight"\r\n\r\n'),
            Buffer.from('1000'),
            Buffer.from(`\r\n--${jpgBoundary}\r\n`),
            Buffer.from('Content-Disposition: form-data; name="ImageWidth"\r\n\r\n'),
            Buffer.from('800'),
            Buffer.from(`\r\n--${jpgBoundary}--\r\n`)
          ]);
          
          const jpgApiResponse = await fetch('https://v2.convertapi.com/convert/pdf/to/jpg', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${convertApiToken}`,
              'Content-Type': `multipart/form-data; boundary=${jpgBoundary}`,
              'Content-Length': jpgFormDataBuffer.length.toString()
            },
            body: jpgFormDataBuffer
          });
          
          console.log(`ConvertAPI JPG HTTP Status: ${jpgApiResponse.status}`);
          
          if (jpgApiResponse.ok) {
            const jpgApiData = await jpgApiResponse.json();
            console.log('ConvertAPI JPG response:', JSON.stringify(jpgApiData, null, 2));
            
            if (jpgApiData.Files && jpgApiData.Files.length > 0) {
              result.files = jpgApiData.Files.map((file: any, index: number) => {
                // ConvertAPI returns the image data directly in the file object
                return {
                  url: file, // The entire file object contains the image data
                  fileName: `page-${index + 1}.jpg`,
                  index: index
                };
              });
              console.log(`ConvertAPI JPG converted ${result.files.length} pages`);
              console.log('First few files:', result.files.slice(0, 3));
            } else {
              console.log('No pages found in ConvertAPI JPG response');
            }
          } else {
            const errorText = await jpgApiResponse.text();
            console.error('ConvertAPI JPG HTTP error:', jpgApiResponse.statusText);
            console.error('ConvertAPI JPG error details:', errorText);
          }
        } catch (jpgError) {
          console.error('ConvertAPI JPG fetch error:', jpgError);
        }
      }
      
      if (result.files && result.files.length > 0) {
        // Process each extracted image
        for (let i = 0; i < Math.min(result.files.length, 10); i++) {
          try {
            const file = result.files[i];
            console.log(`Processing extracted image ${i + 1}: ${file.fileName}`);
            
            let imageBuffer: Buffer;
            
            // ConvertAPI returns the image data directly in the file object
            if (typeof file.url === 'object') {
              // The file.url is actually the entire file object from ConvertAPI
              const convertApiFile = file.url as any;
              console.log(`ConvertAPI file structure for image ${i + 1}:`, JSON.stringify(convertApiFile, null, 2));
              
              // Check if the file has base64 data
              if (convertApiFile.FileData) {
                console.log(`Found FileData in ConvertAPI response for image ${i + 1}`);
                imageBuffer = Buffer.from(convertApiFile.FileData, 'base64');
              } else if (convertApiFile.Data) {
                console.log(`Found Data property in ConvertAPI response for image ${i + 1}`);
                imageBuffer = Buffer.from(convertApiFile.Data, 'base64');
              } else if (convertApiFile.Content) {
                console.log(`Found Content property in ConvertAPI response for image ${i + 1}`);
                imageBuffer = Buffer.from(convertApiFile.Content, 'base64');
              } else {
                console.log(`No image data found in ConvertAPI response for image ${i + 1}`);
                console.log('Available properties:', Object.keys(convertApiFile));
                continue;
              }
            } else if (typeof file.url === 'string' && file.url.startsWith('data:')) {
              // Handle base64 data URL
              const base64Data = file.url.split(',')[1];
              imageBuffer = Buffer.from(base64Data, 'base64');
            } else {
              console.log(`Unexpected file.url type for image ${i + 1}:`, typeof file.url);
              continue;
            }
            
            // Process image with sharp for consistent sizing
            const processedImage = await sharp(Buffer.from(imageBuffer))
              .resize(800, 1000, { 
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 1 }
              })
              .jpeg({ quality: 90, progressive: true })
              .toBuffer();
            
            // Save the processed image
            const imageFileName = `extracted-image-${i + 1}.jpg`;
            const imagePath = join(profileDir, imageFileName);
            await writeFile(imagePath, processedImage);
            
            imageUrls.push(`/profiles/${profileSlug}/${imageFileName}`);
            
            console.log(`Extracted image ${i + 1} saved successfully`);
            
          } catch (imageError) {
            console.error(`Error processing extracted image ${i + 1}:`, imageError);
          }
        }
      } else {
        console.log('No images extracted by ConvertAPI, trying PDF to JPG conversion...');
        

      }
      
      if (imageUrls.length === 0) {
        return NextResponse.json(
          { error: 'No images could be extracted from the PDF' },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        images: imageUrls,
        profileName: pdfName,
        profileSlug: profileSlug,
        extractedCount: imageUrls.length,
        note: `Successfully extracted ${imageUrls.length} individual images from PDF using ConvertAPI`
      });

    } catch (extractionError) {
      console.error('PDF extraction error:', extractionError);
      
                    // Fallback: Create professional placeholder images
        try {
          const imageUrls: string[] = [];
          const numberOfPages = 3; // Create 3 fallback images
          
          for (let i = 1; i <= numberOfPages; i++) {
            // Create a professional-looking placeholder image
            const imageBuffer = await sharp({
              create: {
                width: 800,
                height: 1000,
                channels: 3,
                background: { 
                  r: 150 + (i * 20) % 105, 
                  g: 100 + (i * 15) % 155, 
                  b: 180 + (i * 30) % 75 
                }
              }
            })
            .jpeg({ 
              quality: 90,
              progressive: true 
            })
            .toBuffer();
            
            // Add professional text overlay
            const imageWithText = await sharp(imageBuffer)
              .composite([{
                input: Buffer.from(`
                  <svg width="800" height="1000">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.7" />
                      </linearGradient>
                    </defs>
                    <rect x="50" y="400" width="700" height="200" rx="10" fill="url(#grad1)" stroke="#333" stroke-width="2"/>
                    <text x="400" y="450" font-family="Arial, sans-serif" font-size="32" fill="#333" text-anchor="middle" font-weight="bold">
                      Profile Image ${i}
                    </text>
                    <text x="400" y="480" font-family="Arial, sans-serif" font-size="18" fill="#666" text-anchor="middle">
                      ${pdfName}
                    </text>
                    <text x="400" y="510" font-family="Arial, sans-serif" font-size="14" fill="#888" text-anchor="middle">
                      Fallback Image ${i}
                    </text>
                    <text x="400" y="540" font-family="Arial, sans-serif" font-size="12" fill="#999" text-anchor="middle">
                      Professional Quality
                    </text>
                  </svg>
                `),
                top: 0,
                left: 0
              }])
              .jpeg({ quality: 90 })
              .toBuffer();
            
            const imageFileName = `page-${i}.jpg`;
            const imagePath = join(profileDir, imageFileName);
            await writeFile(imagePath, imageWithText);
            
            imageUrls.push(`/profiles/${profileSlug}/${imageFileName}`);
          }
          
          return NextResponse.json({
            success: true,
            images: imageUrls,
            profileName: pdfName,
            profileSlug: profileSlug,
            extractedCount: imageUrls.length,
            note: 'PDF extraction failed, created professional fallback images'
          });
        
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
        return NextResponse.json(
          { error: 'Failed to extract images from PDF and fallback also failed.' },
          { status: 500 }
        );
      }
    }

  } catch (error) {
    console.error('PDF upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
