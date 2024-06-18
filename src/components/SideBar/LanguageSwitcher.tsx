'use client'

import React, { useState } from 'react';
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames } from "@/i18n/config"
import { Locale } from "@/types/i18n/locale";
import { useLocale, useTranslations } from 'next-intl';
import { GlobeAltIcon, ArrowDownRightIcon } from "@heroicons/react/24/outline";

function LanguageBox({ lang, onClick }: { lang: Locale | undefined; onClick?: () => void }) {
    return (
        <div
            className='flex justify-center text-sm hover:text-bubblegum underline p-2 h-6 text-center select-none hover:underline bg-skin-highlight rounded-xl px-2'
            onClick={onClick}>
                <ArrowDownRightIcon className='h-4 w-4'/>
            {lang !== undefined ? localeNames[lang] : 'N/A'}
        </div>
    );
}

function LanguageSwitcher() {
    const pathName = usePathname();
    const [selected, setSelected] = useState(false);
    const locale: Locale = useLocale() as Locale;
    const router = useRouter();
    const t = useTranslations("side-bar")
    const open = () => {
        setSelected(!selected);
    };

    const handleTranslate = (localeParam: Locale) => {
        router.replace(pathName, { locale: localeParam });
        router.refresh();
    };

    return (
        <div className='bg-transparent w-fit flex flex-col z-10 my-auto cursor-pointer text-neon '>
            <div
                className={'flex ml-2 text-sm  gap-2 hover:text-bubblegum'}
                onClick={open}>
                <GlobeAltIcon className='h-6 w-6' />
                {t("language")}
            </div>
            <div className={selected ? 'ml-4 rounded-md bg-skin-primary flex flex-col' : 'hidden'}>

                {locales.map((locale) => (
                    <div key={locale} onClick={() => handleTranslate(locale)}>
                        <LanguageBox lang={locale} onClick={open} />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default LanguageSwitcher;

