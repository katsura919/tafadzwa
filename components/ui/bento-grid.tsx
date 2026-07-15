import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className?: string
  background: ReactNode
  kicker?: string
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full auto-rows-[24rem] grid-cols-1 gap-6 md:grid-cols-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  kicker,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-end overflow-hidden rounded-3xl",
      "bg-card [box-shadow:0_0_0_1px_rgba(27,22,38,.04),0_2px_4px_rgba(27,22,38,.04),0_12px_24px_rgba(27,22,38,.05)]",
      "border border-dashed border-border transition-shadow duration-300 hover:[box-shadow:0_0_0_1px_rgba(139,92,246,.16),0_18px_40px_-12px_rgba(139,92,246,.24)]",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">
      {background}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-card from-25% via-card/90 to-transparent" />
    </div>

    <div className="pointer-events-none z-10 flex flex-col gap-1 p-8 pt-0 transition-all duration-300 group-hover:-translate-y-10">
      {kicker && (
        <span className="mb-2 font-mono text-[11px] font-medium tracking-[0.14em] text-primary-ink uppercase">
          {kicker}
        </span>
      )}
      <h3 className="mb-1 font-heading text-2xl font-bold tracking-tight text-foreground">{name}</h3>
      <p className="max-w-xl text-sm leading-relaxed font-medium text-muted-foreground">
        {description}
      </p>
    </div>

    <div className="pointer-events-none absolute bottom-0 z-20 flex w-full translate-y-10 transform-gpu flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-2 text-sm font-bold text-primary-ink"
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-primary/[0.015]" />
  </div>
)

export { BentoCard, BentoGrid }
