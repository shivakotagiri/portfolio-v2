import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";

export function ListItem() {
    return (
        <Link href={"https://cmrithyderabad.edu.in/"} target="_blank" className="flex w-full justify-between items-center">
            <div className="flex gap-3 items-center justify-center">  
                <div className="relative inline-block scale-120">
                    <Avatar>
                        <AvatarImage 
                            src={"/cmrit.png"}
                            className="object-center object-cover rounded-full p-1"
                            alt="CMR Institute of Technology"
                            width={100}
                            height={100}
                        />
                        <AvatarFallback>
                            CM
                        </AvatarFallback>
                    </Avatar>
                    <span className="inset-0 absolute block h-full w-full ring-1 rounded-full ring-neutral-300 dark:ring-neutral-600" />
                </div>
                <div className="leading-none">
                    <h1 className="sm:text-base text-xs font-semibold">
                        CMR Institute of Technology
                    </h1>
                    <span className="text-muted-foreground sm:text-sm text-[9px]">
                        Bachelor&apos;s of Technology
                    </span>
                </div>
            </div>
            <span className="sm:text-sm text-xs text-muted-foreground">2022 - 2026</span>
        </Link>
    )
}