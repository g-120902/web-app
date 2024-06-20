'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

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

    const handleNextText = () => {
        setCurrentTextIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % texts.length;
            if (texts[nextIndex] === exFirst) {
                setCurrentImageIndex(0); // Set image index to 0 when exFirst is encountered
            } else if (texts[nextIndex] === exSecond) {
                setCurrentImageIndex(1); // Change image index to 1 when exSecond is encountered
            }
            return nextIndex;
        });
    };

    return (
        <>
            <section className="bg-cover bg-center h-screen brightness-59 py-10">
                <div className="flex flex-col gap-28 p-4 md:mx-44 mx-8 font-primary-bold text-2xl ">
                    <div className="flex flex-col md:flex-row md:gap-2 gap-10 w-full justify-start items-center m-auto">
                        <div className="w-2/6 h-2/6 self-start select-none">
                            <Image src= "/assets/images/content/robot.png" alt={"robot"} width={400} height={400} />
                        </div>
                        <div className="flex w-screen select-none cursor-pointer">
                            <div className="bg-default w-10 shadow-chatbox rounded-br-3xl" />
                            <div className="bg-white text-base font-robot px-10 py-6 md:w-2/6 w-3/4 text-overflow-ellipsis rounded-t-2xl rounded-br-2xl">
                                <p className="whitespace-wrap text-justify">{texts[currentTextIndex]}</p>
                            </div>
                            <ArrowRightCircleIcon className="text-white h-6 w-6 self-end ml-2 blink-icon" onClick={handleNextText} />
                        </div>
                    </div>
                    <div className="w-2/6 h-2/6 self-start select-none">
                    <Image src={images[currentImageIndex]} alt={"robot"} width={400} height={400} />
                    </div>
                </div>
            </section>
        </>
    );
}

