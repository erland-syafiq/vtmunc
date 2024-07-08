import { SignJWT, jwtVerify } from 'jose';
import bcrypt from "bcryptjs";

// Encode the secret key as bytes
const { JWT_SECRET, ADMIN_PASSWORD } = process.env;
const key = new TextEncoder().encode(JWT_SECRET);

// Hashed password
const SALT_ROUNDS = 10
let hashedAdminPassword = "";

/**
 * Returns hashed admin password to compare with bcrypt.compare
 * @returns {string} hashed admin password
 */
export async function getHashedAdminPassword() {
  if (!hashedAdminPassword) {
    hashedAdminPassword = await bcrypt.hash(ADMIN_PASSWORD, SALT_ROUNDS);
  }
  return hashedAdminPassword;
}



/**
 * Checks if user is admin
 * @param {Request} request 
 * @returns {bool} true if user is admin, false if it is not
 */
export async function isUserAdmin(request) {
    // Retrieve the cookie value from the request
    const token = request.cookies.get("vtmunc_admin")?.value;
    
    if (!token) {
      return false;
    }

    // If we have cookies we then decrypt
    try {
        await decrypt(token);
        return true;
    } catch (error) {
        return false;
    }

}


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

