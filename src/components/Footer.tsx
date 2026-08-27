"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

const ADDRESS = "Jl. Ruhui Rahayu, Balikpapan, Kalimantan Timur";
const PHONE = "+62 812-4108-7024";
const EMAIL = "fo.qafotel@gmail.com";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-alt pt-20 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img
              src="/images/qafotelheader.jpeg"
              alt="Qafotel Logo"
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t(translations.footer, "description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">{t(translations.footer, "quickLinks")}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-brand transition-colors">{t(translations.nav, "home")}</Link></li>
              <li><Link href="/about" className="hover:text-brand transition-colors">{t(translations.nav, "about")}</Link></li>
              <li><Link href="/rooms" className="hover:text-brand transition-colors">{t(translations.nav, "rooms")}</Link></li>
              <li><Link href="/facilities" className="hover:text-brand transition-colors">{t(translations.nav, "facilities")}</Link></li>
              <li><Link href="/jardin-coffee" className="hover:text-brand transition-colors">{t(translations.nav, "jardinCoffee")}</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">{t(translations.nav, "contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">{t(translations.footer, "information")}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-brand transition-colors">{t(translations.footer, "privacyPolicy")}</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">{t(translations.footer, "termsConditions")}</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">{t(translations.footer, "faq")}</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">{t(translations.footer, "careers")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">{t(translations.footer, "contactUs")}</h4>
            <ul className="space-y-4 text-sm text-gray-600 mb-8">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pt-6 border-t border-gray-300">{t(translations.footer, "copyright")}</div>
      </div>
    </footer>
  );
}
