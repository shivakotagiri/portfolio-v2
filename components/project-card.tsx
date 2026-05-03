"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

export function ProjectCard() {
    const techStacks = ["Next.js", "Tailwindcss", "Typescript", "Shadcn UI", "Better-Auth", "Livekit", "Drizzle", "PostgreSQL", "Razorpay"]
    const { theme } = useTheme();
    return (
        <Card className="h-full bg-background w-full p-0">
            <CardContent className="w-full h-full p-0">
                <div className="flex flex-col gap-0">
                    <Image 
                        src={theme === "light" ? "/onstream-light.png" : "/onstream.png"} 
                        width={100} 
                        height={100} 
                        alt={"Project onStream"} 
                        className="w-full h-full border-b"
                        quality={100}
                    />
                    <div className="p-5 leading-tight">
                        <div className="flex justify-between items-center">
                            <span className="text-base font-semibold block">onstream</span>
                            <Button variant={"ghost"} size={"icon-sm"} className="cursor-pointer">
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:dark:text-white hover:text-black transition-all duration-300" />
                            </Button>
                        </div>
                        <div className="text-muted-foreground text-xs flex flex-col gap-3 leading-relaxed">
                            <span className="">Jan 2026 - present</span>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloribus perferendis asperiores reiciendis aperiam beatae aut voluptatum sed ipsam accusantium placeat?.</p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                            {techStacks.map((tech, idx) => (
                                <div className="p-2 text-[11px] font-semibold bg-background border rounded-lg" key={idx}>
                                    { tech }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}