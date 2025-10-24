-- ==========================================
-- ADS POSTING SYSTEM - DATABASE SCHEMA
-- ==========================================
-- Complete schema for Independent Escorts and Agency ads posting platform
-- ==========================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. USER TYPES TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS user_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default user types
INSERT INTO user_types (name, description) VALUES
  ('independent', 'Independent Escort - Pay per post'),
  ('agency', 'Agency - Subscription based unlimited posts')
ON CONFLICT (name) DO NOTHING;

-- ==========================================
-- 2. PLATFORM USERS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS platform_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  whatsapp_number VARCHAR(20),
  user_type_id INTEGER REFERENCES user_types(id) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  profile_image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for platform_users
CREATE INDEX IF NOT EXISTS idx_platform_users_email ON platform_users(email);
CREATE INDEX IF NOT EXISTS idx_platform_users_user_type ON platform_users(user_type_id);
CREATE INDEX IF NOT EXISTS idx_platform_users_is_active ON platform_users(is_active);

-- ==========================================
-- 3. AD PLANS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS ad_plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  user_type_id INTEGER REFERENCES user_types(id) NOT NULL,
  duration_days INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  features JSONB DEFAULT '{"ad_limit": 1, "video_required": true}',
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default ad plans (unified pricing for all users)
INSERT INTO ad_plans (name, user_type_id, duration_days, price, features, sort_order) VALUES
  -- Unified Plans (available to all user types - user_type_id set to 1 for compatibility)
  ('10 Days Plan', 1, 10, 500.00, '{"ad_limit": 1, "video_required": true, "featured": false}', 1),
  ('20 Days Plan', 1, 20, 900.00, '{"ad_limit": 1, "video_required": true, "featured": false}', 2),
  ('30 Days Plan', 1, 30, 1200.00, '{"ad_limit": 1, "video_required": true, "featured": false}', 3)
ON CONFLICT DO NOTHING;

-- Create indexes for ad_plans
CREATE INDEX IF NOT EXISTS idx_ad_plans_user_type ON ad_plans(user_type_id);
CREATE INDEX IF NOT EXISTS idx_ad_plans_is_active ON ad_plans(is_active);

-- ==========================================
-- 4. USER SUBSCRIPTIONS TABLE (DEPRECATED - kept for backward compatibility)
-- ==========================================
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES platform_users(id) ON DELETE CASCADE,
  plan_id INTEGER REFERENCES ad_plans(id),
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  payment_id INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for user_subscriptions
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_is_active ON user_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_end_date ON user_subscriptions(end_date);

-- ==========================================
-- 5. USER ADS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS user_ads (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES platform_users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  age INTEGER NOT NULL,
  location VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(20) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  main_photo_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  video_verification_url TEXT,
  pricing JSONB NOT NULL,
  profile_description TEXT,
  
  -- Payment & Plan
  plan_id INTEGER REFERENCES ad_plans(id),
  payment_id INTEGER,
  
  -- Status & Approval
  approval_status VARCHAR(20) DEFAULT 'pending',
  approved_by INTEGER,
  approval_date TIMESTAMP,
  rejection_reason TEXT,
  
  -- Activity flags
  is_active BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  
  -- Expiry
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  is_expired BOOLEAN DEFAULT FALSE,
  
  -- Analytics
  views_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT chk_approval_status CHECK (approval_status IN ('pending', 'approved', 'rejected'))
);

-- Create indexes for user_ads
CREATE INDEX IF NOT EXISTS idx_user_ads_user_id ON user_ads(user_id);
CREATE INDEX IF NOT EXISTS idx_user_ads_slug ON user_ads(slug);
CREATE INDEX IF NOT EXISTS idx_user_ads_approval_status ON user_ads(approval_status);
CREATE INDEX IF NOT EXISTS idx_user_ads_is_active ON user_ads(is_active);
CREATE INDEX IF NOT EXISTS idx_user_ads_is_expired ON user_ads(is_expired);
CREATE INDEX IF NOT EXISTS idx_user_ads_location ON user_ads(location);
CREATE INDEX IF NOT EXISTS idx_user_ads_category ON user_ads(category);
CREATE INDEX IF NOT EXISTS idx_user_ads_end_date ON user_ads(end_date);

