"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { sendBookingWhatsApp } from "@/lib/whatsapp";
import {
  Wifi, Utensils, Users, Car, Heart, Shirt, Coffee, ConciergeBell,
  Snowflake, Tv, SprayCan, ArrowUpDown, ShieldCheck, Presentation, Info,
  Maximize, MonitorPlay, LayoutGrid, Square, ArrowRight,
} from "lucide-react";

const facilitiesData = [
  { nameKey: "highSpeedWifi", nameEn: "High-Speed Wi-Fi", descEn: "Stay connected with our complimentary high-speed Wi-Fi available throughout the hotel.", icon: <Wifi className="w-5 h-5" />, image: "/images/indoor.jpeg" },
  { nameKey: "restaurant", nameEn: "Restaurant", descEn: "Enjoy delicious local and international cuisine in our cozy restaurant with a warm ambiance.", icon: <Utensils className="w-5 h-5" />, image: "/images/jardincoffee.jpeg" },
  { nameKey: "meetingRoom", nameEn: "Meeting Room", descEn: "Modern meeting spaces equipped with the latest technology for productive gatherings.", icon: <Users className="w-5 h-5" />, image: "/images/meetingroom.jpeg" },
  { nameKey: "freeParking", nameEn: "Free Parking", descEn: "Enjoy hassle-free parking with spacious and secure parking areas for our guests.", icon: <Car className="w-5 h-5" />, image: "/images/parking.jpeg" },
  { nameKey: "prayerRoom", nameEn: "Prayer Room", descEn: "A peaceful and comfortable space for your worship needs during your stay.", icon: <Heart className="w-5 h-5" />, image: "/images/musholla.jpeg" },
  { nameKey: "laundryService", nameEn: "Laundry Service", descEn: "Keep your wardrobe fresh with our professional laundry and dry cleaning service.", icon: <Shirt className="w-5 h-5" />, image: "/images/wardrobe.jpeg" },
  { nameKey: "inRoomAmenities", nameEn: "In-Room Amenities", descEn: "Enjoy thoughtful in-room features and amenities for your comfort and convenience.", icon: <Coffee className="w-5 h-5" />, image: "/images/amenities.jpeg" },
  { nameKey: "frontDesk", nameEn: "24/7 Front Desk", descEn: "Our friendly team is available 24/7 to assist you with any inquiries for a seamless stay.", icon: <ConciergeBell className="w-5 h-5" />, image: "/images/resepionist.jpeg" },
  { nameKey: "jardinCoffee", nameEn: "Jardin Coffee", descEn: "Artisan coffee & light bites in our lobby cafe", icon: <Coffee className="w-5 h-5" />, image: "/images/jardincoffeev2.jpeg" },
];

const meetingRooms = [
  { name: "Aloe Room", code: "Room A", dimensions: "9.70 m x 5.86 m", theater: "30 - 40 pax", classroom: "24 - 30 pax", uShape: "13 - 18 pax", image: "/images/meetingroom.jpeg" },
  { name: "Terra Room", code: "Room B", dimensions: "10.97 m x 7.70 m", theater: "45 - 50 pax", classroom: "30 - 40 pax", uShape: "13 - 22 pax", image: "/images/meetingroomv2.jpeg" },
  { name: "Plenty Room", code: "Room C", dimensions: "16.83 m x 9.70 m & 7.70 m", theater: "90 - 100 pax", classroom: "80 - 90 pax", uShape: "40 - 50 pax", image: "/images/plentyroom.jpeg" },
];

