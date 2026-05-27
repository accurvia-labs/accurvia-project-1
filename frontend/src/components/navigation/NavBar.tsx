"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold font-heading text-primary shrink-0"
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
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button — Desktop */}
        <Button
          variant="default"
          className="hidden lg:flex px-6 xl:px-8 py-3 font-bold h-11 xl:h-12 rounded-md hover:bg-primary/90 text-sm shrink-0"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </Button>

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

            <div className="flex flex-col h-full px-6 pt-10 pb-8">
              {/* Mobile Logo */}
              <Link
                href="/"
                className="text-xl font-bold font-heading text-primary mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
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
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <Button
                className="w-full font-bold h-11 rounded-md mt-6"
                variant="default"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
