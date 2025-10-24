#!/bin/bash

# Deployment script that ensures environment variables are properly set
echo "🚀 Starting deployment process..."

# Step 1: Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ Error: .env.local file not found!"
    exit 1
fi

echo "✅ .env.local file found"

# Step 2: Extract environment variables from .env.local and set them in Vercel
echo "📝 Setting up environment variables..."

# Read .env.local and extract variables
while IFS='=' read -r key value; do
    # Skip empty lines and comments
    if [[ -n "$key" && ! "$key" =~ ^[[:space:]]*# ]]; then
        # Remove quotes from value if present
        value=$(echo "$value" | sed 's/^"//;s/"$//')
        
        echo "Setting $key..."
        # Set environment variable for all environments
        echo "$value" | vercel env add "$key" --yes
    fi
done < .env.local

echo "✅ Environment variables set successfully"

# Step 3: Deploy to production
echo "🚀 Deploying to production..."
vercel --prod --yes

echo "✅ Deployment completed successfully!"
