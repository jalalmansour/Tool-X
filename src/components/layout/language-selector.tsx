"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية", rtl: true },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
  { code: "af", name: "Afrikaans" },
];

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [mounted, setMounted] = useState(false);

  // Initialize with saved language or browser language
  useEffect(() => {
    setMounted(true);
    // In a real app, you would use i18n.language from i18next
    // For now, we'll just use browser language or localStorage
    const savedLang = localStorage.getItem("language") || navigator.language.split("-")[0];
    const isSupported = languages.some(lang => lang.code === savedLang);
    setCurrentLang(isSupported ? savedLang : "en");
  }, []);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
    // In a real app, you would do i18n.changeLanguage(lang)

    // Check if the language is RTL
    const isRtl = languages.find(l => l.code === lang)?.rtl;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <span className="sr-only">Select language</span>
        <div className="h-4 w-4 animate-pulse rounded-full bg-muted"></div>
      </Button>
    );
  }

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-[1.3rem] w-[1.3rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={currentLang === lang.code ? "bg-primary/10" : ""}
          >
            <span className={lang.rtl ? "text-right w-full" : ""}>
              {lang.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
