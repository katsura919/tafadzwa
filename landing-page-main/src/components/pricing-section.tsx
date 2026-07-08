"use client";

import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GlareHover } from "@/components/ui/glare-hover";

const tiers = [
  {
    name: "MVP",
    price: "$999",
    description: "Perfect for validating your idea with a high-fidelity landing page.",
    features: [
      "Custom UI Design",
      "Next.js Development",
      "Responsive Layout",
      "SEO Optimization",
      "1 Week Delivery",
    ],
    cta: "Start MVP",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,999",
    description: "Comprehensive solution for scaling businesses with complex needs.",
    features: [
      "Everything in MVP",
      "Admin Dashboard",
      "Auth Integration",
      "Database Setup",
      "2-3 Weeks Delivery",
      "Priority Support",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Fully bespoke systems built for high-scale performance and security.",
    features: [
      "Everything in Growth",
      "Microservices Architecture",
      "Cloud Infrastructure",
      "24/7 Managed Maintenance",
      "White-label Solution",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground font-heading"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl"
          >
            Investment in Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground font-sans"
          >
            No recurring fees. Fixed-rate project billing with zero hidden costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full relative"
            >
              {tier.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 border border-border px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground font-heading z-30">
                  Most Popular
                </div>
              )}
              <GlareHover
                background="transparent"
                opacity={0.3}
                width="100%"
                height="100%"
                className="rounded-3xl"
              >
                <div
                  className={cn(
                    "relative flex flex-col h-full p-8 rounded-3xl border transition-all duration-300 transform-gpu",
                    tier.popular 
                      ? "bg-neutral-900 dark:bg-white border-neutral-800 dark:border-neutral-200 shadow-2xl scale-[1.02] z-10" 
                      : "bg-card border-border hover:border-muted-foreground/50"
                  )}
                >

                  <div className="mb-8">
                    <h3 className={cn(
                      "text-lg font-bold mb-2 uppercase tracking-tighter font-heading",
                      tier.popular ? "text-neutral-400 dark:text-neutral-500" : "text-muted-foreground"
                    )}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={cn(
                        "text-4xl font-black tracking-tighter font-heading",
                        tier.popular ? "text-white dark:text-neutral-900" : "text-foreground"
                      )}>
                        {tier.price}
                      </span>
                      {tier.price !== "Custom" && (
                        <span className={cn(
                          "text-sm font-medium font-sans",
                          tier.popular ? "text-neutral-500" : "text-muted-foreground"
                        )}>
                          /project
                        </span>
                      )}
                    </div>
                    <p className={cn(
                      "mt-4 text-sm font-medium leading-relaxed font-sans",
                      tier.popular ? "text-neutral-400 dark:text-neutral-600" : "text-muted-foreground"
                    )}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className={cn(
                          "h-4 w-4 mt-0.5",
                          tier.popular ? "text-white dark:text-neutral-900" : "text-foreground"
                        )} />
                        <span className={cn(
                          "text-sm font-medium font-sans",
                          tier.popular ? "text-neutral-300 dark:text-neutral-700" : "text-muted-foreground"
                        )}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {tier.popular ? (
                    <ShimmerButton className="w-full shadow-2xl font-heading">
                      {tier.cta}
                    </ShimmerButton>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full rounded-xl border-2 font-bold font-heading hover:bg-foreground hover:text-background transition-colors"
                    >
                      {tier.cta}
                    </Button>
                  )}
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
