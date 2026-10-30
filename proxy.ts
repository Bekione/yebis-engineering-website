import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isMaintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== undefined
      ? process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
      : process.env.MAINTENANCE_MODE !== undefined
      ? process.env.MAINTENANCE_MODE === "true"
      : true;

  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Block the corporate portfolio PDF and any other PDF assets during maintenance
  if (pathname.endsWith(".pdf") || pathname === "/portfolio-doc") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow Next.js internals, brand images, icons, and SEO discovery files.
  // PDFs are intentionally NOT in this allowlist.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/android-chrome") ||
    pathname.startsWith("/apple-touch-icon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/site.webmanifest" ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".webp") ||
    (pathname.startsWith("/assets") && !pathname.endsWith(".pdf"))
  ) {
    return NextResponse.next();
  }

  // Intercept API routes with 503 Service Unavailable
  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      {
        error: "Service Temporarily Unavailable",
        message:
          "The Yebis Engineering website is temporarily undergoing scheduled maintenance.",
      },
      {
        status: 503,
        headers: {
          "Retry-After": "86400",
        },
      }
    );
  }

  // Rewrite all page routes to the root maintenance page
  if (pathname !== "/") {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and pure image/icon assets.
    // PDFs are explicitly processed and redirected.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
