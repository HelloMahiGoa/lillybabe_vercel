import { NextRequest, NextResponse } from 'next/server';

// Simple wrapper that redirects to the profiles-list endpoint
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Forward the request to profiles-list endpoint
    const profilesListUrl = new URL('/api/profiles-list', request.url);
    
    // Copy all search parameters
    searchParams.forEach((value, key) => {
      profilesListUrl.searchParams.set(key, value);
    });
    
    // Make internal request to profiles-list
    const response = await fetch(profilesListUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch profiles' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error in profiles wrapper:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
