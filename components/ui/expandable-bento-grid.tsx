"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"

import { useOutsideClick } from "@/hooks/use-outside-click"

export interface BentoGridProps {
  items: {
    id: string | number
    title: string
    subtitle?: string
    description?: string
    content: React.ReactNode
    icon?: React.ReactNode
    href?: string
    cta?: string
    className?: string
  }[]
}

export default function ExpandableBentoGrid({ items }: BentoGridProps) {
  const [active, setActive] = useState<(typeof items)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] h-full w-full bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 top-16 z-[10001] grid place-items-center p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card md:right-10 lg:hidden"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4 text-foreground" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[520px] flex-col overflow-hidden border border-border bg-card sm:h-fit sm:max-h-[90%] sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="flex h-40 w-full items-center justify-center bg-wash md:h-48">
                  {active.icon ? (
                    <div className="scale-[2.2] text-primary">{active.icon}</div>
                  ) : (
                    <div className="h-full w-full bg-muted" />
                  )}
                </div>
              </motion.div>

              <div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-heading text-lg font-bold text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="mt-1 text-sm text-balance text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.href ?? "#"}
                    className="shrink-0 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground no-underline"
                  >
                    {active.cta ?? "Learn more"}
                  </motion.a>
                </div>

                <div className="mx-auto flex w-full justify-center overflow-y-auto px-5 pt-2 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex w-full flex-col items-start gap-4 text-sm text-muted-foreground md:text-[15px]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto grid w-full max-w-4xl grid-cols-1 items-start gap-3 md:grid-cols-2 lg:gap-4">
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={item.id}
            onClick={() => setActive(item)}
            className="flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            <motion.div layoutId={`image-${item.title}-${id}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wash p-1 text-primary">
                {item.icon}
              </div>
            </motion.div>
            <div className="min-w-0">
              <motion.h3
                layoutId={`title-${item.title}-${id}`}
                className="text-left font-medium text-foreground"
              >
                {item.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${item.title}-${id}`}
                className="text-left text-xs text-muted-foreground md:text-[13px]"
              >
                {item.subtitle}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  )
}
