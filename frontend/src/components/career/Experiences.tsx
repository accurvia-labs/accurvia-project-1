"use client";

import { CareerTestimonialCard } from "@/components/shared/CareerTestimonialCard";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
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
          <Star
            key={i}
            size={16}
            color="var(--foreground)"
            fill="#FFEF5E"
          />
        ))}
    </div>
  );
}

export function Experiences() {
  const testimonials = TESTIMONIALS;
  const stars = <StarRow />;
  return (
    <section className="bg-border border-t border-b" aria-labelledby="experiences-heading">
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
          {testimonials.map(({ quote, name, role }) => (
            <CareerTestimonialCard
              key={name}
              quote={quote}
              name={name}
              role={role}
              stars={stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
