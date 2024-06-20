'use client'

import { useAchievements } from "@/context/AchievementContext";
import { useTranslations } from "next-intl";
import { UserIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ProfileContent(): JSX.Element {
    const { score } = useAchievements();
    const { isLoggedIn } = useAuth();
    const [userTokenJson, setUserTokenJson] = useState<Record<string, any> | null>(null);
    const [email, setEmail] = useState("")
    const t = useTranslations("profile")

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
    }, [isLoggedIn]); useEffect(() => {
        setEmail(userTokenJson?.firstname)
    }, [userTokenJson]);

    return (
        <div className="flex justify-start items-start h-screen">
            <div className="flex flex-col w-1/2 ml-72 my-40 text-neon gap-20 font-robot shadow-inner shadow-black p-10">
                <div className="flex  items-center gap-10 text-4xl">
                    <UserIcon className="h-32 w-32" />
                    <p>{email}</p>
                </div>
                <div className="flex gap-7 text-7xl ml-10">
                    <p>Lvl</p>
                    <p>{score}</p>
                </div>
            </div>
        </div>

    );
}
