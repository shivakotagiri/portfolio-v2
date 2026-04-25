import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard() {
    return (
        <Card className="w-full h-full">
            <CardContent className="grid grid-cols-2 w-full h-full gap-3">
                <div className="sm:col-span-1 col-span-2 flex flex-col gap-0">
                    <Image 
                        src={"/onstream.png"} 
                        width={100} 
                        height={100} 
                        alt={"Project onStream"} 
                        className="max-w-md w-full h-full border-b"
                    />
                    <div className="p-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-base font-semibold">onstream</h1>
                            <Button variant={"ghost"} size={"icon-sm"} className="cursor-pointer">
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:dark:text-white hover:text-black transition-all duration-300" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}