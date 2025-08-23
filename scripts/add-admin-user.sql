-- Add Admin User to Database
-- Run this in Supabase SQL Editor after creating the admin user in Auth

-- First, make sure you have created the admin user in Supabase Auth
-- Go to Authentication > Users and create a user with email: admin@lillybabe.com

-- Then run this script to add the user to admin_users table
-- Replace 'YOUR_ADMIN_USER_UUID' with the actual UUID from the auth.users table

INSERT INTO admin_users (id, email, role) 
VALUES (
  'YOUR_ADMIN_USER_UUID', -- Replace with actual UUID from auth.users
  'admin@lillybabe.com', 
  'admin'
) ON CONFLICT (id) DO UPDATE SET 
  email = EXCLUDED.email,
  role = EXCLUDED.role,
  updated_at = NOW();

-- To find your admin user UUID, run this query:
-- SELECT id, email FROM auth.users WHERE email = 'admin@lillybabe.com';

-- Verify the admin user was added
SELECT * FROM admin_users WHERE email = 'admin@lillybabe.com';
