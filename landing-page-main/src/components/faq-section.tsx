"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What technology stack do you use?",
    answer: "We primarily build with Next.js, TypeScript, Tailwind CSS, and Framer Motion for premium, high-performance web experiences. Our backend solutions typically leverage Supabase or specialized Node.js APIs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Our MVP landing pages are typically delivered within 1 week. More complex dashboards and full-stack systems with custom design usually take between 2 to 4 weeks depending on the scope.",
  },
  {
    question: "Will my site be custom-made or from a template?",
    answer: "Every single project is designed and coded from scratch. We do not use generic templates, ensuring your brand has a unique, high-end digital presence that stands out from competitors.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer managed maintenance plans that include 24/7 monitoring, security updates, and performance optimizations to ensure your site remains state-of-the-art long after launch.",
  },
  {
    question: "How does the payment process work?",
    answer: "We operate on a project-based billing model. Typically, we require a 50% deposit to start and the remaining 50% upon successful delivery and launch. No hidden recurring fees.",
  },
];

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border last:border-0 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={cn(
          "text-lg font-bold tracking-tight transition-colors duration-300",
          isOpen ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
        )}>
          {question}
        </span>
        <div className={cn(
          "p-2 rounded-full transition-all duration-300",
          isOpen ? "bg-neutral-900 text-white dark:bg-white dark:text-black rotate-180" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
        )}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 pr-12 text-muted-foreground font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl"
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Everything you need to know about our process and workflow.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
