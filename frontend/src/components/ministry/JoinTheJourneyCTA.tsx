"use client";

import Link from "next/link";
import { CtaLink } from "../ui/ctalink";

export function JoinTheJourneyCTA() {
  return (
    <section
      className="bg-border w-full"
      aria-labelledby="join-the-journey-heading"
    >
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl text-center space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
          Join the Journey
        </h2>
        {/* Description */}
        <p className="text-base md:text-lg text-primary/80 max-w-2xl mx-auto">
          Whether you are a resident of Birmingham looking for community, or a
          ministry leader seeking partnership, I invite you to reach out. Let us
          build together.
        </p>
        {/* CTA Buttons */}

        <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
          <CtaLink
            href="/contact"
            size="sm"
            variant="primary"
            aria-label="Inquire for Birmingham"
          >
            Inquire for Birmingham
          </CtaLink>

          <CtaLink
            href="/contact"
            size="sm"
            variant="outline"
            aria-label="Partner with Ministry"
          >
            Partner with Ministry
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
