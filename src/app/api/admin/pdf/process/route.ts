import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function POST(request: NextRequest) {
  try {
    // Check if we're in build mode
    if (process.env.NODE_ENV === 'production' && !request) {
      return NextResponse.json({ error: 'API not available during build' }, { status: 503 });
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Invalid file type. Only PDF files are allowed.' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create initial upload record
    const { data: uploadRecord, error: uploadError } = await supabase
      .from('pdf_uploads')
      .insert({
        filename: file.name,
        file_path: `temp_${Date.now()}.pdf`,
        file_size: file.size,
        status: 'processing'
      })
      .select()
      .single();

    if (uploadError) {
      console.error('Upload record error:', uploadError);
      return NextResponse.json({ error: 'Failed to create upload record' }, { status: 500 });
    }

    try {
      // Upload PDF to storage first
      const pdfFileName = `pdfs/${Date.now()}_${file.name}`;
      const { data: pdfUploadData, error: pdfUploadError } = await supabase.storage
        .from('admin-uploads')
        .upload(pdfFileName, buffer, {
          contentType: 'application/pdf',
          cacheControl: '3600'
        });

      if (pdfUploadError) {
        console.error('PDF upload error:', pdfUploadError);
        throw new Error('Failed to upload PDF to storage');
      }

      // Import PDFProcessor dynamically to avoid build-time issues
      const { PDFProcessor } = await import('@/lib/admin/pdf-processor');
      const { text, images, profileData } = await PDFProcessor.processPDF(buffer);

      // Upload extracted images to storage
      const imageUrls: string[] = [];
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        
        // Optimize image
        const optimizedImage = await PDFProcessor.optimizeImage(image.buffer);
        
        // Generate thumbnail
        const thumbnail = await PDFProcessor.generateThumbnail(image.buffer);
        
        // Upload optimized image
        const imageFileName = `images/${Date.now()}_${i}_optimized.jpg`;
        const { data: imageUploadData, error: imageUploadError } = await supabase.storage
          .from('admin-uploads')
          .upload(imageFileName, optimizedImage, {
            contentType: 'image/jpeg',
            cacheControl: '3600'
          });

        if (imageUploadError) {
          console.error('Image upload error:', imageUploadError);
          continue;
        }

        // Get image URL
        const { data: imageUrlData } = supabase.storage
          .from('admin-uploads')
          .getPublicUrl(imageFileName);

        imageUrls.push(imageUrlData.publicUrl);
      }

      // Get PDF metadata
      const metadata = await PDFProcessor.getPDFMetadata(buffer);

      // Update upload record with processed data
      const { error: updateError } = await supabase
        .from('pdf_uploads')
        .update({
          status: 'completed',
          processed_at: new Date().toISOString(),
          file_path: pdfFileName,
          extracted_data: {
            profileData,
            imageUrls,
            text,
            metadata
          }
        })
        .eq('id', uploadRecord.id);

      if (updateError) {
        console.error('Update error:', updateError);
      }

      // Return processed data
      return NextResponse.json({
        success: true,
        data: {
          uploadId: uploadRecord.id,
          profileData,
          imageUrls,
          metadata,
          extractedText: text
        }
      });

    } catch (processingError) {
      console.error('PDF processing error:', processingError);
      
      // Update upload record with error
      await supabase
        .from('pdf_uploads')
        .update({
          status: 'error',
          error_message: processingError instanceof Error ? processingError.message : 'Unknown error'
        })
        .eq('id', uploadRecord.id);

      return NextResponse.json({ error: 'PDF processing failed' }, { status: 500 });
    }

  } catch (error) {
    console.error('PDF upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get upload ID from query params
    const { searchParams } = new URL(request.url);
    const uploadId = searchParams.get('uploadId');

    if (!uploadId) {
      return NextResponse.json({ error: 'Upload ID required' }, { status: 400 });
    }

    // Get upload record
    const { data: uploadRecord, error: uploadError } = await supabase
      .from('pdf_uploads')
      .select('*')
      .eq('id', uploadId)
      .single();

    if (uploadError || !uploadRecord) {
      return NextResponse.json({ error: 'Upload not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: uploadRecord
    });

  } catch (error) {
    console.error('Get upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
