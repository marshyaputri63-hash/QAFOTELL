"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "./i18n";
import { translations } from "./i18n";

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (obj: Record<string, { en: string; id: string }>, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  const t = useCallback(
    (obj: Record<string, { en: string; id: string }>, key: string): string => {
      const entry = obj[key];
      if (!entry) return key;
      return entry[locale] || entry.en || key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
