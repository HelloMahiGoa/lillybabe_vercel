import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    const path = request.nextUrl.pathname;
    if (path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return supabaseResponse;
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        supabaseResponse.cookies.set(name, value, options);
      },
      remove(name: string, options: CookieOptions) {
        supabaseResponse.cookies.set(name, '', { ...options, maxAge: 0 });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isAdminLogin = path === '/admin/login' || path.startsWith('/admin/login/');
  const isAdminArea = path.startsWith('/admin');

  if (isAdminArea && !isAdminLogin && !user) {
    const redirectUrl = new URL('/admin/login', request.url);
    redirectUrl.searchParams.set('next', path);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAdminLogin && user) {
    const next = request.nextUrl.searchParams.get('next');
    const safe =
      next && next.startsWith('/admin') && !next.startsWith('/admin/login')
        ? next
        : '/admin/profiles';
    return NextResponse.redirect(new URL(safe, request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/admin/:path*'],
};
