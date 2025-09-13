-- Database optimization functions for LillyBabe admin panel

-- Function to get all profile stats in a single query
CREATE OR REPLACE FUNCTION get_profiles_stats()
RETURNS TABLE (
  total_profiles bigint,
  active_profiles bigint,
  featured_profiles bigint,
  total_views bigint,
  total_clicks bigint
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) as total_profiles,
    COUNT(*) FILTER (WHERE is_active = true) as active_profiles,
    COUNT(*) FILTER (WHERE featured = true) as featured_profiles,
    COALESCE(SUM(views_count), 0) as total_views,
    COALESCE(SUM(clicks_count), 0) as total_clicks
  FROM profiles;
END;
$$ LANGUAGE plpgsql;

-- Add profile_id column to testimonials table
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS profile_id INTEGER;

-- Add foreign key constraint to link testimonials to profiles
ALTER TABLE testimonials 
ADD CONSTRAINT IF NOT EXISTS fk_testimonials_profile_id 
FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE SET NULL;

-- Create index for profile_id in testimonials for better performance
CREATE INDEX IF NOT EXISTS idx_testimonials_profile_id ON testimonials(profile_id);

-- Add updated_at column to testimonials table if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'testimonials' 
        AND column_name = 'updated_at'
    ) THEN
        ALTER TABLE testimonials ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    END IF;
END $$;

-- Create trigger to automatically update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if it exists
DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;

-- Create trigger for testimonials table
CREATE TRIGGER update_testimonials_updated_at
    BEFORE UPDATE ON testimonials
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON profiles(is_active);
CREATE INDEX IF NOT EXISTS idx_profiles_featured ON profiles(featured);
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_views_count ON profiles(views_count DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_clicks_count ON profiles(clicks_count DESC);

CREATE INDEX IF NOT EXISTS idx_testimonials_is_verified ON testimonials(is_verified);
CREATE INDEX IF NOT EXISTS idx_categories_is_active ON categories(is_active);
CREATE INDEX IF NOT EXISTS idx_locations_is_active ON locations(is_active);

-- Create a materialized view for dashboard stats (optional - for very large datasets)
-- This can be refreshed periodically instead of calculating on every request
CREATE MATERIALIZED VIEW IF NOT EXISTS dashboard_stats AS
SELECT 
  (SELECT COUNT(*) FROM profiles) as total_profiles,
  (SELECT COUNT(*) FROM profiles WHERE is_active = true) as active_profiles,
  (SELECT COUNT(*) FROM profiles WHERE featured = true) as featured_profiles,
  (SELECT COALESCE(SUM(views_count), 0) FROM profiles) as total_views,
  (SELECT COALESCE(SUM(clicks_count), 0) FROM profiles) as total_clicks,
  (SELECT COUNT(*) FROM testimonials) as total_testimonials,
  (SELECT COUNT(*) FROM testimonials WHERE is_verified = true) as verified_testimonials,
  (SELECT COUNT(*) FROM categories WHERE is_active = true) as total_categories,
  (SELECT COUNT(*) FROM locations WHERE is_active = true) as total_locations,
  NOW() as last_updated;

-- Create a function to refresh the materialized view
CREATE OR REPLACE FUNCTION refresh_dashboard_stats()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW dashboard_stats;
END;
$$ LANGUAGE plpgsql;

-- Create a cron job or scheduled task to refresh the materialized view every 5 minutes
-- This would be done at the application level, not in SQL
