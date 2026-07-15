import Image from "next/image"

import { about, site } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[40px] bg-primary/15 blur-3xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(27,22,38,0.35)]">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                sizes="(max-width: 1024px) 24rem, 40vw"
                className="object-cover object-top"
                priority={false}
              />
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-md font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8">
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
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  Facebook
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
