/** Dashed-grid backdrop (scrolls with the page) + a soft edge-fade vignette. */
export function GridBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 4px,
              transparent 4px,
              transparent 10px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 4px,
              transparent 4px,
              transparent 10px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 4px,
              transparent 4px,
              transparent 10px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 4px,
              transparent 4px,
              transparent 10px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      {/* edge-fade vignette — softens the grid toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, transparent 50%, var(--background) 100%)",
        }}
      />
    </>
  )
}
