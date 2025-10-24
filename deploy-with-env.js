#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting automated deployment with environment variables...');

// Step 1: Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
    console.error('❌ Error: .env.local file not found!');
    process.exit(1);
}

console.log('✅ .env.local file found');

// Step 2: Read and parse .env.local
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
        const equalIndex = line.indexOf('=');
        if (equalIndex > 0) {
            const key = line.substring(0, equalIndex).trim();
            let value = line.substring(equalIndex + 1).trim();
            
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            envVars[key] = value;
        }
    }
});

console.log(`📝 Found ${Object.keys(envVars).length} environment variables`);

// Step 3: Set environment variables in Vercel
console.log('🔧 Setting up environment variables in Vercel...');

for (const [key, value] of Object.entries(envVars)) {
    if (key && value) {
        try {
            console.log(`Setting ${key}...`);
            
            // Use a more reliable method to set environment variables
            const command = `echo "${value}" | vercel env add "${key}" --yes`;
            execSync(command, { stdio: 'pipe' });
            
            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.warn(`⚠️  Warning: Failed to set ${key}:`, error.message);
        }
    }
}

console.log('✅ Environment variables set successfully');

// Step 4: Deploy to production
console.log('🚀 Deploying to production...');
try {
    execSync('vercel --prod --yes', { stdio: 'inherit' });
    console.log('✅ Deployment completed successfully!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
}
