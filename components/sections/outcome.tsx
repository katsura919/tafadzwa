import { ArrowUpRight } from "lucide-react"

import { outcomes } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"

export function Outcome() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <Eyebrow>After we work together</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              The pipeline stops leaking. You get the quiet back.
            </h2>
          </Reveal>
        </div>

        <ul className="lg:pt-2">
          {outcomes.map((o, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <li className="flex items-start gap-4 border-b border-border py-5 text-lg leading-snug text-foreground">
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {o}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
