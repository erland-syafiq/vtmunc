import { NextResponse } from "next/server";

export function middleware(request) {
    
    if (/[A-Z]/.test(request.nextUrl.pathName)) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.toLowerCase();
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}