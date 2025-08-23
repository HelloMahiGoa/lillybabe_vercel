# Supabase Storage Setup

## Required Storage Buckets

### 1. admin-uploads
- Purpose: Store PDF files and extracted images
- Public: false
- File size limit: 10MB
- Allowed MIME types: application/pdf, image/*

### 2. profile-images
- Purpose: Store profile images
- Public: true
- File size limit: 5MB
- Allowed MIME types: image/*

## Storage Policies

### admin-uploads bucket policies:
- SELECT: Admin users only
- INSERT: Admin users only
- UPDATE: Admin users only
- DELETE: Admin users only

### profile-images bucket policies:
- SELECT: Public (for website display)
- INSERT: Admin users only
- UPDATE: Admin users only
- DELETE: Admin users only

## Setup Commands (run in Supabase SQL editor):

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('admin-uploads', 'admin-uploads', false, 10485760, ARRAY['application/pdf', 'image/*']),
  ('profile-images', 'profile-images', true, 5242880, ARRAY['image/*']);

-- Admin uploads policies
CREATE POLICY "Admins can manage admin uploads" ON storage.objects
  FOR ALL USING (
    bucket_id = 'admin-uploads' AND
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- Profile images policies
CREATE POLICY "Public can view profile images" ON storage.objects
  FOR SELECT USING (bucket_id = 'profile-images');

CREATE POLICY "Admins can manage profile images" ON storage.objects
  FOR ALL USING (
    bucket_id = 'profile-images' AND
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );
