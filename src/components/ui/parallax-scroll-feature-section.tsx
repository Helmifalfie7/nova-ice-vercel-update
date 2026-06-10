'use client'

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export type ParallaxSection = {
  id: number
  title: string
  description: string
  imageUrl: string
  reverse?: boolean
}

function SectionItem({ section }: { section: ParallaxSection }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  )
  const y = useTransform(scrollYProgress, [0, 1], [-20, 0])

  return (
    <div
      ref={ref}
      className={`min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto w-full relative z-10 bg-white ${
        section.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        style={{ y, position: 'relative', zIndex: 20 }}
        className="flex flex-col flex-1 min-w-0"
      >
        <div className="text-3xl md:text-4xl font-bold text-[#122f6a]">
          {section.title}
        </div>
        <p className="text-[#122f6a]/60 mt-4 text-base leading-relaxed">
          {section.description}
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: isMobile ? 1 : opacity,
          clipPath: isMobile ? 'none' : clipPath,
          position: 'relative',
          zIndex: 10,
        }}
        className="shrink-0"
      >
        <Image
          src={section.imageUrl}
          width={350}
          height={350}
          className="w-full max-w-sm h-64 md:w-[350px] md:h-[350px] object-cover rounded-2xl border border-[#4bb0ec]/20 shadow-lg shadow-[#4bb0ec]/10"
          alt={section.title}
        />
      </motion.div>
    </div>
  )
}

type ParallaxScrollFeatureSectionProps = {
  sections: ParallaxSection[]
}

export function ParallaxScrollFeatureSection({
  sections,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <div key={section.id}>
          <SectionItem section={section} />
          {index < sections.length - 1 && (
            <div className="w-full h-px bg-[#122f6a]/8 mx-auto max-w-4xl" />
          )}
        </div>
      ))}
    </div>
  )
}
