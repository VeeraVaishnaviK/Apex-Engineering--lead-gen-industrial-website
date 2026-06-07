import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // 1. Detect if requesting the admin subdomain
  // Matches "admin.apexengineering.org.in" or "admin.localhost"
  const isSubdomain = hostname.startsWith('admin.');

  // 2. Redirection: If accessing '/admin/leads' or '/admin' on main domain, redirect to subdomain
  if (!isSubdomain && (url.pathname === '/admin' || url.pathname.startsWith('/admin/'))) {
    const mainHost = hostname.replace(/^www\./, '');
    url.host = `admin.${mainHost}`;
    url.pathname = '/'; // Go to root of the subdomain, which rewrites to `/admin/leads`
    return NextResponse.redirect(url);
  }

  // 3. Subdomain routing & security
  if (isSubdomain) {
    const path = url.pathname;
    
    // Ignore internal next assets, APIs, and static files
    if (
      path.startsWith('/_next') ||
      path.startsWith('/api') ||
      path.startsWith('/static') ||
      path.includes('.')
    ) {
      return NextResponse.next();
    }

    // Password Protection: enabled by default with fallback, or customizable via environment
    const adminPassword = process.env.ADMIN_PASSWORD || 'apexadmin123';
    if (adminPassword) {
      const authHeader = request.headers.get('authorization');
      
      if (!authHeader) {
        return new NextResponse('Authentication Required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
          },
        });
      }

      try {
        const authValue = authHeader.split(' ')[1];
        const decoded = atob(authValue);
        const [user, pwd] = decoded.split(':');

        if (user !== 'admin' || pwd !== adminPassword) {
          return new NextResponse('Unauthorized', {
            status: 401,
            headers: {
              'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
            },
          });
        }
      } catch {
        return new NextResponse('Invalid Authorization Header', {
          status: 400,
        });
      }
    }

    // Rewrite the subdomain root `/` request internally to `/admin/leads`
    if (path === '/') {
      url.pathname = '/admin/leads';
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-is-admin', 'true');
      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        }
      });
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-is-admin', 'true');
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
