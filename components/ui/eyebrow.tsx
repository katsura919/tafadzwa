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
        "inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
