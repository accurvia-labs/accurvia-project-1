"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

interface CtaLinkProps extends Omit<LinkProps, "className"> {
  variant?:
    | "primary"
    | "secondary"
    | "foreground"
    | "outline"
    | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/80",
  foreground:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
  secondary:
    "bg-secondary/10 text-secondary hover:bg-secondary/90 border border-secondary",
  outline:
    "border border-primary text-primary hover:bg-primary/80 hover:text-primary-foreground",
  ghost: "text-secondary hover:text-primary",
};

const sizeClasses: Record<NonNullable<CtaLinkProps["size"]>, string> = {
  xs: "h-8 px-4 text-xs sm:text-sm",
  sm: "h-11 px-4 sm:h-12 sm:px-6  text-xs sm:text-base",
  md: "h-11 px-8 sm:h-12 sm:px-10 text-base",
  lg: "h-11 px-10 sm:h-12 sm:px-12 text-base",
};

export function CtaLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn(
        // Base
        "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 gap-2.5",
        // Variant
        variantClasses[variant],
        // Size
        sizeClasses[size],
        // Overrides
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
