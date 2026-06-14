import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        navCta:
          "text-ink bg-nav-button hover:bg-nav-button/80 active:scale-[0.97]",
        hero:
          "bg-accent text-hero-bg hover:brightness-110 active:scale-[0.97]",
        heroOutline:
          "bg-white text-hero-bg hover:brightness-90 active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-4 rounded-md",
        lg: "h-11 px-6 rounded-lg",
        sm: "h-9 px-3 rounded-md",
      },
    },
    defaultVariants: {
      variant: "navCta",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
