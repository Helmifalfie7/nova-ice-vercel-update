"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UtensilsCrossed,
  Coffee,
  Hotel,
  Calendar,
  Package,
  Fish,
  Factory,
  Beef,
  ShoppingCart,
  FlaskConical,
  ThermometerSnowflake,
  Clock,
  TrendingDown,
  Boxes,
  HandPlatter,
  Dumbbell,
} from "lucide-react";

const SECTORS = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Coffee, label: "Cafes et bars" },
  { icon: Hotel, label: "Hotels" },
  { icon: Calendar, label: "Evenements" },
  { icon: Package, label: "Conservation alimentaire" },
  { icon: Fish, label: "Poissons et produits de la mer" },
  { icon: Factory, label: "Industrie agroalimentaire" },
  { icon: Beef, label: "Boucheries et volailles" },
  { icon: ShoppingCart, label: "Grandes surfaces" },
  { icon: FlaskConical, label: "Laboratoires et industries" },
  { icon: Dumbbell, label: "Salle de sport" },
];

const ADVANTAGES = [
  { icon: ThermometerSnowflake, label: "Refroidissement rapide des produits" },
  { icon: Clock, label: "Maintien de la fraicheur" },
  { icon: TrendingDown, label: "Reduction des risques de deterioration" },
  { icon: Boxes, label: "Conservation optimale des aliments" },
  { icon: HandPlatter, label: "Facilite de manipulation des produits stockes" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function SectorsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="secteurs" className="bg-white py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#122f6a]">
            Secteurs d&apos;Activité
          </h2>
          <p className="mt-4 text-[#0d1f3c]/60 text-base leading-relaxed mx-auto max-w-xl">
            Nos produits repondent aux besoins d&apos;une large variete de
            professionnels, dans tous les secteurs lies a la conservation et au
            refroidissement.
          </p>
        </motion.div>

        {/* Sectors grid */}
        <motion.div
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-20 [&>*:last-child]:col-start-1 [&>*:last-child]:sm:col-start-2 [&>*:last-child]:lg:col-start-3 [&>*:last-child]:col-span-2 [&>*:last-child]:sm:col-span-1 [&>*:last-child]:max-w-[160px] [&>*:last-child]:sm:max-w-none [&>*:last-child]:mx-auto [&>*:last-child]:w-full"
        >
          {SECTORS.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="group flex flex-col items-center gap-2 p-3 sm:p-5 rounded-2xl border border-[#122f6a]/8 bg-[#f0f8ff]/60 hover:bg-[#122f6a] hover:border-[#122f6a] transition-all duration-300 cursor-default min-h-[110px] justify-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#4bb0ec]/10 group-hover:bg-[#4bb0ec]/25 border border-[#4bb0ec]/20 flex items-center justify-center transition-colors duration-300">
                <Icon
                  size={20}
                  className="text-[#4bb0ec] group-hover:text-[#4bb0ec] transition-colors sm:w-7 sm:h-7"
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-[11px] sm:text-sm font-medium text-center text-[#122f6a] group-hover:text-white transition-colors leading-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages subsection */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #0a1f4d 0%, #122f6a 60%, #1a4a8a 100%)",
          }}
        >
          <motion.h3
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-bold text-2xl mb-8"
          >
            Avantages
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial={prefersReduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          >
            {ADVANTAGES.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4bb0ec]/15 border border-[#4bb0ec]/25 flex items-center justify-center">
                  <Icon size={18} className="text-[#4bb0ec]" strokeWidth={1.5} />
                </div>
                <p className="text-white/80 text-sm leading-snug font-medium">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
