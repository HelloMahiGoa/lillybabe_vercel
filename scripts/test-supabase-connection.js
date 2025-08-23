#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔍 Testing Supabase connection...\n');

console.log('📋 Environment variables:');
console.log('URL:', supabaseUrl);
console.log('Anon Key:', supabaseAnonKey ? supabaseAnonKey.substring(0, 20) + '...' : 'NOT SET');
console.log('Service Key:', supabaseServiceKey ? supabaseServiceKey.substring(0, 20) + '...' : 'NOT SET');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('\n📝 Testing basic connection...');
    
    // Test basic query
    const { data, error } = await supabase
      .from('admin_users')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Database connection failed:', error.message);
    } else {
      console.log('✅ Database connection successful');
    }

    // Test auth
    console.log('\n📝 Testing auth service...');
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.error('❌ Auth service failed:', authError.message);
    } else {
      console.log('✅ Auth service working');
      console.log('Session:', authData.session ? 'Active' : 'None');
    }

  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
  }
}

testConnection();
