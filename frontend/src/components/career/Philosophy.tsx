"use client";

export function Philosophy() {
  return (
    <section className="" aria-labelledby="philosophy-heading">
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto text-center">
        {/* Label */}
        <p className="text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
          The Philosophy
        </p>

        {/* Quote */}
        <blockquote className="text-primary font-headinf text-3xl md:text-4xl lg:text-5xl italic font-normal tracking-[-0.055em] leading-[0.95] mt-6">
          &ldquo;Architecture is more than logic: it is the synergy between
          people and strategy.&ldquo;
        </blockquote>

        {/* Text */}
        <p className="text-foreground/60 text-base md:text-lg leading-[1.48] mt-6">
          My approach is rooted in seeing the &qout;whole person.&quot; I believe that
          when you genuinely value the individuals within a team, the strategies
          you build for them become exponentially more effective and
          sustainable.
        </p>

        {/* Divider */}
        <div className="w-26 h-1 mx-auto bg-foreground/20 mt-12" />
      </div>
    </section>
  );
}
