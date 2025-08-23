import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { PDFProcessor } from '@/lib/admin/pdf-processor';

export async function POST(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Check authentication
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    if (authError || !session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check admin role
    const { data: profile } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
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

    // Validate PDF
    if (!PDFProcessor.validatePDF(buffer)) {
      return NextResponse.json({ error: 'Invalid PDF file' }, { status: 400 });
    }

    // Get PDF metadata
    const metadata = await PDFProcessor.getPDFMetadata(buffer);

    // Process PDF
    const { text, images, profileData } = await PDFProcessor.processPDF(buffer);

    // Upload original PDF to storage
    const pdfFileName = `pdfs/${Date.now()}_${file.name}`;
    const { data: pdfUploadData, error: pdfUploadError } = await supabase.storage
      .from('admin-uploads')
      .upload(pdfFileName, buffer, {
        contentType: 'application/pdf',
        cacheControl: '3600'
      });

    if (pdfUploadError) {
      console.error('PDF upload error:', pdfUploadError);
      return NextResponse.json({ error: 'Failed to upload PDF' }, { status: 500 });
    }

    // Get PDF URL
    const { data: pdfUrlData } = supabase.storage
      .from('admin-uploads')
      .getPublicUrl(pdfFileName);

    // Process and upload images
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

    // Create PDF upload record
    const { data: uploadRecord, error: uploadError } = await supabase
      .from('pdf_uploads')
      .insert({
        filename: file.name,
        file_path: pdfUrlData.publicUrl,
        file_size: file.size,
        status: 'completed',
        extracted_data: {
          text,
          profileData,
          imageUrls,
          metadata
        }
      })
      .select()
      .single();

    if (uploadError) {
      console.error('Upload record error:', uploadError);
      return NextResponse.json({ error: 'Failed to save upload record' }, { status: 500 });
    }

    // Return processed data
    return NextResponse.json({
      success: true,
      data: {
        uploadId: uploadRecord.id,
        profileData,
        imageUrls,
        metadata,
        extractedText: text.substring(0, 500) + '...' // Return first 500 characters
      }
    });

  } catch (error) {
    console.error('PDF processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Check authentication
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    if (authError || !session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
