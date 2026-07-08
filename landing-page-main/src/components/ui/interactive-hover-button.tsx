import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-primary text-primary-foreground relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-all duration-300 hover:bg-background hover:text-foreground",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center">
        <span className="inline-block transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-foreground absolute inset-0 z-10 flex items-center justify-center gap-2 translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  )
}
