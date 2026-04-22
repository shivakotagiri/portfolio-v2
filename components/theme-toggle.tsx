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
            className="cursor-pointer"
        >
            <Icon />
        </Button>
    )
}