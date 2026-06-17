"use client";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-4xl text-center space-y-6">
        {/* Label */}
        <p className="text-primary text-xs md:text-sm-base font-semibold tracking-[0.24em] uppercase">
          The Philosophy
        </p>

        {/* Quote */}
        <blockquote
          id="philosophy-heading"
          className="text-primary font-heading text-xl md:text-2xl lg:text-3xl italic font-normal tracking-[-0.055em] leading-[1.05]"
        >
          &ldquo;Architecture is more than logic: it is the synergy between
          people and strategy.&rdquo;
        </blockquote>

        {/* Text */}
        <p className="text-foreground/60 text-base md:text-lg leading-[1.55] max-w-2xl mx-auto">
          My approach is rooted in seeing the &quot;whole person.&quot; I
          believe that when you genuinely value the individuals within a team,
          the strategies you build for them become exponentially more effective
          and sustainable.
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 mx-auto bg-foreground/20" />
      </div>
    </section>
  );
}
