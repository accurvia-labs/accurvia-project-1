"use client";

import { InsightCard } from "@/components/shared/InsightCard";

interface Insight {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  publishDate: string;
  variant?: "primary" | "secondary" | "default";
}

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
    <section
      className="w-full bg-warm-white"
      aria-labelledby="insights-heading"
    >
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              readTime={insight.readTime}
              publishDate={insight.publishDate}
              variant={insight.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
