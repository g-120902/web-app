'use client'
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    isHovered: boolean;
    isLargeScreen: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, text, isHovered, isLargeScreen }) => {
    return (
        <div className="font-primary-light shadow-black shadow-xl cursor-pointer px-6 py-1 flex justify-center items-center gap-3 w-full border-black bg-neon rounded-md border-2 text-black hover:border-bubblegum hover:text-bubblegum">
            {icon}
            <motion.p
                className="text-md uppercase mx-4 whitespace-nowrap"
                initial={{ display: "none" }}
                animate={isHovered && isLargeScreen ? { display: "block" } : {}}
                transition={{ duration: 0.1, ease: "easeIn" }}
            >
                {text}
            </motion.p>
        </div>
    );
}

export default SidebarItem;
