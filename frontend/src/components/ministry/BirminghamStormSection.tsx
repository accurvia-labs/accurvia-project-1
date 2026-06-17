"use client";

import { Badge } from "../ui/badge";

export function BirminghamStormSection() {
  return (
    <section className="bg-primary" aria-labelledby="birmingham-storm-heading">
      <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl space-y-8">
        <div className="text-center space-y-6">
          <Badge
            variant="outline"
            className="px-8 py-4 bg-secondary/30 text-secondary text-xs md:text-sm font-semibold tracking-[1.5px] uppercase"
          >
            THE 2025 MANDATE
          </Badge>

          <h2 className="text-primary-foreground text-2xl md:text-3xl lg:text-4xl">
            Birmingham: Planting Through the Storm
          </h2>

          <p className="text-primary-foreground/60 text-base md:text-lg max-w-3xl mx-auto">
            Planting a ministry is rarely a path of convenience. In 2025, amidst
            the deep personal grief of losing my father, the call to Birmingham
            became an anchor. It was here I learned that the strongest
            foundations are often laid in the seasons of most profound
            surrender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-5xl mx-auto">
          <div className="border-l-2 border-secondary pl-4 space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-primary-foreground italic ">
              A New Chapter
            </h3>
            <p className="text-base md:text-lg text-primary-foreground/60 tracking-wider leading-relaxed">
              Establishing a community centered on authentic faith, intellectual
              rigor, and social responsibility.
            </p>
          </div>

          <div className="space-y-4 border-l-2 border-secondary pl-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-primary-foreground italic">
              A Resilient Legacy
            </h3>
            <p className="text-base md:text-lg text-primary-foreground/60 tracking-wider leading-relaxed">
              Honoring the past while building a future that reflects the
              transformative power of the gospel in urban UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
