"use client";

import { ReactNode } from "react";
import { CareerAchievementCard } from "@/components/shared/CareerAchievementCard";
import { Globe, Users, House, Zap } from "lucide-react";

interface Achievement {
  icon: ReactNode;
  title: string;
  desc: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: <Globe size={30} color="var(--foreground)" />,
    title: "120 Countries Playbook",
    desc: "Standardized identity and access management on a global scale, ensuring seamless security across borders.",
  },
  {
    icon: <Users size={30} color="var(--foreground)" />,
    title: "3M+ China Market Landed",
    desc: "Successfully scaled user acquisition in the China market, contributing to a 13M+ global user base.",
  },
  {
    icon: <House size={30} color="var(--foreground)" />,
    title: "Eligible Capability Award",
    desc: "Earned a prestigious industry award for developing eligible capabilities for a top-tier Global Bank.",
  },
  {
    icon: <Zap size={30} color="var(--foreground)" />,
    title: "Operational Shift",
    desc: "Compressing issue resolution times from months to mere days through radical structural transformation.",
  },
];

export function KeyAchievements() {
  const achievements = ACHIEVEMENTS;
  return (
    <section className="bg-border" aria-labelledby="key-achievements-heading">
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
        {/* Section Heading */}
        <div className="text-center">
          <p className=" text-primary text-[10px] font-semibold tracking-[0.24em] uppercase">
            Key Achievements
          </p>
          <h1 className="text-primary text-3xl md:text-4xl italic font-normal tracking-[-0.045em] leading-[1.05] mt-6">
            Defining Moments of Impact
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <CareerAchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
