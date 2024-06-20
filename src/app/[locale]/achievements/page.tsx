'use client'
import AchievementPage from "@/components/AchivementList";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const AchievementsPage = () => {
  const { isLoggedIn } = useAuth();
    const [userTokenJson, setUserTokenJson] = useState<Record<string, any> | null>(null);
    const [email, setEmail] = useState("")
    const [uid, setUid] = useState("")
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
    useEffect(() => {
      setUid(userTokenJson?.userid)
  }, [userTokenJson]);



    if (!uid) {
        return <div>Please log in to view your achievements.</div>;
    }

    return (
        <div>
            <AchievementPage userId={uid} />
        </div>
    );
};

export default AchievementsPage;
