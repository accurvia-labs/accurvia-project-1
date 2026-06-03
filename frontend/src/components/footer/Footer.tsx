"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
    { label: "Business", href: "/business" },
  ];

  const resourceLinks = [
    { label: "Ministry", href: "/ministry" },
    { label: "Insight", href: "/insight" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="w-full bg-primary text-primary-foreground"
      role="contentinfo"
    >
      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 pb-10 sm:pb-12 border-b border-primary-foreground/20">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              DARE ODUALE
            </h2>
            <p className="text-[10px] text-primary-foreground/60 uppercase tracking-wide leading-relaxed">
              Coaching • Training • Business Design • Coach
            </p>

            <p className="text-sm text-primary-foreground/60 mt-5 sm:mt-6 leading-relaxed">
              Inquiry for Private Practice or Clarity Architecture?
            </p>

            <div className="flex flex-row gap-1 mt-4">
              <Input
                placeholder="Email address"
                className="px-4 sm:px-6 py-3 h-11 sm:h-12 border border-primary-foreground/20 w-full rounded-md bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button
                variant="default"
                className="bg-secondary text-muted-foreground hover:bg-secondary/90 px-4 sm:px-6 py-3 h-11 sm:h-12 rounded-md shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <SendHorizontal size={18} />
              </Button>
            </div>
          </div>

          {/* Nav Links — side by side on all sizes */}
          <div className="grid grid-cols-2 gap-8 col-span-1">
            <div>
              <h4 className="text-base sm:text-lg font-bold">Platform</h4>
              <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-sm">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-primary-foreground/80 transition hover:text-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold">Resources</h4>
              <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-sm">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-primary-foreground/80 transition-all hover:text-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote + CTA */}
          <div className="flex flex-col gap-5 sm:gap-6 col-span-1 sm:col-span-2 lg:col-span-1 lg:items-end lg:text-right">
            <p className="text-sm sm:text-base leading-relaxed italic font-light text-primary-foreground/80 lg:max-w-xs">
              &quot;The problem is rarely the people. It&apos;s the system
              they&apos;re working inside of.&quot;
            </p>

            <Link
              href=""
              className="w-full sm:w-auto border rounded-md hover:bg-primary-foreground/40 px-8 sm:px-12 py-3 font-bold h-11 sm:h-12 text-sm uppercase transition-colors duration-200"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
          <p className="text-xs text-primary-foreground/60 uppercase tracking-wide">
            © {currentYear} DARE ODUALE • DAREODUALE.COM
          </p>
          <div className="flex gap-5 sm:gap-6">
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
