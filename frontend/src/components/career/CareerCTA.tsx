"use client";

import { CtaLink } from "@/components/ui/ctalink";

export function CareerCTA() {
  return (
    <section aria-labelledby="career-cta-heading">
      <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 mx-auto max-w-3xl flex flex-col items-center gap-6 sm:gap-8 text-center">
        {/* Heading */}
        <h2
          id="career-cta-heading"
          className="text-primary text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-snug tracking-[-0.02em]"
        >
          &quot;You are in the right place, this is the work I was built
          for.&quot;
        </h2>

        {/* CTA Button */}
        <CtaLink
          href=""
          className="tracking-[0.14em]"
          aria-label="Book a strategy call"
        >
          Book a strategy call today
        </CtaLink>
      </div>
    </section>
  );
}