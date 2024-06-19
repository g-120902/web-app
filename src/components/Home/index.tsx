'use client';

import { useEffect, useState } from "react";
import LoginBox from "./LogInBox";
import UserBox from "./UserBox";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";

export default function Play(): JSX.Element {
    const { isLoggedIn } = useAuth();
    const [userTokenJson, setUserTokenJson] = useState<Record<string, any> | null>(null);
    const [email, setEmail] = useState("")
    const t = useTranslations("home")
    useEffect(() => {
        if (CheckLogin()) {
            const userTokenString = localStorage.getItem('userInfo')
            if (userTokenString) {
                try {
                    const parsedToken = JSON.parse(userTokenString);
                    setUserTokenJson(parsedToken);
                } catch (error) {
                    console.error('Failed to parse user token from cookie:', error);
                    setUserTokenJson(null);
                }
            } else {
                setUserTokenJson(null);
            }
        }
        else {
            setUserTokenJson(null)
        }
    }, [isLoggedIn]);
 
    useEffect(() => {
        setEmail(userTokenJson?.firstname)
    }, [userTokenJson]);

    return (
        <section
            className="bg-cover bg-center h-screen brightness-59 py-40"
            style={{ backgroundImage: `url('/assets/images/home-background.jpg')` }}
        >
            <div className="flex flex-col text-center gap-8 h-full">
                <div className="h-full"/>
                <div className="md:text-7xl text-3xl text-white uppercase select-none font-primary-bold">{t("title")}</div>
                <div className={`${isLoggedIn ? `` : `hidden`}`}>
                    <UserBox email={email} />

                </div>
                <div className={`${isLoggedIn ? `hidden` : ``}`}>
                    <LoginBox />

                </div>
            </div>
        </section>

    );
}
