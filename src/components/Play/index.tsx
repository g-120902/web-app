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
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <video 
                autoPlay 
                muted 
                loop 
                style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    objectFit: 'cover', 
                    zIndex: '-1' 
                }}
            >
                <source src="/assets/videos/BackgroundPlay.mp4" type="video/mp4" />
                Hmm your browser does not support playback of videos! Sadge
            </video>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', zIndex: '1', color: 'white' }}>
                <h1>The Paragon Game</h1>
                {isLoggedIn && userTokenJson ? (
                    <div>
                        Play as {userTokenJson.email}
                    </div>
                ) : (
                    <>
                        <div>
                            <img className="button-img"  src="/assets/images/Guest.png" alt="Play as Guest" style={{ width: '170px', height: 'auto', cursor: 'pointer', marginBottom: '.1px' }} 
 />
                        </div>


                        <Link href='login'> 
                            <div> 
                                <img  className="button-img" src="/assets/images/Login.png" alt="Log In"  style={{ width: '200px', height: 'auto', cursor: 'pointer' }} 
 />
                            </div> 
                        </Link>
                    </>
                )}
            </div>

            <style jsx>{`
    .button-img {
        width: 150px;
        height: auto;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .button-img:hover {
        transform: scale(1.1);
    }
`}</style>

        </div>
    );
}
