/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { LucideIcon, Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { RxSun } from "react-icons/rx";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null; 

    const Icon: LucideIcon | IconType = theme === "light" ? RxSun: MoonStar;
    
    return (
        <Button 
            onClick={() => setTheme(theme === "light" ? "dark": "light")} 
            variant={"ghost"} 
            size={"icon"}
            className="hover:dark:bg-[#262626] hover:text-primary rounded-full cursor-pointer border w-10 h-10 transition-transform duration-350 ease-in-out bg-background"
        >
            <Icon className="w-5! h-5!" />
        </Button>
    )
}