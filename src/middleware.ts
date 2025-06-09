import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname;

  const token = request.cookies.get("signInToken")?.value || "";

  if (token && (path === "/signIn" || path === "/signUp")) {
    const response = NextResponse.redirect(new URL("/dashboard", url));
    return response;
  }

  if (!token && path === "/dashboard") {
    const response = NextResponse.redirect(new URL("/signIn", url));
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signIn", "/signUp", "/dashboard"],
};
