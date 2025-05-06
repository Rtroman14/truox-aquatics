import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const protectedRoutes = ["/dashboard", "/admin"];
const adminUserIds = [
    "03841b00-7050-4835-b263-041d394bae4a",
    "31bf6f6a-afb3-430b-b914-b0c8d87fca7c",
    "73e65e07-d19e-4e71-a7bb-0b177244d5f4",
];

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
    const adminRoutesRe = new RegExp("/admin");

    // Check if route is an admin route
    if (adminRoutesRe.test(req.nextUrl.pathname)) {
        // Verify user exists and has one of the allowed admin IDs
        if (!user || !adminUserIds.includes(user.id)) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    }
    // Check if route is protected (non-admin)
    else if (protectedRoutesRe.test(req.nextUrl.pathname)) {
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
