"use client";

import { CtaLink } from "@/components/ui/ctalink";
import Image from "next/image";
import dareOdualePortrait from "../../../public/images/dare-oduale.png";

export function HeroSection() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      {/* Mobile Background Image with Overlay */}
      <div
        className="lg:hidden relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${dareOdualePortrait.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/5" />

        {/* Content */}
        <div className="relative bg-primary/80 flex flex-col items-start justify-center gap-6 px-6 py-16 md:px-14 md:py-20 backdrop-blur-sm">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading text-primary-foreground"
          >
            I&apos;m Dare.
            <span className="block text-xs md:text-sm lg:text-xl font-medium tracking-wide">
              THINKER • TEACHER • BUSINESS DESIGNER • COACH
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-body text-muted">
            Business design and transformation coaching for founders, programme
            leads, and executives who need to move.
          </p>
          <CtaLink
            variant="foreground"
            href="/contact"
            aria-label="Book a strategy call"
          >
            Book a Strategy Call
          </CtaLink>
        </div>
      </div>

      {/* Desktop Side-by-Side Layout */}
      <div className="hidden lg:flex bg-primary items-center gap-16 px-9 py-14">
        <div className="flex-1 w-full space-y-6">
          {/* Hero Heading */}
          <h1
            id="hero-heading"
            className="text-6xl font-bold mb-6 leading-tight font-heading text-primary-foreground"
          >
            I&apos;m Dare.
            <span className="block text-xs md:text-sm lg:text-xl font-medium tracking-wide">
              THINKER • TEACHER • BUSINESS DESIGNER • COACH
            </span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-base md:text-lg leading-relaxed font-body text-muted">
            Business design and transformation coaching for founders, programme
            leads, and executives who need to move.
          </p>
          <CtaLink
            variant="foreground"
            href="/contact"
            aria-label="Book a strategy call"
          >
            Book a Strategy Call
          </CtaLink>
        </div>

        {/* Image */}
        <div className="relative w-full flex-1 shadow-2xl shadow-foreground rounded-2xl overflow-hidden">
          <div className="rounded-2xl bg-muted overflow-hidden">
            <div className="relative filter drop-shadow-2xl drop-shadow-foreground w-full h-140 aspect-4/5 origin-top-left rotate-25 translate-y-10 hover:rotate-0 hover:translate-y-0 hover:translate-x-0 transition-all duration-700 ease-in-out">
              <Image
                src={dareOdualePortrait}
                alt="Dare Oduale portrait"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
