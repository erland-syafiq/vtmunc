"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const isAuthenticated = Object.keys(user).length > 0;

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
            }
            catch(e) {
            }
        }

        autoLogin();
    }, [])
    

    async function login(email, password, rememberMe = false) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, rememberMe }),
        });
        
        if (!response.ok) { 
            throw new Error("Invalid email and password");
        } 
    }

    async function logout() {
        try {
            const response = await fetch("/api/logout");
            
            if (!response.ok) {
                throw new Error("Server error");
            }

            setUser({});
            window.location.href = "/";
        }
        catch (e) {
        }
    }

    

    return (    
        <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * Objects that can be obtained from useAuth
 * 
 * user: {
 *  email: string,
 *  username: string
 * }
 * 
 * login: (email: string, password: string, rememberMe?: boolean) => ();
 * Logs in user, doesn't automatically call setUser
 * Note: throws on server failure and on invalid email and password. Use with try catch statement to get error message
 * 
 * logout: () => ();
 * Logouts out user and auto-directs to the home page
 */
export function useAuth() {
    return useContext(AuthContext);
}