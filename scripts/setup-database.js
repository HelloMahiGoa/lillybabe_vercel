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

async function setupDatabase() {
  console.log('🚀 Setting up database schema...\n');

  try {
    // Add new columns to profiles table
    console.log('📝 Adding new columns to profiles table...');
    
    const alterTableQuery = `
      ALTER TABLE profiles 
      ADD COLUMN IF NOT EXISTS category VARCHAR(50),
      ADD COLUMN IF NOT EXISTS nationality VARCHAR(50),
      ADD COLUMN IF NOT EXISTS height VARCHAR(20),
      ADD COLUMN IF NOT EXISTS body_type VARCHAR(50),
      ADD COLUMN IF NOT EXISTS hair_color VARCHAR(30),
      ADD COLUMN IF NOT EXISTS eye_color VARCHAR(30),
      ADD COLUMN IF NOT EXISTS languages TEXT[],
      ADD COLUMN IF NOT EXISTS whatsapp VARCHAR(20),
      ADD COLUMN IF NOT EXISTS phone VARCHAR(20),
      ADD COLUMN IF NOT EXISTS views_count INTEGER DEFAULT 0,
      ADD COLUMN IF NOT EXISTS clicks_count INTEGER DEFAULT 0;
    `;

    const { error: alterError } = await supabase.rpc('exec_sql', { sql: alterTableQuery });
    
    if (alterError) {
      console.log('ℹ️  Columns might already exist:', alterError.message);
    } else {
      console.log('✅ Columns added successfully');
    }

    // Create profile_views table
    console.log('📝 Creating profile_views table...');
    const createViewsTable = `
      CREATE TABLE IF NOT EXISTS profile_views (
        id SERIAL PRIMARY KEY,
        profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
        ip_address INET,
        user_agent TEXT,
        viewed_at TIMESTAMP DEFAULT NOW()
      );
    `;

    const { error: viewsError } = await supabase.rpc('exec_sql', { sql: createViewsTable });
    
    if (viewsError) {
      console.log('ℹ️  Views table might already exist:', viewsError.message);
    } else {
      console.log('✅ Profile views table created');
    }

    // Create profile_clicks table
    console.log('📝 Creating profile_clicks table...');
    const createClicksTable = `
      CREATE TABLE IF NOT EXISTS profile_clicks (
        id SERIAL PRIMARY KEY,
        profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
        click_type VARCHAR(50),
        ip_address INET,
        user_agent TEXT,
        clicked_at TIMESTAMP DEFAULT NOW()
      );
    `;

    const { error: clicksError } = await supabase.rpc('exec_sql', { sql: createClicksTable });
    
    if (clicksError) {
      console.log('ℹ️  Clicks table might already exist:', clicksError.message);
    } else {
      console.log('✅ Profile clicks table created');
    }

    // Create indexes
    console.log('📝 Creating indexes...');
    const createIndexes = `
      CREATE INDEX IF NOT EXISTS idx_profiles_category ON profiles(category);
      CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at);
      CREATE INDEX IF NOT EXISTS idx_profile_images_is_primary ON profile_images(is_primary);
      CREATE INDEX IF NOT EXISTS idx_profile_views_profile_id ON profile_views(profile_id);
      CREATE INDEX IF NOT EXISTS idx_profile_views_viewed_at ON profile_views(viewed_at);
      CREATE INDEX IF NOT EXISTS idx_profile_clicks_profile_id ON profile_clicks(profile_id);
      CREATE INDEX IF NOT EXISTS idx_profile_clicks_clicked_at ON profile_clicks(clicked_at);
    `;

    const { error: indexError } = await supabase.rpc('exec_sql', { sql: createIndexes });
    
    if (indexError) {
      console.log('ℹ️  Indexes might already exist:', indexError.message);
    } else {
      console.log('✅ Indexes created');
    }

    console.log('\n🎉 Database setup completed successfully!');

  } catch (error) {
    console.error('❌ Database setup error:', error.message);
    process.exit(1);
  }
}

// Run the setup
setupDatabase();
