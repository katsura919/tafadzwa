"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const theme: "light" | "dark" = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <AnimatedThemeToggler
      variant="circle"
      duration={450}
      theme={mounted ? theme : "light"}
      onThemeChange={(t) => setTheme(t)}
      aria-label="Toggle theme"
      className={cn(
        "grid bg-background h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary [&_svg]:h-4 [&_svg]:w-4",
        className
      )}
    />
  )
}
