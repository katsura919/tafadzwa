import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "ghost"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 ease-out"

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground hover:shadow-[0_10px_30px_-8px_rgba(251,191,36,0.65)]",
  secondary:
    "border border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10",
  ghost: "text-muted-foreground hover:text-primary-ink",
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  withArrow?: boolean
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
}: ButtonLinkProps) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {withArrow && (
        <span
          aria-hidden
          className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
        >

        </span>
      )}
    </a>
  )
}
