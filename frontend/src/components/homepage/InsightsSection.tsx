"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/ui/ctalink";
import { Plus } from "lucide-react";

const BADGE_VARIANTS: Record<string, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const insights = [
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
    <section id="insight" className="w-full" aria-labelledby="insights-heading">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl space-y-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-bold mb-2 uppercase tracking-widest text-secondary">
            INSIGHTS
          </p>
          <h2
            id="insights-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading text-deep-green"
          >
            Recent Thinking
          </h2>
        </div>

        {/* Insights Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className="flex flex-col h-full border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 bg-background rounded-lg"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {insight.category.split(",").map((category: string) => (
                    <Badge
                      key={category.trim()}
                      variant="outline"
                      className={`text-xs md:text-sm uppercase tracking-wide h-7 sm:h-8 px-3 py-2 rounded-md border-0 ${BADGE_VARIANTS[insight.variant ?? "primary"]}`}
                    >
                      {category.trim()}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3 sm:mt-4 leading-snug font-heading text-slate-900">
                  {insight.title}
                </h3>
              </CardHeader>

              <CardContent className="flex flex-col grow gap-3">
                <p className="text-sm sm:text-base leading-relaxed grow">
                  {insight.description}
                </p>

                <div className="flex justify-between border-t pt-3 sm:pt-4">
                  <div className="flex items-center gap-1 text-xs text-primary/60 uppercase tracking-wide">
                    <span>{insight.readTime}</span>
                    <span className="w-1 h-1 bg-primary/60 rounded-full" />
                    <span>{insight.publishDate}</span>
                  </div>

                  {/* Read Link */}
                  <CtaLink href="#" variant="ghost" size="xs" className="group">
                    Read
                    <span>
                      <Plus
                        size={18}
                        strokeWidth={3}
                        className="group-hover:rotate-90 transition-transform duration-200"
                      />
                    </span>
                  </CtaLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
