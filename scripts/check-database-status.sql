-- Database Status Check Script
-- Run this in Supabase SQL Editor to check current database state

-- =====================================================
-- 1. CHECK EXISTING TABLES
-- =====================================================

SELECT 
  schemaname,
  tablename,
  tableowner
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('admin_users', 'profiles', 'profile_images', 'pdf_uploads', 'profile_views', 'profile_clicks')
ORDER BY tablename;

-- =====================================================
-- 2. CHECK TABLE COLUMNS
-- =====================================================

-- Check admin_users columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'admin_users'
ORDER BY ordinal_position;

-- Check profiles columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'profiles'
ORDER BY ordinal_position;

-- Check profile_images columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'profile_images'
ORDER BY ordinal_position;

-- Check pdf_uploads columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'pdf_uploads'
ORDER BY ordinal_position;

-- Check profile_views columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'profile_views'
ORDER BY ordinal_position;

-- Check profile_clicks columns
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'profile_clicks'
ORDER BY ordinal_position;

-- =====================================================
-- 3. CHECK ROW LEVEL SECURITY
-- =====================================================

SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('admin_users', 'profiles', 'profile_images', 'pdf_uploads', 'profile_views', 'profile_clicks')
ORDER BY tablename;

-- =====================================================
-- 4. CHECK RLS POLICIES
-- =====================================================

SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('admin_users', 'profiles', 'profile_images', 'pdf_uploads', 'profile_views', 'profile_clicks')
ORDER BY tablename, policyname;

-- =====================================================
-- 5. CHECK INDEXES
-- =====================================================

SELECT 
  schemaname,
  tablename,
  indexname,
  indexdef
FROM pg_indexes 
WHERE schemaname = 'public' 
  AND tablename IN ('admin_users', 'profiles', 'profile_images', 'pdf_uploads', 'profile_views', 'profile_clicks')
ORDER BY tablename, indexname;

-- =====================================================
-- 6. CHECK TRIGGERS
-- =====================================================

SELECT 
  trigger_schema,
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers 
WHERE trigger_schema = 'public' 
  AND event_object_table IN ('admin_users', 'profiles', 'profile_images', 'pdf_uploads', 'profile_views', 'profile_clicks')
ORDER BY event_object_table, trigger_name;

-- =====================================================
-- 7. CHECK FUNCTIONS
-- =====================================================

SELECT 
  routine_schema,
  routine_name,
  routine_type
FROM information_schema.routines 
WHERE routine_schema = 'public' 
  AND routine_name IN ('update_updated_at_column', 'increment_profile_views', 'increment_profile_clicks')
ORDER BY routine_name;

-- =====================================================
-- 8. CHECK SAMPLE DATA
-- =====================================================

-- Check if sample data exists
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
SELECT id, name, age, location, category, is_active, is_verified FROM profiles WHERE is_active = true LIMIT 5;
