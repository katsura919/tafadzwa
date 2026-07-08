import { about, site } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-md font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {about.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
