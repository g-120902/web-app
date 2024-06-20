'use client';

import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useAchievements } from "@/context/AchievementContext";

type LevelQueueProps = {
    intro: string;
    introSec: string;
    introThird: string;

    def: string;
    defSecond: string;
    defThird: string;
    defFourth: string;
    defFifth: string;
    exFirst: string;
    exSecond: string;
    exThird: string;

    chalFirst: string;
    chalSuccess: string;
    chalFailure: string;
};

export default function Constant({
    intro,
    introSec,
    introThird,

    def,
    defSecond,
    defThird,
    defFourth,
    defFifth,
    exFirst,
    exSecond,
    exThird,

    chalFirst,
    chalSuccess,
    chalFailure,

}: LevelQueueProps): JSX.Element {
    const texts = [
        intro,
        introSec,
        introThird,
        def,
        defSecond,
        defThird,
        defFourth,
        defFifth,
        exFirst,
        exSecond,
        exThird,
        chalFirst,
        chalSuccess,
        chalFailure,
    ];

    const images = [
        "/assets/images/content/queue/front.png",
        "/assets/images/content/queue/rear.png",
        "/assets/images/content/queue/Enqueue.gif",
        "/assets/images/content/queue/DequeueWhite.gif",
        "/assets/images/content/queue/queue_Alice.png",
        "/assets/images/content/queue/queue_Bob.png",
        "/assets/images/content/queue/queue_Sam.png",
        "/assets/images/content/queue/queue_Terry.png"

    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);
    const [achievementDisplay, setAchievementDisplay] = useState(false);
    const { setAchievement } = useAchievements();
    const [stopDisplay, setStopDisplay] = useState(false);
    const [won, setWon] = useState(0);

    const t = useTranslations("achievements")

    const handleNextText = () => {
        if (!stopDisplay) {
            setCurrentTextIndex((prevIndex) => {

                    setAchievementDisplay(false)
                    const nextIndex = (prevIndex + 1) % texts.length;
                    if (texts[nextIndex] === defSecond) {
                        setCurrentImageIndex(0);
                    } else if (texts[nextIndex] === defThird) {
                        setCurrentImageIndex(1);
                    } else if (texts[nextIndex] === defFourth) {
                        setCurrentImageIndex(2);
                    } else if (texts[nextIndex] === defFifth) {
                        setCurrentImageIndex(3);
                    } else if (texts[nextIndex] === exSecond) {
                        setCurrentImageIndex(4);
                    }
                    return nextIndex;

                

            });
        }

    };
    const handleTest = (result: number) => () => {
        if (stopDisplay) {
            if (won == 0 && result == 1) {
                setWon(1)
            } else if (won == 1 && result == 2) {
                setCurrentTextIndex((prevIndex) => {
                        const nextIndex = (prevIndex + 2) % texts.length;
                       
                        setWon(0)
                        return nextIndex;
    
                    
                    
                });
            }
        
    
    }
};
return (
    <>
        <section className="bg-cover bg-center h-screen brightness-59 py-10 w-screen">
            <div className="flex flex-col gap-28 p-4 md:mx-44 mx-8 font-primary-bold text-2xl w-full">
                <div className="flex flex-col md:flex-row md:gap-2 gap-10 w-full justify-start items-center m-auto">
                    <div className="w-2/6 h-2/6 self-start select-none">
                        <Image src="/assets/images/content/robot.png" alt={"robot"} width={400} height={400} />
                    </div>
                    <div className="flex w-screen select-none cursor-pointer" onClick={handleNextText} >
                        <div className="bg-default w-10 shadow-chatbox rounded-br-3xl" />
                        <div className="bg-white text-base font-robot px-10 py-6 md:w-2/6 w-3/4 text-overflow-ellipsis rounded-t-2xl rounded-br-2xl">
                            <p className="whitespace-wrap text-justify">{texts[currentTextIndex]}</p>
                        </div>
                        <ArrowRightCircleIcon className="text-white h-6 w-6 self-end ml-2 blink-icon" />
                    </div>
                </div>
                <div className={`bg-green-200 border-2 border-green-900 uppercase text-green-900 rounded-lg px-20 py-10 w-fit h-fit  ${achievementDisplay ? `` : `hidden`}`}>
                    {t("stack")}
                </div>
                <div className={`h-2/6 self-start select-none w-full cursor-pointer ${currentImageIndex >= 0 && currentImageIndex <= 3 ? `` : `hidden`}`} >
                    <Image src={images[currentImageIndex]} alt={"robot"} width={400} height={400} className="w-1/6 shadow-lg shadow-black" />
                </div>
                <div className={`flex h-2/6 self-start select-none w-full gap-10 cursor-pointer ${currentImageIndex > 3 ? `` : `hidden`}`}>
                    <Image src={images[currentImageIndex]} alt={"robot"} width={200} height={200} className="w-1/6 shadow-lg shadow-black" onClick={handleTest(1)} />
                    <Image src={images[currentImageIndex + 1]} alt={"robot"} width={200} height={200} className="w-1/6 shadow-lg shadow-black" onClick={handleTest(2)} />
                    <Image src={images[currentImageIndex + 2]} alt={"robot"} width={200} height={200} className="w-1/6 shadow-lg shadow-black" />
                    <Image src={images[currentImageIndex + 3]} alt={"robot"} width={200} height={200} className="w-1/6 shadow-lg shadow-black" />

                </div>
            </div>
        </section>
    </>
);
}
