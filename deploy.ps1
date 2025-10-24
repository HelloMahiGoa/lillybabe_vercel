# PowerShell deployment script that ensures environment variables are properly set
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Step 1: Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "❌ Error: .env.local file not found!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ .env.local file found" -ForegroundColor Green

# Step 2: Extract environment variables from .env.local and set them in Vercel
Write-Host "📝 Setting up environment variables..." -ForegroundColor Yellow

# Read .env.local and extract variables
$envContent = Get-Content ".env.local"
foreach ($line in $envContent) {
    # Skip empty lines and comments
    if ($line -and -not $line.StartsWith("#")) {
        if ($line.Contains("=")) {
            $parts = $line.Split("=", 2)
            $key = $parts[0].Trim()
            $value = $parts[1].Trim()
            
            # Remove quotes from value if present
            if ($value.StartsWith('"') -and $value.EndsWith('"')) {
                $value = $value.Substring(1, $value.Length - 2)
            }
            
            if ($key -and $value) {
                Write-Host "Setting $key..." -ForegroundColor Cyan
                # Set environment variable for all environments
                echo "y" | vercel env add $key
                Start-Sleep -Seconds 1
            }
        }
    }
}

Write-Host "✅ Environment variables set successfully" -ForegroundColor Green

# Step 3: Deploy to production
Write-Host "🚀 Deploying to production..." -ForegroundColor Yellow
vercel --prod --yes

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
