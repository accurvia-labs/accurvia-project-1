"use client";

import Link from "next/link";

export function ReadyToReconstructCTA() {
  return (
    <section aria-labelledby="reconstruct-cta-heading" className="bg-border">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-5xl text-center">
        <h2
          id="reconstruct-cta-heading"
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] text-primary mb-4 sm:mb-6"
        >
          Ready to reconstruct?
        </h2>

        <p className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
          Join over 3,000 professionals who have transformed their trajectories
          through our frameworks.
        </p>

        <Link
          href=""
          className="inline-flex items-center justify-center h-11 sm:h-12 px-8 sm:px-10 bg-primary text-primary-foreground text-sm sm:text-base font-medium rounded-md hover:bg-primary/80 transition-colors duration-200"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}
