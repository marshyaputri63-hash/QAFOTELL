"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { checkAvailabilityWhatsApp } from "@/lib/whatsapp";
import {
  MapPin, Bed, Users, Tag, Wifi, Utensils, Handshake, Car, ChevronRight,
  Calendar, User, Search,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] hero-bg flex items-center"
        style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDzrurEGxhD3zPm3MKsOXLKhjihWbPs5eu1j0cwIEw9ARbv6-4XA2gGoTTdBXFeQBW1JYDcDhUcsrqkGhXPQM5XB4hMCbCoLCB5ay9Y4hWAzMK_JEAz1KRlKuI52Oz6WMw6uHFiOMg9ucxa2z8bkwWnS-BvwSONfgQdpDZm3sPEv_MSCr5W6CCF8r-GjhtcZ_SGhA7622tP4x3PljmWIecgtTw6zlIaKCrWSb4JMgf1HcikWIJSrcz4)" }}>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl pt-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight whitespace-pre-line">{t(translations.home, "heroTitle")}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">{t(translations.home, "heroSubtitle")}</p>
        </div>
      </section>

      {/* Booking Bar */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between max-w-6xl mx-auto border border-gray-100">
          <div className="flex-1 w-full flex items-center gap-4 border-r border-gray-200 pr-6">
            <Calendar className="text-gray-400 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 font-medium mb-1">{t(translations.home, "checkIn")}</div>
              <div className="font-medium text-gray-800 flex items-center gap-2">May 20, 2024<svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center gap-4 border-r border-gray-200 px-6">
            <Calendar className="text-gray-400 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 font-medium mb-1">{t(translations.home, "checkOut")}</div>
              <div className="font-medium text-gray-800 flex items-center gap-2">May 21, 2024<svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center gap-4 px-6">
            <User className="text-gray-400 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 font-medium mb-1">{t(translations.home, "guests")}</div>
              <div className="font-medium text-gray-800 flex items-center gap-2">{t(translations.home, "adultsRoom")}<svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
            </div>
          </div>
          <button onClick={() => checkAvailabilityWhatsApp({ checkIn: "May 20, 2024", checkOut: "May 21, 2024", guests: "2 Adults, 1 Room" })} className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
            <Search className="w-4 h-4" /> {t(translations.home, "checkAvailability")}
          </button>
        </div>
      </div>

      {/* Why Stay Section */}
      <section className="py-24 bg-surface container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">{t(translations.home, "whyStayTitle")}<span className="w-8 h-px bg-brand" /></div>
            <h2 className="text-4xl font-serif mb-6 text-gray-900 leading-tight whitespace-pre-line">{t(translations.home, "whyStayHeading")}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{t(translations.home, "whyStayDesc")}</p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors">{t(translations.home, "learnMore")}<ChevronRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface-alt border border-gray-200 flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300"><MapPin className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-3">{t(translations.home, "primeLocation")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t(translations.home, "primeLocationDesc")}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface-alt border border-gray-200 flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300"><Bed className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-3">{t(translations.home, "comfortableRooms")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t(translations.home, "comfortableRoomsDesc")}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface-alt border border-gray-200 flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300"><Users className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-3">{t(translations.home, "warmHospitality")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t(translations.home, "warmHospitalityDesc")}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface-alt border border-gray-200 flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300"><Tag className="w-5 h-5" /></div>
              <h3 className="font-bold text-gray-900 mb-3">{t(translations.home, "bestValue")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t(translations.home, "bestValueDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-surface container mx-auto px-6 text-center">
        <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2"><span className="w-8 h-px bg-brand" />{t(translations.home, "ourRooms")}<span className="w-8 h-px bg-brand" /></div>
        <h2 className="text-4xl font-serif mb-16 text-gray-900">{t(translations.home, "discoverRoom")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 text-left">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-64 overflow-hidden">
              <img alt="Leaf Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpb_LmlxXOQ_-aApvrKo8fR8bIanRpkHuCNsE7zMQFHaIQy1Oclq8JvRUxlbEHz2Ta-d6c28VUya_TOiEx4v8vuvmipfDuqn42HAI7sGn3eA0yH4sUSt1yLtJqmhc64sfkcxGogj10XrfQ9dDFY5tjQoX7tun4fxqnkfY1a6kf7ieZcT89z63SLiMa9QbNngEg4CfBZStIQycWUTXvhoAHRsePuGhEtqSPcpopmpXRtet8p8W-0R3s" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{t(translations.rooms, "leafRoom")}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t(translations.rooms, "leafDesc")}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="text-gray-500 text-sm">{t(translations.home, "from")} <span className="text-xl font-bold text-gray-900">IDR 450,000</span> {t(translations.home, "perNight")}</div>
                <Link href="/rooms" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white hover:border-brand transition-all"><ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-64 overflow-hidden">
              <img alt="Oasis Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0e_n3nKEBgkOpOkh4O1j4QgMRyyl8MhEUtiIY1PfpJ0gS7uDjPQL8AMLWPbw6qrkdFxFgKH57ujcT59aXg9QVtLgyTd0vc3yp5jKkcA0HPnLiPDHPBuJnMvLAsSTXGBQPnQuECapULiq69CeBwj9xNIaCeTIqaNLE6NAujJtQoRvD0Bfk3wmb5eImIwDUg5nm9AR94ratpvPnPMA80Ah2FmVnjcg05WWG4vkg2bh5fT-c66M4K13Z" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{t(translations.rooms, "oaseRoom")}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t(translations.rooms, "oaseDesc")}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="text-gray-500 text-sm">{t(translations.home, "from")} <span className="text-xl font-bold text-gray-900">IDR 550,000</span> {t(translations.home, "perNight")}</div>
                <Link href="/rooms" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white hover:border-brand transition-all"><ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="/rooms" className="inline-flex items-center gap-2 text-gray-800 font-medium hover:text-brand transition-colors">{t(translations.home, "viewAllRooms")} <ChevronRight className="w-4 h-4" /></Link>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-surface container mx-auto px-6 text-center">
        <div className="text-brand text-xs font-bold tracking-widest uppercase mb-12 flex items-center justify-center gap-2"><span className="w-8 h-px bg-brand" />{t(translations.home, "thoughtfulAmenities")}<span className="w-8 h-px bg-brand" /></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          <div className="bg-surface-alt rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"><Wifi className="w-6 h-6 text-gray-700 mb-4" /><h4 className="font-bold text-gray-900 text-sm mb-1">High-Speed Wi-Fi</h4><p className="text-xs text-gray-500">Free in all areas</p></div>
          <div className="bg-surface-alt rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"><Utensils className="w-6 h-6 text-gray-700 mb-4" /><h4 className="font-bold text-gray-900 text-sm mb-1">Restaurant</h4><p className="text-xs text-gray-500">Local &amp; international cuisine</p></div>
          <div className="bg-surface-alt rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"><Handshake className="w-6 h-6 text-gray-700 mb-4" /><h4 className="font-bold text-gray-900 text-sm mb-1">Meeting Room</h4><p className="text-xs text-gray-500">Modern &amp; fully equipped</p></div>
          <div className="bg-surface-alt rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"><Car className="w-6 h-6 text-gray-700 mb-4" /><h4 className="font-bold text-gray-900 text-sm mb-1">Free Parking</h4><p className="text-xs text-gray-500">Safe &amp; convenient</p></div>
          <div className="bg-surface-alt rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"><svg className="w-6 h-6 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg><h4 className="font-bold text-gray-900 text-sm mb-1">Prayer Room</h4><p className="text-xs text-gray-500">Clean &amp; comfortable</p></div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 container mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden offer-bg flex items-center" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAonrUYD3aAOqH4OBHXfYSwZCDZgZkcz3Ch6E6PeYH3Vtoi71Hxu0h1HUQF_BvlghHMzVAQ76AnsquvhNP4uJf9yS9NAFheKD4Fkz0Auh4mSy5sf2otCu4RnaJrXAbRyxYlLMU5d7qDpEh95fhwPmTbABmG4QUZLgbAgNdcf77J8BgLCSG7kVKIoujSGe7wjJpWm7-A2Q7fZmH4HqM9VG1viGyBFMzVeLBd99rx6ztIsPI1tjiz1w1s)" }}>
          <div className="absolute inset-0 offer-overlay" />
          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/50 flex items-center justify-center text-white rotate-12"><Tag className="w-6 h-6 -rotate-12" /></div>
              <div className="text-white">
                <div className="text-sm font-bold tracking-widest uppercase mb-2 text-white/80">{t(translations.home, "specialOffer")}</div>
                <h2 className="text-3xl md:text-4xl font-serif mb-2">{t(translations.home, "enjoyUpTo")}</h2>
                <p className="text-white/80 max-w-md text-sm leading-relaxed">{t(translations.home, "offerDesc")}</p>
              </div>
            </div>
            <Link href="#" className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap">{t(translations.home, "viewPromo")}<ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
