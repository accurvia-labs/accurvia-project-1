"use client";

import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Enggagement from "../../../public/images/Enggagement.png";
import Team from "../../../public/images/team.png";
import Group from "../../../public/images/group.png";

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
    id: "clerity-architects",
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
    id: "steward",
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
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
        {/* Section Header */}
        <div className="mb-18 text-center">
          <p className="font-inter text-xs font-bold tracking-[1.5px] uppercase text-secondary mb-4">
            Areas of Focus
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
          {services.map(
            (
              { id, title, subtitle, steps, serviceOffering, image, imageAlt },
              idx,
            ) => {
              const isPrimary = idx === 0;
              const isSecondary = idx === 1;

              return (
                <Card
                  key={id}
                  className={`flex flex-col h-full transition-transform duration-300 hover:scale-105 overflow-hidden filter drop-shadow-xl border-0 py-0 gap-0`}
                >
                  {/* Header  */}
                  <div
                    className={`flex flex-col pt-4 ${
                      isPrimary
                        ? "bg-primary text-primary-foreground"
                        : isSecondary
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-primary"
                    }`}
                  >
                    {/* Header with Title */}
                    <CardHeader className="pb-4">
                      <h3
                        className={`text-lg md:text-2xl font-bold mb-2 font-heading ${
                          isSecondary
                            ? "text-muted-foreground"
                            : "text-primary-foreground"
                        }`}
                      >
                        {title}
                      </h3>

                      {/* Steps as Badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {steps.map((step: string) => (
                          <Badge
                            key={step}
                            variant="outline"
                            className={`text-[10px] uppercase tracking-wide h-8 px-3 py-2 rounded-md ${
                              isPrimary
                                ? "bg-primary/10 text-primary-foreground border-primary/30 shadow-md shadow-secondary/40"
                                : "bg-secondary/10 text-muted-foreground border-secondary/30 shadow-md shadow-primary/80"
                            }`}
                          >
                            {step}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </div>

                  {/* Image Section */}
                  {image && typeof image === "string" && (
                    <div className="relative w-full h-64 md:h-72 bg-gray-200 overflow-hidden">
                      <Image
                        src={image}
                        alt={imageAlt || ""}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {image && typeof image === "object" && "src" in image && (
                    <div className="relative w-full h-64 md:h-72 bg-gray-200 overflow-hidden">
                      <Image
                        src={image as StaticImageData}
                        alt={imageAlt || ""}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {image && typeof image === "object" && !("src" in image) && (
                    <div className="w-full h-64 md:h-72 bg-gray-200 overflow-hidden flex items-center justify-center">
                      {image}
                    </div>
                  )}

                  {/* Bottom Content Section */}
                  <CardContent className="flex flex-col gap-2 grow bg-background px-6 py-4">
                    <p className="text-xs md:text-xs font-semibold uppercase tracking-wider text-secondary">
                      {serviceOffering}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
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
