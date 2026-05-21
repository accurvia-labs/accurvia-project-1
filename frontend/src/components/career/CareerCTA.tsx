"use client";

export function CareerCTA() {
  return (
    <section aria-labelledby="career-cta-heading">
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto flex flex-col items-center gap-8 text-center">
        {/* Heading */}
        <h2
          id="career-cta-heading"
          className="text-primary text-xl md:text-2xl italic lg:text-3xl font- leading-snug tracking-[-0.02em]"
        >
          &quot;You are in the right place, this is the work I was built
          for.&quot;
        </h2>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center h-13 px-10 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/80 transition-colors duration-200"
        >
          Book a strategy call today
        </a>
      </div>
    </section>
  );
}
