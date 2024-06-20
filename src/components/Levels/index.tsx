import { useTranslations } from "next-intl";
import LevelItem from "./LevelItem";
import { Link } from "@/i18n/navigation";

export default function Levels(): JSX.Element {
    const t = useTranslations("levels")

    return (
        <>
            <section
                className="bg-cover bg-center h-screen brightness-59 py-20"
                style={{ backgroundImage: `url('/assets/images/home-background.jpg')` }}
            >
                <div className="grid md:grid-cols-4  grid-cols-1 gap-28 p-4 mx-44 font-primary-bold text-2xl">
                    <Link href="play/constant">
                        <LevelItem text={t("constant")} icon={"/assets/images/content/constant/Constant.png"} />
                    </Link>
                </div>

            </section>

        </>
    );
}
