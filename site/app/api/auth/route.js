import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

const { USERNAME, PASSWORD, JWT_SECRET } = process.env;


export async function POST(request) {
    // Get email and password for login
    const body = await request.json();
    const { userEmail, userPass } = body;

    // Verify email and password against our env variables
    if (userEmail === USERNAME && userPass === PASSWORD) {
        const token = jwt.sign({ userEmail }, JWT_SECRET, { expiresIn: '1h' }); 
       const response = NextResponse.json({ message: 'Succesful validation' }, { status: 200 });
       // Set cookie to return to client
       response.cookies.set('Set-Cookie', `vtmunc_token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/`);
       return response;  
    } 
    else {
        return NextResponse.json({ message: "Failed validation"}, { status: 200 });
    }
}

export async function GET(request) {
    // Get our cookie from request
    const token = request.cookies.get('Set-Cookie');
    
    if (token) {
        // Parse to get our vtmunc token
        const { value } = token;
        const vtmunc_token = value.split(';')[0].split('=')[1];

        // Try to decode cookies
        try {
            const decoded = jwt.verify(vtmunc_token, JWT_SECRET);
            console.log(decoded);
            return NextResponse.json({ message: "Valid" }, { status: 200 });
        } 
        catch (error) {
            return NextResponse.json({ message: "Invalid token" }, { status: 200 });
        }        
    }

    return NextResponse.json({ message: "Invalid or missing cookie" }, { status: 200 });
}
