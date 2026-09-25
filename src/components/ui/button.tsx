import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,opacity,transform,box-shadow] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg hover:bg-primary/90 shadow-[0_1px_0_color-mix(in_oklab,var(--color-fg)_18%,transparent)]",
        outline:
          "bg-transparent text-fg ring-1 ring-border-strong hover:bg-elevated",
        ghost: "bg-transparent text-fg hover:bg-elevated",
      },
      size: {
        sm: "h-10 rounded-sm px-3.5 text-sm",
        md: "h-11 rounded-md px-5 text-sm",
        lg: "h-12 rounded-md px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
