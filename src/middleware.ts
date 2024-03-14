import type {NextRequest} from 'next/server';
import NextAuth from 'next-auth';

import {authConfig} from './auth.config';

NextAuth(authConfig).auth;

function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;

    console.log("middleware", currentUser); // TODO: Remove this line

    if (currentUser && (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup"))) {
        return Response.redirect(new URL("/", request.url));
    }
}

const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
};

export {middleware, config};
export default NextAuth;