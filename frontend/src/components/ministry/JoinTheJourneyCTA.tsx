"use client";

import Link from "next/link";

export function JoinTheJourneyCTA() {
  return (
    <section
      className="bg-border w-full"
      aria-labelledby="join-the-journey-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl text-center">
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 md:py-3 text-xs rounded-full md:text-md font-semibold transition-smooth hover-l"
          >
            Inquire for <br />
            Birmingham
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="border border-primary text-primary hover:bg-primary/80 hover:text-primary-foreground px-6 py-2 md:py-3 text-xs rounded-full md:text-md font-semibold transition-smooth hover-l"
          >
            Partner with <br />
            Ministry
          </Link>
        </div>
      </div>
    </section>
  );
}
