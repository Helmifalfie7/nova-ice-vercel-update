"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { PulsingBorder } from "@paper-design/shaders-react";

function SnowflakeLogo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-label="Nova Ice"
    >
      <line x1="32" y1="4" x2="32" y2="60" stroke="#4bb0ec" strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="32" x2="60" y2="32" stroke="#4bb0ec" strokeWidth="3" strokeLinecap="round" />
      <line x1="11.5" y1="11.5" x2="52.5" y2="52.5" stroke="#4bb0ec" strokeWidth="3" strokeLinecap="round" />
      <line x1="52.5" y1="11.5" x2="11.5" y2="52.5" stroke="#4bb0ec" strokeWidth="3" strokeLinecap="round" />
      {/* Branch tips - main axes */}
      <line x1="32" y1="4" x2="24" y2="13" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="4" x2="40" y2="13" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="60" x2="24" y2="51" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="60" x2="40" y2="51" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="32" x2="13" y2="24" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="32" x2="13" y2="40" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="32" x2="51" y2="24" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="32" x2="51" y2="40" stroke="#4bb0ec" strokeWidth="2" strokeLinecap="round" />
      {/* Center gem */}
      <circle cx="32" cy="32" r="5" fill="#4bb0ec" />
      <circle cx="32" cy="32" r="3" fill="#122f6a" />
    </svg>
  );
}

function RotatingTextCircle() {
  const prefersReduced = useReducedMotion();
  const text = "NOVA ICE • Glace Alimentaire • Glace en Ecailles • Tunisie • ";
  const r = 108;
  const cx = 130;
  const cy = 130;

  return (
    <div className="relative w-64 h-64 lg:w-[260px] lg:h-[260px]">
      {/* Rotating text ring */}
      <motion.div
        className="absolute inset-0"
        animate={prefersReduced ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full" aria-hidden="true">
          <defs>
            <path
              id="nova-text-path"
              d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
            />
          </defs>
          <text
            fill="#4bb0ec"
            fontSize="9.5"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            letterSpacing="2"
            opacity="0.85"
          >
            <textPath href="#nova-text-path">{text}</textPath>
          </text>
        </svg>
      </motion.div>

      {/* PulsingBorder + Logo centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44">
        <PulsingBorder
          colors={["#4bb0ec", "#122f6a", "#ffffff", "#a8d8f0", "#0a1f4d"]}
          colorBack="#00000000"
          roundness={1}
          thickness={0.035}
          softness={0.5}
          pulse={0.85}
          bloom={0.55}
          spots={4}
          spotSize={0.6}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="rounded-full bg-[#0a1f4d]/60 backdrop-blur-sm p-4 border border-[#4bb0ec]/20">
            <Image
              src="https://raw.githubusercontent.com/Helmifalfie7/novaice-web/main/assets/snowflake-blue.png"
              alt="Nova Ice Snowflake"
              width={52}
              height={52}
              className="object-contain drop-shadow-[0_0_8px_rgba(75,176,236,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="accueil"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050d1a]"
    >
      {/* Shader background */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          colors={["#000000", "#122f6a", "#4bb0ec", "#0a1f4d", "#ffffff"]}
          speed={0.55}
          distortion={0.35}
          swirl={0.2}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient vignette for contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#050d1a]/70 via-transparent to-[#050d1a]/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[#050d1a] to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-5">
            <motion.p
              {...fadeUp(0.15)}
              className="text-[#4bb0ec] text-xs font-semibold tracking-[0.25em] uppercase"
            >
              Specialiste du froid
            </motion.p>

            <motion.h1
              {...fadeUp(0.3)}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #a8d8f0 35%, #4bb0ec 65%, #122f6a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NOVA ICE
            </motion.h1>

            <motion.p
              {...fadeUp(0.45)}
              className="text-[#a8d8f0] text-xl italic font-light leading-[1.1] pb-1"
            >
              Glace alimentaire &amp; ecailles
            </motion.p>

            <motion.p
              {...fadeUp(0.58)}
              className="text-white/65 text-base leading-relaxed max-w-[480px]"
            >
              Production et distribution de glace alimentaire et de glace en
              ecailles en Tunisie. Des solutions de refroidissement fiables et
              hygieniques pour les professionnels.
            </motion.p>

            <motion.div
              {...fadeUp(0.72)}
              className="flex flex-col sm:flex-row gap-4 pt-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(75,176,236,0.45)]"
                style={{
                  background: "linear-gradient(135deg, #122f6a 0%, #4bb0ec 100%)",
                }}
              >
                Demander un devis
              </a>
              <a
                href="#produits"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white text-sm font-semibold border border-white/25 hover:border-[#4bb0ec] hover:text-[#4bb0ec] transition-all duration-300"
              >
                Decouvrir nos produits
              </a>
            </motion.div>
          </div>

          {/* Right: Rotating logo visual */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 70 }}
            className="flex items-center justify-center"
          >
            <RotatingTextCircle />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
