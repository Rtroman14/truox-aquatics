import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const config = {
    matcher: ["/training-videos/:path*", "/training-videos"],
};

export async function middleware(req) {
    const requestHeaders = new Headers(req.headers);

    let response = NextResponse.next({
        request: {
            headers: req.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return req.cookies.get(name)?.value;
                },
                set(name, value, options) {
                    req.cookies.set({
                        name,
                        value,
                        ...options,
                    });
                    response = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    });
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    });
                },
                remove(name, options) {
                    req.cookies.set({
                        name,
                        value: "",
                        ...options,
                    });
                    response = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    });
                    response.cookies.set({
                        name,
                        value: "",
                        ...options,
                    });
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        if (req.nextUrl.pathname === "/") {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    });
}
