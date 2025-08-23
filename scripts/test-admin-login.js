#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testAdminLogin() {
  console.log('🧪 Testing admin login credentials...\n');

  const adminEmail = 'admin@lillybabe.com';
  const password = 'admin123'; // New simple password

  try {
    console.log('📝 Attempting login...');
    const { data, error } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: password
    });

    if (error) {
      console.error('❌ Login failed:', error.message);
    } else {
      console.log('✅ Login successful!');
      console.log('User ID:', data.user.id);
      console.log('Email:', data.user.email);
      
      // Check admin role
      const { data: profile } = await supabase
        .from('admin_users')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (profile) {
        console.log('Admin role:', profile.role);
      } else {
        console.log('⚠️  No admin_users record found');
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

// Run the script
testAdminLogin();
