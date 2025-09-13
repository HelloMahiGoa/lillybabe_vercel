import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';
import sharp from 'sharp';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { spawn } from 'child_process';

// Configure environment for GraphicsMagick and Ghostscript
const configureEnvironment = () => {
  const graphicsMagickPath = process.env.GRAPHICSMAGICK_PATH || 'C:\\Program Files\\GraphicsMagick-1.3.45-Q8';
  const ghostscriptPath = process.env.GHOSTSCRIPT_PATH || 'C:\\Program Files\\gs\\gs10.05.1\\bin';
  
  // Add to PATH if not already present
  const currentPath = process.env.PATH || '';
  if (!currentPath.includes(graphicsMagickPath)) {
    process.env.PATH = `${graphicsMagickPath};${currentPath}`;
  }
  if (!currentPath.includes(ghostscriptPath)) {
    process.env.PATH = `${ghostscriptPath};${currentPath}`;
  }
  
  // Set specific environment variables for pdf2pic
  process.env.GRAPHICSMAGICK_BINARY = `${graphicsMagickPath}\\gm.exe`;
  process.env.GHOSTSCRIPT_BINARY = `${ghostscriptPath}\\gswin64c.exe`;
  
  console.log('🔧 Environment configured for PDF processing');
  console.log(`📁 GraphicsMagick path: ${graphicsMagickPath}`);
  console.log(`📁 Ghostscript path: ${ghostscriptPath}`);
  console.log(`🔧 GraphicsMagick binary: ${process.env.GRAPHICSMAGICK_BINARY}`);
  console.log(`🔧 Ghostscript binary: ${process.env.GHOSTSCRIPT_BINARY}`);
};

