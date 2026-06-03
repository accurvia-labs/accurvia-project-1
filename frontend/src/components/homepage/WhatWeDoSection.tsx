"use client";

import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Enggagement from "../../../public/images/Enggagement.png";
import Team from "../../../public/images/team.png";
import Group from "../../../public/images/group.png";

const services = [
  {
    id: "1",
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
    id: "2",
    title: "Clerity Architects",
    subtitle:
      "Leadership & Digital Transformation Coaching for high-stakes decision makers.",
    steps: ["Diagnostic", "Structured Session", "Integration"],
    serviceOffering: "CORE OFFERING",
    image: Enggagement,
    imageAlt:
      "Professional one-on-one coaching session with hands together showing collaboration and engagement",
  },
  {
    id: "3",
    title: "Steward",
    subtitle:
      "Agile Bootcamp & Team Training for groups looking to accelerate their execution speed.",
    steps: ["Discipleship", "Leadership", "Community"],
    serviceOffering: "CORE OFFERING",
    image: Group,
    imageAlt:
      "Diverse team members working together in agile bootcamp training session on project execution",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="w-full bg-border" aria-labelledby="what-we-do-heading">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <p className="font-inter text-xs font-bold tracking-[1.5px] uppercase text-secondary mb-3 sm:mb-4">
            Areas of Focus
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Three Formats, One goal:
          </h2>
          <span
            id="what-we-do-heading"
            className="text-2xl sm:text-3xl font-bold font-heading"
          >
            GROWTH AND HAPPINESS
          </span>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {services.map(
            (
              { id, title, subtitle, steps, serviceOffering, image, imageAlt },
              idx,
            ) => {
              const isSecondary = idx === 1;

              return (
                <Card
                  key={id}
                  className="flex flex-col h-full transition-transform duration-300 hover:scale-105 overflow-hidden drop-shadow-xl border-0 py-0 gap-0"
                >
                  {/* Card Header */}
                  <div
                    className={`flex flex-col pt-4 ${
                      isSecondary
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 font-heading`}
                      >
                        {title}
                      </h3>

                      {/* Steps as Badges */}
                      <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                        {steps.map((step: string) => (
                          <Badge
                            key={step}
                            variant="outline"
                            className={`text-[10px] uppercase tracking-wide h-7 sm:h-8 px-3 py-2 rounded-md ${
                              isSecondary
                                ? "bg-secondary/10 text-secondary-foreground border-secondary/30 shadow-md shadow-primary/80"
                                : "bg-primary/10 text-primary-foreground border-primary/30 shadow-md shadow-secondary/40"
                            }`}
                          >
                            {step}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 bg-gray-200 overflow-hidden">
                    <Image
                      src={image as StaticImageData}
                      alt={imageAlt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom Content */}
                  <CardContent className="flex flex-col gap-2 grow bg-background px-5 sm:px-6 py-4 sm:py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {serviceOffering}
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {subtitle}
                    </p>
                  </CardContent>
                </Card>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
