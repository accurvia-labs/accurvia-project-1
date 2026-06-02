"use client";

import Image from "next/image";
import CareerJourneyImage from "../../../public/images/career-journey.png";

export function CareerJourney() {
  return (
    <section aria-labelledby="career journey">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Left — Content */}
          <div className="flex-1 w-full">
            <p className="text-primary text-[10px] font-semibold tracking-[0.22em] uppercase">
              The Career Journey
            </p>

            <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.045em] leading-[1.05] mt-6 sm:mt-8">
              A Global Impact Across Continents &amp; Industries
            </h1>

            <p className="text-foreground/60 text-sm sm:text-base leading-[1.65] text-justify mt-4 sm:mt-6">
              From the financial hubs of Europe to the emerging markets of Asia
              and Africa, my path as an architect has spanned multiple
              continents and some of the world&apos;s most influential
              organizations.
            </p>

            <p className="text-foreground/60 text-sm sm:text-base leading-[1.65] text-justify mt-4 sm:mt-6">
              I&apos;ve had the privilege of driving strategic initiatives for
              leaders like BYP Paribas, Allianz, Roche, and Shell. Each role was
              a lesson in scaling complexity while maintaining the human touch.
            </p>

            <blockquote className="text-primary font-heading text-sm sm:text-base md:text-lg lg:text-[20px] italic font-normal tracking-[-0.02em] leading-[1.35] mt-4 sm:mt-6">
              &ldquo;The most resilient systems aren&apos;t just built with
              code; they are built with the trust and clarity of the people who
              use them.&rdquo;
            </blockquote>
          </div>

          {/* Right — Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-64 sm:h-96 md:h-120 lg:h-140 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-xl">
              <Image
                src={CareerJourneyImage}
                alt="Career journey visual representation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
