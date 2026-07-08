"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "group relative flex overflow-hidden p-2 [--gap:4rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex shrink-0 gap-[var(--gap)]"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        // Pause on hover
        style={{
          display: "flex"
        }}
      >
        <div className="flex shrink-0 gap-[var(--gap)]">
          {children}
        </div>
        <div className="flex shrink-0 gap-[var(--gap)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
