import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ar'];
const defaultLocale = 'ar';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};