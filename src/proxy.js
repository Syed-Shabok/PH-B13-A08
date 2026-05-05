import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  // console.log("Working.");

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if (!session) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  const isProtected =
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/courses");

  if (!session && isProtected) {
    const loginUrl = new URL("/login", request.url);

    // 👇 store where user wanted to go
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/courses/:path"],
};
