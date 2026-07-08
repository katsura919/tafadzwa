"use client"

import { motion } from "motion/react"
import { CalendarCheck, GitMerge, Mail, Tag } from "lucide-react"

import { bookingHref, emailHref, hero } from "@/lib/content"
import { ButtonLink } from "@/components/ui/button-link"

const activity = [
  { icon: GitMerge, text: "312 duplicates merged", tag: "Cleanup", tone: "violet" },
  { icon: Mail, text: "Follow-up sent to 40 leads", tag: "Auto", tone: "violet" },
  { icon: CalendarCheck, text: "New call booked — Priya N.", tag: "Booked", tone: "ok" },
  { icon: Tag, text: "Contacts tagged & sorted", tag: "Tidy", tone: "violet" },
]

const stages = [
  { label: "New", value: "86%" },
  { label: "Nurturing", value: "62%" },
  { label: "Booked", value: "38%" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pt-40 pb-16 md:pt-36"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left — copy */}
        <div className="min-w-0 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground"
          >
            {hero.eyebrow}
          </motion.span>

          <h1 className="mt-6 font-heading text-[clamp(2.25rem,7vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-foreground">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Your leads{" "}
              <span className="relative inline-block text-primary">
                slip
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-primary/40"
                />
              </span>{" "}
              through the cracks.
            </motion.span>

          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <ButtonLink href={bookingHref}>Book a call</ButtonLink>
            <ButtonLink href={emailHref} variant="secondary" withArrow={false}>
              Email me
            </ButtonLink>
          </motion.div>

        </div>

        {/* Right — live activity visual */}
        <div className="relative mx-auto w-full min-w-0 max-w-sm lg:max-w-none">
          {/* ambient glow */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[44px] bg-primary/15 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border bg-card p-4 shadow-[0_30px_80px_-30px_rgba(27,22,38,0.35)] sm:p-5"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
              </span>
              <span className="text-sm font-semibold text-foreground">Live activity</span>
              <span className="ml-auto text-xs text-muted-foreground">Today</span>
            </div>

            <ul className="space-y-2">
              {activity.map((a, i) => {
                const Icon = a.icon
                const tone = a.tone === "ok" ? "bg-ok/10 text-ok" : "bg-wash text-primary"
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-background px-3 py-2.5"
                  >
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${tone}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 truncate text-[13px] font-medium text-foreground">
                      {a.text}
                    </span>
                    <span
                      className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${tone}`}
                    >
                      {a.tag}
                    </span>
                  </motion.li>
                )
              })}
            </ul>

            {/* mini pipeline */}
            <div className="mt-4 space-y-2 border-t border-border pt-4">
              {stages.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-[11px] font-medium text-muted-foreground">
                    {s.label}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-lilac"
                      initial={{ width: 0 }}
                      animate={{ width: s.value }}
                      transition={{ duration: 0.9, delay: 1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* floating chips — desktop only to avoid mobile overflow */}
          <div className=" absolute -top-5 -left-6 hidden items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-lg sm:flex">
            <span className="font-heading text-base font-bold text-primary">100%</span>
            <span className="text-xs font-medium text-foreground">tag consistency</span>
          </div>
          <div
            className=" absolute -right-5 -bottom-5 hidden items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-lg sm:flex"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ok text-[11px] text-white">
              ✓
            </span>
            <span className="text-xs font-medium text-foreground">0 leads lost</span>
          </div>
        </div>
      </div>
    </section>
  )
}
