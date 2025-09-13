import { createClient } from '@supabase/supabase-js';

// Function to create Supabase client for admin APIs
export function createAdminSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('[Admin API] Environment check:');
  console.log('NEXT_PUBLIC_SUPABASE_URL exists:', !!supabaseUrl);
  console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!serviceRoleKey);
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY exists:', !!anonKey);

  if (!supabaseUrl) {
    console.error('[Admin API] Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
    return null;
  }

  // Try service role key first, then anon key
  const supabaseKey = serviceRoleKey || anonKey;
  if (!supabaseKey) {
    console.error('[Admin API] Missing both SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables');
    return null;
  }

  try {
    const client = createClient(supabaseUrl, supabaseKey, {
      db: {
        schema: 'public',
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        headers: {
          'Connection': 'keep-alive',
        },
      },
    });
    console.log('[Admin API] Supabase client created successfully with key type:', serviceRoleKey ? 'SERVICE_ROLE' : 'ANON');
    return client;
  } catch (error) {
    console.error('[Admin API] Error creating Supabase client:', error);
    return null;
  }
}
