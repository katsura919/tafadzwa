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
  mainCircleOpacity = 0.3,
  numCircles = 12,
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
        const borderStyle = "solid"

        return (
          <div
            key={i}
            className={`animate-ripple bg-foreground/15 absolute rounded-full border border-foreground/30 shadow-none`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
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
