import { NextResponse } from "next/server";
import { isUserAdmin } from "./app/utils/AuthUtils";

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

    // Check if it is protected path '/philanthropy' for POST
    if (pathname.toLowerCase() === '/api/philanthropy' && request.method == "POST") {
        if (!await isUserAdmin(request)) {
            return new Response("Unauthorized", {status: 401});
        }
    }

    return NextResponse.next();
}