export default function FacilitiesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] w-full bg-surface-container">
        <img alt="Hotel Exterior" className="w-full h-full object-cover" src="/images/outdoorv2.jpeg" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-bold mb-4">{t(translations.facilities, "heroTitle")}</h1>
              <p className="text-xl text-white/90">{t(translations.facilities, "heroSubtitle")}</p>
              <div className="w-12 h-1 bg-brand mt-6" />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Facilities Grid */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-light mb-4"><span>{t(translations.facilities, "builtForComfort")}</span><div className="w-8 h-px bg-brand-light" /></div>
          <h2 className="text-4xl font-bold mb-6 text-brand">{t(translations.facilities, "facilitiesElevate")}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-16">{t(translations.facilities, "facilitiesDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilitiesData.map((f) => (
              <div key={f.nameEn} className="bg-surface-container rounded-2xl overflow-hidden text-center group flex flex-col h-full">
                <div className="relative h-48"><img alt={f.nameEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={f.image} /><div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand text-white w-12 h-12 rounded-full flex items-center justify-center border-4 border-surface-container">{f.icon}</div></div>
                <div className="p-8 pt-10 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-brand">{t(translations.facilities, f.nameKey as keyof typeof translations.facilities)}</h3>
                  <p className="text-sm text-gray-600">{f.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meeting Rooms */}
        <section className="bg-surface-container rounded-3xl p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6 border-b border-surface-variant pb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-surface rounded-xl text-brand"><Presentation className="w-8 h-8" /></div>
              <div><h2 className="text-3xl font-bold text-brand mb-1">{t(translations.facilities, "meetingRooms")}</h2><p className="text-sm text-gray-500">{t(translations.facilities, "meetingDesc")}</p></div>
            </div>
            <div className="flex items-center gap-3 bg-surface px-4 py-3 rounded-xl"><Info className="w-5 h-5 text-brand-light" /><p className="text-xs text-gray-600 font-medium whitespace-pre-line">{t(translations.facilities, "meetingInfo")}</p></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meetingRooms.map((room) => (
              <div key={room.name} className="bg-surface rounded-2xl overflow-hidden border border-surface-variant">
                <div className="p-5 flex justify-between items-center border-b border-surface-variant bg-white"><h3 className="text-xl font-bold text-brand">{room.name}</h3><span className="text-xs font-bold bg-brand text-white px-3 py-1 rounded-full">{room.code}</span></div>
                <img alt={`${room.name} Meeting Room`} className="w-full h-48 object-cover" src={room.image} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-700 border-b border-surface-variant pb-3"><Maximize className="w-4 h-4 text-brand-light" /><span>{room.dimensions}</span></div>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between items-center"><span className="flex items-center gap-2"><MonitorPlay className="w-4 h-4 text-brand-light" /> Theater</span><span className="font-medium text-gray-800">{room.theater}</span></li>
                    <li className="flex justify-between items-center"><span className="flex items-center gap-2"><LayoutGrid className="w-4 h-4 text-brand-light" /> Class</span><span className="font-medium text-gray-800">{room.classroom}</span></li>
                    <li className="flex justify-between items-center"><span className="flex items-center gap-2"><Square className="w-4 h-4 text-brand-light" /> U-Shape</span><span className="font-medium text-gray-800">{room.uShape}</span></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-2 text-xs text-gray-500"><Info className="w-4 h-4 mt-0.5 shrink-0" /><p>{t(translations.facilities, "plentyNote")}</p></div>
        </section>

        {/* Quick Amenities */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 border-y border-surface-container py-10 mb-16">
          <div className="flex items-center gap-4"><Snowflake className="w-8 h-8 text-brand-light" /><div><h4 className="text-sm font-bold text-brand">{t(translations.facilities, "airConditioning")}</h4><p className="text-xs text-gray-500">{t(translations.facilities, "airConditioningDesc")}</p></div></div>
          <div className="flex items-center gap-4"><Tv className="w-8 h-8 text-brand-light" /><div><h4 className="text-sm font-bold text-brand">{t(translations.facilities, "smartTv")}</h4><p className="text-xs text-gray-500">{t(translations.facilities, "smartTvDesc")}</p></div></div>
          <div className="flex items-center gap-4"><SprayCan className="w-8 h-8 text-brand-light" /><div><h4 className="text-sm font-bold text-brand">{t(translations.facilities, "dailyHousekeeping")}</h4><p className="text-xs text-gray-500">{t(translations.facilities, "dailyHousekeepingDesc")}</p></div></div>
          <div className="flex items-center gap-4"><ArrowUpDown className="w-8 h-8 text-brand-light" /><div><h4 className="text-sm font-bold text-brand">{t(translations.facilities, "elevatorAccess")}</h4><p className="text-xs text-gray-500">{t(translations.facilities, "elevatorAccessDesc")}</p></div></div>
          <div className="flex items-center gap-4"><ShieldCheck className="w-8 h-8 text-brand-light" /><div><h4 className="text-sm font-bold text-brand">{t(translations.facilities, "security")}</h4><p className="text-xs text-gray-500">{t(translations.facilities, "securityDesc")}</p></div></div>
        </section>

        {/* CTA */}
        <section className="bg-brand rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><svg width="100%" height="100%"><pattern id="cross" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="white" fillOpacity="1" /></pattern><rect width="100%" height="100%" fill="url(#cross)" /></svg></div>
          <div className="relative z-10 mb-6 md:mb-0"><h2 className="text-3xl font-bold text-white mb-2">{t(translations.facilities, "readyToExperience")}</h2><p className="text-white/80 text-sm">{t(translations.facilities, "bookEnjoy")}</p></div>
          <button onClick={() => sendBookingWhatsApp()} className="relative z-10 bg-surface text-brand px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap">{t(translations.nav, "bookYourStay")}<ArrowRight className="w-5 h-5" /></button>
        </section>
      </main>
    </>
  );
}
