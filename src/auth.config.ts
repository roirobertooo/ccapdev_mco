import type {NextAuthConfig} from 'next-auth';

const authConfig = {
    pages: {
        signIn: "/login",
    },
    // callbacks: {
    //     authorized({auth, request: {nextUrl}}) {
    //         const isLoggedIn = !!auth?.user;
    //         const isOnHome = nextUrl.pathname.startsWith("/");
    //
    //         if (isOnHome) { // List unauthorized pages here
    //             return isLoggedIn; // Redirect unauthenticated users to login page
    //         } else if (isLoggedIn) {
    //             return Response.redirect(new URL("/", nextUrl));
    //         }
    //
    //         return true;
    //     },
    // },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export {authConfig};