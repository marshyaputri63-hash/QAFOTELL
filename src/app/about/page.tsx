import Link from "next/link";
import {
  Users,
  Globe,
  Smile,
  Sun,
  Heart,
  User,
  Clock,
  Leaf,
  Droplets,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Qafotel Exterior at Sunset"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgXoVagwfGlT1idUlW6NeGIiKlm2Qln9gPPiSarvU9KtIGVDaEChtdaXAfmnNTFFSs-fAHkcW9MKIllXlEvtukuc_2Uqy7eEJAsAmgKUgbImRejwZjk4-hvtfQC2q51gh8IXUG-SWj4BX7-3dtVjQCSu9f7Sndu7ZaHqQq3vfNMkyo-EbfPhTAAhn0jrtOEVF9_7Y1x9qmampMKJkz6PKkTsOb-N50FG4eLyL0JzKlcVEkCLofmoyc"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="serif text-4xl md:text-5xl text-white mb-4 flex items-center gap-3">
              About Qafotel
              <svg
                className="text-yellow-400"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </h1>
            <p className="text-xl text-white/90 font-light">A space to reset.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-widest text-brand uppercase">
                  Our Story
                </span>
                <svg
                  className="text-yellow-500"
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
                Inspired by Qaf,
                <br />
                Created for You
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Qafotel Boutique draws inspiration from the Arabic letter
                &quot;Qaf&quot; (ق), a symbol of new beginnings, balance, and
                serenity. We created a place where thoughtful design meets warm
                hospitality—so you can pause, reconnect, and begin again.
              </p>
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Boutique Experience
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Intimate, stylish, and thoughtfully curated.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Local Heart
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Rooted in Balikpapan, connected to the community.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Smile className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Trusted Hospitality
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Dedicated team committed to your comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img
                alt="Hotel Building Exterior"
                className="rounded-2xl shadow-xl w-full h-[400px] lg:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD82hMgZesskDhnWdy_-tsk6vy-0Aqf9Hlj82GbflSXB2XnQW8K86glN7n_Qs_axUdUkJMUXHkCkn9YqzxdVMoZlVijkwCD2yqEPkrqLApWMty1b2J1U-avRkTVJGWLHlOAbZozKeJGdgXuNKhu_MKQwNUhNoqGeqX6FsbwOjzDHE-2fxWYlkiI1ChDhZx1M1QKN99oQ_pDevjryiT9HGA99Y1S4PijKOT9yEf9eDoMDLSqp9aG2v70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand uppercase">
                Our Philosophy
              </span>
              <svg
                className="text-yellow-500"
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="serif text-3xl md:text-4xl text-gray-900">
              The Four Pillars of Our Hospitality
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Warm */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="serif text-xl font-bold text-gray-900 mb-3">
                Warm
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We welcome you like family and care for every detail of your
                stay.
              </p>
            </div>
            {/* Calm */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="serif text-xl font-bold text-gray-900 mb-3">
                Calm
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                A tranquil atmosphere designed for rest, focus, and reflection.
              </p>
            </div>
            {/* Personal */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100">
                <User className="w-8 h-8" />
              </div>
              <h3 className="serif text-xl font-bold text-gray-900 mb-3">
                Personal
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Thoughtful touches and genuine service tailored to you.
              </p>
            </div>
            {/* Efficient */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-brand mb-6 border border-gray-100">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="serif text-xl font-bold text-gray-900 mb-3">
                Efficient
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Smart, seamless experiences that save you time and energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <img
                alt="Thoughtfully Designed Hotel Room"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdF8hxinqMmvpjYT-lIOMRTqY5jkMznzd9pujizcqPPNjQg7-Wt-lIE5q8T3WLSv9HdufBJot2dZDS9LVPx1TP_ibrIpv72SaE5k_GBDbVbvPncZEQnPg-PSMb3J820t7GLz2rO4p658-3DCyOkot3UxQT3eaFlcIQauX0yiOcsN0AisWvuYOIaT-1Iv02dI4eDDsIHhKGBAL-rovTAKizaTcGSo0VVc6va7SxMFBd0HmB7KOEaLYS"
              />
            </div>
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-widest text-brand uppercase">
                  Thoughtfully Designed
                </span>
                <svg
                  className="text-yellow-500"
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
                Green. Calming. Essential.
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Our spaces are thoughtfully designed with natural materials, soft
                tones, and abundant greenery to create a calming environment
                that nurtures well-being.
              </p>
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Leaf className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Natural Materials
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Warm textures and timeless finishes.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Sustainable Choices
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Eco-friendly practices for a better tomorrow.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <Droplets className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Well-being Focused
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Spaces that support rest and balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="w-full h-full text-white fill-current"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="serif text-2xl md:text-3xl text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              Begin Your Story at Qafotel
              <svg
                className="text-yellow-400"
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.4 8.8H21.6L15.8 13.2L18 20L12 15.6L6 20L8.2 13.2L2.4 8.8H9.6L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </h2>
            <p className="text-white/80">
              Discover our rooms or book your stay and experience a space to
              reset.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/rooms"
              className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Discover Rooms
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-lg bg-white text-brand font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Book Your Stay
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
