#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createSimpleAdmin() {
  console.log('🚀 Creating simple admin user...\n');

  const adminEmail = 'admin@lillybabe.com';
  const adminPassword = 'admin123'; // Very simple password

  try {
    // Create new user
    console.log('📝 Creating new admin user...');
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: {
        role: 'admin'
      }
    });

    if (authError) {
      console.error('❌ Auth error:', authError.message);
      process.exit(1);
    }

    console.log('✅ User created in Auth:', authData.user.id);

    // Insert admin user record
    console.log('📝 Inserting admin user record...');
    const { data: adminData, error: adminError } = await supabase
      .from('admin_users')
      .insert({
        id: authData.user.id,
        email: adminEmail,
        role: 'admin'
      })
      .select()
      .single();

    if (adminError) {
      console.error('❌ Admin user insert error:', adminError.message);
    } else {
      console.log('✅ Admin user record created successfully');
    }

    console.log('\n🎉 Simple admin user created successfully!');
    console.log('\n📋 Admin credentials:');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('\n🔗 You can now login at:');
    console.log('http://localhost:3000/admin/login (development)');
    console.log('https://your-vercel-domain.vercel.app/admin/login (production)');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

// Run the script
createSimpleAdmin();
