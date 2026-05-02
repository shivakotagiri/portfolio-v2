"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface HoverUnderlineProps {
  text: string;
  className?: string;
}

export function HoverUnderline({ text, className }: HoverUnderlineProps) {
  const underlineVariants: Variants = {
    initial: { scaleX: 0 },
    hovered: { scaleX: 1 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
      className={cn(className)}
    >
      {text}

      <motion.span
        variants={underlineVariants}
        transition={{
          type: "spring",
          stiffness: 160, 
          damping: 15, 
          mass: 0.5,   
        }}
        className="
          absolute left-0 right-0 bottom-0 h-0.5
          bg-black dark:bg-white
          origin-left transition-all duration-400
        "
      />
    </motion.div>
  );
}