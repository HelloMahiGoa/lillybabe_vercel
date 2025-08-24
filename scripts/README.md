# Database Testing and Fixing Scripts

This directory contains scripts to test and fix your Supabase database schema for the Lillybabe admin panel.

## Scripts Overview

### 1. `validate-schema.ts` - Quick Database Validation
A lightweight script that checks if all required tables exist and provides a summary report.

**Usage:**
```bash
npm run db:validate
```

**What it does:**
- Checks if all required tables exist
- Lists existing columns for each table
- Provides a summary of issues found
- Gives recommendations for fixes

### 2. `database-test-and-fix.ts` - Comprehensive Testing and Fix Generation
A comprehensive script that analyzes your database structure and generates SQL fixes.

**Usage:**
```bash
npm run db:test
# or
npm run db:fix
```

**What it does:**
- Analyzes existing database structure
- Identifies missing tables and columns
- Generates a `database-fixes.sql` file with all necessary SQL commands
- Provides detailed reporting

### 3. `database-fixes.sql` - Manual SQL Fixes
A comprehensive SQL file that can be run directly in Supabase to fix all database issues.

**Usage:**
1. Open your Supabase dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `database-fixes.sql`
4. Run the SQL

## Required Environment Variables

Make sure you have these environment variables set in your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Database Schema

The scripts expect the following tables to exist:

### Core Tables
- `admin_users` - Admin user management
- `profiles` - Escort profiles with all details
- `profile_images` - Images for each profile
- `pdf_uploads` - PDF upload tracking
- `profile_views` - Profile view tracking
- `profile_clicks` - Profile click tracking

### Required Columns for Profiles Table
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(100))
- `age` (INTEGER)
- `location` (VARCHAR(100))
- `category` (VARCHAR(50))
- `nationality` (VARCHAR(50))
- `height` (VARCHAR(20))
- `body_type` (VARCHAR(50))
- `hair_color` (VARCHAR(30))
- `eye_color` (VARCHAR(30))
- `languages` (TEXT[])
- `services` (TEXT[])
- `pricing` (JSONB)
- `whatsapp` (VARCHAR(20))
- `phone` (VARCHAR(20))
- `availability` (VARCHAR(50))
- `response_rate` (INTEGER)
- `rating` (DECIMAL(3,2))
- `views_count` (INTEGER)
- `clicks_count` (INTEGER)
- `is_verified` (BOOLEAN)
- `is_featured` (BOOLEAN)
- `is_active` (BOOLEAN)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Workflow

### Step 1: Validate Current Schema
```bash
npm run db:validate
```

This will give you a quick overview of what's missing.

### Step 2: Generate Fixes (if needed)
```bash
npm run db:test
```

This will generate a `database-fixes.sql` file with all necessary SQL commands.

### Step 3: Apply Fixes
1. Open your Supabase dashboard
2. Go to SQL Editor
3. Copy the contents of `database-fixes.sql`
4. Run the SQL

### Step 4: Verify Fixes
```bash
npm run db:validate
```

Run the validation again to confirm everything is working.

## Troubleshooting

### Common Issues

1. **Environment Variables Missing**
   - Make sure `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set
   - The service role key is required for admin operations

2. **Permission Errors**
   - Ensure your service role key has the necessary permissions
   - Check that RLS policies are properly configured

3. **Table Already Exists**
   - The SQL uses `CREATE TABLE IF NOT EXISTS` so it's safe to run multiple times
   - Column additions use `IF NOT EXISTS` checks

4. **Foreign Key Constraints**
   - Make sure to create tables in the correct order (profiles before profile_images, etc.)
   - The SQL file handles this automatically

### Getting Help

If you encounter issues:

1. Check the console output for specific error messages
2. Verify your environment variables are correct
3. Ensure your Supabase project has the necessary permissions
4. Check the Supabase logs for any database errors

## Security Notes

- The scripts use the service role key which has full database access
- RLS policies are automatically created to secure the data
- Public access is only granted to active profiles for website display
- Admin operations require proper authentication

## Performance

- Indexes are created automatically for better query performance
- Triggers are set up to automatically update view/click counts
- RLS policies are optimized for the expected access patterns
