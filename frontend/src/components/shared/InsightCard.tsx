import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

interface InsightCardProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  publishDate: string;
  variant?: "primary" | "secondary" | "default";
}

const BADGE_VARIANTS = {
  primary: "bg-primary text-white shadow-md shadow-primary/20",
  secondary: "bg-secondary text-white shadow-md shadow-secondary/20",
  default: "bg-gray-100 text-slate-900 shadow-md shadow-gray-200/10",
} as const;

export function InsightCard({
  category,
  title,
  description,
  readTime,
  publishDate,
  variant = "default",
}: InsightCardProps) {
  return (
    <Card
      className={`flex flex-col h-full border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 bg-white rounded-lg`}
    >
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2">
          {category.split(",").map((category) => (
            <Badge
              key={category.trim()}
              variant="outline"
              className={`text-[10px] uppercase tracking-wide h-8 px-3 py-2 rounded-md border-0 ${BADGE_VARIANTS[variant]}`}
            >
              {category.trim()}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mt-4 leading-snug font-heading text-slate-900">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col grow pt-2">
        <p className="text-sm md:text-base mb-6 leading-relaxed grow">
          {description}
        </p>

        <div className="flex justify-between border-t">
          <div className="flex items-center gap-1 text-xs text-gray-500 pb-4 uppercase tracking-wide">
            <span>{readTime}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>{publishDate}</span>
          </div>

          {/* Read Link */}
          <Link
            href="#"
            className="group mt-4 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors duration-200 inline-flex items-center gap-1"
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
  );
}
