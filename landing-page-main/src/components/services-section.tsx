"use client";

import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import { 
  LandingPageVisual, 
  DashboardVisual, 
  DeploymentVisual, 
  MaintenanceVisual 
} from "@/components/bento-visuals";
import { 
  Layout, 
  Settings, 
  Cloud, 
  ShieldCheck 
} from "lucide-react";

const items = [
  {
    name: "High-Converting Landing Pages",
    description: "Bespoke designs built to turn visitors into loyal customers with optimized conversion funnels.",
    className: "col-span-1",
    background: <LandingPageVisual />,
    Icon: Layout,
    cta: "View Templates",
    href: "#",
  },
  {
    name: "Custom Admin Dashboards",
    description: "Powerful data visualization and management tools tailored to your business operations.",
    className: "col-span-1",
    background: <DashboardVisual />,
    Icon: Settings,
    cta: "Live Demo",
    href: "#",
  },
  {
    name: "Seamless Cloud Deployment",
    description: "Worry-free infrastructure setup on AWS, Vercel, or Google Cloud with zero downtime.",
    className: "col-span-1",
    background: <DeploymentVisual />,
    Icon: Cloud,
    cta: "Learn More",
    href: "#",
  },
  {
    name: "24/7 Managed Maintenance",
    description: "Ongoing security updates, performance monitoring, and rapid support to keep you online.",
    className: "col-span-1",
    background: <MaintenanceVisual />,
    Icon: ShieldCheck,
    cta: "View Plans",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="max-w-5xl  px-4 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground"
          >
            Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl"
          >
            Capabilities that drive scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            From high-conversion landing pages to ongoing maintenance, we offer a comprehensive suite of services designed to scale your business.
          </motion.p>
        </div>

        <BentoGrid className="mx-auto md:grid-cols-2">
          {items.map((item, idx) => (
            <BentoCard key={idx} {...item} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
