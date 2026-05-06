"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

interface ProjectCardProps {
    project: {
        title: string,
        description: string,
        techStacks: string[],
        website: string,
        sourceCode: string,
        timeline: string
    }
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="w-full h-full p-0 bg-background">
            <CardContent className="w-full h-full p-0">
                <div className="flex flex-col gap-0">
                    <div className="p-5 leading-tight">
                        <div className="flex items-center justify-between">
                            <span className="block text-base font-semibold">{ project.title }</span>
                            <Button variant={"ghost"} size={"icon-sm"} className="cursor-pointer">
                                <ArrowUpRight className="w-5 h-5 transition-all duration-300 text-muted-foreground hover:dark:text-white hover:text-black" />
                            </Button>
                        </div>
                        <div className="flex flex-col gap-3 text-xs leading-relaxed text-muted-foreground">
                            <span className="">{ project.timeline }</span>
                            <p className="">{ project.description }</p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                            {project.techStacks.map((tech, idx) => (
                                <div className="p-2 text-[11px] font-semibold bg-background border rounded-lg" key={idx}>
                                    { tech }
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-3">
                            <Link target="_blank" href={project.sourceCode} className="px-2 py-1 bg-accent-foreground text-accent rounded-sm flex gap-1 justify-center items-center cursor-pointer">
                                <IoLogoGithub />
                                <span className="text-[10px] font-semibold">Source</span>
                            </Link>
                            <Link target="_blank" href={project.website} className="px-2 py-1 bg-accent-foreground text-accent rounded-sm flex gap-1 justify-center items-center cursor-pointer">
                                <BiWorld />
                                <span className="text-[10px] font-semibold">Website</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}