"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { MoveRight, Sparkles } from "lucide-react";

const MESSAGES: string[] = [
  "BOOST CONVERSIONS\nWITH STUNNING\nDESIGN",
  "CRAFTED FOR\nPERFORMANCE\nAND SPEED",
  "YOUR VISION\nOUR CODE\nDONE RIGHT",
  "READY TO SCALE?\nLET'S BUILD\nTOGETHER",
];

export function HeroSection() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 dark:bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 -z-10 h-full w-full bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-950/20" />

      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span>New: High-Performance Landing Pages</span>
        </div>

        {/* Dynamic Title */}
        <div className="mb-12">
          <TextFlippingBoard text={MESSAGES[msgIdx]} className="scale-90 md:scale-100" />
        </div>

        {/* Subtext */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-400">
          We build precision-engineered landing pages that turn visitors into
          loyal customers. Elevate your brand with world-class UI and blazing fast performance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-black px-8 text-white transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black">
            <span>Get Started</span>
            <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-transparent px-8 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900">
            View Templates
          </button>
        </div>

        {/* Trust Pilot / Proof (Optional) */}
        <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale dark:invert">
          {/* Add small brand icons here if needed */}
        </div>
      </div>
    </section>
  );
}

