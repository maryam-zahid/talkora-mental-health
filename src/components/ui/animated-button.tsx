"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "peach" | "light" | "outline";
  href?: string;
};

export default function AnimatedButton({
  children,
  className,
  variant = "peach",
  href = "#",
}: AnimatedButtonProps) {
  const variants = {
    peach:
      "bg-[#F4B49C] text-[#173932] hover:bg-[#F7C2AD]",
    light:
      "bg-[#FBF8F3] text-[#173932] hover:bg-white",
    outline:
      "border border-white/70 bg-transparent text-white hover:bg-white hover:text-[#173932]",
  };

  return (
    <motion.a
      href={href}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "inline-flex min-h-[54px] items-center justify-center rounded-full px-7",
        "text-[14px] font-semibold tracking-[0.01em]",
        "transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.a>
  );
}