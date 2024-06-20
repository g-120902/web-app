import { useTranslations } from "next-intl";
import LevelItem from "./LevelItem";
import { Link } from "@/i18n/navigation";

export default function Levels(): JSX.Element {
    const t = useTranslations("levels")

    return (
        <>
            <section
                className="bg-cover bg-center h-screen brightness-59 py-20"
            >
                <div className="grid md:grid-cols-4  grid-cols-1 gap-28 p-4 md:mx-44 mx-5 font-primary-bold text-2xl">
                    <Link href="play/constant">
                        <LevelItem text={t("constant")} icon={"/assets/images/content/constant/Constant.png"} />
                    </Link>
                    <Link href="play/variable">
                        <LevelItem text={t("variable")} icon={"/assets/images/content/variable/Variables.png"} />
                    </Link>
                    <Link href="play/loop">
                        <LevelItem text={t("loop")} icon={"/assets/images/content/loop/Loop.png"} />
                    </Link>
                    <Link href="play/array">
                        <LevelItem text={t("array")} icon={"/assets/images/content/array/Arrays.png"} />
                    </Link>
                    <Link href="play/stack">
                        <LevelItem text={t("stack")} icon={"/assets/images/content/stack/Stack.png"} />
                    </Link>
                    <Link href="play/queue">
                        <LevelItem text={t("queue")} icon={"/assets/images/content/queue/Queue.png"} />
                    </Link>
                    <Link href="play/dictionary">
                        <LevelItem text={t("dictionary")} icon={"/assets/images/content/dictionary/Dictionary.png"} />
                    </Link>
                    <Link href="play/linked-list">
                        <LevelItem text={t("linked-list")} icon={"/assets/images/content/linked-list/Linked_List.png"} />
                    </Link>
                    <Link href="play/binary-tree">
                        <LevelItem text={t("binary-tree")} icon={"/assets/images/content/binary-tree/BinaryTree.png"} />
                    </Link>
                </div>

            </section>

        </>
    );
}
