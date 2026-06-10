"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Award, Heart } from "lucide-react";

const VALUES = [
  {
    icon: Sparkles,
    title: "Hygiene",
    description: "Respect strict des normes sanitaires a chaque etape de la production pour vous garantir un produit conforme et sans risque.",
    accent: "#4bb0ec",
  },
  {
    icon: Award,
    title: "Qualite",
    description: "Une production controlee pour garantir un produit fiable, constant et adapte aux exigences des professionnels.",
    accent: "#122f6a",
  },
  {
    icon: Heart,
    title: "Satisfaction Client",
    description: "Un accompagnement serieux et personnalise pour repondre a vos besoins specifiques et assurer votre complete satisfaction.",
    accent: "#4bb0ec",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ValuesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#122f6a]">
            Nos Valeurs
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALUES.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${accent}, transparent)`,
                }}
              />

              <div className="pt-8 pb-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #0a1f4d, #122f6a)"
                        : "#e8f4fd",
                  }}
                >
                  <Icon
                    size={24}
                    className={i === 1 ? "text-[#4bb0ec]" : "text-[#4bb0ec]"}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#122f6a] mb-3">
                  {title}
                </h3>
                <p className="text-[#0d1f3c]/65 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
