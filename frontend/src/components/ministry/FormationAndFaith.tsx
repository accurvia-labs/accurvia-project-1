"use client";

import { Card, CardContent, CardHeader } from "../ui/card";

export function FormationAndFaith() {
  const formationAreas = [
    {
      icon: "15",
      title: "Children's Church",
      description:
        "Assuming the responsibility of teaching children's church at fifteen. This was the laboratory where the art of communication and empathy was first refined.",
    },
    {
      icon: "Uni",
      title: "University Ministry",
      description:
        "Leading a diverse cohort of students through the complexities of faith and academia. A period of deep theological exploration and relational bridge-building.",
    },
    {
      icon: "200+",
      title: "Youth Pastorate",
      description:
        "Navigating the spiritual landscape of over 200 young adults. Mentorship, structure, and visionary leadership became the primary tools of service.",
    },
  ];

  return (
    <section className="bg-border">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <h1 className="text-primary text-3xl md:text-4xl italic font-normal tracking-[-0.045em] leading-[1.05]">
            Formation & Faith
          </h1>
          <p className=" text-primary text-[10px] font-semibold tracking-[0.24em] uppercase my-6">
            The evolution of ministry shaped how I think about transformation
            across any domain.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10">
          {formationAreas.map(({ icon, title, description }, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-md hover:scale-105 overflow-hidden filter drop-shadow-xl border-0 py-6 gap-0 transition-all duration-300"
            >
              {/* Icon/Header */}
              {icon && (
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 text-accent text-2xl italic font-heading flex items-center mt-4">
                    {icon}
                  </div>
                </CardHeader>
              )}

              {/* Content */}
              <CardContent>
                <h3 className="text-2xl mb-2 md:mb-3">{title}</h3>
                <p className="text-base text-primary/60 leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
