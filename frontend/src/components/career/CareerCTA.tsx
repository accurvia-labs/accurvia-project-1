"use client";

import Link from "next/link";

export function CareerCTA() {
  return (
    <section aria-labelledby="career-cta-heading">
      <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 mx-auto max-w-3xl flex flex-col items-center gap-6 sm:gap-8 text-center">
        {/* Heading */}
        <h2
          id="career-cta-heading"
          className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-snug tracking-[-0.02em]"
        >
          &quot;You are in the right place, this is the work I was built
          for.&quot;
        </h2>

        {/* CTA Button */}
        <Link
          href=""
          className="inline-flex items-center justify-center h-11 sm:h-12 px-8 sm:px-10 bg-primary text-primary-foreground text-sm sm:text-base font-medium rounded-md hover:bg-primary/80 transition-colors duration-200"
        >
          Book a strategy call today
        </Link>
      </div>
    </section>
  );
}