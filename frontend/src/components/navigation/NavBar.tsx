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
    { label: "Ministry", href: "/ministry" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50 border-b bg-background backdrop-blur-sm bg-opacity-90"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-14 py-6 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-2xl md:text-xl font-bold font-heading text-primary"
        >
          Dare Oduale
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-lg font-medium transition-all text-primary hover:underline hover:underline-offset-4 decoration-2 ${
                pathname === link.href
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Button
          variant="default"
          className="hidden px-8 py-4 font-bold h-12 rounded-md lg:flex hover:bg-primary/90"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-6 w-6 text-primary cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="space-y-4 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block text-sm font-medium transition-all text-primary hover:underline hover:underline-offset-4 decoration-2 ${
                    pathname === link.href
                      ? "underline underline-offset-4 decoration-2"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="w-full px-4 py-2 font-bold h-9 rounded-lg"
                variant="default"
                // onClick={() => setIsMobileMenuOpen(false)}
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
