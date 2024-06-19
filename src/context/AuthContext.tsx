'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AuthContextType = {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setLoggedIn: () => { },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setLoggedIn = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
    };

    useEffect(() => {
        if (CheckLogin()) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
