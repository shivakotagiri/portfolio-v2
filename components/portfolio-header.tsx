"use client";

import Image from "next/image";
import { SplitTextAnimation } from "./ui/split-text-animation";

export function PortfolioHeader() {

  return (
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-0 leading-none">
          <div>
            <span className="sm:text-[4rem] text-[1.75rem] text-balance font-black block tracking-tighter sm:max-w-md max-w-50">
              Hi, I&apos; am Shiva Kumar Kotagiri
            </span>
          </div>
          <SplitTextAnimation 
            delay={0.25} 
            className={"mt-2 text-base leading-7 text-justify max-w-60 sm:max-w-md text-muted-foreground sm:text-xl"} 
            sentence={"Building web applications, active on Twitter. Learning in public"} 
          />
        </div>
        <Image 
          src={"/me.jpg"} 
          alt="My Photo" 
          height={100} 
          width={100} 
          className="object-cover object-top rounded-full h-36 w-36"
        />
      </div>
  )
}