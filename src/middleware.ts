import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Currently no protected routes; pass through all requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all request paths except for static assets
    '/((?!_next/static|_next/image|favicon.ico|images|manifest.json|sw.js).*)',
  ],
};
