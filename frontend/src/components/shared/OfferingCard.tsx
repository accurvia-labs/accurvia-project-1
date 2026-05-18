import { ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OfferingCardProps {
  title: string;
  subtitle: string;
  steps: string[];
  serviceOffering: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  image?: string | ReactNode;
  imageAlt?: string;
}

export function OfferingCard({
  title,
  subtitle,
  steps,
  serviceOffering,
  isPrimary = false,
  isSecondary = false,
  image,
  imageAlt,
}: OfferingCardProps) {
  return (
    <Card
      className={`flex flex-col h-full transition-transform duration-300 hover:scale-105 overflow-hidden shadow-md shadow-forground border-0 py-0 gap-0`}
    >
      {/* Header with Badge */}
      <div
        className={`flex flex-col pt-4 ${
          isPrimary
            ? "bg-primary text-white"
            : isSecondary
              ? "bg-secondary text-white"
              : "bg-muted text-primary"
        }`}
      >
        {/* Header with Title */}
        <CardHeader className="pb-4">
          <h3
            className={`text-lg md:text-2xl font-bold mb-2 font-heading ${
              isSecondary ? "text-muted-foreground" : "text-primary-foreground"
            }`}
          >
            {title}
          </h3>

          {/* Steps as Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {steps.map((step) => (
              <Badge
                key={step}
                variant="outline"
                className={`text-[10px] uppercase tracking-wide h-8 px-3 py-2 rounded-md ${
                  isPrimary
                    ? "bg-primary-foreground/10 text-primary-foreground border-primary/30 shadow-md shadow-secondary/20"
                    : "bg-secondary-foreground/10 text-muted-foreground border-secondary/30 shadow-md shadow-primary/20"
                }`}
              >
                {step}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </div>

      {/* Image Section */}
      {image && typeof image === "string" && (
        <div className="relative w-full h-64 md:h-72 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      )}
      {image && typeof image !== "string" && (
        <div className="w-full h-64 md:h-72 bg-gray-200 overflow-hidden flex items-center justify-center">
          {image}
        </div>
      )}

      {/* Bottom Content Section */}
      <CardContent className="flex flex-col gap-2 grow bg-background px-6 py-4">
        <p className="text-xs md:text-xs font-semibold uppercase tracking-wider text-secondary">
          {serviceOffering}
        </p>
        <p className="text-sm md:text-base leading-relaxed">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
