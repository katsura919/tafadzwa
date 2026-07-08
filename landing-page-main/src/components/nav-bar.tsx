"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function NavbarResizable() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-50 flex items-center gap-4">
            <AnimatedThemeToggler className="flex size-9 items-center justify-center rounded-full bg-transparent text-foreground hover:bg-secondary/50 transition-colors" />
            <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-foreground font-heading font-medium text-lg border-b border-border/50 pb-2"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full items-center justify-between rounded-2xl bg-secondary px-4 py-2">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <AnimatedThemeToggler className="flex size-9 items-center justify-center rounded-full bg-transparent text-foreground" />
              </div>
              <InteractiveHoverButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Book a Call
              </InteractiveHoverButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

    </div>
  );
}


