import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CareerAchievementCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CareerAchievementCard({
  icon,
  title,
  description,
}: CareerAchievementCardProps) {
  return (
    <Card className="p-6 md:p- bg-background border  rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <CardHeader>
      <span>{icon}</span>
        <p className="text-md md:text-lg font-semibold tracking-[-0.02em] leading-[1.32] mt-6">
          {title}
        </p>
      </CardHeader>
      <CardContent className="text-foreground/60 text-xs leading-[1.65]">
        {description}
      </CardContent>
    </Card>
  );
}
