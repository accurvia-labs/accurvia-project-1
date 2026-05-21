"use client";

import Image from "next/image";
import careerHeroImage from "../../../public/images/career-hero.png";
import dareOdualePortrait from "../../../public/images/dare-oduale.png";

import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

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
      className="relative overflow-hidden bg-card"
      aria-labelledby="career-hero-heading"
    >
      {/* Hero Section */}
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start justify-center">
          <div className="relative w-full hidden lg:block">
            <div
              className="absolute top-0 left-0 w-122.5 h-125 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 filter drop-shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={careerHeroImage}
                alt="Career hero visual representation"
                fill
                priority
                className="
              object-cover
              w-full h-full
              rounded-2xl
              "
              />
            </div>

            {/* Portrait */}
            <div className="absolute left-64 top-57 w-79 h-80 rounded-2xl border-8 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300 filter drop-shadow-xl">
                <Image
                  src={dareOdualePortrait}
                  alt="Dare Oduale portrait"
                  fill
                  priority
                  className="
              object-cover
              w-full h-full
              rounded-2xl
              "
                />
              </div>
            </div>

            {/* Badge */}
            <Badge className="absolute left-104 top-12 w-40 h-32 p-6 bg-primary rounded-lg shadow-md text-primary-foreground flex flex-col justify-center items-center font-inter animate-pulse hover:animate-none">
              <p className="text-3xl font-semibold leading-none text-center">
                15+
              </p>
              <p className="text-[10px] font-light tracking-widest uppercase leading-tight mt-2 text-center">
                Years of Excellence
              </p>
            </Badge>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-primary" />
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                Senior Apple Architect
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.98] tracking-[-0.04em] text-primary">
              Fifteen years of making teams — and the people in them — genuinely
              better.
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg leading-[1.55] text-foreground/60">
              A career defined by human-centric strategy and high-stakes
              transformation across the globe&aqos;s most demanding industries.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 h-13 px-10 py-4 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.14em] uppercase rounded-full hover:bg-primary/80 transition-all duration-200"
              >
                Explore the Journey
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* Stats Section */}
      <div className="bg-primary" aria-labelledby="stats-heading">
        <div className="px-6 py-12 md:py-16 lg:py-18 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map(({ num, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 ${
                  i > 0 ? "md:border-l md:border-border/20" : ""
                }`}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-none">
                  {num}
                </h1>
                <span className="text-primary-foreground/60 text-[10px] tracking-[2px] uppercase leading-wider text-center">
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
