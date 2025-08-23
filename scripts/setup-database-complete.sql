-- Complete Database Setup Script for LillyBabe Admin Panel
-- Run this in Supabase SQL Editor

-- =====================================================
-- 1. DROP EXISTING TABLES (if they exist)
-- =====================================================

DROP TABLE IF EXISTS profile_clicks CASCADE;
DROP TABLE IF EXISTS profile_views CASCADE;
DROP TABLE IF EXISTS pdf_uploads CASCADE;
DROP TABLE IF EXISTS profile_images CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- =====================================================
-- 2. CREATE TABLES
-- =====================================================

-- Admin Users Table
CREATE TABLE admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Profiles Table
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  location VARCHAR(100) NOT NULL,
  category VARCHAR(50), -- Russian, Tamil, Telugu, Independent, etc.
  nationality VARCHAR(50),
  height VARCHAR(20),
  body_type VARCHAR(50),
  hair_color VARCHAR(30),
  eye_color VARCHAR(30),
  languages TEXT[],
  services TEXT[],
  pricing JSONB NOT NULL, -- { one_shot: 5000, two_shot: 8000, three_shot: 12000, full_night: 25000 }
  whatsapp VARCHAR(20),
  phone VARCHAR(20),
  availability VARCHAR(50),
  response_rate INTEGER,
  rating DECIMAL(3,2) DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Profile Images Table
CREATE TABLE profile_images (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500),
  image_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PDF Uploads Table
CREATE TABLE pdf_uploads (
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

-- Profile Views Tracking Table
CREATE TABLE profile_views (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMP DEFAULT NOW()
);

-- Profile Clicks Tracking Table
CREATE TABLE profile_clicks (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  click_type VARCHAR(50), -- whatsapp, phone, view_profile
  ip_address INET,
  user_agent TEXT,
  clicked_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- 3. ENABLE ROW LEVEL SECURITY
-- =====================================================

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_clicks ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 4. CREATE RLS POLICIES
-- =====================================================

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

-- Public read access for active profiles (for website display)
CREATE POLICY "Public can view active profiles" ON profiles
  FOR SELECT USING (is_active = true);

-- Profile Images RLS Policies (Admin only)
CREATE POLICY "Admins can manage all profile images" ON profile_images
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- Public read access for profile images
CREATE POLICY "Public can view profile images" ON profile_images
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = profile_images.profile_id 
      AND profiles.is_active = true
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

-- Profile Views RLS Policies
CREATE POLICY "Anyone can insert profile views" ON profile_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all profile views" ON profile_views
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- Profile Clicks RLS Policies
CREATE POLICY "Anyone can insert profile clicks" ON profile_clicks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all profile clicks" ON profile_clicks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid() 
      AND admin_users.role = 'admin'
    )
  );

-- =====================================================
-- 5. CREATE INDEXES
-- =====================================================

CREATE INDEX idx_profiles_location ON profiles(location);
CREATE INDEX idx_profiles_category ON profiles(category);
CREATE INDEX idx_profiles_is_active ON profiles(is_active);
CREATE INDEX idx_profiles_is_featured ON profiles(is_featured);
CREATE INDEX idx_profiles_created_at ON profiles(created_at);
CREATE INDEX idx_profile_images_profile_id ON profile_images(profile_id);
CREATE INDEX idx_profile_images_is_primary ON profile_images(is_primary);
CREATE INDEX idx_pdf_uploads_status ON pdf_uploads(status);
CREATE INDEX idx_pdf_uploads_created_at ON pdf_uploads(created_at);
CREATE INDEX idx_profile_views_profile_id ON profile_views(profile_id);
CREATE INDEX idx_profile_views_viewed_at ON profile_views(viewed_at);
CREATE INDEX idx_profile_clicks_profile_id ON profile_clicks(profile_id);
CREATE INDEX idx_profile_clicks_clicked_at ON profile_clicks(clicked_at);

-- =====================================================
-- 6. CREATE FUNCTIONS AND TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to increment view count
CREATE OR REPLACE FUNCTION increment_profile_views()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET views_count = views_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to increment click count
CREATE OR REPLACE FUNCTION increment_profile_clicks()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET clicks_count = clicks_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at 
  BEFORE UPDATE ON admin_users 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER increment_profile_views_trigger
  AFTER INSERT ON profile_views
  FOR EACH ROW EXECUTE FUNCTION increment_profile_views();

CREATE TRIGGER increment_profile_clicks_trigger
  AFTER INSERT ON profile_clicks
  FOR EACH ROW EXECUTE FUNCTION increment_profile_clicks();

