"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { sendBookingWhatsApp } from "@/lib/whatsapp";
import { Users, Globe, Smile, Sun, Heart, User, Clock, Leaf, Droplets } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <img alt="Qafotel Exterior at Sunset" className="w-full h-full object-cover" src="/images/qafotel_landscape.jpeg" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="serif text-4xl md:text-5xl text-white mb-4 flex items-center gap-3">{t(translations.about, "heroTitle")}
              <svg className="text-yellow-400" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z" fill="currentColor" /></svg>
            </h1>
            <p className="text-xl text-white/90 font-light">{t(translations.about, "heroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4"><span className="text-xs font-bold tracking-widest text-brand uppercase">{t(translations.about, "ourStory")}</span><svg className="text-yellow-500" fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z" fill="currentColor" /></svg></div>
              <h2 className="serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight whitespace-pre-line">{t(translations.about, "storyHeading")}</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">{t(translations.about, "storyDesc")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Users className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "boutiqueExp")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "boutiqueExpDesc")}</p></div></div>
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Globe className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "localHeart")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "localHeartDesc")}</p></div></div>
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Smile className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "trustedHosp")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "trustedHospDesc")}</p></div></div>
              </div>
            </div>
            <div className="relative"><img alt="Hotel Building Exterior" className="rounded-2xl shadow-xl w-full h-[400px] lg:h-[500px] object-cover" src="/images/qafotel.jpeg" /></div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4"><span className="text-xs font-bold tracking-widest text-brand uppercase">{t(translations.about, "ourPhilosophy")}</span><svg className="text-yellow-500" fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z" fill="currentColor" /></svg></div>
            <h2 className="serif text-3xl md:text-4xl text-gray-900">{t(translations.about, "fourPillars")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center"><div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100"><Sun className="w-8 h-8" /></div><h3 className="serif text-xl font-bold text-gray-900 mb-3">{t(translations.about, "warm")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "warmDesc")}</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center"><div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100"><Heart className="w-8 h-8" /></div><h3 className="serif text-xl font-bold text-gray-900 mb-3">{t(translations.about, "calm")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "calmDesc")}</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center"><div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100"><User className="w-8 h-8" /></div><h3 className="serif text-xl font-bold text-gray-900 mb-3">{t(translations.about, "personal")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "personalDesc")}</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center"><div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100"><Clock className="w-8 h-8" /></div><h3 className="serif text-xl font-bold text-gray-900 mb-3">{t(translations.about, "efficient")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "efficientDesc")}</p></div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative"><img alt="Thoughtfully Designed Hotel Room" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" src="/images/indoor.jpeg" /></div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4"><span className="text-xs font-bold tracking-widest text-brand uppercase">{t(translations.about, "thoughtfullyDesigned")}</span><svg className="text-yellow-500" fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z" fill="currentColor" /></svg></div>
              <h2 className="serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">{t(translations.about, "designHeading")}</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">{t(translations.about, "designDesc")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Leaf className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "naturalMaterials")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "naturalMaterialsDesc")}</p></div></div>
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Globe className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "sustainableChoices")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "sustainableChoicesDesc")}</p></div></div>
                <div className="flex gap-4"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand"><Droplets className="w-5 h-5" /></div></div><div><h3 className="text-sm font-bold text-gray-900 mb-1">{t(translations.about, "wellbeing")}</h3><p className="text-sm text-gray-500 leading-relaxed">{t(translations.about, "wellbeingDesc")}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"><svg className="w-full h-full text-white fill-current" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0 100 C 20 0 50 0 100 100 Z" /></svg></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="serif text-2xl md:text-3xl text-white mb-2 flex items-center justify-center md:justify-start gap-2">{t(translations.about, "beginStory")}<svg className="text-yellow-400" fill="none" height="20" viewBox="0 0 24 24" width="20"><path d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z" fill="currentColor" /></svg></h2>
            <p className="text-white/80">{t(translations.about, "discoverRooms")}</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/rooms" className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">{t(translations.rooms, "viewDetails")}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
            <button onClick={() => sendBookingWhatsApp()} className="px-6 py-3 rounded-lg bg-white text-brand font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">{t(translations.nav, "bookYourStay")}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
          </div>
        </div>
      </section>
    </>
  );
}
