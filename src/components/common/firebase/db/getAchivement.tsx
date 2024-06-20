import { getFirestore, collection, getDoc, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../config";
const db = getFirestore(firebaseApp);

export interface Achievement {
    name: string;
    status: boolean;
}

const achievementsList: Achievement[] = [
    { name: "constant", status: false },
    { name: "variable", status: false },
    { name: "array", status: false },
    { name: "linkedlist", status: false },
    { name: "dictionary", status: false },
    { name: "binaryTree", status: false },
    { name: "queue", status: false },
    { name: "stack", status: false }
];

export async function fetchUserAchievements(userId: string): Promise<Achievement[]> {
    try {
        const achievementsDocRef = doc(db, "achievement", userId);
        const achievementSnapshot = await getDoc(achievementsDocRef);

        if (achievementSnapshot.exists()) {
            const userAchievementsData = achievementSnapshot.data();
            const userAchievements = Object.keys(userAchievementsData).map(key => ({
                name: key,
                status: userAchievementsData[key]
            }));

            // Update hardcoded achievements with user data
            const updatedAchievements = achievementsList.map(achievement => {
                const userAchievement = userAchievements.find(a => a.name === achievement.name);
                return userAchievement ? userAchievement : achievement;
            });
            return updatedAchievements;
        } else {
            console.log("No such document!");
            return achievementsList;
        }
    } catch (error) {
        console.error("Error fetching achievements:", error);
        return achievementsList;
    }

}



