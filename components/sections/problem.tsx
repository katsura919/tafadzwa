import { problem } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>{problem.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-md font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {problem.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {problem.body}
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {problem.quotes.map((q, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <blockquote className="rounded-2xl border border-border bg-card px-6 py-5 text-[17px] leading-snug font-medium text-foreground shadow-sm">
                  <span className="mr-1 font-heading text-2xl text-primary">“</span>
                  {q}
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
