"use client";

import { CtaLink } from "@/components/ui/ctalink";
import { ArrowRight } from "lucide-react";

interface service {
  id: string;
  number: string;
  title: string;
  description: string;
}

const service = [
  {
    id: "scaled-agile",
    number: "01",
    title: "Scaled Agile Certification",
    description:
      "At KRAK, I spearheaded the development of the first African Agile training initiative, scaling Agile principles for high-growth tech ecosystems.",
  },
  {
    id: "wisdomgate",
    number: "02",
    title: "WisdomGate Training",
    description:
      "Training a generation of leaders to find their voice and purpose in corporate environments, with over 15 distinct leadership cohorts.",
  },
  {
    id: "freelance",
    number: "03",
    title: "Freelance / Virtual Internship",
    description:
      "Bridging the gap between theory and execution by placing hundreds of graduates into real- world projects with global partners.",
  },
  {
    id: "career-seminars",
    number: "04",
    title: "Career Seminars",
    description:
      "High-impact workshops focused on career transition and market positioning for professionals in competitive sectors.",
  },
  {
    id: "uphold",
    number: "05",
    title: "Uphold Career Training",
    description:
      "A dedicated system for underrepresented communities to access high-level corporate career pathways through structured coaching.",
  },
  {
    id: "leeds",
    number: "06",
    title: "Leeds University",
    description:
      "Academic partnership focused on guest lecturing and mentoring graduate students on the intersection of business and design.",
  },
];

export function ProfessionalReconstruction() {
  return (
    <section aria-labelledby="reconstruction-heading" className="bg-background">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div className="flex flex-col gap-6">
            <p className="text-secondary text-xs md:text-sm font-semibold tracking-[0.22em] uppercase">
              Core Focus
            </p>
            <h2
              id="reconstruction-heading"
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-primary"
            >
              Professional Reconstruction
            </h2>
          </div>
          <CtaLink
            href=""
            variant="ghost"
            size="xs"
            className="uppercase hover:underline hover:underline-offset-2 decoration-1 self-start sm:self-auto"
          >
            Services-01/06
            <ArrowRight size={12} />
          </CtaLink>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-border">
          {service.map(({ id, number, title, description }) => (
            <div
              key={id}
              className="bg-background p-6 sm:p-8 flex flex-col gap-4 hover:bg-border/30 transition-colors duration-200 group"
            >
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary/30 uppercase">
                {number}
              </span>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-primary leading-snug">
                {title}
              </h3>
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
