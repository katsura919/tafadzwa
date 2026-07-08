import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { Receipts } from "@/components/sections/receipts"
import { Problem } from "@/components/sections/problem"
import { Offer } from "@/components/sections/offer"
import { Included } from "@/components/sections/included"
import { Outcome } from "@/components/sections/outcome"
import { Proof } from "@/components/sections/proof"
import { About } from "@/components/sections/about"
import { Cta } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="overflow-x-clip">
        <Hero />
        <Receipts />
        <Problem />
        <Offer />
        <Included />
        <Outcome />
        <Proof />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
