import { HeroSection } from "@/components/keyboard";
import HeroSectionOne from "@/components/hero-section";
import NavbarResizable from "@/components/nav-bar";
import { FeaturesSection } from "@/components/features-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <NavbarResizable />
        <HeroSectionOne />
        <FeaturesSection />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
