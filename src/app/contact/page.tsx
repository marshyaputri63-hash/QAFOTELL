import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 overflow-hidden">
        <img
          alt="Hotel Exterior at Dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcrrYby3dwmjwSgT61nYzfxQ7KozwCg1oERmaOHKXRU2dkEfznf6GkaW2TUcNPAOQmiGvYmkbyC8h-ZJJk287NT9jdkLBuCfrVHgtpfq7PCtnBmaYv3kU6EDYX7O4rqZK5bJFXEer3TiczhF-DJ38VbLuAaQbfh8EmPDfSXkkUZTdPUkLtprxDkJtJkfN_Q8urf6qys55c8JtwYZbI4TPOiFPsvaUN3Wfqc-BX-2lkNNmTUgVEJIQe"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center max-w-lg">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
            Contact Us
          </h1>
          <div className="w-8 h-px bg-white/50 mb-6" />
          <p className="text-lg text-white/90 leading-relaxed max-w-md">
            We&apos;d love to hear from you.
            <br />
            Get in touch for reservations, inquiries, or any assistance.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Contact Info & Map Section */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl text-brand font-bold">Get in Touch</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Jl. Cendana No. 46, Mentasari,
                    <br />
                    Balikpapan, Kalimantan Timur 76111, Indonesia
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+62 811-5550-8880</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">info@qafotel.com</p>
                </div>
              </div>
              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Front Office Hours
                  </h3>
                  <p className="text-gray-600 text-sm">24 Hours</p>
                </div>
              </div>
              {/* Instagram */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Instagram</h3>
                  <p className="text-gray-600 text-sm">
                    @qafotel.balikpapan
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-full min-h-[400px] relative bg-surface-container">
            <img
              alt="Map Location"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVWZ33Ca24Zh83MNvzuRa1xuqc7xY7R0Bq1eD8Nk2axyoPh5OebJujOJREWLkW_TyBu9JjUpKd7X2lRyEQDpm4kI5ZGZPTTflptkLghUZ7Xt73jwwO6MU6edAdPRYq7IjGPAZ5W1uNyUBPeyl_nSCNjAyisVMzfYCFk7K_KP4QpjFTyXA1K8R_YOTAIZyLE8Pi6Dug9YODNDc2tCoYDCOZ6AUEzc4k-4IX7o22A7PGxgoTncQr0lrP"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-brand text-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg relative z-10">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="w-4 h-4 bg-brand rotate-45 transform -translate-y-2 relative z-0" />
              <div className="bg-white px-3 py-1 rounded shadow-md mt-1 font-bold text-brand text-xs">
                QAFOTEL
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="grid md:grid-cols-5 gap-8 items-stretch">
          <div className="md:col-span-2 bg-surface-container rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl text-brand font-bold mb-4">
                We&apos;re Here to Help
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Whether you have a question about our rooms, facilities, or
                special requests, our team is ready to assist you.
              </p>
            </div>
            <div className="mt-auto self-start relative z-10">
              <img
                alt="Decorative Vase"
                className="rounded-xl w-48 object-cover mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHolEaCQSeaVL31rxCA3RhqATTvSu2YLZWTF1jJv3kqterUQXBftViQKFDhvV7YRoTq5m54mwFIlTVPHvuKdk4Su16NpJ71u-oEHMeJwEfYX02RCas5M5TTa69MJ3ByQWSvG5Dnnqpc43ARaWbdtWCov8S3AVCvH8BBdlpqj_MFrGhillcqTwAg9fBzQ1Sp5FB7rcivcp_1laSVtDJW_9Ac5RukmYwwGRFrX4jbXv2JNgv7BytKUvC"
              />
            </div>
          </div>
          <div className="md:col-span-3 bg-surface-container rounded-2xl p-8">
            <h2 className="text-2xl text-brand font-bold mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none"
                  placeholder="Phone Number"
                  type="tel"
                />
                <input
                  className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <textarea
                className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none resize-none"
                placeholder="Your Message"
                rows={5}
              />
              <button
                className="w-full bg-brand text-white py-3 rounded-xl hover:bg-brand-dark transition-colors font-medium flex items-center justify-center gap-2"
                type="submit"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Simple Map Section */}
        <section className="bg-surface-container rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-brand mb-1">Find Us Easily</h3>
              <p className="text-gray-600 text-sm">
                We&apos;re conveniently located in the heart of Balikpapan.
              </p>
            </div>
          </div>
          <button className="px-6 py-2 border border-outline rounded-xl flex items-center gap-2 hover:bg-surface-container-high transition-colors text-sm font-medium whitespace-nowrap">
            Get Directions <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex-1 h-24 rounded-xl overflow-hidden relative">
            <img
              alt="Map Area"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBMw2SENxU53lTJ5pOLbDWoPPLGpESLyYJT-gM_UC9N3MWKcmasBZ__yS6G7Juhz6uAp2XO0ZK8UEzMcbvUwPSorrS30_B8mfDRKMZeDzlCqSV0hYbAP-vYcDGbVlOBceFgj03XsprGCipHK7MGiCJA7Hk1nBOn3Z2760qWiCFXxvMUjsUSk7jdXhvL1AJWSLrymq6eTQkM6n8f_gwlEhmBMxgIaiuK-6Pbq7GN-p-risL64KK4PjA"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 opacity-20 pointer-events-none">
            <img
              alt="Pattern"
              className="object-cover w-full h-full mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9hFmlgYZIcntfDipC57TgTrE7UKi5zIPCcUR6qcV2UDgPzfLdT1_hgVu-qC424bAIqw9PSh5bScYcDF2Rpe_Gff5zdsyXciRG5Skuwgo6l8tyX44IV_JNiCBcHSAQVUFlizB4B51_vLzaz9igQoj06csdb3zZwICU57Pm_vRNkXZisChYL-X3noPT0hxi3GjOPmHcZte58BO2tloDWSHm0aZz52d-HCnSpHonAPcqcj0GJOBz3Mj"
            />
          </div>
          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl text-white font-bold mb-2">
              Ready to stay with us?
            </h2>
            <p className="text-white/80 text-sm">
              Book your stay and enjoy a warm, calm, and personal hospitality.
            </p>
          </div>
          <button className="relative z-10 bg-white text-brand px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-surface transition-colors">
            Book Your Stay <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>
    </>
  );
}
