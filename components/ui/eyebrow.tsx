import { cn } from "@/lib/utils"

type EyebrowProps = {
  children: React.ReactNode
  className?: string
}

/** Pill badge used as a section kicker. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground",
        className
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-ink" />
      {children}
    </span>
  )
}
