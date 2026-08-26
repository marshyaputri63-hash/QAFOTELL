"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { Coffee, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JardinCoffeePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <img
          alt="Jardin Coffee"
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/jardincoffee.jpeg"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            {t(translations.jardinCoffee, "heroTitle")}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed">
            {t(translations.jardinCoffee, "heroSubtitle")}
          </p>
          <div className="w-12 h-1 bg-brand-gold mt-8" />
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-brand-gold" />
            {t(translations.jardinCoffee, "bestSellers")}
            <span className="w-8 h-px bg-brand-gold" />
          </p>
          <h2 className="text-4xl font-serif text-gray-900">
            {t(translations.jardinCoffee, "bestSellers")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mont Blanc Coffee */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="relative h-80 overflow-hidden">
              <img
                alt="Mont Blanc Coffee"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/mont blanc.JPEG"
              />
              <div className="absolute top-4 right-4 bg-brand/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Best Seller
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {t(translations.jardinCoffee, "montBlanc")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t(translations.jardinCoffee, "montBlancDesc")}
              </p>
              <div className="flex items-center gap-2 text-brand text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand" />
                Signature Drink
              </div>
            </div>
          </div>

          {/* Smashed Cheezy Burger */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="relative h-80 overflow-hidden">
              <img
                alt="Smashed Cheezy Burger"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/smashed cheezy burger.jpeg"
              />
              <div className="absolute top-4 right-4 bg-brand/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Best Seller
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {t(translations.jardinCoffee, "smashedCheezy")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t(translations.jardinCoffee, "smashedCheezyDesc")}
              </p>
              <div className="flex items-center gap-2 text-brand text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand" />
                Must Try
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Menu Button */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1F7W8hRoodqrUizsu6_Z--1fF5B_ETI9f/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {t(translations.jardinCoffee, "fullMenu")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-surface container mx-auto px-6">
        <div className="bg-white rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
              <img
                alt="Jardin Coffee Logo"
                className="w-10 h-10 object-contain"
                src="/images/logo jardin.jpeg"
              />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {t(translations.jardinCoffee, "visitUs")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(translations.jardinCoffee, "visitUsDesc")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-brand" />
              {t(translations.jardinCoffee, "openDaily")}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-brand" />
              Lobby Level
            </div>
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors flex items-center gap-2"
            >
              {t(translations.jardinCoffee, "visitUs")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
