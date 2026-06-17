"use client";

import { CtaLink } from "@/components/ui/ctalink";

export function AboutSection() {
  const categories = [
    { label: "Career", link: "/career" },
    { label: "Business", link: "/business" },
    { label: "Ministry", link: "/ministry" },
  ];

  return (
    <section
      className="w-full bg-primary-foreground"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 xl:gap-32 px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        {/* Left — Label */}
        <div className="shrink-0">
          <p className="text-xs md:text-sm font-bold tracking-[1.5px] uppercase text-secondary">
            Meet Dare
          </p>
          <div className="bg-secondary h-1 w-13 mt-1" />
        </div>

        {/* Right — Content */}
        <div className="flex-1 space-y-6 lg:pr-24 xl:pr-36">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-heading text-primary">
            Brief Intro
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-justify">
            Dare is the short form of a thirteen-letter name that means God
            vindicates me — and across every chapter of my life, that meaning
            has proven itself true. What might look from the outside like a
            restless pouring of energy into people, into organisations, into
            communities and into the ground, has produced results that give
            everyone around me reason to rejoice.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-justify">
            I am a husband to my darling wife and a father of three — and I hold
            that as my first and most important assignment. Everything else is
            viewed through a single lens: how does this make my family better?
            Whether by modelling what it looks like to serve with excellence, or
            by demonstrating that your gifts are meant to be profited from, my
            family is the reason I give everything I have — in career, in
            business, and in ministry.
          </p>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <CtaLink
                variant="secondary"
                size="xs"
                className="text-secondary hover:bg-secondary/20 border-secondary rounded-full font-bold uppercase tracking-[1.2px]"
                key={cat.label}
                href={cat.link}
                aria-label={`Navigate to ${cat.label} section`}
              >
                {cat.label}
              </CtaLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
