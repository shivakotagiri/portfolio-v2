"use client";

import Lenis from "lenis";
import { useEffect } from "react";

interface SmoothScrollProviderProps {
    children: React.ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    useEffect(() => {
        const lenis = new Lenis();

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        }
        
    }, [])
    return (
        <>
            { children }
        </>
    )
}