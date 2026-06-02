"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dare's ability to bridge the gap between complex technical architecture and human-centric leadership is unparalleled in the industry.",
    name: "Bruno Buglio",
    role: "Strategic Operations Leader",
  },
  {
    quote:
      "Transforming operational efficiency from months to days wasn't just a technical feat; it was a testament to Dare's vision for empowerment.",
    name: "Ife Osakuade",
    role: "Executive Partner",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star key={i} size={16} color="var(--foreground)" fill="#FFEF5E" />
        ))}
    </div>
  );
}

export function Experiences() {
  return (
    <section
      className="bg-border border-t border-b"
      aria-labelledby="experiences-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="block text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
            Our Experiences
          </p>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.045em] leading-[1.05] mt-4 sm:mt-6">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {testimonials.map(({ quote, name, role }, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 md:p-12 bg-background border rounded-3xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                {/* Quote */}
                <p className="text-foreground/60 font-heading text-sm sm:text-base md:text-lg italic leading-[1.55]">
                  &ldquo;{quote}&rdquo;
                </p>
              </CardContent>

              <CardDescription className="p-0">
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Avatar */}
                    <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center bg-primary/5 rounded-full">
                      <User size={20} />
                    </div>

                    {/* Name & Role */}
                    <div>
                      <p className="text-sm sm:text-base font-semibold tracking-[-0.01em]">
                        {name}
                      </p>
                      <p className="mt-1 text-foreground/60 text-[10px] font-medium tracking-[0.17em] uppercase leading-[1.2]">
                        {role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="p-2.5 bg-primary/5 rounded-full self-start sm:self-auto">
                    <StarRow />
                  </div>
                </div>
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
