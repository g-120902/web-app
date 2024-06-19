'use client'

import { checkLogin } from "@/utils/helper";
import { FormEvent, useEffect, useState } from "react";
import { Link } from '@/i18n/navigation';
import React from "react";
import signIn, { SignInResponse } from "@/components/common/firebase/auth/signin";
import Cookies from "js-cookie";
import { cacheData } from "@/utils/storage";
import { useRouter } from "next/navigation";
/**
 * This contain the login page
 * 
 *
 * @author Tariq Khodadin <khodadint@gmail.com>
 * @since 2024-06-19
 *
 * @returns {Login} Login component
 */

export default function Login(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    useEffect(() => {
        setIsLoggedIn(checkLogin());
        
    }, []);

    
    const handleForm = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
          // Handle response if necessary

         const { result, error }: SignInResponse = await signIn(email, password);
    
        if (error) {
            alert("Wrong email or password");
            console.log(error);
            return;
        }
        // else successful
        const userJson = JSON.stringify(result.user.toJSON());
        Cookies.set('userToken', userJson, { expires: 7 }); // Cookie expires in 7 days
       // console.log(Cookies.get("userToken"))
        cacheData("true","login");

        router.push('/'); // Redirect to the desired route (e.g., homepage)

    };
    return (
        <div className="wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }} >
            <div className="form-wrapper ">
                <h1 className="mt-60 mb-30">Sign up</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button type="submit">Sign in</button>
                </form>
            </div>

        </div>);

}
