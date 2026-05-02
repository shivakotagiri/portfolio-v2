"use client";

import Image from "next/image";
import { HoverUnderline } from "./ui/hover-underline";
import { HoverTextHighlight } from "./ui/hover-text-highlight";

export function PortfolioHeader() {
  return (
      <div className="flex md:flex-row flex-col-reverse justify-between items-start w-full gap-5">
        <div className="flex-1">
          <div>
            <HoverUnderline text="Hi, I&apos;m Shiva" className="sm:text-[3rem] text-[2rem] font-bold tracking-tighter" />
          </div>
          <HoverTextHighlight 
            sentence="Software Developer. I love building things and helping people. Very active on Twitter. Learning in public, and growing through consistent practice."
            className="text-muted-foreground sm:text-xl text-base text-justify mt-2 leading-5" 
          />
        </div>
        <Image 
          src={"/my-photo.jpeg"} 
          alt="My Photo" 
          height={100} 
          width={100} 
          className="rounded-full object-cover object-top sm:w-32 sm:h-32 w-28 h-28"
        />

      </div>
  )
}