"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { ComponentType } from "react";
import { motion } from "framer-motion";

export function DockItem({ name, Icon, link }: {
    name: string,
    Icon?: ComponentType<{ className?: string }>,
    link?: string
}) {
    return (
        <motion.div className="flex gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link target={link !== "/" ? "_blank": "_self"} href={link || ""}>
                        <Button 
                            variant={"outline"} 
                            className="hover:dark:bg-[#262626] hover:text-primary rounded-full cursor-pointer border w-8 h-8 p-4" 
                        >
                            { Icon && <Icon className="w-4.5! h-4.5!"/>}
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}>
                  {name}
                </TooltipContent>
            </Tooltip>
        </motion.div>
    )
}