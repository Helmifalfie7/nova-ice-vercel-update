import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#apropos" },
  { label: "Produits", href: "#produits" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Contact", href: "#contact" },
];

function SnowflakeLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
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

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#4bb0ec]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <Image
                src="https://raw.githubusercontent.com/Helmifalfie7/novaice-web/main/assets/logo%20blanc.png"
                alt="Nova Ice"
                width={140}
                height={52}
                className="object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour la glace alimentaire et la glace en ecailles en Tunisie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#4bb0ec] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={14} className="text-[#4bb0ec] shrink-0" strokeWidth={1.5} />
                +216 XX XXX XXX
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={14} className="text-[#4bb0ec] shrink-0" strokeWidth={1.5} />
                contact@novaice.tn
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-[#4bb0ec] shrink-0 mt-0.5" strokeWidth={1.5} />
                Tunisie
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; 2025 Nova Ice - Tunisie. Tous droits reserves.
          </p>
          <p className="text-white/20 text-xs">
            Solutions de refroidissement professionnelles
          </p>
        </div>
      </div>
    </footer>
  );
}
