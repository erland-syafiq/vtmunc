"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    async function login(email, password) {
        // Attempt login
        const userEmail = email;
        const userPass = password;
        console.log(userEmail, userPass);

        // Send post request with user email and password
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userEmail, userPass }),
        });

        console.log(response);
        
        if (!response.ok) { 
            throw new Error("Invalid email and password");
        } 

        setUser({
            email: userEmail
        })
    }


    return (    
        <AuthContext.Provider value={{user, setUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}