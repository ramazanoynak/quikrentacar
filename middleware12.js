import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard/db-dashboard"];

export default function middleware(req) {
  const token = req.cookies.get("authToken");
  //console.log(token, 'Auth server token')
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
