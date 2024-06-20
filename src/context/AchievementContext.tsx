'use client';
import { fetchUserAchievements } from '@/components/common/firebase/db/getAchivement';
import { checkLogin } from '@/utils/helper';
import { cacheData } from '@/utils/storage';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AchievementState = {
    constant: boolean;
    variable: boolean;
    loop: boolean;
    array: boolean;
    queue: boolean;
    stack: boolean;
    dictionary: boolean;
    linked_list: boolean;
    binary_tree: boolean;
};

type AchievementContextType = {
    achievements: AchievementState;
    setAchievement: (key: keyof AchievementState, value: boolean) => void;
    score: number;
};

const initialAchievements: AchievementState = {
    constant: false,
    variable: false,
    loop: false,
    array: false,
    queue: false,
    stack: false,
    dictionary: false,
    linked_list: false,
    binary_tree: false,
};

const AchievementContext = createContext<AchievementContextType>({
    achievements: initialAchievements,
    setAchievement: () => {},
    score: 0,
});

export const AchievementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [achievements, setAchievements] = useState<AchievementState>(initialAchievements);
    const [score, setScore] = useState<number>(0);
    const userTokenString = localStorage.getItem('userInfo');

    const setAchievement = (key: keyof AchievementState, value: boolean) => {
        setAchievements((prev) => {
            localStorage.removeItem('achievements')
            const newAchievements = { ...prev, [key]: value };
            cacheData(newAchievements, 'achievements');
            return newAchievements;
        });
    };

    useEffect(() => {
        if (userTokenString && checkLogin()) {
            const fetchAchievements = async () => {
                try {
                    const userTokenStringJson = JSON.parse(userTokenString);
                    const updatedAchievements = await fetchUserAchievements(userTokenStringJson.uid);
                    setAchievements((prev) => ({
                        ...prev,
                        ...updatedAchievements.reduce((acc, achievement) => {
                            acc[achievement.name as keyof AchievementState] = achievement.status;
                            return acc;
                        }, {} as Partial<AchievementState>),
                    }));
                } catch (error) {
                    console.error("Failed to fetch achievements:", error);
                }
            };

            fetchAchievements();
        }
    }, [userTokenString]);

    useEffect(() => {
        const calculateScore = () => {
            let newScore = 0;
            Object.keys(achievements).forEach((key) => {
                if (achievements[key as keyof AchievementState]) {
                    newScore += 1;
                }
            });
            setScore(newScore);
        };

        calculateScore();
    }, [achievements]);

    return (
        <AchievementContext.Provider value={{ achievements, setAchievement, score }}>
            {children}
        </AchievementContext.Provider>
    );
};

export const useAchievements = () => useContext(AchievementContext);
