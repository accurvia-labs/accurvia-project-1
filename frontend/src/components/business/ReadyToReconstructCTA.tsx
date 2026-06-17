"use client";

import { CtaLink } from "@/components/ui/ctalink";

export function ReadyToReconstructCTA() {
  return (
    <section aria-labelledby="reconstruct-cta-heading" className="bg-border">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-5xl text-center space-y-6">
        <h2
          id="reconstruct-cta-heading"
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-primary"
        >
          Ready to reconstruct?
        </h2>

        <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl mx-auto">
          Join over 3,000 professionals who have transformed their trajectories
          through our frameworks.
        </p>

        <CtaLink
          href="/contact"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </CtaLink>
      </div>
    </section>
  );
}
