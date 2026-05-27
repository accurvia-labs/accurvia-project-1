"use client";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-4xl text-center">
        {/* Label */}
        <p className="text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
          The Philosophy
        </p>

        {/* Quote */}
        <blockquote
          id="philosophy-heading"
          className="text-primary font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-normal tracking-[-0.055em] leading-[1.05] mt-4 sm:mt-6"
        >
          &ldquo;Architecture is more than logic: it is the synergy between
          people and strategy.&rdquo;
        </blockquote>

        {/* Text */}
        <p className="text-foreground/60 text-sm sm:text-base md:text-lg leading-[1.55] mt-5 sm:mt-6 max-w-2xl mx-auto">
          My approach is rooted in seeing the &quot;whole person.&quot; I
          believe that when you genuinely value the individuals within a team,
          the strategies you build for them become exponentially more effective
          and sustainable.
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 mx-auto bg-foreground/20 mt-10 sm:mt-12" />
      </div>
    </section>
  );
}
