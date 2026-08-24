"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-surface py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="font-serif text-2xl font-bold text-brand flex items-center">
          QAF
          <span className="text-brand-gold text-xl relative -top-0.5">O</span>
          TEL
          <span className="text-[0.6rem] uppercase tracking-widest font-sans ml-1 text-gray-500 absolute -bottom-3 left-1">
            Boutique
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href
                ? "text-brand border-b-2 border-brand pb-1"
                : "text-gray-600 hover:text-brand transition-colors pb-1"
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <Link
        href="#"
        className="hidden md:flex bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        Book Your Stay
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-500 hover:text-gray-600 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  pathname === link.href
                    ? "block text-brand font-medium"
                    : "block text-gray-600 hover:text-brand"
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block bg-brand text-white px-6 py-2.5 rounded-lg text-sm font-medium text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