-- ==========================================
-- 6. PAYMENTS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES platform_users(id) ON DELETE CASCADE,
  plan_id INTEGER REFERENCES ad_plans(id),
  ad_id INTEGER REFERENCES user_ads(id) ON DELETE SET NULL,
  
  -- Payment details
  amount DECIMAL(10, 2) NOT NULL,
  upi_id VARCHAR(255) NOT NULL,
  payment_proof_url TEXT,
  transaction_id VARCHAR(255),
  
  -- Status
  payment_status VARCHAR(20) DEFAULT 'pending',
  verified_by INTEGER,
  verification_date TIMESTAMP,
  rejection_reason TEXT,
  
  -- Metadata
  payment_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT chk_payment_status CHECK (payment_status IN ('pending', 'verified', 'rejected'))
);

-- Create indexes for payments
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_ad_id ON payments(ad_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_status ON payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments(created_at);

-- ==========================================
-- 7. UPI QR CODES TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS upi_qr_codes (
  id SERIAL PRIMARY KEY,
  upi_id VARCHAR(255) NOT NULL UNIQUE,
  qr_code_url TEXT NOT NULL,
  merchant_name VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample UPI QR codes (replace with actual data)
INSERT INTO upi_qr_codes (upi_id, qr_code_url, merchant_name, is_active) VALUES
  ('lillybabe@paytm', '/images/qr-codes/paytm-qr.png', 'LillyBabe Services', TRUE),
  ('lillybabe@phonepe', '/images/qr-codes/phonepe-qr.png', 'LillyBabe Platform', TRUE),
  ('lillybabe@gpay', '/images/qr-codes/gpay-qr.png', 'LillyBabe India', TRUE)
ON CONFLICT (upi_id) DO NOTHING;

-- Create index for upi_qr_codes
CREATE INDEX IF NOT EXISTS idx_upi_qr_codes_is_active ON upi_qr_codes(is_active);

-- ==========================================
-- ADD FOREIGN KEY CONSTRAINTS
-- ==========================================

-- Add foreign key for payments.payment_id in user_subscriptions
ALTER TABLE user_subscriptions 
  ADD CONSTRAINT fk_user_subscriptions_payment_id 
  FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE SET NULL;

-- Add foreign key for payments.payment_id in user_ads
ALTER TABLE user_ads 
  ADD CONSTRAINT fk_user_ads_payment_id 
  FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE SET NULL;

-- ==========================================
-- CREATE TRIGGERS FOR UPDATED_AT
-- ==========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for platform_users
CREATE TRIGGER update_platform_users_updated_at BEFORE UPDATE ON platform_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for ad_plans
CREATE TRIGGER update_ad_plans_updated_at BEFORE UPDATE ON ad_plans
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for user_subscriptions
CREATE TRIGGER update_user_subscriptions_updated_at BEFORE UPDATE ON user_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for user_ads
CREATE TRIGGER update_user_ads_updated_at BEFORE UPDATE ON user_ads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for payments
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- CREATE VIEWS FOR COMMON QUERIES
-- ==========================================

-- View for active ads with user details
CREATE OR REPLACE VIEW active_user_ads_with_details AS
SELECT 
  ua.*,
  pu.full_name as user_full_name,
  pu.email as user_email,
  pu.user_type_id,
  ut.name as user_type_name,
  ap.name as plan_name,
  ap.duration_days,
  p.payment_status,
  p.amount as payment_amount
FROM user_ads ua
JOIN platform_users pu ON ua.user_id = pu.id
JOIN user_types ut ON pu.user_type_id = ut.id
LEFT JOIN ad_plans ap ON ua.plan_id = ap.id
LEFT JOIN payments p ON ua.payment_id = p.id
WHERE ua.is_active = TRUE AND ua.is_expired = FALSE;

-- View for pending approvals
CREATE OR REPLACE VIEW pending_approvals_with_details AS
SELECT 
  ua.*,
  pu.full_name as user_full_name,
  pu.email as user_email,
  pu.phone_number as user_phone,
  ut.name as user_type_name,
  ap.name as plan_name,
  p.payment_status,
  p.payment_proof_url,
  p.transaction_id
FROM user_ads ua
JOIN platform_users pu ON ua.user_id = pu.id
JOIN user_types ut ON pu.user_type_id = ut.id
LEFT JOIN ad_plans ap ON ua.plan_id = ap.id
LEFT JOIN payments p ON ua.payment_id = p.id
WHERE ua.approval_status = 'pending';

-- ==========================================
-- GRANT PERMISSIONS (adjust as needed)
-- ==========================================
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_user;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO your_user;

-- ==========================================
-- SCHEMA COMPLETE
-- ==========================================

