import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-md bg-elevated px-4 text-base text-fg ring-1 ring-border placeholder:text-subtle transition-[box-shadow,background-color] duration-150",
          "hover:ring-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          className,
        )}
        {...props}
      />
    );
  },
);
