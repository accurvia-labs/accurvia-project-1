"use client";

import { OfferingCard } from "@/components/shared/OfferingCard";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  steps: string[];
  serviceOffering: string;
  image: string;
}

const services: Service[] = [
  {
    id: "1-1-engagement",
    title: "1:1 Engagement",
    subtitle: "Leadership & Digital Transformation Coaching for high-stakes decision makers.",
    steps: ["Diagnostic", "Structured Session", "Integration"],
    serviceOffering: "CORE OFFERING",
    image: "/Enggagement.png",
  },
  {
    id: "team-organization",
    title: "Team & Organization",
    subtitle:
      "Business Design Consulting to restructure workflows and strategy from the ground up.",
    steps: ["Discovery", "Business Design", "Build & Embed"],
    serviceOffering: "CORE OFFERING",
    image: "/team.png",
  },
  {
    id: "group-format",
    title: "Group Format",
    subtitle: "Agile Bootcamp & Team Training for groups looking to accelerate their execution speed.",
    steps: ["Pre-Cohort Intake", "Post-programme"],
    serviceOffering: "CORE OFFERING",
    image: "/group.png",
  },
];

export function WhatWeDoSection() {
  return (
    <section
      className="w-full bg-warm-white"
      aria-labelledby="what-we-do-heading"
    >
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto bg-border">
        {/* Section Header */}
        <div className="mb-18 text-center">
          <p className="font-inter text-xs font-bold tracking-[1.5px] uppercase text-secondary mb-4">
            What We Do
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Three Formats, One goal:
          </h2>
          <span
            id="what-we-do-heading"
            className="text-2xl md:text-3xl font-bold font-heading"
          >
            GROWTH AND HAPPINESS
          </span>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 filter drop-shadow-md drop-shadow-foreground">
          {services.map((service) => (
            <OfferingCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              steps={service.steps}
              serviceOffering={service.serviceOffering}
              isPrimary={
                service.id === "1-1-engagement" || service.id === "group-format"
              }
              isSecondary={service.id === "team-organization"}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
