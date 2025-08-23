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

async function resetAdminPassword() {
  console.log('🔐 Resetting admin user password...\n');

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@lillybabe.com';
  const newPassword = process.env.ADMIN_PASSWORD || 'luQman786!@#$%';

  try {
    // First, get the user by email
    console.log('📝 Finding admin user...');
    const { data: users, error: findError } = await supabase.auth.admin.listUsers();
    
    if (findError) {
      console.error('❌ Error finding users:', findError.message);
      process.exit(1);
    }

    const adminUser = users.users.find(user => user.email === adminEmail);
    
    if (!adminUser) {
      console.error('❌ Admin user not found');
      process.exit(1);
    }

    console.log('✅ Found admin user:', adminUser.id);

    // Update the user's password
    console.log('📝 Updating password...');
    const { data: updateData, error: updateError } = await supabase.auth.admin.updateUserById(
      adminUser.id,
      {
        password: newPassword,
        email_confirm: true
      }
    );

    if (updateError) {
      console.error('❌ Password update error:', updateError.message);
      process.exit(1);
    }

    console.log('✅ Password updated successfully');

    // Also ensure the admin user record exists in admin_users table
    console.log('📝 Checking admin_users table...');
    const { data: adminRecord, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', adminEmail)
      .single();

    if (adminError && adminError.code !== 'PGRST116') {
      console.error('❌ Error checking admin_users:', adminError.message);
    }

    if (!adminRecord) {
      console.log('📝 Creating admin_users record...');
      const { data: insertData, error: insertError } = await supabase
        .from('admin_users')
        .insert({
          id: adminUser.id,
          email: adminEmail,
          role: 'admin'
        })
        .select()
        .single();

      if (insertError) {
        console.error('❌ Error creating admin_users record:', insertError.message);
      } else {
        console.log('✅ Admin_users record created');
      }
    } else {
      console.log('✅ Admin_users record already exists');
    }

    console.log('\n🎉 Admin password reset completed successfully!');
    console.log('\n📋 Updated credentials:');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${newPassword}`);
    console.log('\n🔗 You can now login at:');
    console.log('http://localhost:3000/admin/login (development)');
    console.log('https://your-vercel-domain.vercel.app/admin/login (production)');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

// Run the script
resetAdminPassword();
