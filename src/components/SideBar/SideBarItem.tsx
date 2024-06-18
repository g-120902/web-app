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
        <div className="cursor-pointer px-6 flex justify-center items-center gap-3 w-full rounded-full border-neon border-2 p-2 text-neon hover:border-bubblegum hover:text-bubblegum">
            {icon}
            <motion.p
                className="text-lg uppercase mx-4 whitespace-nowrap"
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
