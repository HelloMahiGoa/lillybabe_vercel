-- Admin Panel Database Schema

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
  thumbnail_url VARCHAR(500),
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

-- Profile Views Tracking Table
CREATE TABLE IF NOT EXISTS profile_views (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMP DEFAULT NOW()
);

-- Profile Clicks Tracking Table
CREATE TABLE IF NOT EXISTS profile_clicks (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  click_type VARCHAR(50), -- whatsapp, phone, view_profile
  ip_address INET,
  user_agent TEXT,
  clicked_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_clicks ENABLE ROW LEVEL SECURITY;

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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_location ON profiles(location);
CREATE INDEX IF NOT EXISTS idx_profiles_category ON profiles(category);
CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON profiles(is_active);
CREATE INDEX IF NOT EXISTS idx_profiles_is_featured ON profiles(is_featured);
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at);
CREATE INDEX IF NOT EXISTS idx_profile_images_profile_id ON profile_images(profile_id);
CREATE INDEX IF NOT EXISTS idx_profile_images_is_primary ON profile_images(is_primary);
CREATE INDEX IF NOT EXISTS idx_pdf_uploads_status ON pdf_uploads(status);
CREATE INDEX IF NOT EXISTS idx_pdf_uploads_created_at ON pdf_uploads(created_at);
CREATE INDEX IF NOT EXISTS idx_profile_views_profile_id ON profile_views(profile_id);
CREATE INDEX IF NOT EXISTS idx_profile_views_viewed_at ON profile_views(viewed_at);
CREATE INDEX IF NOT EXISTS idx_profile_clicks_profile_id ON profile_clicks(profile_id);
CREATE INDEX IF NOT EXISTS idx_profile_clicks_clicked_at ON profile_clicks(clicked_at);

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

-- Create function to increment view count
CREATE OR REPLACE FUNCTION increment_profile_views()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET views_count = views_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for view count
CREATE TRIGGER increment_profile_views_trigger
  AFTER INSERT ON profile_views
  FOR EACH ROW EXECUTE FUNCTION increment_profile_views();

-- Create function to increment click count
CREATE OR REPLACE FUNCTION increment_profile_clicks()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET clicks_count = clicks_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for click count
CREATE TRIGGER increment_profile_clicks_trigger
  AFTER INSERT ON profile_clicks
  FOR EACH ROW EXECUTE FUNCTION increment_profile_clicks();
