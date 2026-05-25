"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: "Home", href: "#" },
    { label: "Career", href: "/career" },
    { label: "Business", href: "/business" },
  ];

  const resourseLinks = [
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
      <div className="px-6 py-12 md:px-14 md:py-18">
        <div className="grid gap-4 lg:grid-cols-3 pb-12 border-b">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-heading mb-2">
              DARE ODUALE
            </h2>
            <p className="text-[10px] text-primary-foreground/60 uppercase tracking-wide leading-relaxed">
              Coaching • Training • Business Design • Coach
            </p>

            <p className="text-sm text-primary-foreground/60 mt-6 leading-relaxed">
              Inquiry for Private Practice or Clarity Architecture?
            </p>

            <div className="flex flex-row md:flex-row gap-1 mt-4">
              <Input
                placeholder="Email address"
                className="px-6 py-3 h-12 border border-primary-foreground/20 w-full rounded-md"
              />
              <Button
                variant="default"
                className="bg-secondary text-muted-foreground hover:bg-secondary/90 px-6 py-3 h-12 rounded-md"
                aria-label="Subscribe to newsletter"
              >
                <SendHorizontal />
              </Button>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-8">
            {/* Navigation */}
            <div className="lg:text-center">
              <h4 className="text-lg font-bold">Platform</h4>
              <ul className="mt-3 space-y-4 text-sm">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition hover:text-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:text-center">
              <h4 className="text-lg font-bold">Resources</h4>
              <ul className="mt-3 space-y-4 text-sm ">
                {resourseLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-all hover:text-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6  lg:items-end lg:text-right mt-6">
            {/* Quote Section */}
            <p className="text-sm md:text-base leading-relaxed italic font-light">
              &quot;The problem is rarely the people. It&apos;s the system
              they&apos;re working inside of.&quot;
            </p>

            {/* CTA Button */}
            <Button
              variant="outline"
              className="hover:text-primary-foreground px-6 py-3 h-12 text-xs font-semibold md:max-w-1/2 lg:max-w-full uppercase transition-colors duration-200"
            >
              Book a Strategy Call
            </Button>
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
