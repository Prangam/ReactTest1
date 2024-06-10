import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Layout & Style": "Layout & Style",
        "Move shape": "Move shape",
        "Move position": "Move position",
      },
    },
    th: {
      translation: {
        "Layout & Style": "รูปแบบและสไตล์",
        "Move shape": "ย้ายรูปร่าง",
        "Move position": "ย้ายตำแหน่ง",
      },
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
