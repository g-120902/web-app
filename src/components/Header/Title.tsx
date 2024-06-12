import { useTranslations } from "next-intl";

/**
 * The Title text of the Header.
 *
 * @author Gregory Albert <gregoryalbert1209@gmail.com>
 * @since 2024-02-23
 *
 * @returns {JSX.Element} Title component
 */
export default function Title({ title }: { title: string }): JSX.Element {
    const t = useTranslations("header");
    return (
        <>
            <span className="text-sm md:text-2xl font-primary-light truncate text-nowrap">
                {t(title)}
            </span>
        </>

    );
}
