import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ru} from './locales/ru';
import {en} from './locales/en';

i18n
    .use(initReactI18next)
    .init({
        ns: ['translation', 'zod'],
        lng: 'en',
        debug: true,
        defaultNS: 'translation',
        fallbackLng: 'en',
        supportedLngs: [
            'ru',
            'en'
        ],
        interpolation: {
            escapeValue: false
        },
        resources: {
            en,
            ru
        }
    });

export default i18n;
