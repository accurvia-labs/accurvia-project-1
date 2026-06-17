"use client";

import Image from "next/image";
import Genesis from "../../../public/images/genesis.jpg";

export function TheGenesis() {
  return (
    <section aria-labelledby="career journey">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
          {/* Image */}
          <div className="flex-1 relative w-full">
            <div
              className="w-full relative h-64 sm:h-96 md:h-120 lg:h-140 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={Genesis}
                alt="The Genesis visual representation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-5 lg:gap-8">
              <p className="text-primary text-xs md:text-sm font-semibold tracking-[0.22em] uppercase">
                The Genesis
              </p>

              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.045em] leading-[1.05] mt-6 md:mt-8">
                The Boy in the Third Row
              </h2>

              <p className="text-foreground/60 text-base md:text-lg leading-[1.65] text-justify">
                While other children dreamt of being astronauts or athletes, I
                found my magnetic north within the sacred architecture of the
                local church. At five, ministry wasn&apos;t a career path; it
                was the natural cadence of my existence. I would sit, observant
                and intentional, feeling the weight of words I was yet to fully
                understand.
              </p>

              <p className="text-foreground/60 text-base md:text-lg leading-[1.65] text-justify">
                It was a quiet pull—a realization that leadership was not a
                title to be seized, but a burden to be carried with grace. That
                early curiosity blossomed into a lifetime of intentional
                stewardship, transforming a child&apos;s wonder into a
                leader&apos;s conviction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
