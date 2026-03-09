import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.SITE_SESSION_TOKEN || "";

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Session token missing in env" },
      { status: 500 }
    );
  }

  const response = NextResponse.json({
    success: true,
    message: "Session created",
  });

  response.cookies.set("site_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}