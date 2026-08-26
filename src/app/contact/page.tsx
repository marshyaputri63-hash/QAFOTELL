"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { sendContactWhatsApp, sendBookingWhatsApp } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Leaf } from "lucide-react";

const ADDRESS = "Jl. Ruhui Rahayu, Balikpapan, Kalimantan Timur";
const PHONE = "+62 812-4108-7024";
const EMAIL = "fo.qafotel@gmail.com";

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactWhatsApp(form);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] bg-gray-900 overflow-hidden">
        <img alt="Hotel Receptionist" className="absolute inset-0 w-full h-full object-cover opacity-60" src="/images/resepionist.jpeg" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">{t(translations.contact, "heroTitle")}</h1>
          <div className="w-8 h-px bg-white/50 mb-6" />
          <p className="text-lg text-white/90 leading-relaxed max-w-md whitespace-pre-line">{t(translations.contact, "heroSubtitle")}</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Contact Info & Map */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl text-brand font-bold">{t(translations.contact, "getInTouch")}</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1"><MapPin className="w-4 h-4" /></div><div><h3 className="font-bold text-gray-800 mb-1">{t(translations.contact, "address")}</h3><p className="text-gray-600 text-sm leading-relaxed">{ADDRESS}</p></div></div>
              <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1"><Phone className="w-4 h-4" /></div><div><h3 className="font-bold text-gray-800 mb-1">{t(translations.contact, "phone")}</h3><p className="text-gray-600 text-sm">{PHONE}</p></div></div>
              <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1"><Mail className="w-4 h-4" /></div><div><h3 className="font-bold text-gray-800 mb-1">{t(translations.contact, "email")}</h3><p className="text-gray-600 text-sm">{EMAIL}</p></div></div>
              <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1"><Clock className="w-4 h-4" /></div><div><h3 className="font-bold text-gray-800 mb-1">{t(translations.contact, "frontOfficeHours")}</h3><p className="text-gray-600 text-sm">{t(translations.contact, "hours")}</p></div></div>
              <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" /></svg></div><div><h3 className="font-bold text-gray-800 mb-1">{t(translations.contact, "instagram")}</h3><p className="text-gray-600 text-sm">@qafotel.balikpapan</p></div></div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-full min-h-[400px] relative bg-surface-container">
            <img alt="Map Location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVWZ33Ca24Zh83MNvzuRa1xuqc7xY7R0Bq1eD8Nk2axyoPh5OebJujOJREWLkW_TyBu9JjUpKd7X2lRyEQDpm4kI5ZGZPTTflptkLghUZ7Xt73jwwO6MU6edAdPRYq7IjGPAZ5W1uNyUBPeyl_nSCNjAyisVMzfYCFk7K_KP4QpjFTyXA1K8R_YOTAIZyLE8Pi6Dug9YODNDc2tCoYDCOZ6AUEzc4k-4IX7o22A7PGxgoTncQr0lrP" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-brand text-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg relative z-10"><Leaf className="w-5 h-5" /></div>
              <div className="w-4 h-4 bg-brand rotate-45 transform -translate-y-2 relative z-0" />
              <div className="bg-white px-3 py-1 rounded shadow-md mt-1 font-bold text-brand text-xs">QAFOTEL</div>
            </div>
          </div>
        </section>

        {/* Contact Form → WhatsApp */}
        <section className="grid md:grid-cols-5 gap-8 items-stretch">
          <div className="md:col-span-2 bg-surface-container rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl text-brand font-bold mb-4">{t(translations.contact, "hereToHelp")}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t(translations.contact, "helpDesc")}</p>
            </div>
            <div className="mt-auto relative z-10">
              <img alt="Qafotel Hotel" className="rounded-xl w-full h-48 object-cover" src="/images/qafotel.jpeg" />
            </div>
          </div>
          <div className="md:col-span-3 bg-surface-container rounded-2xl p-8">
            <h2 className="text-2xl text-brand font-bold mb-6">{t(translations.contact, "sendMessage")}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder={t(translations.contact, "yourName")} type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder={t(translations.contact, "emailAddress")} type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder={t(translations.contact, "phoneNumber")} type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder={t(translations.contact, "subject")} type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              </div>
              <textarea className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none resize-none" placeholder={t(translations.contact, "yourMessage")} rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button className="w-full bg-brand text-white py-3 rounded-xl hover:bg-brand-dark transition-colors font-medium flex items-center justify-center gap-2" type="submit"><Send className="w-4 h-4" />{t(translations.contact, "sendBtn")}</button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">Pesan akan dikirim langsung ke WhatsApp Qafotel</p>
          </div>
        </section>

        {/* Directions */}
        <section className="bg-surface-container rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 flex-1"><div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white shrink-0"><Leaf className="w-5 h-5" /></div><div><h3 className="font-bold text-brand mb-1">{t(translations.contact, "findUs")}</h3><p className="text-gray-600 text-sm">{t(translations.contact, "findUsDesc")}</p></div></div>
          <a href="https://maps.app.goo.gl/FyEmnSsQ2WHxyNmNA?g_st=iw" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-outline rounded-xl flex items-center gap-2 hover:bg-surface-container-high transition-colors text-sm font-medium whitespace-nowrap">{t(translations.contact, "getDirections")}<ArrowRight className="w-4 h-4" /></a>
          <div className="flex-1 h-24 rounded-xl overflow-hidden relative"><img alt="Map Area" className="w-full h-full object-cover" src="/images/outdoor.jpeg" /></div>
        </section>

        {/* CTA */}
        <section className="bg-brand rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 opacity-20 pointer-events-none"><img alt="Pattern" className="object-cover w-full h-full mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9hFmlgYZIcntfDipC57TgTrE7UKi5zIPCcUR6qcV2UDgPzfLdT1_hgVu-qC424bAIqw9PSh5bScYcDF2Rpe_Gff5zdsyXciRG5Skuwgo6l8tyX44IV_JNiCBcHSAQVUFlizB4B51_vLzaz9igQoj06csdb3zZwICU57Pm_vRNkXZisChYL-X3noPT0hxi3GjOPmHcZte58BO2tloDWSHm0aZz52d-HCnSpHonAPcqcj0GJOBz3Mj" /></div>
          <div className="relative z-10 max-w-md"><h2 className="text-3xl text-white font-bold mb-2">{t(translations.contact, "readyToStay")}</h2><p className="text-white/80 text-sm">{t(translations.contact, "bookStayDesc")}</p></div>
          <button onClick={() => sendBookingWhatsApp()} className="relative z-10 bg-white text-brand px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-surface transition-colors">{t(translations.nav, "bookYourStay")}<ArrowRight className="w-4 h-4" /></button>
        </section>
      </main>
    </>
  );
}
