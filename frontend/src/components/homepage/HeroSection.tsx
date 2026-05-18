"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      {/* Hero Section */}
      <div className="bg-primary flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 py-12 md:px-14 md:py-18">
        <div className="flex-1 w-full">
          {/* Hero Heading */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading text-primary-foreground"
          >
            THINKER • <br />
            TEACHER • <br />
            BUSINESS <br />
            DESIGNER • <br />
            COACH
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg md:text-xl leading-relaxed font-body text-muted">
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

        {/* Image Placeholder */}
        <div className="relative w-full flex-1 shadow-2xl shadow-foreground rounded-2xl overflow-hidden">
          <div className="rounded-2xl bg-muted overflow-hidden">
            <div className="relative filter drop-shadow-2xl drop-shadow-foreground w-full aspect-4/5 origin-top-left rotate-25 translate-y-10 hover:rotate-0 hover:translate-y-0 hover:translate-x-0 transition-all duration-700 ease-in-out">
              <Image
                src="/dare-oduale.jpg"
                alt="Dare Oduale portrait"
                fill
                priority
                className="
              object-cover
              w-full h-full
              rounded-2xl
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
