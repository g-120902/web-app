'use client'

import { motion } from 'framer-motion';
import { HomeIcon, UserCircleIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import SidebarItem from './SideBarItem';
import { useTranslations } from 'next-intl';
import '@/utils/helper';
import { Link } from '@/i18n/navigation';
import { removeData } from '@/utils/storage';

export default function SideBar(): JSX.Element {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const [isHovered, setIsHovered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState("login")

    const handleHovered = () => {
        setIsHovered(!isHovered);
    };
    const logOut = () => {
        removeData('login')
        setIsLoggedIn("login");
    };

    const t = useTranslations("side-bar")
    useEffect(() => {

        if (CheckLogin()) {
            setIsLoggedIn("profile")
        }
        else {
            setIsLoggedIn("login")
        }
    }, [isLoggedIn]);

    return (
        <>
            <motion.div
                className="absolute top-0 left-0 h-full w-fit bg-white shadow-md shadow-black z-50 select-none"
                animate={isHovered ? { minWidth: "13rem" } : {}}
                onHoverStart={handleHovered}
                onHoverEnd={handleHovered}
            >
                <div className="bg-base-gray w-full h-full py-48 flex flex-col px-6 gap-6">
                    <Link href={"/"}>

                        <SidebarItem
                            icon={<HomeIcon className="h-8 w-8" />}
                            text={t("home")}
                            isHovered={isHovered}
                            isLargeScreen={isLargeScreen}
                        />
                    </Link>

                    <Link href={isLoggedIn}>
                        <SidebarItem
                            icon={<UserCircleIcon className="h-8 w-8" />}
                            text={t(isLoggedIn)}
                            isHovered={isHovered}
                            isLargeScreen={isLargeScreen}
                        />
                    </Link>
                    <div
                        className='whitespace-nowrap flex gap-2 text-sm text-neon hover:text-bubblegum cursor-pointer ml-2 mt-60'
                        onClick={logOut}>
                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
                        {t("logout")}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
