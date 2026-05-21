"use client";

import Image from "next/image";
import CareerJourneyImage from "../../../public/images/career-journey.png";

export function CareerJourney() {
  return (
    <section className="" aria-labelledby="career journey">
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left content */}
          <div className="">
            <p className="text-primary text-[10px] font-semibold tracking-[0.22em] uppercase">
              The Career Journey
            </p>

            <h1 className="text-primary text-2xl md:text-4xl font-bold tracking-[-0.045em] leading-[1.05] mt-8">
              A Global Impact Across Continents &amp; Industries
            </h1>

            <p className="text-foreground/60 text-sm md:text-base leading-[1.65] text-justify mt-6">
              From the financial hubs of Europe to the emerging markets of Asia
              and Africa, my path as an architect has spanned multiple
              continents and some of the world&apos;s most influential
              organizations.
            </p>

            <p className="text-foreground/60 text-sm md:text-base leading-[1.65] text-justify mt-6">
              I&apos;ve had the privilege of driving strategic initiatives for
              leaders like BYP Paribas, Allianz, Roche, and Shell. Each role was
              a lesson in scaling complexity while maintaining the human touch.
            </p>

            <blockquote className="text-primary font-heading text-base md:text-[20px] italic font-normal tracking-[-0.02em] leading-[1.35] mt-6">
              &ldquo;The most resilient systems aren&apos;t just built with
              code; they are built with the trust and clarity of the people who
              use them.&ldquo;
            </blockquote>
          </div>

          {/* Right: Visual */}
          <div
            className="w-xl h-xl md:h-144 rounded-2xl overflow-hidden relative"
            aria-hidden="true"
          >
            <Image
              src={CareerJourneyImage}
              alt="Career journey visual representation"
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
    </section>
  );
}
