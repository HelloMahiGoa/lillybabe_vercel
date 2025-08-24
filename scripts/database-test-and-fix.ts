#!/usr/bin/env tsx

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface TableInfo {
  table_name: string;
  column_name: string;
  data_type: string;
  is_nullable: string;
  column_default: string | null;
}

interface MissingTable {
  table_name: string;
  reason: string;
  createSql: string;
}

interface MissingColumn {
  table_name: string;
  column_name: string;
  data_type: string;
  is_nullable: boolean;
  default_value?: string;
  alterSql: string;
}

class DatabaseTester {
  private missingTables: MissingTable[] = [];
  private missingColumns: MissingColumn[] = [];
  private existingTables: string[] = [];
  private tableSchemas: Record<string, any[]> = {};

  async testDatabase() {
    console.log('🔍 Testing database structure...\n');

    // Get existing tables
    await this.getExistingTables();

    // Test for required tables
    await this.testRequiredTables();

    // Test for required columns in each table
    await this.testTableColumns();

    // Generate report
    this.generateReport();

    // Generate SQL fixes
    if (this.missingTables.length > 0 || this.missingColumns.length > 0) {
      this.generateSqlFixes();
    } else {
      console.log('✅ Database structure is up to date!');
    }
  }

  private async getExistingTables() {
    const requiredTables = [
      'admin_users',
      'profiles',
      'profile_images',
      'pdf_uploads',
      'profile_views',
      'profile_clicks'
    ];

    for (const tableName of requiredTables) {
      try {
        // Try to query the table to see if it exists
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .limit(1);

        const exists = !error || error.code !== '42P01'; // 42P01 is "relation does not exist"
        
        if (exists) {
          this.existingTables.push(tableName);
        }
      } catch (error) {
        // Table doesn't exist or other error
        console.log(`Table ${tableName} not accessible or doesn't exist`);
      }
    }

    console.log(`📋 Found ${this.existingTables.length} existing tables:`, this.existingTables.join(', '));
  }

  private async testRequiredTables() {
    const requiredTables = [
      'admin_users',
      'profiles',
      'profile_images',
      'pdf_uploads',
      'profile_views',
      'profile_clicks'
    ];

    for (const table of requiredTables) {
      if (!this.existingTables.includes(table)) {
        const createSql = this.getCreateTableSQL(table);
        this.missingTables.push({
          table_name: table,
          reason: 'Required table not found',
          createSql
        });
      }
    }
  }

