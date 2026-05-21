"use client";

import { OfferingCard } from "@/components/shared/OfferingCard";
import Enggagement from "../../../public/images/Enggagement.png";
import Team from "../../../public/images/team.png";
import Group from "../../../public/images/group.png";

import { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  steps: string[];
  serviceOffering: string;
  image: string | StaticImageData;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: "1-1-engagement",
    title: "1:1 Engagement",
    subtitle:
      "Leadership & Digital Transformation Coaching for high-stakes decision makers.",
    steps: ["Diagnostic", "Structured Session", "Integration"],
    serviceOffering: "CORE OFFERING",
    image: Enggagement,
    imageAlt:
      "Professional one-on-one coaching session with hands together showing collaboration and engagement",
  },
  {
    id: "team-organization",
    title: "Team & Organization",
    subtitle:
      "Business Design Consulting to restructure workflows and strategy from the ground up.",
    steps: ["Discovery", "Business Design", "Build & Embed"],
    serviceOffering: "CORE OFFERING",
    image: Team,
    imageAlt:
      "Business team in modern office meeting room collaborating on strategy and workflow design",
  },
  {
    id: "group-format",
    title: "Group Format",
    subtitle:
      "Agile Bootcamp & Team Training for groups looking to accelerate their execution speed.",
    steps: ["Pre-Cohort Intake", "Post-programme"],
    serviceOffering: "CORE OFFERING",
    image: Group,
    imageAlt:
      "Diverse team members working together in agile bootcamp training session on project execution",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="w-full bg-border" aria-labelledby="what-we-do-heading">
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              imageAlt={service.imageAlt}
            />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary/80 transition-colors duration-200"
          >
            Learn More
            <span>
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
