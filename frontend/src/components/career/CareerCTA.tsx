"use client";

export function CareerCTA() {
  return (
    <section aria-labelledby="career-cta-heading">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-3xl flex flex-col items-center gap-6 sm:gap-8 text-center">

        {/* Heading */}
        <h2
          id="career-cta-heading"
          className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-snug tracking-[-0.02em]"
        >
          &quot;You are in the right place, this is the work I was built
          for.&quot;
        </h2>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-medium rounded-full hover:bg-primary/80 transition-colors duration-200"
        >
          Book a strategy call today
        </a>

      </div>
    </section>
  );
}