"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard() {
    const techStacks = ["Next.js", "Tailwindcss", "Typescript", "Shadcn UI", "Better-Auth", "Livekit", "Drizzle", "PostgreSQL", "Razorpay"]
    return (
        <Card className="w-full h-full p-0 bg-background">
            <CardContent className="w-full h-full p-0">
                <div className="flex flex-col gap-0">
                    <div className="p-5 leading-tight">
                        <div className="flex items-center justify-between">
                            <span className="block text-base font-semibold">onstream</span>
                            <Button variant={"ghost"} size={"icon-sm"} className="cursor-pointer">
                                <ArrowUpRight className="w-5 h-5 transition-all duration-300 text-muted-foreground hover:dark:text-white hover:text-black" />
                            </Button>
                        </div>
                        <div className="flex flex-col gap-3 text-xs leading-relaxed text-muted-foreground">
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