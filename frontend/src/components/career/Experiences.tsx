"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { Star, User } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
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
  const stars = <StarRow />;
  return (
    <section
      className="bg-border border-t border-b"
      aria-labelledby="experiences-heading"
    >
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="block text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
            Our Experiences
          </p>
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-[-0.045em] leading-[1.05] mt-6">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map(({ quote, name, role }, idx) => (
            <Card
              key={idx}
              className="p-12 md:p-12 bg-background border  rounded-3xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <CardContent>
                {/* Quote */}
                <p className="text-foreground/60 font-heading text-base md:text-lg italic leading-[1.55]">
                  &ldquo;{quote}&ldquo;
                </p>
              </CardContent>

              <CardDescription>
                <div className="mt-9 pt-8 border-t flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-6">
                  {/* Author */}
                  <div className="flex items-center gap-4 md:gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-primary/5 rounded-full">
                      <User />
                    </div>

                    {/* Name & Role */}
                    <div>
                      <p className="text-base font-semibold tracking-[-0.01em]">
                        {name}
                      </p>
                      <p className="mt-1 text-foreground/60 text-[10px] font-medium tracking-[0.17em] uppercase leading-[1.2]">
                        {role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  {stars && (
                    <div className="p-2.5 bg-primary/5 rounded-full">
                      {stars}
                    </div>
                  )}
                </div>
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
