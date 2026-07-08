import { receipts } from "@/lib/content"
import { Counter } from "@/components/ui/counter"
import { Reveal } from "@/components/ui/reveal"
import StackedLogos from "@/components/ui/stacked-logos"

const logoGroups = receipts.map((r) => [
  <div key={r.label} className="flex flex-col items-center text-center">
    <span className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
      <Counter to={r.value} suffix={r.suffix} />
    </span>
    <span className="mt-2 text-[11px] font-medium text-muted-foreground sm:text-[13px]">
      {r.label}
    </span>
  </div>,
])

export function Receipts() {
  return (
    <section className="px-4">
      <Reveal className="flex flex-col items-center">
        <p className="mb-8 text-center font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
          One recent GoHighLevel cleanup
        </p>
        <StackedLogos logoGroups={logoGroups} logoWidth="clamp(84px, 22vw, 220px)" />
      </Reveal>
    </section>
  )
}
