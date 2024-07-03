import { NextResponse } from "next/server";
import { decrypt } from "@/lib";

/**
 * Checks if user is admin
 * @param {Request} request 
 * @returns {bool} true if user is admin, false if it is not
 */
async function isUserAdmin(request) {
    // Retrieve the cookie value from the request
    const token = request.cookies.get("vtmunc_admin")?.value;
    
    if (token) {
        // If we have cookies we then decrypt
        try {
            await decrypt(token);
            return true;
        } catch (error) {
            // If any decryption errors then redirect to login
            return false;
        }
    } else {
        return false;
    }
}

export async function middleware(request) {

    const { pathname, origin } = request.nextUrl;

    // Check if it is protected path '/applicants'
    if (pathname.toLowerCase() === '/applicants') {
        if (!await isUserAdmin(request)) {
            return NextResponse.redirect(origin + '/login');
        }
    }

    // Check if it is protected path '/applicants'
    if (pathname.toLowerCase() === '/api/applicants' && request.method !== "POST") {
        if (!await isUserAdmin(request)) {
            return new Response("Unauthorized", {status: 401});
        }
    }

    return NextResponse.next();
}