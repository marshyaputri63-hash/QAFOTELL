import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-alt pt-20 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold text-brand flex items-center mb-6">
              QAF
              <span className="text-brand-gold text-xl relative -top-0.5">O</span>
              TEL
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              QAFOTEL BOUTIQUE provides warm, personal, and memorable
              experiences for modern souls, in every moment that matters.
            </p>
            <div className="flex gap-4 text-gray-500">
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd" /></svg>
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" /></svg>
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s-.002 3.254-.42 4.814c-.23.861-.907 1.538-1.768 1.768-1.56.419-7.812.419-7.812.419s-6.252 0-7.812-.419c-.861-.23-1.538-.907-1.768-1.768C2.002 15.254 2 12 2 12s.002-3.254.42-4.814c.23-.861.907-1.538 1.768-1.768C5.748 5 12 5 12 5s6.252 0 7.812.418zM15.32 11.553l-5.32-3.076v6.152l5.32-3.076z" fillRule="evenodd" /></svg>
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9v-1h9v1zm0-3h-9v-1h9v1zm-1.5-3h-6V9h6v1z" fillRule="evenodd" /></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-brand transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-brand transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-600 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 mt-0.5 text-brand shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Jl. Cendana No. 46, Mentasari,
                  <br />
                  Balikpapan, Kalimantan Timur 76111
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-brand shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 812 3456 7800</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-brand shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@qafotel.com</span>
              </li>
            </ul>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Subscribe to get the latest updates and exclusive offers from
              QAFOTEL.
            </p>
            <form className="flex">
              <input
                className="w-full bg-white border border-gray-200 px-4 py-2 rounded-l-lg focus:outline-none focus:border-brand text-sm"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-r-lg transition-colors"
                type="submit"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 pt-6 border-t border-gray-300">
          &copy; 2024 QAFOTEL BOUTIQUE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
