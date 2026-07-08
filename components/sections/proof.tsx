import { Star } from "lucide-react"

import { showCert, testimonial } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"

export function Proof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:py-32">
      <div className="mb-14 flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Proof</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Real cleanups. Real numbers. Nothing left in limbo.
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Reveal delay={0.05}>
          <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-[0_2px_4px_rgba(27,22,38,.04)] md:p-10">
            <div>
              <div className="mb-5 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-heading text-2xl leading-[1.3] font-semibold tracking-tight text-foreground md:text-3xl">
                “{testimonial.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-wash text-sm font-bold text-primary">
                TF
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {testimonial.attribution}
                </span>
                <span className="block text-xs text-muted-foreground">{testimonial.note}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex h-full flex-col gap-4">
            <div className="flex flex-1 flex-col justify-center rounded-3xl border border-border bg-wash p-7">
              <span className="font-heading text-5xl font-bold tracking-tight text-primary">935</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                contacts cleaned in one recent GoHighLevel build — 312 duplicates gone, zero bad
                emails, 100% tag consistency.
              </p>
            </div>
            {showCert && (
              <div className="flex items-center gap-3 rounded-3xl border border-border bg-card p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ok/10 text-ok">
                  ✓
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Certified CRM specialist
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
