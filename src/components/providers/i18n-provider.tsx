"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  // Initialize i18n
  useEffect(() => {
    // Handle RTL direction change
    const handleLanguageChange = () => {
      const isRtl = i18n.language === 'ar';
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Initial check
    handleLanguageChange();

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
