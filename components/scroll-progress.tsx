"use client"

import { motion, useScroll, useSpring } from "motion/react"

/** Thin top progress bar that replaces the native page scrollbar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-primary via-lilac to-gold"
    />
  )
}
