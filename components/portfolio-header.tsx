"use client";

import Image from "next/image";
import { SplitTextAnimation } from "./ui/split-text-animation";
import Link from "next/link";
import { Mail } from "lucide-react";

export function PortfolioHeader() {

  return (
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-0 leading-none">
          <div>
            <span className="sm:text-[4rem] text-[1.75rem] text-balance font-extrabold block tracking-tighter sm:max-w-md max-w-50">
              Hi, I&apos;m Shiva
            </span>
          </div>
          <SplitTextAnimation 
            delay={0.25} 
            className={"mt-2 leading-7 text-justify max-w-50 sm:max-w-md text-muted-foreground text-sm sm:text-xl"} 
            sentence={"Building web applications, active on Twitter. Learning in public."} 
          />
          <Link 
            className="flex items-center gap-2 hover:underline underline-offset-2 mt-3 p-0"                  
            href="mailto:shivakumarkotagiriofficial@gmail.com">
            <Mail className="w-4! h-4!" /> 
            <span className="text-[10px] sm:text-base">shivakumarkotagiriofficial@gmail.com</span>
          </Link>
        </div>
        <Image 
          src={"/me.jpg"} 
          alt="My Photo" 
          height={100} 
          width={100} 
          className="object-cover object-top rounded-full h-32 w-32 sm:h-36 sm:w-36"
        />
      </div>
  )
}