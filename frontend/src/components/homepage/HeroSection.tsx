"use client";

import { Button } from "@/components/ui/button";
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
            className="text-3xl md:text-5xl font-bold leading-tight font-heading text-primary-foreground"
          >
            I&apos;m Dare.
            <span className="block text-xs font-medium tracking-wide">
              THINKER • TEACHER • BUSINESS DESIGNER • COACH
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-body text-muted">
            Business design and transformation coaching for founders, programme
            leads, and executives who need to move.
          </p>
          <Button
            variant="default"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-12 py-3 font-bold h-12 rounded-md"
            aria-label="Book a strategy call"
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>

      {/* Desktop Side-by-Side Layout */}
      <div className="hidden lg:flex bg-primary items-center gap-16 px-14 py-14">
        <div className="flex-1 w-full">
          {/* Hero Heading */}
          <h1
            id="hero-heading"
            className="text-7xl font-bold mb-6 leading-tight font-heading text-primary-foreground"
          >
            I&apos;m Dare.
            <span className="block text-xs font-medium tracking-wide">
              THINKER • TEACHER • BUSINESS DESIGNER • COACH
            </span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-xl leading-relaxed font-body text-muted">
            Business design and transformation coaching for founders, programme
            leads, and executives who need to move.
          </p>
          <Button
            variant="default"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-14 py-4 font-bold h-14 rounded-md mt-4"
            aria-label="Book a strategy call"
          >
            Book a Strategy Call
          </Button>
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
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
