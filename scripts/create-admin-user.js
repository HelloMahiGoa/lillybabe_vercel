#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Missing Supabase credentials in .env.local');
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser() {
  console.log('🚀 Creating admin user for LillyBabe...\n');

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@lillybabe.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'luQman786!@#$%';

  try {
    // Step 1: Create user in Supabase Auth
    console.log('📝 Creating user in Supabase Auth...');
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

    // Step 2: Insert admin user record
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
      
      // If the user already exists, try to update
      if (adminError.code === '23505') { // Unique violation
        console.log('ℹ️  Admin user already exists, updating...');
        const { data: updateData, error: updateError } = await supabase
          .from('admin_users')
          .update({ role: 'admin' })
          .eq('email', adminEmail)
          .select()
          .single();

        if (updateError) {
          console.error('❌ Update error:', updateError.message);
          process.exit(1);
        }
        console.log('✅ Admin user updated successfully');
      } else {
        process.exit(1);
      }
    } else {
      console.log('✅ Admin user record created successfully');
    }

    console.log('\n🎉 Admin user setup completed successfully!');
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
createAdminUser();
