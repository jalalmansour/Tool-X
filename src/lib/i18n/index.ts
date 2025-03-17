"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Import language resources
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";
import frTranslation from "./locales/fr.json";
import deTranslation from "./locales/de.json";
import esTranslation from "./locales/es.json";
import jaTranslation from "./locales/ja.json";
import zhTranslation from "./locales/zh.json";
import afTranslation from "./locales/af.json";

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      de: {
        translation: deTranslation,
      },
      es: {
        translation: esTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
      af: {
        translation: afTranslation,
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18next;
