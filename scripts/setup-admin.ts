import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupAdmin() {
  try {
    console.log('Setting up admin user...');

    // Check if admin user already exists
    const { data: existingUser } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', 'admin')
      .single();

    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }

    // Hash password
    const password = 'admin123'; // Change this to a secure password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin user
    const { data: user, error } = await supabase
      .from('admin_users')
      .insert({
        username: 'admin',
        email: 'admin@lillybabe.com',
        password_hash: hashedPassword,
        role: 'super_admin',
        is_active: true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating admin user:', error);
      process.exit(1);
    }

    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('Please change the password after first login.');

  } catch (error) {
    console.error('Setup failed:', error);
    process.exit(1);
  }
}

setupAdmin();
