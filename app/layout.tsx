import type { Metadata } from "next"
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LenisProvider } from "@/components/lenis-provider"
import { GridBackground } from "@/components/grid-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Tafadzwa Fira, CRM cleanup & automation for coaches & founders",
  description:
    "Your leads are slipping through the cracks. I build the CRM that catches them, audits, clean builds, and automation for coaches, consultants, and service-based founders.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", fontMono.variable, fontHeading.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <GridBackground />
          <ScrollProgress />
          <LenisProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
