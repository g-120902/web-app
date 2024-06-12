'use client'

import React, { useState } from 'react';
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames } from "@/i18n/config"
import { Locale } from "@/types/i18n/locale";
import { useLocale } from 'next-intl';

function LanguageBox({ lang, onClick }: { lang: Locale | undefined; onClick?: () => void }) {
    return (
        <div
            className='p-2 text-white h-10 text-center select-none hover:underline bg-skin-highlight rounded-xl px-2'
            onClick={onClick}>
            {lang !== undefined ? localeNames[lang] : 'N/A'}
        </div>
    );
}

function LanguageSwitcher() {
    const pathName = usePathname();
    const [selected, setSelected] = useState(false);
    const locale: Locale = useLocale() as Locale;
    const router = useRouter();

    const open = () => {
        setSelected(!selected);
    };

    const handleTranslate = (localeParam: Locale) => {
        router.replace(pathName, { locale: localeParam });
        router.refresh();
    };

    return (
        <div className='bg-transparent w-fit flex flex-col z-10 my-auto'>
            <div className={selected ? 'hidden' : 'self-center'}>
                <LanguageBox lang={locale} onClick={open} />
            </div>
            <div className={selected ? 'py-5 mt-10 bg-gray-800 rounded-md bg-skin-primary flex flex-col gap-5' : 'hidden'}>

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

