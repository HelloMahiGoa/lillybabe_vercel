import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define protected routes patterns
  const userProtectedRoutes = ['/user'];
  const adminProtectedRoutes = ['/admin'];
  
  // Check if the current path is under protected routes
  const isUserProtectedRoute = userProtectedRoutes.some(route => path.startsWith(route));
  const isAdminProtectedRoute = adminProtectedRoutes.some(route => path.startsWith(route));
  
  // Skip middleware for non-protected routes
  if (!isUserProtectedRoute && !isAdminProtectedRoute) {
    return NextResponse.next();
  }
  
  // Get auth tokens from cookies
  const platformToken = request.cookies.get('platform_session')?.value;
  const adminToken = request.cookies.get('admin_token')?.value;
  
  // For user protected routes
  if (isUserProtectedRoute) {
    if (!platformToken) {
      // Redirect to login with return URL
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', path);
      return NextResponse.redirect(loginUrl);
    }
    
    return NextResponse.next();
  }
  
  // For admin protected routes
  if (isAdminProtectedRoute) {
    // Skip middleware for admin login page to avoid redirect loop
    if (path === '/admin/login') {
      return NextResponse.next();
    }
    
    if (!adminToken) {
      // Redirect to admin login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    return NextResponse.next();
  }
  
  // Fallback
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public folder
    '/((?!api|_next/static|_next/image|favicon.ico|images|manifest.json|sw.js|profiles).*)',
  ],
};
