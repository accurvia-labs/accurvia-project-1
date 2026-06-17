"use client";

import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
  icon?: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60",
  secondary:
    "bg-secondary text-muted-foreground hover:bg-secondary/90 shrink-0",
  outline:
    "border border-secondary text-secondary hover:text-secondary/80 hover:bg-secondary/10",
  icon: "bg-secondary text-muted-foreground hover:bg-secondary/90 shrink-0",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-11 sm:h-12 px-8 sm:px-10 text-base",
  lg: "h-11 sm:h-12 px-10 sm:px-12 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  loadingText = "Sending...",
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled ?? loading}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 cursor-pointer",
        variantClasses[variant],
        variant === "icon" ? "h-11 sm:h-12 px-4 sm:px-5" : sizeClasses[size],
        className,
      )}
      {...props}
    >
      {/* Icon-only */}
      {variant === "icon" && icon}

      {/* Loading state */}
      {variant !== "icon" && loading && (
        <span className="flex items-center gap-2">
          <Spinner />
          {loadingText}
        </span>
      )}

      {/* Default content */}
      {variant !== "icon" && !loading && children}
    </button>
  );
}