-- =====================================================
-- 7. INSERT SAMPLE DATA
-- =====================================================

-- Insert sample profiles
INSERT INTO profiles (name, age, location, category, nationality, height, body_type, hair_color, eye_color, languages, services, pricing, whatsapp, phone, availability, response_rate, rating, is_verified, is_featured, is_active) VALUES
('Priya Sharma', 24, 'T Nagar', 'Model', 'Indian', '5\'6"', 'Slim', 'Black', 'Brown', ARRAY['English', 'Hindi'], ARRAY['Escort'], '{"one_shot": 5000, "two_shot": 8000, "three_shot": 12000, "full_night": 25000}', '+91 98765 43210', '+91 98765 43211', 'Available Now', 95, 4.8, true, true, true),
('Anjali Reddy', 22, 'Anna Nagar', 'College Girl', 'Indian', '5\'4"', 'Slim', 'Brown', 'Green', ARRAY['English', 'Telugu'], ARRAY['Escort'], '{"one_shot": 4000, "two_shot": 7000, "three_shot": 10000, "full_night": 20000}', '+91 98765 43212', '+91 98765 43213', 'Available Now', 90, 4.6, true, true, true),
('Maria Petrova', 25, 'Adyar', 'Russian', 'Russian', '5\'8"', 'Curvy', 'Blonde', 'Blue', ARRAY['English', 'Russian'], ARRAY['Escort'], '{"one_shot": 8000, "two_shot": 12000, "three_shot": 18000, "full_night": 35000}', '+91 98765 43214', '+91 98765 43215', 'Available Now', 98, 4.9, true, true, true),
('Lakshmi Devi', 28, 'Mylapore', 'Housewife', 'Indian', '5\'5"', 'Curvy', 'Black', 'Brown', ARRAY['English', 'Tamil'], ARRAY['Escort'], '{"one_shot": 6000, "two_shot": 10000, "three_shot": 15000, "full_night": 30000}', '+91 98765 43216', '+91 98765 43217', 'Available Now', 85, 4.5, true, false, true),
('Sneha Patel', 23, 'Velachery', 'Independent', 'Indian', '5\'7"', 'Slim', 'Black', 'Brown', ARRAY['English', 'Gujarati'], ARRAY['Escort'], '{"one_shot": 5500, "two_shot": 9000, "three_shot": 13000, "full_night": 28000}', '+91 98765 43218', '+91 98765 43219', 'Available Now', 92, 4.7, true, false, true);

-- Insert sample profile images
INSERT INTO profile_images (profile_id, image_url, thumbnail_url, image_order, is_primary) VALUES
(1, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 1, true),
(1, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 2, false),
(1, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 3, false),
(2, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 1, true),
(2, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 2, false),
(3, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 1, true),
(3, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 2, false),
(4, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 1, true),
(5, '/images/placeholder-profile.jpg', '/images/placeholder-profile-thumb.jpg', 1, true);

-- Insert sample profile views
INSERT INTO profile_views (profile_id, ip_address, user_agent) VALUES
(1, '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
(1, '192.168.1.2', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'),
(2, '192.168.1.3', 'Mozilla/5.0 (Android 10; Mobile) AppleWebKit/537.36'),
(3, '192.168.1.4', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
(4, '192.168.1.5', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36');

-- Insert sample profile clicks
INSERT INTO profile_clicks (profile_id, click_type, ip_address, user_agent) VALUES
(1, 'whatsapp', '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
(1, 'phone', '192.168.1.2', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'),
(2, 'view_profile', '192.168.1.3', 'Mozilla/5.0 (Android 10; Mobile) AppleWebKit/537.36'),
(3, 'whatsapp', '192.168.1.4', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
(4, 'phone', '192.168.1.5', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36');

-- =====================================================
-- 8. VERIFICATION QUERIES
-- =====================================================

-- Check if tables were created successfully
SELECT 'admin_users' as table_name, COUNT(*) as row_count FROM admin_users
UNION ALL
SELECT 'profiles' as table_name, COUNT(*) as row_count FROM profiles
UNION ALL
SELECT 'profile_images' as table_name, COUNT(*) as row_count FROM profile_images
UNION ALL
SELECT 'pdf_uploads' as table_name, COUNT(*) as row_count FROM pdf_uploads
UNION ALL
SELECT 'profile_views' as table_name, COUNT(*) as row_count FROM profile_views
UNION ALL
SELECT 'profile_clicks' as table_name, COUNT(*) as row_count FROM profile_clicks;

-- Check active profiles
SELECT id, name, age, location, category, is_active, is_verified FROM profiles WHERE is_active = true;
