"use client";

import {CtaLink} from "@/components/ui/ctalink";

export function BookCallCTA() {
  return (
    <section aria-labelledby="book-call-cta-heading">
      <div className="bg-primary text-primary-foreground px-6 sm:px-12 md:px-24 lg:px-40 py-12 sm:py-16 md:py-20 text-center mx-auto flex flex-col items-center gap-6">
        {/* Heading */}
        <h2
          id="book-call-cta-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-[-0.02em]"
        >
          Ready to design for pace?
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
          Whether you need Private Practice coaching or Clarity Architects for
          your organization, let&apos;s start with a focused conversation.
        </p>

        {/* CTA Button */}
        <CtaLink variant="foreground" href="/contact" aria-label="Book a strategy call">
          Book a Strategy Call
        </CtaLink>
      </div>
    </section>
  );
}
