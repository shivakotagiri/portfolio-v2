"use client";

import { File, Home, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import { DockItem } from "./dock-item";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeToggle } from "./theme-toggle";

export function Dock() {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-4xl z-10 dark:bg-[#171717] bg-white border">
            <div className="flex gap-2 p-2 items-center justify-center">
                <DockItem name="Home" Icon={Home} link="/" />
                <DockItem name="Resume" Icon={File} link="/resume.pdf" />
                <div className="flex items-center">
                    <Separator orientation="vertical" className="h-7" />
                </div>
                <DockItem name="Github" Icon={IoLogoGithub} link="https://github.com/shivaKotagiri" />
                <DockItem name="LinkedIn" Icon={FaLinkedin} link="https://www.linkedin.com/in/kotagiri-shiva-670330288/" />
                <DockItem name="X" Icon={FaXTwitter} link="https://x.com/ShivaKumar403" />
                <DockItem name="Contact" Icon={Mail} link="mailto:shivakotagiri532@gmail.com" />
                <div className="flex items-center">
                    <Separator orientation="vertical" className="h-7" />
                </div>
                <div className="w-10 h-10 p-1 border rounded-full flex justify-center items-center">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

