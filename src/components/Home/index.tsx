'use client';

import { useEffect, useState } from "react";
import LoginBox from "./LogInBox";
import UserBox from "./UserBox";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export default function Play(): JSX.Element {
    const { isLoggedIn } = useAuth();
    const [userTokenJson, setUserTokenJson] = useState<Record<string, any> | null>(null);
    const [email, setEmail] = useState("");
    const t = useTranslations("home");

    useEffect(() => {
        if (CheckLogin()) {
            const userTokenString = localStorage.getItem('userInfo');
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
        } else {
            setUserTokenJson(null);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        setEmail(userTokenJson?.firstname || "");
    }, [userTokenJson]);

    return (
        <section
            className="bg-cover bg-center h-screen brightness-59 py-20 overflow-hidden"
            style={{ backgroundImage: `url('/assets/images/home-background.jpg')` }}
        >
            <div className="flex flex-col text-center gap-5 h-full">
                <div className="h-50" />
                <div className="grid grid-cols-3 w-full justify-center">
                    <span />
                    <div className="flex justify-center items-center">

                        <Image
                            src="/assets/images/main.png"
                            alt="Main Logo"
                            width={400}
                            height={400}
                        />
                    </div>

                    <Image
                        src="/assets/images/content/home-knight.gif"
                        alt="Knight"
                        width={300}
                        height={300}
                    />

                </div>

                {/* <div className="md:text-7xl text-3xl text-white uppercase select-none font-primary-bold">{t("title")}</div> */}
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
