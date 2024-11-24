import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hasXCookie = request.cookies.has('x-token')
  if (request.nextUrl.pathname.startsWith('/auth') && hasXCookie) {
    return NextResponse.redirect(new URL('/user/dashboard', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/user') && !hasXCookie) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/user/:path*'],
}