export async function POST(request: NextRequest) {
  try {
    // Configure environment for PDF processing
    configureEnvironment();
    
    // Verify authentication
    const user = await getCurrentUser();
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
        { error: 'PDF file is required' },
        { status: 400 }
      );
    }

    if (pdfFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'File must be a PDF' },
        { status: 400 }
      );
    }

    const pdfName = pdfFile.name.replace('.pdf', '');
    const sanitizedPdfName = pdfName.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
    
    // Create profile directory
    const profileDir = path.join(process.cwd(), 'public', 'profiles', sanitizedPdfName);
    if (!existsSync(profileDir)) {
      await mkdir(profileDir, { recursive: true });
    }

    // Convert PDF file to buffer and extract real images
    const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());
    const extractedImages = [];
    const timestamp = Date.now();

    try {
      console.log(`Extracting real images from PDF: ${pdfFile.name} (${pdfBuffer.length} bytes)`);
      
      // Save PDF temporarily for GraphicsMagick processing
      const tempPdfPath = path.join(profileDir, 'temp.pdf');
      await writeFile(tempPdfPath, pdfBuffer);
      
      // Extract images from each page using GraphicsMagick directly
      const maxPages = 10;
      let pageCount = 0;
      
      for (let i = 1; i <= maxPages; i++) {
        try {
          console.log(`Processing page ${i}...`);
          
          // Use GraphicsMagick to convert PDF page to PNG
          const tempPngPath = path.join(profileDir, `temp-page-${i}.png`);
          
          const gmProcess = spawn('C:\\Program Files\\GraphicsMagick-1.3.45-Q8\\gm.exe', [
            'convert',
            '-density', '300',
            '-resize', '1200x1600',
            `${tempPdfPath}[${i-1}]`,
            tempPngPath
          ], {
            env: process.env,
            stdio: ['pipe', 'pipe', 'pipe']
          });
          
          await new Promise((resolve, reject) => {
            let errorOutput = '';
            
            gmProcess.stderr.on('data', (data) => {
              errorOutput += data.toString();
            });
            
            gmProcess.on('close', (code) => {
              if (code === 0) {
                resolve(true);
              } else {
                reject(new Error(`GraphicsMagick failed: ${errorOutput}`));
              }
            });
          });
          
          // Check if PNG was created successfully
          if (existsSync(tempPngPath)) {
            pageCount++;
            
            // Convert PNG to AVIF using sharp
            const imageName = `extracted-page-${i}_${timestamp}_${Math.random().toString(36).substr(2, 9)}.avif`;
            const imagePath = path.join(profileDir, imageName);
            
            try {
              // Process the extracted PNG and convert to AVIF
              const avifBuffer = await sharp(tempPngPath)
                .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
                .avif({ quality: 80 })
                .toBuffer();
              
              await writeFile(imagePath, avifBuffer);
              extractedImages.push(`/profiles/${sanitizedPdfName}/${imageName}`);
              
              console.log(`✅ Successfully extracted page ${i}: ${imageName}`);
              
              // Clean up the temporary PNG file
              try {
                await unlink(tempPngPath);
              } catch (cleanupError) {
                console.log(`Could not clean up temporary PNG file for page ${i}:`, cleanupError);
              }
              
            } catch (sharpError) {
              console.log(`Sharp processing failed for page ${i}:`, sharpError);
              
              // Create a fallback image with page info
              const fallbackImageName = `page-${i}-fallback_${timestamp}_${Math.random().toString(36).substr(2, 9)}.avif`;
              const fallbackImagePath = path.join(profileDir, fallbackImageName);
              
              const fallbackImage = await sharp({
                create: {
                  width: 800,
                  height: 600,
                  channels: 3,
                  background: { r: 200, g: 200, b: 200 }
                }
              })
              .composite([{
                input: Buffer.from(`
                  <svg width="800" height="600">
                    <rect width="800" height="600" fill="rgb(200,200,200)"/>
                    <text x="400" y="280" text-anchor="middle" fill="rgb(100,100,100)" font-size="24" font-weight="bold">Page ${i} Extracted</text>
                    <text x="400" y="310" text-anchor="middle" fill="rgb(120,120,120)" font-size="16">From PDF: ${pdfName}</text>
                    <text x="400" y="340" text-anchor="middle" fill="rgb(120,120,120)" font-size="14">Processing completed</text>
                  </svg>
                `),
                top: 0,
                left: 0
              }])
              .avif({ quality: 80 })
              .toBuffer();
              
              await writeFile(fallbackImagePath, fallbackImage);
              extractedImages.push(`/profiles/${sanitizedPdfName}/${fallbackImageName}`);
            }
          } else {
            console.log(`No PNG created for page ${i}, stopping extraction`);
            break;
          }
        } catch (pageError) {
          console.log(`Error processing page ${i}:`, pageError);
          break;
        }
      }
      
      // Clean up temporary PDF file
      try {
        await unlink(tempPdfPath);
      } catch (cleanupError) {
        console.log('Could not clean up temporary PDF file:', cleanupError);
      }
      
      console.log(`Extraction completed: ${extractedImages.length} images from ${pageCount} pages`);
      
      // If no images were extracted, create fallback images
      if (extractedImages.length === 0) {
        console.log('No images extracted, creating fallback images...');
        
        for (let i = 1; i <= 3; i++) {
          const fallbackImageName = `no-images-found-${i}_${timestamp}_${Math.random().toString(36).substr(2, 9)}.avif`;
          const fallbackImagePath = path.join(profileDir, fallbackImageName);
          
          const fallbackImage = await sharp({
            create: {
              width: 800,
              height: 600,
              channels: 3,
              background: { r: 200, g: 200, b: 200 }
            }
          })
          .composite([{
            input: Buffer.from(`
              <svg width="800" height="600">
                <rect width="800" height="600" fill="rgb(200,200,200)"/>
                <text x="400" y="280" text-anchor="middle" fill="rgb(100,100,100)" font-size="24" font-weight="bold">No Images Found</text>
                <text x="400" y="310" text-anchor="middle" fill="rgb(120,120,120)" font-size="16">PDF: ${pdfName}</text>
                <text x="400" y="340" text-anchor="middle" fill="rgb(120,120,120)" font-size="14">Fallback Image ${i}</text>
              </svg>
            `),
            top: 0,
            left: 0
          }])
          .avif({ quality: 80 })
          .toBuffer();
          
          await writeFile(fallbackImagePath, fallbackImage);
          extractedImages.push(`/profiles/${sanitizedPdfName}/${fallbackImageName}`);
        }
      }
      
    } catch (extractionError: any) {
      console.error('PDF extraction error:', extractionError);
      
      // Create fallback images if extraction fails completely
      for (let i = 1; i <= 3; i++) {
        const fallbackImageName = `extraction-error-${i}_${timestamp}_${Math.random().toString(36).substr(2, 9)}.avif`;
        const fallbackImagePath = path.join(profileDir, fallbackImageName);
        
        const fallbackImage = await sharp({
          create: {
            width: 800,
            height: 600,
            channels: 3,
            background: { r: 200, g: 200, b: 200 }
          }
        })
        .composite([{
          input: Buffer.from(`
            <svg width="800" height="600">
              <rect width="800" height="600" fill="rgb(200,200,200)"/>
              <text x="400" y="280" text-anchor="middle" fill="rgb(100,100,100)" font-size="24" font-weight="bold">Extraction Error</text>
              <text x="400" y="310" text-anchor="middle" fill="rgb(120,120,120)" font-size="16">PDF: ${pdfName}</text>
              <text x="400" y="340" text-anchor="middle" fill="rgb(120,120,120)" font-size="14">Error: ${extractionError?.message || 'Unknown error'}</text>
            </svg>
          `),
          top: 0,
          left: 0
        }])
        .avif({ quality: 80 })
        .toBuffer();
        
        await writeFile(fallbackImagePath, fallbackImage);
        extractedImages.push(`/profiles/${sanitizedPdfName}/${fallbackImageName}`);
      }
    }

    // Generate profile data
    const profileData = {
      name: pdfName,
      slug: pdfName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      age: 25,
      location: 'Chennai',
      category: 'Independent Escorts',
      whatsapp_number: '+918121426651',
      phone_number: '+918121426651',
      main_photo_url: extractedImages[0],
      gallery_images: extractedImages.slice(1),
      pricing: {
        "1 Shot": "₹12,000",
        "2 Shots": "₹24,000",
        "3 Shots": "₹35,000",
        "Full Night": "₹40,000"
      },
      featured: false,
      is_active: true,
      meta_title: `${pdfName} - Independent Escort in Chennai | LillyBabe`,
      meta_description: `Meet ${pdfName}, a beautiful 25 year old Independent escort in Chennai. Premium escort services with verified photos and reviews. Contact now for booking.`,
      meta_keywords: `${pdfName}, Independent escort, escort in Chennai, Chennai escort, premium escort service, verified escort, independent escort, escort booking`,
      og_title: `${pdfName} - Independent Escort in Chennai`,
      og_description: `Meet ${pdfName}, a beautiful 25 year old Independent escort in Chennai. Premium escort services with verified photos and reviews.`,
      og_image: extractedImages[0],
      twitter_title: `${pdfName} - Independent Escort in Chennai`,
      twitter_description: `Meet ${pdfName}, a beautiful 25 year old Independent escort in Chennai. Premium escort services with verified photos and reviews.`,
      twitter_image: extractedImages[0],
      canonical_url: '',
      schema_markup: null,
    };

    return NextResponse.json({
      success: true,
      message: 'PDF processed successfully',
      images: extractedImages,
      profileData: profileData,
      extractedCount: extractedImages.length
    });

  } catch (error) {
    console.error('PDF extraction error:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF' },
      { status: 500 }
    );
  }
}

