'use client';

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { removeData } from "@/utils/storage";
import signout from "../common/firebase/auth/signout";
/**
 * This contain the logout page
 * 
 *
 * @author Tariq Khodadin <khodadint@gmail.com>
 * @since 2024-06-19
 *
 * @returns {Logout} Logout component
 */

export default function Logout(): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        // Remove the authentication cookie
        Cookies.remove('userToken');
        removeData("login")
        signout // firebase
        // Redirect to the login page
        router.push("/");
    }, [router]);

    return (
        <div className="logout-wrapper">
            <h1 className="mt-60 mb-30">Logging out...</h1>
        </div>
    );
}
