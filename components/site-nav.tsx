"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"

import { bookingHref, emailHref, nav, site } from "@/lib/content"
import { cn } from "@/lib/utils"
import AnimatedButton from "@/components/ui/animated-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto w-full max-w-5xl">
        <nav
          className={cn(
            "flex w-full items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-out",
            scrolled || open
              ? "border border-border bg-background shadow-[0_10px_30px_-16px_rgba(27,22,38,0.35)]"
              : "border border-transparent"
          )}
        >
          <a href="#top" onClick={() => setOpen(false)} className="pl-2">
            <span className="font-heading text-lg font-bold tracking-tight">{site.name}</span>
          </a>

          {/* desktop links */}
          <ul className="ml-auto hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <ThemeToggle />

            <AnimatedButton
              as="a"
              href={bookingHref}
              className="hidden cursor-pointer rounded-full border-transparent bg-primary px-5 py-2 text-sm text-primary-foreground no-underline transition-colors [--shine:rgba(255,255,255,.7)] hover:bg-gold hover:text-gold-foreground md:inline-flex"
            >
              Book a call
            </AnimatedButton>

            {/* mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 hover:text-primary-ink md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* mobile menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 rounded-3xl border border-border bg-background p-3 shadow-[0_20px_50px_-20px_rgba(27,22,38,0.4)] md:hidden"
            >
              <ul className="flex flex-col">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                <AnimatedButton
                  as="a"
                  href={bookingHref}
                  onClick={() => setOpen(false)}
                  className="w-full cursor-pointer justify-center rounded-full border-transparent bg-primary px-5 py-2.5 text-sm text-primary-foreground no-underline transition-colors [--shine:rgba(255,255,255,.7)] hover:bg-gold hover:text-gold-foreground"
                >
                  Book a call
                </AnimatedButton>
                <a
                  href={emailHref}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  Email me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
