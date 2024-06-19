import { useTranslations } from "next-intl";
import CustomButton from "../common/CustomButton";
import { Link } from "@/i18n/navigation";

export default function LoginBox(): JSX.Element {
    const t = useTranslations("home")
    return (
        <div className="text-7xlselect-none font-primary-bold flex flex-col px-10 py-12 gap-6 bg-base-gray w-1/2 mx-auto  shadow-black shadow-lg border-2 border-neon">
            <span className="flex gap-1 text-sm md:text-lg text-left">
                <p className=" text-neon font-primary-light self-start">{t("not-connected")}</p>
                <Link href="signup">
                    <p className="text-neon font-primary-light self-start underline hover:text-bubblegum">{t("signup")}</p>

                </Link>
            </span>
            <Link href="/play">
                <CustomButton text={t("play-guest")} />
            </Link>
            <Link href="/login">
                <CustomButton text={t("login")} />
            </Link>
        </div>
    );
}
