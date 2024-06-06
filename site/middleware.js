import { NextResponse } from "next/server";

export function middleware(request) {
    if (/[A-Z]/.test(request.nextUrl.pathname)) {
        const url = request.nextUrl.clone();
        url.pathname = url.pathname.toLowerCase();
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}