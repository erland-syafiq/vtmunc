import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getHashedAdminPassword, isUserAdmin, encrypt } from "@/app/utils/AuthUtils";

const { ADMIN_USERNAME } = process.env;

const TOKEN_EXPIRATION_SHORT = 3 * 60 * 60 * 1000;      // 3 hours
const TOKEN_EXPIRATION_LONG = 30 * 24 * 60 * 60 * 1000; // 30 days

export async function POST(request) {
    try {
        // Get email and password for login
        const body = await request.json();
        const { email, password, rememberMe = false } = body;
        
        // Used bcrypt module to stop timing attacks
        if (email !== ADMIN_USERNAME || !await bcrypt.compare(password, await getHashedAdminPassword())) {
            return NextResponse.json({ message: "Unauthorized"}, { status: 401 });
        }
        
        // Create encrypted token with user email and expiration time
        const expiresIn = rememberMe ? TOKEN_EXPIRATION_LONG : TOKEN_EXPIRATION_SHORT;
        const expires = new Date(Date.now() + expiresIn);
        const token = await encrypt({ email, expires }, expires);
        
        // Set cookies 'vtmunc_admin' for admin access
        cookies().set("vtmunc_admin", token, { expires, httpOnly: true });
        
        return NextResponse.json({ username: "Admin", email: email}, { status: 200 }); 
    }
    catch (e) {
        return NextResponse.json({ message: "Unauthorized"}, { status: 401 });
    }
}

export async function GET(request) {
    if (!await isUserAdmin(request)) {
        return NextResponse.json({ message: "Invalid cookie"}, { status: 401 });
    }

    return NextResponse.json({ username: "Admin", email: ADMIN_USERNAME}, { status: 200 });
}
