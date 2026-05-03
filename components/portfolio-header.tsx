"use client";

import Image from "next/image";
import { SplitTextAnimation } from "./ui/split-text-animation";

export function PortfolioHeader() {
  const sentence = "Building web applications, active on Twitter. Learning in public";
  const className = "mt-2 text-base leading-7 text-justify max-w-60 sm:max-w-md text-muted-foreground sm:text-xl";
  return (
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-0 leading-none">
          <div>
            <span className="sm:text-[3.25rem] text-[1.5rem] font-black block tracking-tighter">
              Hi, I&apos;m Shiva Kumar
            </span>
          </div>
          <SplitTextAnimation delay={0.25} className={className} sentence={sentence} />
        </div>
        <Image 
          src={"/my-photo.jpeg"} 
          alt="My Photo" 
          height={100} 
          width={100} 
          className="object-cover object-top w-32 h-32 rounded-full"
        />
      </div>
  )
}