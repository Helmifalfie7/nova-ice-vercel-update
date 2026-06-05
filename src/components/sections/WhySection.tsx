"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, Star, Settings2, Truck } from "lucide-react";

const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "Qualite Alimentaire",
    description:
      "Une importance majeure a l'hygiene et a la qualite de production pour garantir une glace conforme aux exigences alimentaires.",
  },
  {
    icon: Zap,
    title: "Service Rapide",
    description:
      "Des livraisons rapides pour repondre efficacement aux besoins urgents de nos clients professionnels.",
  },
  {
    icon: Star,
    title: "Fiabilite",
    description:
      "Un service professionnel, ponctuel et constant que vous pouvez integrer a votre chaine de production.",
  },
  {
    icon: Settings2,
    title: "Solutions Adaptees",
    description:
      "Des solutions adaptees aux besoins des professionnels, quelle que soit la quantite demandee.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhySection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-[#e8f4fd]/40 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#122f6a]">
            Pourquoi Choisir Nos Produits ?
          </h2>
        </motion.div>

        {/* 4 cards */}
        <motion.div
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {WHY_CARDS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 border border-[#122f6a]/8 hover:border-[#4bb0ec]/30 hover:shadow-lg hover:shadow-[#4bb0ec]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4fd] flex items-center justify-center mb-5 group-hover:bg-[#4bb0ec]/15 transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-[#4bb0ec]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-bold text-[#122f6a] mb-2.5">
                {title}
              </h3>
              <p className="text-sm text-[#0d1f3c]/60 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Delivery banner */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start sm:items-center gap-5 bg-white rounded-2xl p-6 md:p-8 border border-[#4bb0ec]/20"
        >
          <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #122f6a, #4bb0ec)" }}
          >
            <Truck size={22} className="text-white" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-bold text-[#122f6a] text-base mb-1">Livraison</p>
            <p className="text-[#0d1f3c]/65 text-sm leading-relaxed max-w-2xl">
              Nous assurons la livraison de glace alimentaire et de glace en ecailles dans plusieurs regions de Tunisie avec un service rapide et organise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
