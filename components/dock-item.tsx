"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { ComponentType } from "react";

export function DockItem({ name, Icon, link }: {
    name: string,
    Icon: ComponentType<{ className?: string }>,
    link: string
}) {
    return (
        <div className="flex gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link target={link !== "/" ? "_blank": "_self"} href={link}>
                        <Button 
                            variant={"outline"} 
                            className="hover:dark:bg-[#262626] text-muted-foreground hover:text-primary rounded-full cursor-pointer border hover:scale-150 w-10 h-10 transition-transform duration-300 ease-in-out hover:-translate-y-3.5" 
                        >
                            <Icon className="w-5! h-5!"/>
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={25}>
                  {name}
                </TooltipContent>
            </Tooltip>
        </div>
    )
}