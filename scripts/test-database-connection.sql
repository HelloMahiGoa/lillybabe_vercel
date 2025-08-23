-- Test Database Connection and Basic Functionality
-- Run this in Supabase SQL Editor to test if everything is working

-- =====================================================
-- 1. TEST BASIC CONNECTION
-- =====================================================

SELECT 'Database connection successful' as status, NOW() as timestamp;

-- =====================================================
-- 2. TEST TABLE ACCESS
-- =====================================================

-- Test if we can query each table
SELECT 'profiles' as table_name, COUNT(*) as count FROM profiles
UNION ALL
SELECT 'profile_images' as table_name, COUNT(*) as count FROM profile_images
UNION ALL
SELECT 'pdf_uploads' as table_name, COUNT(*) as count FROM pdf_uploads
UNION ALL
SELECT 'profile_views' as table_name, COUNT(*) as count FROM profile_views
UNION ALL
SELECT 'profile_clicks' as table_name, COUNT(*) as count FROM profile_clicks
UNION ALL
SELECT 'admin_users' as table_name, COUNT(*) as count FROM admin_users;

-- =====================================================
-- 3. TEST SAMPLE DATA
-- =====================================================

-- Check if sample profiles exist
SELECT 
  id, 
  name, 
  age, 
  location, 
  category, 
  is_active, 
  is_verified,
  views_count,
  clicks_count
FROM profiles 
WHERE is_active = true 
ORDER BY id;

-- =====================================================
-- 4. TEST JSONB COLUMN (pricing)
-- =====================================================

-- Test if pricing JSONB column works
SELECT 
  id,
  name,
  pricing->>'one_shot' as one_shot_price,
  pricing->>'full_night' as full_night_price
FROM profiles 
WHERE is_active = true 
LIMIT 3;

-- =====================================================
-- 5. TEST ARRAY COLUMNS
-- =====================================================

-- Test if array columns work
SELECT 
  id,
  name,
  languages,
  services
FROM profiles 
WHERE is_active = true 
LIMIT 3;

-- =====================================================
-- 6. TEST RELATIONSHIPS
-- =====================================================

-- Test profile images relationship
SELECT 
  p.id,
  p.name,
  COUNT(pi.id) as image_count,
  COUNT(CASE WHEN pi.is_primary = true THEN 1 END) as primary_images
FROM profiles p
LEFT JOIN profile_images pi ON p.id = pi.profile_id
WHERE p.is_active = true
GROUP BY p.id, p.name
ORDER BY p.id;

-- =====================================================
-- 7. TEST ANALYTICS
-- =====================================================

-- Test view and click counts
SELECT 
  p.id,
  p.name,
  p.views_count,
  p.clicks_count,
  COUNT(pv.id) as actual_views,
  COUNT(pc.id) as actual_clicks
FROM profiles p
LEFT JOIN profile_views pv ON p.id = pv.profile_id
LEFT JOIN profile_clicks pc ON p.id = pc.profile_id
WHERE p.is_active = true
GROUP BY p.id, p.name, p.views_count, p.clicks_count
ORDER BY p.views_count DESC;

-- =====================================================
-- 8. TEST SEARCH FUNCTIONALITY
-- =====================================================

-- Test location search
SELECT id, name, location, category 
FROM profiles 
WHERE location ILIKE '%T Nagar%' AND is_active = true;

-- Test category search
SELECT id, name, location, category 
FROM profiles 
WHERE category = 'Model' AND is_active = true;

-- =====================================================
-- 9. TEST SORTING
-- =====================================================

-- Test sorting by different criteria
SELECT id, name, age, rating, views_count, created_at
FROM profiles 
WHERE is_active = true
ORDER BY rating DESC, views_count DESC
LIMIT 5;

-- =====================================================
-- 10. FINAL STATUS
-- =====================================================

SELECT 
  'Database test completed successfully' as status,
  COUNT(*) as total_active_profiles,
  SUM(views_count) as total_views,
  SUM(clicks_count) as total_clicks
FROM profiles 
WHERE is_active = true;
