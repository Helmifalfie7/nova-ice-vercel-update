"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#apropos" },
  { label: "Produits", href: "#produits" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Contact", href: "#contact" },
];

function SnowflakeLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Nova Ice"
    >
      <line x1="16" y1="2" x2="16" y2="30" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="16" x2="30" y2="16" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="6.5" y1="6.5" x2="25.5" y2="25.5" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="25.5" y1="6.5" x2="6.5" y2="25.5" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="2" x2="12" y2="7" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="2" x2="20" y2="7" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="12" y2="25" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="20" y2="25" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="7" y2="12" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="7" y2="20" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="16" x2="25" y2="12" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="16" x2="25" y2="20" stroke="#4bb0ec" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.5" fill="#4bb0ec" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1f4d]/96 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-center">
          <Image
            src="https://raw.githubusercontent.com/Helmifalfie7/novaice-web/main/assets/generated-logo-modified.png"
            alt="Nova Ice"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/75 hover:text-[#4bb0ec] text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(75,176,236,0.4)]"
          style={{ background: "linear-gradient(135deg, #122f6a, #4bb0ec)" }}
        >
          Demander un devis
        </a>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0a1f4d]/98 backdrop-blur-md border-t border-[#4bb0ec]/10"
          >
            <nav className="flex flex-col px-6 py-5 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-[#4bb0ec] text-sm font-medium transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #122f6a, #4bb0ec)" }}
                onClick={() => setMobileOpen(false)}
              >
                Demander un devis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
