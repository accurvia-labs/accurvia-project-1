"use client";

import { Card, CardContent, CardHeader } from "../ui/card";

const formationAreas = [
    {
      badge: "15",
      title: "Children's Church",
      description:
        "Assuming the responsibility of teaching children's church at fifteen. This was the laboratory where the art of communication and empathy was first refined.",
    },
    {
      badge: "Uni",
      title: "University Ministry",
      description:
        "Leading a diverse cohort of students through the complexities of faith and academia. A period of deep theological exploration and relational bridge-building.",
    },
    {
      badge: "200+",
      title: "Youth Pastorate",
      description:
        "Navigating the spiritual landscape of over 200 young adults. Mentorship, structure, and visionary leadership became the primary tools of service.",
    },
];
  
export function FormationAndFaith() {
  return (
    <section className="bg-border">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl italic font-normal tracking-[-0.045em] leading-[1.05]">
            Formation & Faith
          </h2>
          <p className=" text-primary text-sm md:text-base font-semibold tracking-[0.24em] uppercase my-6">
            The evolution of ministry shaped how I think about transformation
            across any domain.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10">
          {formationAreas.map(({ badge, title, description }, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-md hover:scale-105 overflow-hidden filter drop-shadow-xl border-0 py-6 gap-0 transition-all duration-300"
            >
              {/* Icon/Header */}
              {badge && (
                <CardHeader className="pb-4">
                  <div className="text-secondary text-2xl md:text-3xl italic font-heading flex items-center mt-4">
                    {badge}
                  </div>
                </CardHeader>
              )}

              {/* Content */}
              <CardContent>
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4">
                  {title}
                </h3>
                <p
                  className="text-sm sm:text-base text-primary/60 leading-relaxed"
                >
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
