'use client'

import { motion } from 'framer-motion';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import SidebarItem from './SideBarItem';
import { useTranslations } from 'next-intl';
import '@/utils/helper'; // Import your global helpers file

export default function SideBar(): JSX.Element {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const [isHovered, setIsHovered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState("login")
    const handleHovered = () => {
        setIsHovered(!isHovered);
    };
    const t = useTranslations("side-bar")

    useEffect(() => {
       
        if(CheckLogin()) {
            setIsLoggedIn("profile")
        }
        else {
            setIsLoggedIn("login")
        }
      }, []);
    
    return (
        <>
            <motion.div
                className="absolute top-0 left-0 h-full w-fit bg-white shadow-md shadow-black z-50"
                animate={isHovered ? { minWidth: "12rem" } : {}}
                onHoverStart={handleHovered}
                onHoverEnd={handleHovered}
            >
                <div className="bg-base-gray w-full h-full py-28 flex flex-col px-6 gap-6">
                    <SidebarItem
                        icon={<HomeIcon className="h-8 w-8" />}
                        text={t("home")}
                        isHovered={isHovered}
                        isLargeScreen={isLargeScreen}
                    />
                    <SidebarItem
                        icon={<UserCircleIcon className="h-8 w-8" />}
                        text={t(isLoggedIn)}
                        isHovered={isHovered}
                        isLargeScreen={isLargeScreen}
                    />
                </div>
            </motion.div>
        </>
    );
}
