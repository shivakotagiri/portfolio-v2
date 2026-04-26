/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { LucideIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null; 

    const Icon: LucideIcon = theme === "light" ? Moon: Sun;
    
    return (
        <Button 
            onClick={() => setTheme(theme === "light" ? "dark": "light")} 
            variant={"ghost"} 
            size={"icon"}
            className="hover:dark:bg-[#262626] text-muted-foreground hover:text-primary rounded-full cursor-pointer border hover:scale-150 w-10 h-10 transition-transform duration-350 ease-in-out hover:-translate-y-3.5 bg-background"
        >
            <Sun className="w-5! h-5!" />
        </Button>
    )
}