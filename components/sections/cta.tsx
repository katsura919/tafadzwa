import { bookingHref, emailHref, finalCta } from "@/lib/content"
import { ButtonLink } from "@/components/ui/button-link"
import { Reveal } from "@/components/ui/reveal"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <Reveal>
        <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-primary bg-primary px-6 py-20 text-center md:px-16 md:py-24">

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              {finalCta.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                href={bookingHref}
                className="bg-gold text-gold-foreground shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:bg-white hover:text-[#7c3aed]"
              >
                Book a call
              </ButtonLink>
              <ButtonLink
                href={emailHref}
                variant="secondary"
                withArrow={false}
                className="border-white/30 bg-transparent text-primary-foreground hover:border-gold hover:bg-white/10"
              >
                Email me
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
