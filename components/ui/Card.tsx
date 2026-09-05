"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-container border border-outline-variant",
      elevated: "bg-surface-container shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
      outlined: "bg-transparent border border-outline",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-none transition-all duration-300",
          variants[variant],
          hover && "hover:border-primary hover:shadow-[0_8px_30px_rgba(200,169,94,0.15)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-b border-outline-variant", className)} {...props}>
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-t border-outline-variant flex items-center gap-4", className)} {...props}>
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";

export interface DishCardProps {
  name: string;
  description: string;
  price?: number;
  image?: string;
  dietary?: string[];
  featured?: boolean;
  onClick?: () => void;
}

export const DishCard = ({
  name,
  description,
  price,
  image,
  dietary = [],
  featured = false,
  onClick,
}: DishCardProps) => (
  <Card variant="outlined" hover onClick={onClick} className="group overflow-hidden" role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined} onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}>
    {image && (
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        />
        {featured && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-on-primary text-label-sm">
            Chef's Choice
          </span>
        )}
      </div>
    )}
    <CardContent className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-headline-md text-on-surface flex-1">{name}</h3>
        {price && (
          <span className="font-display text-headline-md text-primary whitespace-nowrap flex-shrink-0">
            {formatCurrency(price)}
          </span>
        )}
      </div>
      <p className="text-body-md text-on-surface-variant line-clamp-2">{description}</p>
      {dietary.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2" aria-label="Dietary information">
          {dietary.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-label-sm bg-surface-container-highest text-on-surface-variant border border-outline-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}