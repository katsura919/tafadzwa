"use client";

import React from "react";
import { motion } from "motion/react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { 
  Zap, 
  Palette, 
  TrendingUp, 
  DollarSign 
} from "lucide-react";
import { 
  DeliveryVisual, 
  CustomDesignVisual, 
  ScaleVisual, 
  PricingVisual 
} from "@/components/bento-visuals";

const features = [
  {
    Icon: Zap,
    name: "Quick Delivery",
    description: "We work with one project at a time — so you get results faster, without the chaos.",
    href: "/",
    cta: "Learn more",
    background: <DeliveryVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Palette,
    name: "Custom-Made Design",
    description: "Every layout is designed from scratch to reflect your brand, not a template.",
    href: "/",
    cta: "Learn more",
    background: <CustomDesignVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: TrendingUp,
    name: "Built to Scale",
    description: "We create flexible systems that are easy to update as your business evolves.",
    href: "/",
    cta: "Learn more",
    background: <ScaleVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: DollarSign,
    name: "Transparent Pricing",
    description: "No hidden costs. Just clear, fixed rates that fit your scope and budget.",
    href: "/",
    cta: "Learn more",
    background: <PricingVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl"
          >
            Everything you need for a <br /> premium digital presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            We combine state-of-the-art technology with world-class design to deliver results that matter.
          </motion.p>
        </div>

        <BentoGrid className="max-w-5xl mx-auto md:grid-cols-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
