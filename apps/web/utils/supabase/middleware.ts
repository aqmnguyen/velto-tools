import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  // Try to refresh the session first
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If we have a session but no user, try to refresh
  if (session && !user) {
    console.log('Session exists but no user, attempting refresh...');
    const {
      data: { user: refreshedUser },
      error: refreshError,
    } = await supabase.auth.getUser();
    console.log('Refresh result:', {
      user: refreshedUser?.id,
      error: refreshError,
    });
  }

  // Authentication is optional - users can access the app without being logged in
  // Only redirect to login if they're trying to access auth-specific routes
  if (!user && request.nextUrl.pathname.startsWith('/auth')) {
    // Redirect to login only for auth-specific routes
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
