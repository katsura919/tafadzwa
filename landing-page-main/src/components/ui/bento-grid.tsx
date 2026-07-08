import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[25rem] grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
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
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-end overflow-hidden rounded-3xl",
      "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "border border-dashed border-neutral-300 dark:border-neutral-800",
      "dark:bg-[#060606] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">
      {background}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-sm" />
    </div>
    
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-8 pt-0 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
        {name}
      </h3>
      <p className="max-w-xl text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20"
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0 text-neutral-900 dark:text-neutral-50 font-bold"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>
    
    <div className="absolute inset-0 pointer-events-none group-hover:bg-black/[0.02] dark:group-hover:bg-white/[0.02] transition-colors duration-300" />
  </div>
)

export { BentoCard, BentoGrid }
