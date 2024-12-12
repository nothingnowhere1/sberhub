import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ru} from './locales/ru';
import {en} from './locales/en';

export enum Languages {
    ru = 'ru',
    en = 'en'
}

export const SUPPORTED_LANGUAGES = [Languages.ru, Languages.en];

i18n
    .use(initReactI18next)
    .init({
        ns: ['translation', 'zod'],
        lng: Languages.ru,
        debug: true,
        defaultNS: 'translation',
        fallbackLng: Languages.ru,
        supportedLngs: SUPPORTED_LANGUAGES,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en,
            ru
        }
    });

export default i18n;
