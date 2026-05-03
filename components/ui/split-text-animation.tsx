"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface SplitTextAnimationProps {
    className?: string,
    sentence: string,
    delay?: number | 0
}

export function SplitTextAnimation({ className, sentence, delay }: SplitTextAnimationProps) {
    const variants: Variants = {
        initial: {
            y: 10,
            opacity: 0
        },
        inView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    }
    const words = sentence.split(" ");
    return (
        <motion.div 
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.1, delay }} 
            className={cn("flex flex-wrap", className)}
        >
            {words.map((word, idx) => (
                <span key={idx} className="overflow-hidden">
                    <motion.span 
                        variants={variants} 
                        whileHover={{
                            color: "var(--hover-color)",
                            y: -2
                        }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300
                        }}
                        className="
                            inline-block 
                            text-muted-foreground 
                            dark:[--hover-color:white]
                            [--hover-color:black]
                            cursor-pointer
                        "
                    >
                        { word }
                    </motion.span>
                    <span>&nbsp;</span>
                </span>
            ))}
        </motion.div>
    )
}