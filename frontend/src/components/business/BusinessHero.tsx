"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BusinessHeroImage from "../../../public/images/genesis.jpg";

export function BusinessHero() {
  return (
    <section
      aria-labelledby="business-hero-heading"
      className="overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
          {/* Left — Content */}
          <div className="relative flex flex-col justify-end">
            <p className="text-secondary text-[10px] font-semibold tracking-[0.22em] uppercase mb-6">
              Business Operator
            </p>

            <h1
              id="business-hero-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-primary mb-6 sm:mb-8 max-w-lg"
            >
              Not every venture landed. Every single one taught me something
              about what people are actually capable of.
            </h1>

            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-sm mb-8 sm:mb-10">
              Reconstructing business frameworks through the lens of human
              potential. We don&apos;t just build systems; we build the people
              who command them.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href=""
                className="inline-flex items-center justify-center h-11 sm:h-12 px-8 sm:px-10 bg-primary text-primary-foreground text-xs font-bold tracking-[0.14em] uppercase rounded-md hover:bg-primary/80 transition-all duration-200"
              >
                Book a Strategy Call
              </Link>
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-8 sm:px-10 border border-primary text-primary text-xs font-bold tracking-[0.14em] uppercase rounded-md hover:bg-primary/5 transition-all duration-200"
              >
                The Portfolio
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right — Image */}
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
              <p className="font-heading italic text-primary-foreground text-sm sm:text-xl ">
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
