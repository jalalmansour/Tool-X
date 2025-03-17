"use client";

import { useTranslation as useI18nTranslation } from "react-i18next";

export function useTranslation() {
  const { t, i18n } = useI18nTranslation();

  return {
    t,
    i18n,
    changeLanguage: i18n.changeLanguage,
    currentLanguage: i18n.language,
    isRtl: i18n.language === 'ar',
  };
}
