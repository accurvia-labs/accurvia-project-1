export function MinistryHero() {
  return (
    <section
      aria-labelledby="ministry-hero-heading"
      className="relative bg-primary overflow-hidden"
    >
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-6xl">
        {/* Label */}
        <p className="text-secondary text-[10px] sm:text-xs font-semibold tracking-[1.5px] uppercase mb-3 sm:mb-4">
          CALLING & CONVICTION
        </p>

        {/* Main Quote */}
        <blockquote
          id="ministry-hero-heading"
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground italic font-normal leading-[1.1] tracking-[-0.02em]">
            &ldquo;Ministry was never something I was assigned to. It was
            something I kept walking towards — even at five years old.&rdquo;
          </h1>

          <div className="bg-linear-to-l from-primary to-secondary h-0.5 sm:h-1 w-20 sm:w-24" />

          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/60 leading-relaxed max-w-xl sm:max-w-2xl">
            A lifetime of service defined by an unwavering pursuit of divine
            purpose, from the quiet pews of childhood to leading hundreds in the
            heart of urban centers.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
