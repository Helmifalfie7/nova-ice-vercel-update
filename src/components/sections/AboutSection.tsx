"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Truck,
  Package,
  Headphones,
  BadgeCheck,
} from "lucide-react";
import PathAnimation from "@/components/ui/svg-path-drawing-text-animation";

const COMMITMENTS = [
  { icon: BadgeCheck, label: "Qualite alimentaire garantie" },
  { icon: ShieldCheck, label: "Respect des normes d'hygiene" },
  { icon: Zap, label: "Refroidissement rapide et efficace" },
  { icon: Truck, label: "Livraison rapide et ponctuelle" },
  { icon: Package, label: "Disponibilite en differentes quantites" },
  { icon: Headphones, label: "Service professionnel adapte" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AboutSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="apropos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* BLOCK 1 — Two-column grid: text left, sticky card right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">

          {/* Left: title + paragraphs only */}
          <div>
            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#122f6a] mb-8"
            >
              A propos
            </motion.h2>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-[#0d1f3c]/70 text-base leading-relaxed"
            >
              <p>
                Depuis plusieurs annees, Nova Ice est specialisee dans la
                fabrication et la distribution de glace alimentaire et de glace
                en ecailles destinee aux professionnels. Nous fournissons des
                produits de haute qualite permettant de preserver la fraicheur
                des aliments, garantir une chaine de froid optimale et repondre
                aux exigences des secteurs alimentaires et industriels.
              </p>
              <p>
                Grace a notre expertise, notre reactivite et notre engagement
                envers la qualite, nous sommes devenus un partenaire de confiance
                pour de nombreux professionnels en Tunisie.
              </p>
            </motion.div>
          </div>

          {/* Right: sticky Notre Mission card — plain div owns sticky, motion.div owns animation */}
          <div className="sticky top-24 self-start h-fit">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl p-8 space-y-4 bg-[#f0f8ff] border border-[#4bb0ec]/15">
                {/* Animated SVG title */}
                <PathAnimation
                  text="Notre Mission"
                  fontSize="100"
                  gradientStart="#0a93e2ff"
                  gradientEnd="#122f6a"
                  gradientId="missionGradient"
                  strokeWidth="1.5"
                  dur="4s"
                  repeatCount="indefinite"
                  viewBoxHeight={100}
                />

                {/* Subtitle */}
                <p className="text-[#122f6a]/70 text-base font-medium text-center mt-2">
                  Refroidissement fiable. Qualite garantie.
                </p>

                {/* Stats grid */}
                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#4bb0ec]/15">
                  {[
                    { value: "100%", label: "Qualite alimentaire" },
                    { value: "24h", label: "Livraison rapide" },
                    { value: "Pro", label: "Usage professionnel" },
                    { value: "TN", label: "Made in Tunisie" },
                  ].map(({ value, label }) => (
                    <div key={label} className="space-y-0.5">
                      <p className="text-[#4bb0ec] font-bold text-lg">{value}</p>
                      <p className="text-[#0d1f3c]/45 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCK 2 — Separator */}
        <hr className="border-[#122f6a]/10 my-12" />

        {/* BLOCK 3 — Nos Engagements: full width, outside the grid */}
        <motion.div
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-sm font-bold tracking-widest text-[#122f6a] uppercase mb-8">
            Nos Engagements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMITMENTS.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-center gap-4 py-3 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#4bb0ec]/12 border border-[#4bb0ec]/25 flex items-center justify-center group-hover:bg-[#4bb0ec]/20 transition-colors duration-200">
                  <Icon size={22} className="text-[#4bb0ec]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-[#0d1f3c]/75 font-medium leading-snug">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
