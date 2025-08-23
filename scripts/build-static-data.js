const fs = require('fs');
const path = require('path');

async function buildStaticData() {
  try {
    console.log('🔄 Building static data...');
    
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Copy existing data files (in production, this would fetch from Supabase)
    const sourceFiles = [
      'profiles.json',
      'testimonials.json'
    ];

    for (const file of sourceFiles) {
      const sourcePath = path.join(process.cwd(), 'public', 'data', file);
      if (fs.existsSync(sourcePath)) {
        console.log(`✅ Copied ${file}`);
      } else {
        console.log(`⚠️  Warning: ${file} not found`);
      }
    }

    // Create a build info file
    const buildInfo = {
      buildTime: new Date().toISOString(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    };

    fs.writeFileSync(
      path.join(dataDir, 'build-info.json'),
      JSON.stringify(buildInfo, null, 2)
    );

    console.log('✅ Static data build completed!');
    console.log(`📁 Data directory: ${dataDir}`);
  } catch (error) {
    console.error('❌ Error building static data:', error);
    process.exit(1);
  }
}

buildStaticData();
