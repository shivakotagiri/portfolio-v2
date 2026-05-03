"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface HoverUnderlineProps {
  text: string;
  className?: string;
  delay?: number;
}

export function HoverUnderline({ text, className, delay = 0 }: HoverUnderlineProps) {
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
      <motion.span 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay
        }}
      >
        {text}
      </motion.span>

      <motion.span
        variants={underlineVariants}
        transition={{
          type: "spring",
          stiffness: 160, 
          damping: 15, 
          mass: 0.5,   
        }}
        className="
          absolute left-0 right-0 bottom-3 h-1
          bg-black dark:bg-white
          origin-left
        "
      />
    </motion.div>
  );
}