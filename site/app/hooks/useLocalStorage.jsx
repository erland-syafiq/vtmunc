"use client";

import { useEffect, useState } from "react";

/**
 * 
 * Hook to automatically save state to local storage.
 * 
 * @param {string} key - unique key for storage 
 * @param {any | Function} initialValue - initial value can be function
 * @returns the same values as setState
 */
export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(initialValue);

    function setStoredState(newState) {
        localStorage.setItem(key, JSON.stringify(newState));
        setState(newState);
    }

    useEffect(() => {
        const savedValue = localStorage.getItem(key);

        if (savedValue) {
            setState(JSON.parse(savedValue))
        }
        else {
            localStorage.setItem(key, JSON.stringify(newState));
        }
    }, [])

    return [state, setStoredState];
}