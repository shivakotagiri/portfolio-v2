"use client";

import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import { motion } from "framer-motion"

interface ListItemProps {
    delay?: number;
}

export function ListItem({ }: ListItemProps) {
    return (
        <Link href={"https://cmrithyderabad.edu.in/"} target="_blank">
            <motion.div
                className="flex items-center justify-between w-full"
            >
                <div className="flex items-center gap-3">  
                    <div className="relative inline-block scale-120">
                        <Avatar>
                            <AvatarImage 
                                src={"/cmrit.png"}
                                className="object-cover object-center p-1 rounded-full"
                                alt="CMR Institute of Technology"
                                width={100}
                                height={100}
                            />
                            <AvatarFallback>
                                CM
                            </AvatarFallback>
                        </Avatar>
                        <span className="absolute inset-0 block w-full h-full rounded-full ring-1 ring-neutral-300 dark:ring-neutral-600" />
                    </div>
                    <div className="leading-none">
                        <span className="block text-xs font-semibold sm:text-base">
                            CMR Institute of Technology
                        </span>
                        <span className="text-muted-foreground sm:text-sm text-[9px]">
                            Bachelor&apos;s of Technology
                        </span>
                    </div>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">2022 - 2026</span>
            </motion.div>
        </Link>
    )
}