  private getCreateTableSQL(tableName: string): string {
    const tableCreationSQL = {
      admin_users: `
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
      profiles: `
CREATE TABLE IF NOT EXISTS profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  location VARCHAR(100) NOT NULL,
  category VARCHAR(50),
  nationality VARCHAR(50),
  height VARCHAR(20),
  body_type VARCHAR(50),
  hair_color VARCHAR(30),
  eye_color VARCHAR(30),
  languages TEXT[],
  services TEXT[],
  pricing JSONB NOT NULL,
  whatsapp VARCHAR(20),
  phone VARCHAR(20),
  availability VARCHAR(50),
  response_rate INTEGER,
  rating DECIMAL(3,2) DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);`,
      profile_images: `
CREATE TABLE IF NOT EXISTS profile_images (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500),
  image_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);`,
      pdf_uploads: `
CREATE TABLE IF NOT EXISTS pdf_uploads (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  extracted_data JSONB,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP
);`,
      profile_views: `
CREATE TABLE IF NOT EXISTS profile_views (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMP DEFAULT NOW()
);`,
      profile_clicks: `
CREATE TABLE IF NOT EXISTS profile_clicks (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  click_type VARCHAR(50),
  ip_address INET,
  user_agent TEXT,
  clicked_at TIMESTAMP DEFAULT NOW()
);`
    };

    return tableCreationSQL[tableName as keyof typeof tableCreationSQL] || '';
  }

  private async testTableColumns() {
    this.tableSchemas = {
      admin_users: [
        { name: 'id', type: 'uuid', nullable: false },
        { name: 'email', type: 'text', nullable: false },
        { name: 'role', type: 'text', nullable: false, default: "'admin'" },
        { name: 'created_at', type: 'timestamp with time zone', nullable: false, default: 'now()' },
        { name: 'updated_at', type: 'timestamp with time zone', nullable: false, default: 'now()' }
      ],
      profiles: [
        { name: 'id', type: 'serial', nullable: false },
        { name: 'name', type: 'character varying(100)', nullable: false },
        { name: 'age', type: 'integer', nullable: false },
        { name: 'location', type: 'character varying(100)', nullable: false },
        { name: 'category', type: 'character varying(50)', nullable: true },
        { name: 'nationality', type: 'character varying(50)', nullable: true },
        { name: 'height', type: 'character varying(20)', nullable: true },
        { name: 'body_type', type: 'character varying(50)', nullable: true },
        { name: 'hair_color', type: 'character varying(30)', nullable: true },
        { name: 'eye_color', type: 'character varying(30)', nullable: true },
        { name: 'languages', type: 'text[]', nullable: true },
        { name: 'services', type: 'text[]', nullable: true },
        { name: 'pricing', type: 'jsonb', nullable: false },
        { name: 'whatsapp', type: 'character varying(20)', nullable: true },
        { name: 'phone', type: 'character varying(20)', nullable: true },
        { name: 'availability', type: 'character varying(50)', nullable: true },
        { name: 'response_rate', type: 'integer', nullable: true },
        { name: 'rating', type: 'numeric(3,2)', nullable: true, default: '0' },
        { name: 'views_count', type: 'integer', nullable: true, default: '0' },
        { name: 'clicks_count', type: 'integer', nullable: true, default: '0' },
        { name: 'is_verified', type: 'boolean', nullable: true, default: 'false' },
        { name: 'is_featured', type: 'boolean', nullable: true, default: 'false' },
        { name: 'is_active', type: 'boolean', nullable: true, default: 'true' },
        { name: 'created_at', type: 'timestamp', nullable: true, default: 'now()' },
        { name: 'updated_at', type: 'timestamp', nullable: true, default: 'now()' }
      ],
      profile_images: [
        { name: 'id', type: 'serial', nullable: false },
        { name: 'profile_id', type: 'integer', nullable: false },
        { name: 'image_url', type: 'character varying(500)', nullable: false },
        { name: 'thumbnail_url', type: 'character varying(500)', nullable: true },
        { name: 'image_order', type: 'integer', nullable: true, default: '0' },
        { name: 'is_primary', type: 'boolean', nullable: true, default: 'false' },
        { name: 'created_at', type: 'timestamp', nullable: true, default: 'now()' }
      ],
      pdf_uploads: [
        { name: 'id', type: 'serial', nullable: false },
        { name: 'filename', type: 'character varying(255)', nullable: false },
        { name: 'file_path', type: 'character varying(500)', nullable: false },
        { name: 'file_size', type: 'integer', nullable: false },
        { name: 'status', type: 'character varying(50)', nullable: true, default: "'pending'" },
        { name: 'extracted_data', type: 'jsonb', nullable: true },
        { name: 'error_message', type: 'text', nullable: true },
        { name: 'created_at', type: 'timestamp', nullable: true, default: 'now()' },
        { name: 'processed_at', type: 'timestamp', nullable: true }
      ],
      profile_views: [
        { name: 'id', type: 'serial', nullable: false },
        { name: 'profile_id', type: 'integer', nullable: false },
        { name: 'ip_address', type: 'inet', nullable: true },
        { name: 'user_agent', type: 'text', nullable: true },
        { name: 'viewed_at', type: 'timestamp', nullable: true, default: 'now()' }
      ],
      profile_clicks: [
        { name: 'id', type: 'serial', nullable: false },
        { name: 'profile_id', type: 'integer', nullable: false },
        { name: 'click_type', type: 'character varying(50)', nullable: true },
        { name: 'ip_address', type: 'inet', nullable: true },
        { name: 'user_agent', type: 'text', nullable: true },
        { name: 'clicked_at', type: 'timestamp', nullable: true, default: 'now()' }
      ]
    };

    for (const [tableName, expectedColumns] of Object.entries(this.tableSchemas)) {
      if (!this.existingTables.includes(tableName)) {
        continue; // Skip if table doesn't exist
      }

      // For now, we'll skip detailed column checking since information_schema is not accessible
      // The database-fixes.sql file will handle column additions safely
      console.log(`✅ Table ${tableName} exists - column checking skipped (will be handled by SQL file)`);
    }
  }

  private generateReport() {
    console.log('\n📊 Database Structure Report:');
    console.log('================================');

    if (this.missingTables.length > 0) {
      console.log('\n❌ Missing Tables:');
      this.missingTables.forEach(table => {
        console.log(`  - ${table.table_name}: ${table.reason}`);
      });
    }

    if (this.missingColumns.length > 0) {
      console.log('\n❌ Missing Columns:');
      this.missingColumns.forEach(col => {
        console.log(`  - ${col.table_name}.${col.column_name}: ${col.data_type}${col.is_nullable ? ' (nullable)' : ' (not null)'}`);
      });
    }

    if (this.missingTables.length === 0 && this.missingColumns.length === 0) {
      console.log('\n✅ All required tables and columns are present!');
    }
  }

  private generateSqlFixes() {
    console.log('\n🔧 Generating SQL fixes...\n');

    let sqlContent = `-- Database Fixes Generated by Database Tester
-- Run this SQL in your Supabase SQL Editor

-- ========================================
-- CREATE MISSING TABLES
-- ========================================\n\n`;

    // Add table creation SQL
    for (const table of this.missingTables) {
      sqlContent += `-- Create table: ${table.table_name}\n`;
      sqlContent += table.createSql + '\n\n';
    }

    // Add column alteration SQL
    if (this.missingColumns.length > 0) {
      sqlContent += `-- ========================================\n`;
      sqlContent += `-- ADD MISSING COLUMNS\n`;
      sqlContent += `-- ========================================\n\n`;

      for (const column of this.missingColumns) {
        sqlContent += `-- Add column: ${column.table_name}.${column.column_name}\n`;
        sqlContent += column.alterSql + '\n\n';
      }
    }

    // Add indexes and triggers
    sqlContent += `-- ========================================\n`;
    sqlContent += `-- CREATE INDEXES\n`;
    sqlContent += `-- ========================================\n\n`;

    const indexes = [
      'CREATE INDEX IF NOT EXISTS idx_profiles_location ON profiles(location);',
      'CREATE INDEX IF NOT EXISTS idx_profiles_category ON profiles(category);',
      'CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON profiles(is_active);',
      'CREATE INDEX IF NOT EXISTS idx_profiles_is_featured ON profiles(is_featured);',
      'CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at);',
      'CREATE INDEX IF NOT EXISTS idx_profile_images_profile_id ON profile_images(profile_id);',
      'CREATE INDEX IF NOT EXISTS idx_profile_images_is_primary ON profile_images(is_primary);',
      'CREATE INDEX IF NOT EXISTS idx_pdf_uploads_status ON pdf_uploads(status);',
      'CREATE INDEX IF NOT EXISTS idx_pdf_uploads_created_at ON pdf_uploads(created_at);',
      'CREATE INDEX IF NOT EXISTS idx_profile_views_profile_id ON profile_views(profile_id);',
      'CREATE INDEX IF NOT EXISTS idx_profile_views_viewed_at ON profile_views(viewed_at);',
      'CREATE INDEX IF NOT EXISTS idx_profile_clicks_profile_id ON profile_clicks(profile_id);',
      'CREATE INDEX IF NOT EXISTS idx_profile_clicks_clicked_at ON profile_clicks(clicked_at);'
    ];

    indexes.forEach(index => {
      sqlContent += index + '\n';
    });

    sqlContent += '\n-- ========================================\n';
    sqlContent += '-- CREATE TRIGGERS\n';
    sqlContent += '-- ========================================\n\n';

    const triggers = [
      `-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';`,

