"use client";

import { ReactNode } from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardDescription } from "../ui/card";

interface CareerTestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  stars?: ReactNode;
}

export function CareerTestimonialCard({
  quote,
  name,
  role,
  stars,
}: CareerTestimonialCardProps) {
  return (
    <Card className="p-12 md:p-12 bg-background border  rounded-3xl shadow-md">
      <CardContent>
        {/* Quote */}
        <p className="text-foreground/60 font-heading text-base md:text-lg italic leading-[1.55]">
          &ldquo;{quote}&ldquo;
        </p>
      </CardContent>

     <CardDescription>
      <div className="mt-9 pt-8 border-t flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Author */}
        <div className="flex items-center gap-4 md:gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-primary/5 rounded-full">
            <User />
          </div>

          {/* Name & Role */}
          <div>
            <p className="text-base font-semibold tracking-[-0.01em]">
              {name}
            </p>
            <p className="mt-1 text-foreground/60 text-[10px] font-medium tracking-[0.17em] uppercase leading-[1.2]">
              {role}
            </p>
          </div>
        </div>

        {/* Stars */}
        {stars && (
          <div className="p-2.5 bg-primary/5 rounded-full">{stars}</div>
        )}
      </div>
      </CardDescription>
    </Card>
  );
}
