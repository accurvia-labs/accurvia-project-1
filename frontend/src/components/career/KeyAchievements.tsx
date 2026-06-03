"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, Users, House, Zap } from "lucide-react";

const achievements = [
  {
    icon: <Globe size={26} color="var(--foreground)" />,
    title: "120 Countries Playbook",
    desc: "Standardized identity and access management on a global scale, ensuring seamless security across borders.",
  },
  {
    icon: <Users size={26} color="var(--foreground)" />,
    title: "3M+ China Market Landed",
    desc: "Successfully scaled user acquisition in the China market, contributing to a 13M+ global user base.",
  },
  {
    icon: <House size={26} color="var(--foreground)" />,
    title: "Eligible Capability Award",
    desc: "Earned a prestigious industry award for developing eligible capabilities for a top-tier Global Bank.",
  },
  {
    icon: <Zap size={26} color="var(--foreground)" />,
    title: "Operational Shift",
    desc: "Compressing issue resolution times from months to mere days through radical structural transformation.",
  },
];

export function KeyAchievements() {
  return (
    <section className="bg-border" aria-labelledby="key-achievements-heading">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
            Key Achievements
          </p>
          <h2
            id="key-achievements-heading"
            className="text-primary text-2xl sm:text-3xl md:text-4xl italic font-normal tracking-[-0.045em] leading-[1.05] mt-4 sm:mt-6"
          >
            Defining Moments of Impact
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mt-10 sm:mt-14 md:mt-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 bg-background border rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="p-0 mb-3 sm:mb-4">
                <span className="mb-3 sm:mb-4 block">{achievement.icon}</span>
                <p className="text-base sm:text-lg font-semibold tracking-[-0.02em] leading-[1.32]">
                  {achievement.title}
                </p>
              </CardHeader>
              <CardContent className="p-0 text-foreground/60 text-xs sm:text-sm leading-[1.65]">
                {achievement.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
