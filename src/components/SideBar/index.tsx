'use client';

import { motion, PanInfo } from 'framer-motion';
import { HomeIcon, UserCircleIcon, ArrowLeftStartOnRectangleIcon, TrophyIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import SidebarItem from './SideBarItem';
import { useTranslations } from 'next-intl';
import '@/utils/helper';
import { Link } from '@/i18n/navigation';
import { removeData } from '@/utils/storage';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '@/context/AuthContext';
import { checkLogin } from '@/utils/helper';

export default function SideBar(): JSX.Element {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [loginAction, setLoginAction] = useState('login');
    const [width, setWidth] = useState(28);
    const { isLoggedIn, setLoggedIn } = useAuth();

    const handleHovered = () => {
        setIsHovered(!isHovered);
    };

    const handleExpand = () => {
        setWidth(28)
        setDragging(false)
        setIsExpanded(true);
    };
    const handleRetract = () => {
        setWidth(28)
        setDragging(false)
        setIsExpanded(false);
    };
    
    const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        setDragging(true)
        const newWidth = Math.min(Math.max(28, info.point.x), 200);
        setWidth(newWidth);
    };

    const logOut = () => {
        removeData('login');
        setLoginAction('login');
        setLoggedIn(false)
    };

    const t = useTranslations('side-bar');
    useEffect(() => {
        if (checkLogin()) {
            setLoginAction('profile');
        } else {
          setLoginAction('login');
        }
      }, [isLoggedIn]);

    useEffect(() => {
        document.addEventListener('mousedown', handleRetract);

        return () => {
            document.removeEventListener('mousedown', handleRetract);
        };
    },);
    useEffect(() => {
        setIsHovered(false)
    },[isLargeScreen]);
    return (
        <>
            <motion.div
                className="absolute top-0 left-0 h-full w-fit shadow-md shadow-black z-50 select-none flex bg-base-gray"
                whileHover={isHovered && isLargeScreen ? { minWidth: '13rem' } : {}}
                style={dragging ?{ left: `${-width}px` } :{}}
                onHoverStart={handleHovered}
                onHoverEnd={handleHovered}
                onBlur={handleExpand}
            >
                <motion.div
                    className={`flex flex-col bg-base-gray h-full justify-center sm:hidden ${isExpanded ? 'hidden' : ''}`}
                    style={{ width: `${width}px` }}
                    onDrag={handleDrag}
                    onDragEnd={handleExpand}
                    drag={"x"}
                    dragConstraints={{ left: 0, right: 0 }}
                >
                    <ChevronRightIcon className='w-6 h-6 text-neon' />
                </motion.div>
                <div
                    className={`bg-base-gray w-full h-full py-48 sm:flex flex-col px-6 gap-6 ${isExpanded ? 'flex' : 'hidden'}`}
                >
                    <Link href="/">
                        <SidebarItem
        
                            icon={<HomeIcon className="md:h-7 md:w-7 h-5 w-5" />}
                            text={t('home')}
                            isHovered={isHovered}
                            isLargeScreen={isLargeScreen}
                        />
                    </Link>

                    <Link href={loginAction}>
                        <SidebarItem
                            icon={<UserCircleIcon className="md:h-7 md:w-7 h-5 w-5" />}
                            text={t(loginAction)}
                            isHovered={isHovered}
                            isLargeScreen={isLargeScreen}
                        />
                    </Link>
                    <Link href="/achievements">
                        <SidebarItem
                            icon={<TrophyIcon className="md:h-7 md:w-7 h-5 w-5" />}
                            text={t('achievements')}
                            isHovered={isHovered}
                            isLargeScreen={isLargeScreen}
                        />
                    </Link>
                    <div className="mt-60">
                        <LanguageSwitcher />
                    </div>
                    <div
                        className={`whitespace-nowrap flex gap-2 md:text-sm text-xs text-neon hover:text-bubblegum cursor-pointer md:ml-2 ${isLoggedIn ? '': 'hidden'}`}
                        onClick={logOut}
                    >
                        <ArrowLeftStartOnRectangleIcon className="md:h-6 md:w-6 h-4 w-4" />
                        {t('logout')}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
