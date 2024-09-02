import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getCookie } from "./lib/cookie";

const protectedRoutes = [
  "/posts",
  "/posts/",
  "/images",
  "/videos",
  "/file-upload",
  "/login",
];

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  const token = getCookie("test-token");

  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (isProtectedRoute) {
    if (token && pathname === "/login") {
      return NextResponse.redirect(new URL("/", nextUrl));
    }

    if (!token && pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
