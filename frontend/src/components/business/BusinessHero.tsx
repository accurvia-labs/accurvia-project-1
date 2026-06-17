"use client";

import Image from "next/image";
import { CtaLink } from "@/components/ui/ctalink";
import { ArrowRight } from "lucide-react";
import BusinessHeroImage from "../../../public/images/genesis.jpg";

export function BusinessHero() {
  return (
    <section
      aria-labelledby="business-hero-heading"
      className="overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
          {/* Left — Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-5 lg:gap-8">
              <p className="text-secondary text-xs md:text-sm font-semibold tracking-[0.22em] uppercase">
                Business Operator
              </p>

              <h2
                id="business-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-primary"
              >
                Not every venture landed. Every single one taught me something
                about what people are actually capable of.
              </h2>

              <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-sm">
                Reconstructing business frameworks through the lens of human
                potential. We don&apos;t just build systems; we build the people
                who command them.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <CtaLink
                  href="/contact"
                  variant="primary"
                  className="uppercase"
                >
                  Book a Strategy Call
                </CtaLink>
                <CtaLink
                  href="/portfolio"
                  variant="outline"
                  className="uppercase"
                >
                  The Portfolio
                  <ArrowRight size={14} />
                </CtaLink>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="flex-1 relative w-full">
            <div
              className="relative w-full h-64 sm:h-96 md:h-120 lg:h-130 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={BusinessHeroImage}
                alt="Business hero"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center rounded-2xl"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/30" />

            <div
              className="
                absolute bottom-1 left-0
                lg:-lef
                w-[80%] sm:w-72 lg:w-80
                rounded-2xl
                p-4 sm:p-6
                flex flex-col justify-center
              "
            >
              <p className="italic text-primary-foreground text-sm sm:text-xl ">
                &quot; The Compounding effect of investing in people, you rarely
                see the return - but it keeps paying out long after the project
                ends.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
