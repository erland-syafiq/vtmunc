import { SignJWT, jwtVerify } from 'jose';

// Encode the secret key as bytes
const { JWT_SECRET } = process.env;
const key = new TextEncoder().encode(JWT_SECRET);


// Encrypt payload into token to be used in our cookie
export async function encrypt(payload) {
    const expirationTime = Math.floor(Date.now() / 1000) + (3 * 60 * 60);
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" }) 
      .setIssuedAt() 
      .setExpirationTime(expirationTime) 
      .sign(key); 
}

// Decrypt key and return payload from an encrypted token
export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"], 
    });
    return payload;
}