'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAchievements } from "@/context/AchievementContext";
import { useTranslations } from "next-intl";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AchievementPage(): JSX.Element {
    const [hasRefreshed, setHasRefreshed] = useState(false);
    const router = useRouter();
    const { achievements } = useAchievements();
    const t = useTranslations();

    useEffect(() => {
        if (!hasRefreshed) {
            setHasRefreshed(true);
            router.refresh(); // Forces a page refresh
        }
    }, [hasRefreshed, router]);

  
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center bg-base-white w-2/5 h-full flex justify-center items-center flex-col shadow-inner shadow-black">
                <h1 className="text-4xl font-bold mb-4 font-primary-bold uppercase text-black">{t('side-bar.achievements')}</h1>
                <div className="flex flex-col items-start font-robot gap-3 w-full px-20">
                    {Object.keys(achievements).map(key => {
                        const typedKey = key as keyof typeof achievements;
                        return (
                            <div key={typedKey} className={`bg-black px-5 py-2 text-lg rounded-2xl  grid grid-cols-2 gap-4 w-full ${achievements[typedKey] ? `text-green-600` : `text-red-700`}`}>
                                <p className="whitespace-nowrap ">
                                    {'- ' + t("achievements."+typedKey)}
                                </p>
                                <XMarkIcon className={`${achievements[typedKey] ? `hidden` : `h-8 w-8`}`} />
                                <CheckIcon className={`${achievements[typedKey] ? `h-8 w-8` : `hidden`}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
