import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET - Generate robots.txt
export async function GET(request: NextRequest) {
  try {
    // Get SEO settings for robots.txt content
    const { data: seoSettings } = await supabase
      .from('seo_settings')
      .select('robots_txt')
      .single();

    // Default robots.txt content
    const defaultRobotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Sitemap
Sitemap: https://lillybabe.com/api/sitemap

# Crawl-delay
Crawl-delay: 1`;

    const robotsTxt = seoSettings?.robots_txt || defaultRobotsTxt;

    // Return robots.txt response
    return new NextResponse(robotsTxt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    });

  } catch (error) {
    console.error('Error generating robots.txt:', error);
    
    // Fallback robots.txt
    const fallbackRobotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

Sitemap: https://lillybabe.com/api/sitemap`;

    return new NextResponse(fallbackRobotsTxt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    });
  }
}
