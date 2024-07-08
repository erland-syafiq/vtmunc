"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    // Attemps to auto login
    useEffect(() => {
        async function autoLogin() {
            try {
                const response = await fetch("/api/login");
                if (!response.ok) {
                    throw new Error("Invalid credentials");
                }
                const user = await response.json();
                setUser(user);
                console.log(user);
            }
            catch(e) {
            }
        }

        autoLogin();
    }, [])
    
    /**
     * Logs in to backend
     * 
     * @param {string} email 
     * @param {string} password 
     * @throws on server failure and on invalid email and password. Use with try catch statement to get error message
     */
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
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}