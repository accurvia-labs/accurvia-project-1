"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FacilitationImage from "../../../public/images/facilitation.png";
import { motion } from "framer-motion";

const features = [
  {
    id: "scaled-agile",
    number: "01",
    title: "Strategy Reconstruction Lab",
    icon: <ArrowRight size={11} className="text-primary-foreground" />,
  },
  {
    id: "human-centric",
    number: "02",
    title: "Human-Centric Agile Mastery",
    icon: <ArrowRight size={11} className="text-primary-foreground" />,
  },
];

export function FutureOfFacilitation() {
  return (
    <section aria-labelledby="facilitation-heading" className="bg-primary">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div className="flex-1 w-full">
            <h2
              id="facilitation-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-primary-foreground leading-[1.05] mb-6 sm:mb-8"
            >
              The Future of Facilitation.
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/60 leading-relaxed mb-8 max-w-md">
              We are currently building the next generation of business
              designers. Our programs are designed for deep impact, focusing on
              the human elements that drive sustainable growth.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3 border-b border-border/20 pb-3">
                  <p className="text-secondary text-xs font-semibold">
                    {feature.number}
                  </p>
                  <p className="text-sm sm:text-base text-primary-foreground font-medium">
                    {feature.title}
                  </p>
                  <span className="ml-auto text-primary-foreground">
                    {feature.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image with overlay card */}
          <div className="flex-1 w-full relative pb-16 sm:pb-20">
            <div className="relative w-full h-64 sm:h-96 md:h-120 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={FacilitationImage}
                alt="The Future of Facilitation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}>
            <div className="absolute -bottom-10 left-0 sm:-left-6 bg-secondary text-primary-foreground rounded-2xl p-4 sm:p-6 w-[60%] sm:w-45">
              <p className="font-semibol text-sm sm:text-md">
                  Built for <br/>
                  Permanent Impact.
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}