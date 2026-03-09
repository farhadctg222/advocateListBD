import { NextResponse } from "next/server";

export function middleware(req) {
  const pathname = req.nextUrl.pathname;

  // শুধু /api route protect হবে
  if (!pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // session create route allow
  if (pathname.startsWith("/api/auth/session")) {
    return NextResponse.next();
  }

  const requestedWith = req.headers.get("x-site-request") || "";
  const cookieToken = req.cookies.get("site_session")?.value || "";
  const validToken = process.env.SITE_SESSION_TOKEN || "";

  if (requestedWith !== "advocatelistbd") {
    return NextResponse.json(
      { success: false, message: "Forbidden: Invalid Request Header" },
      { status: 403 }
    );
  }

  if (!validToken || cookieToken !== validToken) {
    return NextResponse.json(
      { success: false, message: "Forbidden: Invalid Session" },
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};