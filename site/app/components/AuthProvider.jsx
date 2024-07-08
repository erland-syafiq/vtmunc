"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    
    async function login(email, password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) { 
            throw new Error("Invalid email and password");
        } 
        const user = await response.json();

        setUser(user);
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