"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-[#7C3AED] text-white hover:bg-[#5B21B6] shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 hover:scale-105",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/25",
        outline:
          "border-2 border-[#7C3AED] text-white hover:bg-[#7C3AED]/10 hover:border-[#A855F7]",
        secondary:
          "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] border border-[#2a2a2a]",
        ghost:
          "text-[#9ca3af] hover:text-white hover:bg-white/5",
        link: "text-[#7C3AED] underline-offset-4 hover:underline",
        premium:
          "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#A855F7]/40 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
