"use client";

import { DockItem } from "./dock-item";
import { ThemeToggle } from "./theme-toggle";
import { items } from "@/lib/dock-list";

export function Dock() {
    
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-4xl z-10 dark:bg-[#171717] bg-white border">
            <div className="flex items-center justify-center gap-2 p-2">
                {items.map((item, idx) => (
                    <DockItem key={idx} link={item.link} Icon={item.Icon} name={item.name} />
                ))}
                <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-full">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

