"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ParallaxScrollFeatureSection,
  type ParallaxSection,
} from "@/components/ui/parallax-scroll-feature-section";

const PRODUCTS: ParallaxSection[] = [
  {
    id: 1,
    title: "Glace Alimentaire",
    description:
      "Produite a partir d'une eau controlee et conforme aux exigences sanitaires. Ideale pour les restaurants, hotels, cafes et evenements. Refroidissement rapide et conservation optimale de vos aliments.",
    imageUrl:
      "https://raw.githubusercontent.com/Helmifalfie7/novaice-web/main/assets/photo-glace.png",
    reverse: false,
  },
  {
    id: 2,
    title: "Glace en Ecailles",
    description:
      "Parfaite pour la conservation du poisson, des produits de la mer et des denrees alimentaires. Utilisee par les industries agroalimentaires, boucheries et grandes surfaces.",
    imageUrl:
      "https://raw.githubusercontent.com/Helmifalfie7/novaice-web/main/assets/glace.jpg",
    reverse: true,
  },
];

export default function ProductsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="produits" className="bg-white">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 lg:pt-28 pb-4">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#122f6a] mb-4">
            Nos Produits
          </h2>
          <p className="text-[#122f6a]/55 text-base leading-relaxed mx-auto max-w-xl">
            Des solutions de glace de haute qualite pour repondre a tous vos
            besoins de conservation et de refroidissement professionnels.
          </p>
        </motion.div>
      </div>

      {/* Parallax product items */}
      <ParallaxScrollFeatureSection sections={PRODUCTS} />
    </section>
  );
}
