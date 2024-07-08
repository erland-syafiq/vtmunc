import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { encrypt, decrypt } from "@/lib";

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;


export async function POST(request) {
    // Get email and password for login
    const body = await request.json();
    const { userEmail, userPass } = body;
    console.log(body);

    // Verify email and password against our env variables
    if (userEmail === ADMIN_USERNAME && userPass === ADMIN_PASSWORD) {
        // Create encrypted token with user email and expiration time
        const expires = new Date(Date.now() + 3 * 60 * 60 * 1000);
        const token = await encrypt({ userEmail, expires });

        // Set cookies 'vtmunc_admin' for admin access
        cookies().set("vtmunc_admin", token, { expires, httpOnly: true });

        return NextResponse.json({ message: 'Succesful validation' }, { status: 200 }); 
    } 
    else {
        return NextResponse.json({ message: "Failed validation"}, { status: 401 });
    }
}

export async function GET(request) {

    // Get token from cookie
    const token = request.cookies.get("vtmunc_admin")?.value; 

        if (token) {
            // Try to decode cookie
            try {
                const parsed = await decrypt(token);
                return NextResponse.json({ message: "Valid" }, { status: 200 });
            } catch (error) {
                return NextResponse.json({ message: "Invalid token" }, { status: 200 });
            }
        }
    
    return NextResponse.json({ message: "Invalid or missing cookie" }, { status: 200 });
}
