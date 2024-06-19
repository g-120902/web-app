'use client';

import { checkLogin } from "@/utils/helper";
import { useEffect, useState } from "react";
import { Link } from '@/i18n/navigation';
import Cookies from "js-cookie";

export default function Play(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userTokenJson, setUserTokenJson] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        setIsLoggedIn(checkLogin());
        
        // Attempt to retrieve and parse the user token
        const userTokenString = Cookies.get('userToken');
        if (userTokenString) {
            try {
                const parsedToken = JSON.parse(userTokenString);
                setUserTokenJson(parsedToken);
            } catch (error) {
                console.error('Failed to parse user token from cookie:', error);
                setUserTokenJson(null); // Reset in case of error
            }
        } else {
            setUserTokenJson(null); // Reset if no user token found
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>The Paragon Game</h1>
            {isLoggedIn && userTokenJson ? (
                <div>
                    Play as {userTokenJson.email}
                </div>
            ) : (
                <>
                    <div>Play as Guest</div>
                    <Link href='login'> <div>Log In</div> </Link>
                </>
            )}
        </div>
    );
}
