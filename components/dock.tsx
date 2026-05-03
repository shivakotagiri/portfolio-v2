"use client";

import { DockItem } from "./dock-item";
import { ThemeToggle } from "./theme-toggle";
import { items } from "@/lib/dock-list";
import { Separator } from "./ui/separator";
import { motion, Variants } from "framer-motion";

export function Dock() {
    const variants: Variants = {
        initial: {
            gap: "8px"
        },
        hovered: {
            gap: "12px",
        }
    }
    return (
        <motion.div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-4xl z-10 dark:bg-[#171717] bg-white border">
            <motion.div
                variants={variants} 
                initial={"initial"} 
                whileHover={"hovered"} 
                transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    mass: 0.8 
                    
                }} 
                className="flex items-center justify-center gap-2 p-1.5"
            >
                {items.map((item, idx) => (
                    (item.name !== "Separator" ? <DockItem key={idx} link={item?.link} Icon={item?.Icon} name={item.name} />: <div key={idx}>
                        <Separator className="h-9" orientation="vertical" />
                    </div>)
                ))}
                <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-full">
                    <ThemeToggle />
                </div>
            </motion.div>
        </motion.div>
    )
}

