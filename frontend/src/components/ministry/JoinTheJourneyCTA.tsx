"use client";

import Link from "next/link";

export function JoinTheJourneyCTA() {
  return (
    <section
      className="bg-border w-full"
      aria-labelledby="join-the-journey-heading"
    >
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12">
          Join the Journey
        </h1>
        {/* Description */}
        <p className="text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          Whether you are a resident of Birmingham looking for community, or a
          ministry leader seeking partnership, I invite you to reach out. Let us
          build together.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 sm:px-10 py-3.5 sm:py-4 text-xs rounded-full md:text-md font-semibold transition-smooth hover-l"
          >
            Inquire for Birmingham
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="border border-primary text-primary hover:bg-primary/80 hover:text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 text-xs rounded-full md:text-md font-semibold transition-smooth hover-l"
          >
            Partner with Ministry
          </Link>
        </div>
      </div>
    </section>
  );
}
