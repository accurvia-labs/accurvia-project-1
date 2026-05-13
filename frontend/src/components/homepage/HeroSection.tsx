"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const categories = [
    { label: "Career" },
    { label: "Business" },
    { label: "Ministry" },
  ];

  return (
    <section className="w-full" aria-labelledby="hero-heading">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="bg-primary py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            {/* Hero Heading */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading text-primary-foreground"
            >
              THINKER · TEACHER ·<br />
              BUSINESS DESIGNER ·<br />
              COACH
            </h1>

            {/* Hero Subheading */}
            <p className="text-lg md:text-xl leading-relaxed font-body text-primary-foreground">
              Business design and transformation coaching for founders,
              programme leads, and executives who need to move.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="bg-primary-foreground py-8  px-6 md:px-12 lg:px-16">
          <div className="max-w-xl">
            {/* About Label */}
            <p className="font-inter text-md md:text-lg font-bold uppercase text-primary mb-4">
              Meet Dare
            </p>

            {/* About Title */}
            <h2 className="text-2xl md:text-3xl font-normal mb-6 leading-tight font-heading text-primary">
              Brief Intro
            </h2>

            {/* About Text */}
            <p className="text-sm md:text-base mb-4 leading-relaxed text-justify">
              Dare is the short form of a thirteen-letter name that means God
              vindicates me — and across every chapter of my life, that meaning
              has proven itself true. What might look from the outside like a
              restless pouring of energy into people, into organisations, into
              communities and into the ground, has produced results that give
              everyone around me reason to rejoice. I am a husband to my darling
              wife and a father of three — and I hold that as my first and most
              important assignment. Everything else is viewed through a single
              lens: how does this make my family better? Whether by modelling
              what it looks like to serve with excellence, or by demonstrating
              that your gifts are meant to be profited from, my family is the
              reason I give everything I have — in career, in business, and in
              ministry
            </p>

            {/* Read More Link */}
            <Link
              href="#"
              className="font-inter inline-flex items-center text-sm md:text-md hover:underline"
            >
              Read my Full Story in these three aspects
            </Link>

            {/* Category Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((cat) => (
                <Badge
                  key={cat.label}
                  variant="outline"
                  className="font-inter px-3 py-2 text-xs font-semibold uppercase tracking-wider"
                >
                  {cat.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 py-10 px-6 md:px-12 lg:px-16">
          <div
            className="h-full bg-gray-300 rounded-lg shadow-lg mr-6 md:mr-8 lg:mr-12"
            role="img"
            aria-label="Dare Oduale portrait placeholder"
          />
        </div>
      </div>
    </section>
  );
}
