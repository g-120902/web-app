import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

type LevelBaseProps = {
    text: string;
};

export default function LevelBase({ text }: LevelBaseProps): JSX.Element {

    return (
        <>
            <section className="bg-cover bg-center h-screen brightness-59 py-10">
                <div className="flex flex-col gap-28 p-4 md:mx-44 mx-8 font-primary-bold text-2xl ">
                    <div className="flex flex-col md:flex-row md:gap-2 gap-10 w-full justify-start items-center m-auto">
                        <div className="w-2/6 h-2/6 self-start select-none">
                            <Image src={"/assets/images/content/robot.png"} alt={"robot"} width={400} height={400} />
                        </div>
                        <div className="flex w-screen select-none cursor-pointer">
                            <div className="bg-default w-10 shadow-chatbox rounded-br-3xl" />
                            <div className="bg-white text-base font-robot px-10 py-6 md:w-2/6 w-3/4 text-overflow-ellipsis rounded-t-2xl rounded-br-2xl">

                                <p className="whitespace-wrap text-justify">{text}</p>
                            </div>
                            <ArrowRightCircleIcon className="text-white h-6 w-6 self-end ml-2 blink-icon"/>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
