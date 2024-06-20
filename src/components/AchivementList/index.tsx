import React, { useEffect, useState } from "react";
import { fetchUserAchievements, Achievement } from "@/components/common/firebase/db/getAchivement";

export default function AchievementPage({ userId }: { userId: string }): JSX.Element {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAchievements = async () => {
            const updatedAchievements = await fetchUserAchievements(userId);
            setAchievements(updatedAchievements);
            setLoading(false);
        };

        fetchAchievements();
    }, [userId]);

    const toggleAchievementStatus = async (achievementName: string, currentStatus: boolean) => {
        setAchievements(prevAchievements =>
            prevAchievements.map(ach =>
                ach.name === achievementName ? { ...ach, status: !currentStatus } : ach
            )
        );
    };

    if (loading) {
        return <div>Loading achievements...</div>;
    }

    return (
        <div>
            <h1>Achievements</h1>
            <ul>
                {achievements.map(achievement => (
                    <li key={achievement.name}>
                        {achievement.name}: {achievement.status ? "Completed" : "Incomplete"}
                        <button onLoad={() => toggleAchievementStatus(achievement.name, achievement.status)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
