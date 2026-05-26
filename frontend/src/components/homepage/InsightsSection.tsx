"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Insight {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  publishDate: string;
  variant?: "primary" | "secondary";
}

const BADGE_VARIANTS: Record<string, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const insights: Insight[] = [
  {
    id: "business-design",
    category: "BUSINESS DESIGN",
    title: "Why most startups aren't slow — they're badly designed",
    description:
      "Speed isn't a culture problem. It's almost always a structure problem. Here's how to redesign for pace.",
    readTime: "7 min read",
    publishDate: "Apr 2024",
    variant: "primary",
  },
  {
    id: "agile",
    category: "AGILE",
    title: "The part of agile transformation nobody talks about",
    description:
      "The certificates are the easy part. The real work is rewiring how decisions actually get made.",
    readTime: "6 min read",
    publishDate: "Mar 2024",
    variant: "secondary",
  },
  {
    id: "digital-transformation",
    category: "DIGITAL TRANSFORMATION",
    title:
      "The honest case for AI adoption — and why most companies do it backwards",
    description:
      "Buying tools before redesigning workflows is the most expensive mistake I see leaders make.",
    readTime: "9 min read",
    publishDate: "Mar 2024",
    variant: "primary",
  },
];

export function InsightsSection() {
  return (
    <section className="w-full" aria-labelledby="insights-heading">
      <div className="px-6 md:px-14 py-6 md:py-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs md:text-sm font-inter font-bold mb-2 uppercase tracking-widest text-secondary">
            INSIGHTS
          </p>
          <h2
            id="insights-heading"
            className="text-2xl md:text-3xl font-semibold font-heading text-deep-green"
          >
            Recent Thinking
          </h2>
        </div>

        {/* Insights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className={`flex flex-col h-full border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 bg-background rounded-lg`}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {insight.category.split(",").map((category: string) => (
                    <Badge
                      key={category.trim()}
                      variant="outline"
                      className={`text-[10px] uppercase tracking-wide h-8 px-3 py-2 rounded-md border-0 ${BADGE_VARIANTS[insight.variant ?? "primary"]}`}
                    >
                      {category.trim()}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mt-4 leading-snug font-heading text-slate-900">
                  {insight.title}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col grow pt-2">
                <p className="text-sm md:text-base mb-6 leading-relaxed grow">
                  {insight.description}
                </p>

                <div className="flex justify-between border-t pt-2">
                  <div className="flex items-center gap-1 text-xs text-primary/60 uppercase tracking-wide">
                    <span>{insight.readTime}</span>
                    <span className="w-1 h-1 bg-primary/60 rounded-full"></span>
                    <span>{insight.publishDate}</span>
                  </div>

                  {/* Read Link */}
                  <Link
                    href="#"
                    className="group text-xs font-bold text-secondary hover:text-secondary/80 transition-colors duration-200 flex items-center gap-1"
                  >
                    Read
                    <span>
                      <Plus
                        size={20}
                        strokeWidth={3}
                        className="group-hover:rotate-90 transition-transform duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
