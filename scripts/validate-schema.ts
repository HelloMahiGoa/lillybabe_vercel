#!/usr/bin/env tsx

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface DatabaseStatus {
  tables: {
    name: string;
    exists: boolean;
    columns: string[];
  }[];
  issues: string[];
  recommendations: string[];
}

class SchemaValidator {
  private status: DatabaseStatus = {
    tables: [],
    issues: [],
    recommendations: []
  };

  async validateSchema() {
    console.log('🔍 Validating database schema...\n');

    const requiredTables = [
      'admin_users',
      'profiles', 
      'profile_images',
      'pdf_uploads',
      'profile_views',
      'profile_clicks'
    ];

    // Check each required table
    for (const tableName of requiredTables) {
      await this.checkTable(tableName);
    }

    // Generate report
    this.generateReport();
  }

  private async checkTable(tableName: string) {
    try {
      // Try to query the table to see if it exists
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);

      const exists = !error || error.code !== '42P01'; // 42P01 is "relation does not exist"
      
      let columns: string[] = [];
      if (exists) {
        // Get column information
        const { data: columnData, error: columnError } = await supabase
          .from('information_schema.columns')
          .select('column_name')
          .eq('table_schema', 'public')
          .eq('table_name', tableName);

        if (!columnError && columnData) {
          columns = columnData.map(col => col.column_name);
        }
      }

      this.status.tables.push({
        name: tableName,
        exists,
        columns
      });

      if (!exists) {
        this.status.issues.push(`Table '${tableName}' does not exist`);
        this.status.recommendations.push(`Create table '${tableName}' using the SQL schema`);
      }

    } catch (error) {
      console.error(`Error checking table ${tableName}:`, error);
      this.status.issues.push(`Error checking table '${tableName}': ${error}`);
    }
  }

  private generateReport() {
    console.log('📊 Database Schema Validation Report');
    console.log('=====================================\n');

    // Table status
    console.log('📋 Table Status:');
    this.status.tables.forEach(table => {
      const status = table.exists ? '✅' : '❌';
      console.log(`  ${status} ${table.name}`);
      if (table.exists && table.columns.length > 0) {
        console.log(`    Columns: ${table.columns.join(', ')}`);
      }
    });

    // Issues
    if (this.status.issues.length > 0) {
      console.log('\n❌ Issues Found:');
      this.status.issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
    }

    // Recommendations
    if (this.status.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.status.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    }

    // Summary
    const existingTables = this.status.tables.filter(t => t.exists).length;
    const totalTables = this.status.tables.length;
    
    console.log('\n📈 Summary:');
    console.log(`  Tables: ${existingTables}/${totalTables} exist`);
    console.log(`  Issues: ${this.status.issues.length}`);
    
    if (this.status.issues.length === 0) {
      console.log('\n✅ Database schema is valid!');
    } else {
      console.log('\n⚠️  Database schema needs attention.');
      console.log('Run the database-fixes.sql file in your Supabase SQL Editor to fix issues.');
    }
  }
}

// Run the validation
async function main() {
  console.log('🚀 Starting database schema validation...\n');
  
  const validator = new SchemaValidator();
  await validator.validateSchema();
  
  console.log('\n✨ Schema validation completed!');
}

main().catch(console.error);
