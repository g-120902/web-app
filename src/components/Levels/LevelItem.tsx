import { useTranslations } from "next-intl";
import Image from "next/image";

type LevelItemProps = {
    text: string;
    icon: string;
};

export default function LevelItem({ text, icon }: LevelItemProps): JSX.Element {
    const t = useTranslations();

    return (
        <div 
            className="shadow-inner shadow-black cursor-pointer bg-base-white text-black hover:text-bubblegum border-neon border-2 hover:border-bubblegum rounded-md flex flex-col items-center justify-center p-4 min-h-64 h-fit gap-3">
            <Image src={icon} alt={text} width={"80"} height={"80"} />
            <p>{t(text)}</p>
        </div>
    );
}
