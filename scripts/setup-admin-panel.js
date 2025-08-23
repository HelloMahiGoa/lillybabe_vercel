#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up LillyBabe Admin Panel...\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.');
  process.exit(1);
}

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully!\n');

  // Create environment file template
  console.log('🔧 Creating environment file template...');
  const envTemplate = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Admin Panel Configuration
ADMIN_EMAIL=admin@lillybabe.com
ADMIN_PASSWORD=luQman786!@#$%

# File Upload Configuration
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf
`;

  if (!fs.existsSync('.env.local')) {
    fs.writeFileSync('.env.local', envTemplate);
    console.log('✅ .env.local template created!');
    console.log('⚠️  Please update .env.local with your actual Supabase credentials.\n');
  } else {
    console.log('ℹ️  .env.local already exists.\n');
  }

  // Create database schema file
  console.log('🗄️  Creating database schema...');
  const schemaSQL = `-- Admin Panel Database Schema

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  location VARCHAR(100) NOT NULL,
  services TEXT[],
  pricing JSONB NOT NULL,
  availability VARCHAR(50),
  response_rate INTEGER,
  rating DECIMAL(3,2) DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Profile Images Table
CREATE TABLE IF NOT EXISTS profile_images (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  image_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PDF Uploads Table
CREATE TABLE IF NOT EXISTS pdf_uploads (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  extracted_data JSONB,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_uploads ENABLE ROW LEVEL SECURITY;

-- Admin Users RLS Policies
CREATE POLICY "Admin users can view their own data" ON admin_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admin users can update their own data" ON admin_users
  FOR UPDATE USING (auth.uid() = id);

-- Profiles RLS Policies (Admin only)
CREATE POLICY "Admins can manage all profiles" ON profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- Profile Images RLS Policies (Admin only)
CREATE POLICY "Admins can manage all profile images" ON profile_images
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- PDF Uploads RLS Policies (Admin only)
CREATE POLICY "Admins can manage all PDF uploads" ON pdf_uploads
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_location ON profiles(location);
CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON profiles(is_active);
CREATE INDEX IF NOT EXISTS idx_profiles_is_featured ON profiles(is_featured);
CREATE INDEX IF NOT EXISTS idx_profile_images_profile_id ON profile_images(profile_id);
CREATE INDEX IF NOT EXISTS idx_pdf_uploads_status ON pdf_uploads(status);
CREATE INDEX IF NOT EXISTS idx_pdf_uploads_created_at ON pdf_uploads(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at 
  BEFORE UPDATE ON admin_users 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
`;

  fs.writeFileSync('database-schema.sql', schemaSQL);
  console.log('✅ Database schema file created: database-schema.sql\n');

  // Create storage bucket setup instructions
  console.log('📁 Creating storage setup instructions...');
  const storageSetup = `# Supabase Storage Setup

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
`;

  fs.writeFileSync('storage-setup.md', storageSetup);
  console.log('✅ Storage setup instructions created: storage-setup.md\n');

  console.log('🎉 Setup completed successfully!\n');
  console.log('📋 Next steps:');
  console.log('1. Update .env.local with your Supabase credentials');
  console.log('2. Run the database schema in your Supabase SQL editor');
  console.log('3. Set up storage buckets using storage-setup.md');
  console.log('4. Create an admin user in the admin_users table');
  console.log('5. Run "npm run dev" to start the development server');
  console.log('6. Visit http://localhost:3000/admin/login to access the admin panel\n');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
