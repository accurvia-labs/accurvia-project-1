"use client";

import Image from "next/image";
import { BrainCog, Briefcase } from "lucide-react";
import LifeSchoolImage from "../../../public/images/life-school.jpg";
import { motion } from "framer-motion";

export function LifeSchoolMandateSection() {
  return (
    <section className="bg-background">
      <div className="px-6 sm:px-10 md:px-14 py-10 sm:py-16 md:py-24 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-center">
          {/* LEFT COLUMN */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 md:mb-12 max-w-md leading-tight">
              LIFE School &
              <span className="block italic text-secondary">
                The Integration Mandate
              </span>
            </h1>

            <div className="space-y-8 md:space-y-10">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                My core conviction rests on a simple yet profound truth: <br />
                <span className="font-semibold">
                  Responsible Christianity and entrepreneurial faithfulness are
                  not separate callings.
                </span>{" "}
                They are two expressions of the same stewardship. Through LIFE
                School, we bridge the gap between spiritual devotion and
                professional excellence.
              </p>

              {/* Feature List */}
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 md:gap-6">
                  <div className="shrink-0 flex items-center bg-border rounded-full justify-center h-11 w-11 md:h-14 md:w-14">
                    <BrainCog size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold md:font-bold text-lg md:text-2xl text-primary mb-1 md:mb-2">
                      Intellectual Rigor
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-6 md:leading-7">
                      Faith that isn&apos;t afraid of hard questions or
                      strategic thinking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="shrink-0 flex items-center bg-border rounded-full justify-center h-11 w-11 md:h-14 md:w-14">
                    <Briefcase size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold md:font-bold text-lg md:text-2xl text-primary mb-1 md:mb-2">
                      Marketplace Faith
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-6 md:leading-7">
                      Bringing ethical brilliance and kingdom values into the
                      world of business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 w-full relative pb-28 sm:pb-32 lg:pb-36">
            {/* Image */}
            <div className="relative w-full h-72 sm:h-96 md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={LifeSchoolImage}
                alt="LIFE School and Integration"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Quote Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="
                absolute bottom-10 left-0
                lg:-left-14
                bg-primary
                w-[80%] sm:w-72 lg:w-80
                rounded-2xl
                p-4 sm:p-6
                flex flex-col justify-center
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                transition-opacity duration-300
              "
            >
              <p className="text-secondary font-semibold text-xl sm:text-2xl">
                99
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/80 mt-2 leading-5 sm:leading-6">
                &quot;We are called to be as brilliant in the boardroom as we
                are devoted in the sanctuary.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
