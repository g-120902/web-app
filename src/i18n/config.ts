import { Locale } from "@/types/i18n/locale";

export const locales = ['en', 'fr', 'mu'] as const;
export const localePrefix = 'always';
export const defaultLocale: Locale = 'en';
export const localeDetection = false;

export const localeNames: Record<Locale, string> = {
    en: 'English',
    fr: 'Francais',
    mu: 'Kreole'
};

export const localeCodes: Record<string, Locale> = {
    en: 'en',
    fr: 'fr',
    mu: 'mu'
};

