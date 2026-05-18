"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "Business", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Ministry", href: "#" },
    { label: "Resources", href: "#" },
  ];

  return (
    <footer
      className="w-full bg-primary text-primary-foreground"
      role="contentinfo"
    >
      {/* Main Content */}
      <div className="px-6 py-12 md:px-14 md:py-18">
        <div className="flex flex-col justify-between gap-12 mb- pb-12 border-b">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-heading mb-2">
              DARE ODUALE
            </h2>
            <p className="text-xs font-inter text-primary-foreground/60 font-semibold uppercase tracking-wide leading-relaxed">
              Coaching • Training • Business Design • Coach
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-2">
            {/* Navigation - stays left */}
            <nav className="grid grid-cols-3 gap-x-4 gap-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-inter text-primary-foreground/60 font-semibold uppercase tracking-wide hover:text-secondary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-6 md:max-w-sm md:items-end md:text-right mt-">
              {/* Quote Section */}
              <p className="text-sm md:text-base leading-relaxed italic font-light">
                &quot;The problem is rarely the people. It&apos;s the system
                they&apos;re working inside of.&quot;
              </p>

              {/* CTA Button */}
              <Link
                href="/book-a-strategy-call"
                className="text-secondary font-inter text-xs hover:text-secondary/90 font-semibold uppercase transition-colors duration-200"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between font-inter gap-4 mt-4">
          <p className="text-xs font-inte text-primary-foreground/60 uppercase tracking-wide">
            © {currentYear} DARE ODUALE • DAREODUALE.COM
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 uppercase tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 uppercase tracking-wide"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