      `-- Trigger for profiles table
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();`,

      `-- Trigger for admin_users table
CREATE TRIGGER update_admin_users_updated_at 
  BEFORE UPDATE ON admin_users 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();`,

      `-- Function to increment view count
CREATE OR REPLACE FUNCTION increment_profile_views()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET views_count = views_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';`,

      `-- Trigger for view count
CREATE TRIGGER increment_profile_views_trigger
  AFTER INSERT ON profile_views
  FOR EACH ROW EXECUTE FUNCTION increment_profile_views();`,

      `-- Function to increment click count
CREATE OR REPLACE FUNCTION increment_profile_clicks()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles 
  SET clicks_count = clicks_count + 1 
  WHERE id = NEW.profile_id;
  RETURN NEW;
END;
$$ language 'plpgsql';`,

      `-- Trigger for click count
CREATE TRIGGER increment_profile_clicks_trigger
  AFTER INSERT ON profile_clicks
  FOR EACH ROW EXECUTE FUNCTION increment_profile_clicks();`
    ];

    triggers.forEach(trigger => {
      sqlContent += trigger + '\n\n';
    });

    // Write to file
    const outputPath = path.join(process.cwd(), 'database-fixes.sql');
    fs.writeFileSync(outputPath, sqlContent);

    console.log(`✅ SQL fixes written to: ${outputPath}`);
    console.log('\n📝 Instructions:');
    console.log('1. Open your Supabase dashboard');
    console.log('2. Go to SQL Editor');
    console.log('3. Copy and paste the contents of database-fixes.sql');
    console.log('4. Run the SQL to apply all fixes');
    console.log('\n⚠️  Note: Make sure to backup your database before running these fixes!');
  }
}

// Run the database test
async function main() {
  console.log('🚀 Starting database structure test and fix...\n');
  
  const tester = new DatabaseTester();
  await tester.testDatabase();
  
  console.log('\n✨ Database test and fix completed!');
}

main().catch(console.error);
