import { NextResponse } from "next/server";
import { decrypt } from "@/lib";

export async function middleware(request) {

    const { pathname, origin } = request.nextUrl;
    const url = request.nextUrl.clone();
    // Takes origin and adds /login which is our login page
    const loginUrl = origin + '/login'

    // Check if it is protected path '/admin'
    if (pathname.toLowerCase() === '/admin') {

        // Retrieve the cookie value from the request
        const token = request.cookies.get("vtmunc_admin")?.value; 

        if (token) {
            // If we have cookies we then decrypt
            try {
                const parsed = await decrypt(token);
            } catch (error) {
                // If any decryption errors then redirect to login
                return NextResponse.redirect(loginUrl);
            }
        } else {
            return NextResponse.redirect(loginUrl);
        }
    }
    
    // Redirect all urls to lowercase
    if (/[A-Z]/.test(request.nextUrl.pathname)) {
        url.pathname = pathname.toLowerCase();
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}