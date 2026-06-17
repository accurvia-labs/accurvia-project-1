"use client";

import { useState } from "react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/ctalink";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
    { label: "Business", href: "/business" },
    { label: "Ministry", href: "/ministry" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-3 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold font-heading text-primary shrink-0"
          aria-label="Navigate to home page"
        >
          Dare Oduale
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm xl:text-base font-medium transition-all text-primary hover:underline hover:underline-offset-4 decoration-2 hover:text-secondary ${
                pathname === link.href
                  ? "underline underline-offset-4 decoration-2"
                  : ""
                }`}
              aria-label={`Navigate to ${link.label} page`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button — Desktop */}
        <CtaLink
          href="/contact"
          variant="primary"
          size="lg"
          className="hidden lg:inline-flex shrink-0"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </CtaLink>



        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger
            className="lg:hidden p-1 rounded-md hover:bg-border transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-background w-72 sm:w-80 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex flex-col px-6 py-8 gap-6">
              {/* Mobile Logo */}
              <Link
                href="/"
                className="text-xl font-bold font-heading text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Navigate to home page"
              >
                Dare Oduale
              </Link>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-3 text-base font-medium rounded-md transition-all text-primary hover:bg-border hover:text-secondary ${
                      pathname === link.href
                        ? "bg-border underline underline-offset-4 decoration-2"
                        : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`Navigate to ${link.label} page`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <CtaLink
                href="/contact"
                variant="primary"
                size="md"
                aria-label="Book a strategy call"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </CtaLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
