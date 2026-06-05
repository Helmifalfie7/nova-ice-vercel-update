'use client'

import { useRef } from "react"
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
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0])

  return (
    <div
      ref={ref}
      className={`py-16 flex items-center justify-center gap-10 md:gap-20 px-6 md:px-12 max-w-7xl mx-auto w-full ${
        section.reverse ? "flex-row-reverse" : ""
      }`}
    >
      <motion.div style={{ y }} className="flex flex-col flex-1 min-w-0">
        <div className="text-3xl md:text-4xl font-bold text-[#122f6a]">
          {section.title}
        </div>
        <motion.p
          style={{ y }}
          className="text-[#122f6a]/60 mt-4 text-base leading-relaxed"
        >
          {section.description}
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity, clipPath }}
        className="relative hidden md:block shrink-0"
      >
        <Image
          src={section.imageUrl}
          width={350}
          height={350}
          className="w-[350px] h-[350px] object-cover rounded-2xl border border-[#4bb0ec]/20 shadow-lg shadow-[#4bb0ec]/10"
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
      {sections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </div>
  )
}
