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
  introThird:string;

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
        "/assets/images/content/constant/constant1.png" ,
        "/assets/images/content/constant/constant2.png" // Add more images if needed
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);
    const [achievementDisplay, setAchievementDisplay] = useState(false);
    const [stopDisplay, setStopDisplay] = useState(false);
    const { setAchievement } = useAchievements();

    const t = useTranslations("achievements")

    const handleNextText = () => {
        if (!stopDisplay) {
            setCurrentTextIndex((prevIndex) => {
                setAchievementDisplay(false)
                const nextIndex = (prevIndex + 1) % texts.length;
                if (texts[nextIndex] === exSecond) {
                    setCurrentImageIndex(0);
                } else if (texts[nextIndex] === exFirst) {
                    setCurrentImageIndex(1);
                } else if (texts[nextIndex] === exSecond) {
                    setCurrentImageIndex(2);
                } else if (texts[nextIndex] === chalFirst) {
                    setStopDisplay(true)
                } 
                return nextIndex;
            });
        }
    };

    const handleTest = () => {
        if (stopDisplay) {
            setCurrentTextIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % texts.length;
                setCurrentImageIndex(-1);
                setAchievement("constant", true)
                setAchievementDisplay(true)
                setStopDisplay(false)
                return nextIndex;
            });
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
                        {t("constant")}
                    </div>
                    <div className={`h-2/6 self-start select-none w-full cursor-pointer ${currentImageIndex >= 0 ? `` : `hidden`}`} onClick={handleTest}>
                        <Image src={images[currentImageIndex]} alt={"robot"} width={400} height={400} className="w-2/6 shadow-lg shadow-black" />
                    </div>
                </div>
            </section>
        </>
    );
}