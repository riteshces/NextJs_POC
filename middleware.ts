import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionData = cookies().get("session")?.value;

  if (sessionData && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!sessionData && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
