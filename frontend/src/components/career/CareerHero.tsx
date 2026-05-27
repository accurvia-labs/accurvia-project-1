"use client";

import Image from "next/image";
import careerHeroImage from "../../../public/images/career-hero.png";
import dareOdualePortrait from "../../../public/images/dare-oduale.png";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

interface Stat {
  num: string;
  label: string;
}

const STATS: Stat[] = [
  { num: "120", label: "Countries (Global Reach)" },
  { num: "13M+", label: "Users Impacted" },
  { num: "15", label: "Years Experience" },
  { num: "7+", label: "Industry Sectors" },
];

export function CareerHero() {
  const stats = STATS;
  return (
    <section
      className="overflow-hidden bg-card"
      aria-labelledby="career-hero-heading"
    >
      {/* Hero Section */}
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-center">
          {/* Left — Images */}
          <div className="flex-1 relative w-full">
            {/* Main hero image */}
            <div
             
              className="relative w-full h-64 sm:h-96 md:h-120 lg:h-140 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={careerHeroImage}
                alt="Career hero visual representation"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>

            {/* overlaps top-right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-6 -right-3 sm:top-10 sm:-right-6 lg:top-14 lg:-right-14 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-32 p-3 sm:p-4 lg:p-6 bg-primary rounded-lg shadow-md text-primary-foreground flex flex-col justify-center items-center"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl font-semibold leading-none text-center">
                15+
              </p>
              <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-light tracking-widest uppercase leading-tight mt-1 sm:mt-2 text-center">
                Years of Excellence
              </p>
            </motion.div>

            {/* Portrait — overlaps bottom-right of hero image */}
            <motion.div
              animate={{ y: [0, 80, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-10 -right-3 sm:-bottom-16 sm:-right-6 lg:-bottom-14 lg:-right-14 w-28 h-32 sm:w-48 sm:h-52 md:w-64 md:h-72 lg:w-69 lg:h-70 rounded-2xl border-4 sm:border-8 border-card overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={dareOdualePortrait}
                alt="Dare Oduale portrait"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Right — Content */}
          <div className="flex-1 w-full mt-6 sm:mt-10 lg:mt-0">
            <div className="flex flex-col gap-5 lg:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-primary" />
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                  Senior Apple Architect
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-primary">
                Fifteen years of making teams — and the people in them —
                genuinely better.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg leading-[1.55] text-foreground/60">
                A career defined by human-centric strategy and high-stakes
                transformation across the globe&apos;s most demanding
                industries.
              </p>

              {/* CTA */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.14em] uppercase rounded-full hover:bg-primary/80 transition-all duration-200"
                >
                  Explore the Journey
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="bg-primary mt-16 sm:mt-20 lg:mt-24"
        aria-labelledby="stats-heading"
      >
        <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
            {stats.map(({ num, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 ${
                  i > 0 ? "md:border-l md:border-border/20" : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-none">
                  {num}
                </h2>
                <span className="text-primary-foreground/60 text-[9px] sm:text-[10px] tracking-[2px] uppercase leading-wider text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
