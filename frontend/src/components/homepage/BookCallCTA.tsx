"use client";

import Link from "next/link";

export function BookCallCTA() {
  return (
    <section aria-labelledby="book-call-cta-heading">
      <div className="bg-primary text-primary-foreground px-6 sm:px-12 md:px-24 lg:px-40 py-12 sm:py-16 md:py-20 text-center mx-auto">
        {/* Heading */}
        <h2
          id="book-call-cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-[-0.02em] mb-3 sm:mb-4"
        >
          Ready to design for pace?
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
          Whether you need Private Practice coaching or Clarity Architects for
          your organization, let&apos;s start with a focused conversation.
        </p>

        {/* CTA Button */}
        <Link
          href=""
          className="inline-flex items-center justify-center bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 sm:px-12 font-bold h-11 sm:h-12 text-sm rounded-md mt-8"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}
