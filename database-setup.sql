-- Database Schema for Lillybabe Admin Panel
-- Supabase PostgreSQL Tables

-- Profiles Table
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 18 AND age <= 60),
  location VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  whatsapp_number VARCHAR(20) DEFAULT '+918121426651',
  phone_number VARCHAR(20) DEFAULT '+918121426651',
  main_photo_url VARCHAR(500),
  gallery_images TEXT[], -- Array of image URLs
  pricing JSONB NOT NULL, -- { "1 Shot": "₹8,000", "2 Shots": "₹12,000", "3 Shots": "₹15,000", "Full Night": "₹25,000" }
  featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  views_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  
  -- SEO Fields
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  og_title VARCHAR(255),
  og_description TEXT,
  og_image VARCHAR(500),
  twitter_title VARCHAR(255),
  twitter_description TEXT,
  twitter_image VARCHAR(500),
  canonical_url VARCHAR(500),
  schema_markup JSONB,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Profile Analytics Table
CREATE TABLE profile_analytics (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  action_type VARCHAR(50) NOT NULL, -- 'view', 'click', 'whatsapp_click', 'phone_click'
  ip_address VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin Users Table
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

-- SEO Settings Table
CREATE TABLE seo_settings (
  id SERIAL PRIMARY KEY,
  page_type VARCHAR(100) NOT NULL, -- 'home', 'profile', 'category', 'location'
  page_slug VARCHAR(255),
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  og_title VARCHAR(255),
  og_description TEXT,
  og_image VARCHAR(500),
  twitter_title VARCHAR(255),
  twitter_description TEXT,
  twitter_image VARCHAR(500),
  canonical_url VARCHAR(500),
  schema_markup JSONB,
  robots_txt TEXT,
  sitemap_priority DECIMAL(2,1) DEFAULT 0.5,
  sitemap_changefreq VARCHAR(20) DEFAULT 'weekly',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- SEO Analytics Table
CREATE TABLE seo_analytics (
  id SERIAL PRIMARY KEY,
  page_url VARCHAR(500) NOT NULL,
  search_query VARCHAR(500),
  keyword VARCHAR(255),
  position INTEGER,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  ctr DECIMAL(5,2),
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  location VARCHAR(100),
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Categories Table (for dynamic category management)
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Locations Table (for dynamic location management)
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_profiles_slug ON profiles(slug);
CREATE INDEX idx_profiles_location ON profiles(location);
CREATE INDEX idx_profiles_category ON profiles(category);
CREATE INDEX idx_profiles_featured ON profiles(featured);
CREATE INDEX idx_profiles_active ON profiles(is_active);
CREATE INDEX idx_profile_analytics_profile_id ON profile_analytics(profile_id);
CREATE INDEX idx_profile_analytics_action_type ON profile_analytics(action_type);
CREATE INDEX idx_profile_analytics_created_at ON profile_analytics(created_at);
CREATE INDEX idx_seo_analytics_date ON seo_analytics(date);
CREATE INDEX idx_seo_analytics_keyword ON seo_analytics(keyword);

-- Insert default categories
INSERT INTO categories (name, slug, description, sort_order) VALUES
('Russian', 'russian', 'Russian escorts in Chennai', 1),
('Tamil', 'tamil', 'Tamil escorts in Chennai', 2),
('Telugu', 'telugu', 'Telugu escorts in Chennai', 3),
('Kannada', 'kannada', 'Kannada escorts in Chennai', 4),
('Independent', 'independent', 'Independent escorts in Chennai', 5),
('Housewife', 'housewife', 'Housewife escorts in Chennai', 6),
('Airhostess', 'airhostess', 'Airhostess escorts in Chennai', 7),
('College Girl', 'college-girl', 'College girl escorts in Chennai', 8),
('Model', 'model', 'Model escorts in Chennai', 9),
('Celebrity', 'celebrity', 'Celebrity escorts in Chennai', 10),
('Teen', 'teen', 'Teen escorts in Chennai', 11),
('VIP', 'vip', 'VIP escorts in Chennai', 12);

-- Insert default Chennai locations
INSERT INTO locations (name, slug, description, sort_order) VALUES
('Adyar', 'adyar', 'Adyar area in Chennai', 1),
('Anna Nagar', 'anna-nagar', 'Anna Nagar area in Chennai', 2),
('Chennai Central', 'chennai-central', 'Chennai Central area', 3),
('ECR', 'ecr', 'East Coast Road area', 4),
('Guindy', 'guindy', 'Guindy area in Chennai', 5),
('Kilpauk', 'kilpauk', 'Kilpauk area in Chennai', 6),
('Mylapore', 'mylapore', 'Mylapore area in Chennai', 7),
('Nungambakkam', 'nungambakkam', 'Nungambakkam area in Chennai', 8),
('OMR', 'omr', 'Old Mahabalipuram Road area', 9),
('T-Nagar', 't-nagar', 'T-Nagar area in Chennai', 10);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_seo_settings_updated_at BEFORE UPDATE ON seo_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to active profiles
CREATE POLICY "Public can view active profiles" ON profiles
    FOR SELECT USING (is_active = true);

-- Create policies for admin full access
CREATE POLICY "Admin full access to profiles" ON profiles
    FOR ALL USING (true);

CREATE POLICY "Admin full access to profile_analytics" ON profile_analytics
    FOR ALL USING (true);

CREATE POLICY "Admin full access to admin_users" ON admin_users
    FOR ALL USING (true);

CREATE POLICY "Admin full access to seo_settings" ON seo_settings
    FOR ALL USING (true);

CREATE POLICY "Admin full access to seo_analytics" ON seo_analytics
    FOR ALL USING (true);

CREATE POLICY "Admin full access to testimonials" ON testimonials
    FOR ALL USING (true);

CREATE POLICY "Admin full access to categories" ON categories
    FOR ALL USING (true);

CREATE POLICY "Admin full access to locations" ON locations
    FOR ALL USING (true);

-- Public read access to testimonials
CREATE POLICY "Public can view active testimonials" ON testimonials
    FOR SELECT USING (is_active = true);

-- Public read access to categories and locations
CREATE POLICY "Public can view active categories" ON categories
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active locations" ON locations
    FOR SELECT USING (is_active = true);
