import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { PDFProcessor } from '@/lib/admin/pdf-processor';

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftcvhnjlexlmhrhkwrfi.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Y3ZobmpsZXhsbWhyaGt3cmZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTkyMjk5NiwiZXhwIjoyMDcxNDk4OTk2fQ.JU2s9F2esw1CJfytJB3y973JrIhDaaHo7w1RIjNUyVA'
);

export async function POST(request: NextRequest) {
  try {
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
      // Process PDF in background (simplified for now)
      const mockProfileData = {
        name: `Profile_${Date.now()}`,
        age: Math.floor(Math.random() * 20) + 20,
        location: 'Chennai',
        category: 'Model',
        pricing: {
          one_shot: 5000,
          two_shot: 8000,
          three_shot: 12000,
          full_night: 25000
        }
      };

      // Update upload record with processed data
      const { error: updateError } = await supabase
        .from('pdf_uploads')
        .update({
          status: 'completed',
          processed_at: new Date().toISOString(),
          extracted_data: {
            profileData: mockProfileData,
            imageUrls: [],
            text: 'Mock extracted text from PDF processing...',
            metadata: {
              pageCount: 1,
              fileSize: file.size
            }
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
          profileData: mockProfileData,
          imageUrls: [],
          metadata: {
            pageCount: 1,
            fileSize: file.size
          },
          extractedText: 'Mock extracted text from PDF processing...'
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
