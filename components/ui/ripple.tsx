import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  centerY?: string
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 250,
  mainCircleOpacity = 0.28,
  numCircles = 11,
  centerY = "50%",
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 110
        const opacity = Math.max(0.01, mainCircleOpacity - i * 0.02)
        const animationDelay = `${i * 0.1}s`

        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border border-primary/20 bg-primary/[0.06] shadow-none"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle: "solid",
                borderWidth: "1px",
                top: centerY,
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"
