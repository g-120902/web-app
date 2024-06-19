import { useTranslations } from "next-intl";
import CustomButton from "../common/CustomButton";
import { Link } from "@/i18n/navigation";

export default function UserBox(email: any): JSX.Element {
    const t = useTranslations("home")
    return (
        <div className="text-7xlselect-none font-primary-bold flex flex-col px-10 py-12 gap-10 bg-base-gray w-1/2 mx-auto shadow-black shadow-inner">
            <p className="text-neon font-primary-light text-lg self-start">{t("welcome")}{" "}{email?.email}</p>
            <Link href="/play">
                <CustomButton text={t("play")} />
            </Link>
        </div>
    );
}
