"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function AboutSection() {
  const categories = [
    { label: "Career", link: "/career" },
    { label: "Business", link: "/business" },
    { label: "Ministry", link: "/ministry" },
  ];

  return (
    <section
      className="w-full bg-primary-foreground"
      aria-labelledby="about-heading"
    >
      {/* About */}
      <div className="flex flex-col lg:gap-70 lg:flex-row px-6 md:px-14 py-6 md:py-8">
        <div className="mb-6 lg:mb-0">
          {/* About Label */}
          <p className="font-inter text-xs font-bold tracking-[1.5px] uppercase text-secondary">
            Meet Dare
          </p>
          <div className="bg-secondary h-1 w-13"></div>
        </div>
        <div className="flex-1  lg:pr-36">
          {/* About Title */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight font-heading text-primary">
            Brief Intro
          </h2>

          {/* About Text */}
          <p className="text-sm md:text-lg mb-4 leading-relaxed text-justify">
            Dare is the short form of a thirteen-letter name that means God
            vindicates me — and across every chapter of my life, that meaning
            has proven itself true. What might look from the outside like a
            restless pouring of energy into people, into organisations, into
            communities and into the ground, has produced results that give
            everyone around me reason to rejoice.
          </p>

          <p className="text-sm md:text-lg mb-4 leading-relaxed text-justify">
            I am a husband to my darling wife and a father of three — and I hold
            that as my first and most important assignment. Everything else is
            viewed through a single lens: how does this make my family better?
            Whether by modelling what it looks like to serve with excellence, or
            by demonstrating that your gifts are meant to be profited from, my
            family is the reason I give everything I have — in career, in
            business, and in ministry
          </p>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.link}>
                <Badge
                  variant="outline"
                  className="font-inter px-4 py-2 h-8 text-xs font-bold uppercase tracking-[1.2px] text-secondary hover:bg-secondary/10 cursor-pointer transition-colors duration-300"
                >
                  {cat.label}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            href="#"
            className="font-inter font-semibold inline-flex items-center text-sm md:text-md hover:underline mt-6 text-secondary"
          >
            Read my Full Story in these three aspects
          </Link>
        </div>
      </div>
    </section>
  );
}
