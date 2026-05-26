"use client";

import { Button } from "../ui/button";

export function BookCallCTA() {
  return (
    <section aria-labelledby="book-call-cta-heading">
      <div className="bg-primary text-primary-foreground px-6 py-12 md:px-40 md:py-18 text-center">
        {/* Heading */}
        <h2
          id="book-call-cta-heading"
          className="text-2xl md:text-3xl lg:text-4xl font- leading-snug tracking-[-0.02em] mb-4"
        >
          Ready to design for pace?
        </h2>
        <p>
          Whether you need Private Practice coaching or Clarity Architects for
          your organization, let&apos;s start with a focused conversation.
        </p>

        {/* CTA Button */}
        <Button
          variant="default"
          className="bg-secondary text-muted-foreground hover:bg-secondary/90 px-12 py-3 font-bold h-12 rounded-md mt-6"
          aria-label="Book a strategy call"
        >
          Book a Strategy Call
        </Button>
      </div>
    </section>
  );
}
