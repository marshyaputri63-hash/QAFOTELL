import Link from "next/link";
import {
  Users,
  Mail,
  Bed,
  Globe,
  Wifi,
  Monitor,
  Briefcase,
  Car,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function RoomsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <img
          alt="Hotel exterior at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSsoM25kymqg4GtnTcjx1iY2_3e-nu7hbRfSDWEaICWlDtjN7baPvVXy16TYe3y2fyARKqNbSBcsimIcndZ6owDSRqO1O1APJQbmbEr3S5ylHa5f4vCJwRoYj-ANRPAIbmq8pQIGsjUnp0HtIKRCkCti1zd1eZSd-ShIMHFrHb6prX2DTNCaic7yt6MHZZH8ymXjRpIBBmIpDKs-6DDXjUqsKZzzZYBdk85vpM6CtdOfBKWJK544nv"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Rooms Designed
            <br />
            for Rest &amp; Renewal
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-md leading-relaxed">
            Thoughtfully designed spaces that blend modern comfort with natural
            tranquility in Balikpapan.
          </p>
          <div className="w-12 h-1 bg-brand-gold mt-8" />
        </div>
      </section>

      {/* Room Listing Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              Our Rooms
              <ArrowRight className="w-4 h-4" />
            </p>
            <h2 className="text-4xl font-serif text-gray-900 mb-2">
              Find Your Perfect Stay
            </h2>
            <p className="text-gray-600">
              Choose the room that suits your journey.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-medium">
              All Rooms
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Room Features
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Leaf Room */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-brand/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-sm">
                Most Popular
              </span>
              <img
                alt="Leaf Room interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRvaS5NQeWNTcvfvVRqIUutvhzMRp_A8RyC1jyb8Geubv4GuoXfj-v9PbLdayKrHHhWiN3SSetEuhJ1AfIypysKAvktZB4OZDoOW3oHeygzabZuyjcJW2R0Fa4CsvJTd-mKqRKdZkpL6nGz07WqWNKmhmtN-gxDgAdD8zPs2MTiuzcqYrgZezAVUWlmgCrGIJjpcD2sT2GlVINWiVPTV8lZrrvz_GoO5HpriRFP3FpqGp4R4DEmLrg"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                Leaf Room
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                A cozy retreat with modern design and essential comforts for a
                relaxing stay.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="text-brand w-[18px] h-[18px]" />
                  <span>
                    Breakfast
                    <br />
                    for 2 pax
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-brand w-[18px] h-[18px]" />
                  <span>23 m&sup2;</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="text-brand w-[18px] h-[18px]" />
                  <span>King / Twin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-brand w-[18px] h-[18px]" />
                  <span>Cozy Stay</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="text-gray-500 text-sm">
                  From{" "}
                  <span className="text-xl font-bold text-gray-900">
                    IDR 618.000
                  </span>{" "}
                  /night
                </div>
                <Link
                  href="#"
                  className="bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand/90 transition-colors flex items-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Oase Room */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-brand/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-sm">
                Most Popular
              </span>
              <img
                alt="Oase Room interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCiEBLOxUu-2TJKJ81lHq7hYcOciv1E2Rmq3VdX9UQZcCGnJSbz51b9968dWkHBPsAiWHxQ9FjX3dy2QeH8mgP0cyvvAgI6hC_89IzRuOvdiaqohbEudzbPoqpAAgXtBrEs0UVweoi38Iaj1rcNzVmYzmhWiIP6HJ9BkZsvJiQq52vxgLxWGzn8Q8D1niCJEiZWmvAcFJ9w2SjSpzEsY0spsnk0o0bkUAA6yWHlDlzsoMWlzL2r93_"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                Oase Room
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                A serene suite with a separate living area and exclusive
                amenities for a more relaxing stay.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="text-brand w-[18px] h-[18px]" />
                  <span>
                    Breakfast
                    <br />
                    for 2 pax
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-brand w-[18px] h-[18px]" />
                  <span>30 m&sup2;</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="text-brand w-[18px] h-[18px]" />
                  <span>King</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-brand w-[18px] h-[18px]" />
                  <span>Cozy Stay</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="text-gray-500 text-sm">
                  From{" "}
                  <span className="text-xl font-bold text-gray-900">
                    IDR 765.000
                  </span>{" "}
                  /night
                </div>
                <Link
                  href="#"
                  className="bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand/90 transition-colors flex items-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="bg-gray-100/50 rounded-2xl p-8 flex flex-wrap justify-between gap-6">
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Wifi className="text-brand w-6 h-6" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                High-Speed Wi-Fi
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Stay connected
                <br />
                anytime
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Monitor className="text-brand w-6 h-6" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">Smart TV</h4>
              <p className="text-xs text-gray-500 mt-1">
                Entertainment at
                <br />
                your fingertips
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <svg
              className="text-brand w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
              />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Breakfast Included
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Start your day
                <br />
                with our best
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Briefcase className="text-brand w-6 h-6" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">Work Desk</h4>
              <p className="text-xs text-gray-500 mt-1">
                A space to work
                <br />
                in comfort
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Car className="text-brand w-6 h-6" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">Free Parking</h4>
              <p className="text-xs text-gray-500 mt-1">
                Safe &amp; convenient
                <br />
                parking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-brand rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2em0wLTUweG1pbi00VjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
              Ready to Relax?
            </h2>
            <p className="text-brand-light/80">
              Book directly for the best rates and exclusive benefits.
            </p>
          </div>
          <Link
            href="#"
            className="relative z-10 bg-white text-brand px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Book Your Stay
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
