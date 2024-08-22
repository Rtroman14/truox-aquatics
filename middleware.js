import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const protectedRoutes = ["/dashboard"];

export const config = {
    matcher: [
        // "/chatbots/:path*",
        // "/chatbots",
        // "/settings",
        "/((?!_next/static|_next/image|_next/data|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
        // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};

export async function middleware(req) {
    const requestHeaders = new Headers(req.headers);

    const {
        data: { user },
    } = await updateSession(req);

    const protectedRoutesRe = new RegExp(protectedRoutes[0]);

    // * check if route is protected
    if (protectedRoutesRe.test(req.nextUrl.pathname)) {
        if (!user) {
            if (req.nextUrl.pathname === "/") {
                return NextResponse.next();
            }

            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    });
}
