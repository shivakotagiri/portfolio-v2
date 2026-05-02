"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HoverTextHighlightProps {
  sentence: string;
  className?: string;
}

export function HoverTextHighlight({
  sentence,
  className,
}: HoverTextHighlightProps) {
  const words = sentence.split(" ");

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ color: "inherit" }}
          whileHover={{
            color: "var(--hover-color)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="
            text-muted-foreground
            dark:[--hover-color:white]
            [--hover-color:black]
            transition-all duration-150
            cursor-pointer ease-in
          "
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}