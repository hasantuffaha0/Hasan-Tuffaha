import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './locales/ar.json';
// import enTranslation from './locales/en.json';

// القاموس الخاص بك
const resources = {
  ar: {
    translation: arTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // غير مطلوب مع React
    }
  });

export default i18n;