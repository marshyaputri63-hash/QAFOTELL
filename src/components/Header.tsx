"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { sendBookingWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { nameKey: "home", href: "/" },
  { nameKey: "about", href: "/about" },
  { nameKey: "rooms", href: "/rooms" },
  { nameKey: "facilities", href: "/facilities" },
  { nameKey: "jardinCoffee", href: "/jardin-coffee" },
  { nameKey: "contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-surface py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center">
        <img
          src="/images/qafotelheader.jpeg"
          alt="Qafotel Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.nameKey}
            href={link.href}
            className={
              pathname === link.href
                ? "text-brand border-b-2 border-brand pb-1"
                : "text-gray-600 hover:text-brand transition-colors pb-1"
            }
          >
            {t(translations.nav, link.nameKey)}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="border border-brand text-brand px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-brand hover:text-white transition-colors"
        >
          {t(translations.common, "langToggle")}
        </button>
        <button
          onClick={() => sendBookingWhatsApp()}
          className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          {t(translations.nav, "bookYourStay")}
        </button>
      </div>

      <button
        className="md:hidden text-gray-500 hover:text-gray-600 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.nameKey}
                href={link.href}
                className={
                  pathname === link.href
                    ? "block text-brand font-medium"
                    : "block text-gray-600 hover:text-brand"
                }
                onClick={() => setMobileOpen(false)}
              >
                {t(translations.nav, link.nameKey)}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); toggleLanguage(); }}
              className="block text-brand font-medium text-sm border border-brand px-3 py-1 rounded-lg"
            >
              {t(translations.common, "langToggle")}
            </button>
            <button
              onClick={() => { setMobileOpen(false); sendBookingWhatsApp(); }}
              className="block bg-brand text-white px-6 py-2.5 rounded-lg text-sm font-medium text-center mt-4 w-full"
            >
              {t(translations.nav, "bookYourStay")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
