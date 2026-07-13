import { bookingHref, emailHref, finalCta } from "@/lib/content"
import { ButtonLink } from "@/components/ui/button-link"
import { Reveal } from "@/components/ui/reveal"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <Reveal>
        <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center md:px-16 md:py-24">

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {finalCta.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={bookingHref}>Book a call</ButtonLink>
              <ButtonLink href={emailHref} variant="secondary" withArrow={false}>
                Email me
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
