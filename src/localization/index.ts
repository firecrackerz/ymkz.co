import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-xhr-backend'
import { initReactI18n } from 'react-i18next/hooks'
import en from 'src/localization/messages/en.json'
import ja from 'src/localization/messages/ja.json'

export default i18n
  .use(backend)
  .use(detector)
  .use(initReactI18n)
  .init({
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    debug: process.env.NODE_ENV === 'development',
    resources: {
      ja: {
        translation: ja
      },
      en: {
        translation: en
      }
    }
  })
