"use client"

import { motion } from "motion/react"

import { bookingHref, services } from "@/lib/content"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import {
  AutomationVisual,
  BuildVisual,
  CleanupVisual,
  ManageVisual,
} from "@/components/bento-visuals"

const visuals = [
  <CleanupVisual key="cleanup" />,
  <BuildVisual key="build" />,
  <AutomationVisual key="automation" />,
  <ManageVisual key="manage" />,
]

export function Offer() {
  return (
    <section id="services" className="relative w-full scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground"
          >
            The offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Four ways to work together, <br className="hidden md:block" /> one-off to fully handled
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Pricing depends on the mess. Book a call and we&apos;ll scope it together — no numbers
            guessed in the dark.
          </motion.p>
        </div>

        <BentoGrid className="mx-auto max-w-5xl">
          {services.map((s, i) => (
            <BentoCard
              key={s.title}
              name={s.title}
              kicker={`${s.n} · ${s.kind}`}
              description={s.blurb}
              href={bookingHref}
              cta="Book a call"
              background={visuals[i]}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
