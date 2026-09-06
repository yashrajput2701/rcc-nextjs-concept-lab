import { NextRequest, NextResponse } from "next/server";

// CONCEPT 23: Proxy (formerly "Middleware", renamed in Next.js 16).
// This file, at the project root (src/proxy.ts, since we're using a src/
// directory), runs BEFORE a request reaches any route, intercepting it at
// the network boundary. As of Next.js 16 it runs on the Node.js runtime by
// default (older versions used the Edge runtime), and the convention was
// renamed from `middleware.ts`/`middleware()` to `proxy.ts`/`proxy()` to
// avoid confusion with Express-style middleware and to better describe what
// it actually does. `middleware.ts` still works but is deprecated.
// Analogy: it's the bouncer at the door, checked before anyone even reaches
// a specific room (route) — good for redirects, header injection, and
// coarse gating, but NOT a substitute for checking auth again inside the
// actual page/route handler for anything sensitive.
export function proxy(request: NextRequest) {
  const isLoggedIn = request.cookies.has("demo_session");

  if (
    request.nextUrl.pathname.startsWith("/concepts/protected") &&
    !isLoggedIn
  ) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Demonstrate adding a response header from the proxy — visible in
  // devtools → Network → Headers on any request.
  const response = NextResponse.next();
  response.headers.set("x-rcc-proxy", "ran");
  return response;
}

// The matcher config limits which paths trigger this proxy, so it doesn't
// run on every single asset request (fonts, images, etc.) — good for
// performance.
export const config = {
  matcher: ["/concepts/protected/:path*", "/login"],
};
