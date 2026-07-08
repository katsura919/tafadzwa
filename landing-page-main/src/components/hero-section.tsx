"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Ripple } from "@/components/ui/ripple";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function HeroSectionOne() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-hidden bg-background pt-24 md:pt-32">
      <Ripple className="md:scale-100 lg:scale-125" centerY="40%" />

      <div className="flex flex-col items-center px-4 py-8 md:py-12">
        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background"
              >
                <Image
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by <span className="text-foreground">500+</span> businesses
          </p>
        </motion.div>

        {/* Heading */}
        <h1 className="relative z-10 mx-auto mt-6 max-w-4xl text-center text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Next-Generation{" "}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Website
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            for Businesses{" "}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg"
        >
          We provide the best in class design and development<br />services for teams that ship with the speed of light.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 mt-8 flex items-center justify-center"
        >
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-950/10 lg:text-lg">
              Get a Quote
            </span>
          </ShimmerButton>
        </motion.div>
      </div>

      {/* Marquee integrated into Hero */}
      <div className="relative mt-auto w-full overflow-hidden py-10">
        <Marquee speed={60} className="[--gap:4rem]">
          {[
            "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1775897013/cyberpunk-design.vercel.app__cin4ib.png",
            "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1775896580/neo-brutalism-design.vercel.app__kpyufk.png",
            "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1775896856/abie-s-digital-canvas.vercel.app__lpykvx.png",
            "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1775896942/maximalism-design.vercel.app__f6uhxo.png",
            "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1775896580/sketch-design.vercel.app__e0cvwh.png"
          ].map((url, i) => (
            <div
              key={`work-${i}`}
              className="relative w-[350px] h-[500px] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <Image 
                src={url} 
                alt={`Project ${i + 1}`} 
                fill 
                className="object-cover"
                sizes="350px"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}


