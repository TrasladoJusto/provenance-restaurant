"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-label transition-all duration-300
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      focus-visible:ring-offset-2 focus-visible:ring-offset-background
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-primary text-on-primary hover:bg-primary-container/90
        shadow-[0_4px_14px_0_rgba(200,169,94,0.3)]
        hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]
      `,
      secondary: `
        bg-secondary text-on-secondary hover:bg-secondary-container/80
      `,
      ghost: `
        bg-transparent text-on-surface hover:bg-surface-container
      `,
      outline: `
        border border-outline-variant hover:border-primary hover:bg-primary/5
        text-on-surface
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-label-sm min-h-[40px]",
      md: "px-6 py-3 text-label-md min-h-[48px]",
      lg: "px-8 py-4 text-label-md min-h-[56px]",
    };

    const Comp = asChild ? Slot : "button";

    const buttonContent = (
      <span>
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </span>
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);

Button.displayName = "Button";