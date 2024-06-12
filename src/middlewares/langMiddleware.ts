import { defaultLocale, locales, localePrefix, localeDetection } from '@/i18n/config';
import { Locale } from '@/types/i18n/locale';
import { MiddlewareFactory } from '@/types/middlewares';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

/**
 * The middleware function in the current file is used to check if a user is currently logged in.
 * If the user is logged in, the function redirects them to the dashboard page.
 * If the user is not logged in, the function redirects them to the login page.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2024-01-28
 *
 * @param {NextMiddleware} next - The next middleware.
 * @returns {NextResponse<unknown>} - A NextResponse object that redirects the user to the dashboard page.
 */
export const langMiddleware: MiddlewareFactory = (next: NextMiddleware): NextMiddleware => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const response = await next(request, _next);
        // const locale = request.nextUrl.locale;
        // const locale: Locale = request.cookies.get('locale')?.value as Locale || defaultLocale;

        // Don't apply to static files
        if (
          request.nextUrl.pathname.startsWith('/_next') ||
          request.nextUrl.pathname.includes('/api/') ||
          PUBLIC_FILE.test(request.nextUrl.pathname)
        ) {
          return response;
        }

        // // Check if locale is supported
        // if (!locale) {
        //   const locale = request.cookies.get('locale')?.value || 'en';
        //   // const langQuery = request.nextUrl.search ? '&lang=' + locale : `?lang=${locale}`;

        //   return NextResponse.redirect(
        //     new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url)
        //   );
        // }

        return createMiddleware({
          locales,// A list of all locales that are supported
          localePrefix,// The prefix for the locale in the URL
          localeDetection,// The detection method
          defaultLocale// Used when no locale matches
        })(request);

        // return NextResponse.next();
    }
}
