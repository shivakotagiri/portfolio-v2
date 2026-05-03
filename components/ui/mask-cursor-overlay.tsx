/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useMotionValue, useSpring, animate } from "framer-motion";

export function MaskCursorOverlay() {
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(-9999);
  const rawY = useMotionValue(-9999);

  const x = useSpring(rawX, { damping: 28, stiffness: 220, mass: 0.4 });
  const y = useSpring(rawY, { damping: 28, stiffness: 220, mass: 0.4 });

  const diameter = useMotionValue(30);

  const divRef = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(() => {
    animate(diameter, 100, {
      type: "tween",
      ease: "backOut",
      duration: 0.45,
    });
  }, [diameter]);

  const onLeave = useCallback(() => {
    animate(diameter, 30, {
      type: "tween",
      ease: "backOut",
      duration: 0.45,
    });
  }, [diameter]);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const el = divRef.current;
      if (!el) return;

      const d = diameter.get();
      const cx = x.get() - d / 2;
      const cy = y.get() - d / 2;

      el.style.width = `${d}px`;
      el.style.height = `${d}px`;
      el.style.transform = `translate(${cx}px, ${cy}px)`;

      // 🔥 SMART BEHAVIOR SWITCH
      const target = document.elementFromPoint(x.get(), y.get());
      if (!target) return;

      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, [data-interactive], span, h1"
      );

      const isImage = target.closest("img, svg");

      if (isInteractive) {
        // ✅ ALWAYS blend for interactive (even if image inside)
        el.style.mixBlendMode = "difference";
        el.style.backgroundColor = "white";
      } else if (isImage) {
        // ✅ only pure image hover → soft cursor
        el.style.mixBlendMode = "normal";
        el.style.backgroundColor = "rgba(255,255,255,0.15)";
      } else {
        // default
        el.style.mixBlendMode = "difference";
        el.style.backgroundColor = "white";
      }
    };

    const unsubX = x.on("change", update);
    const unsubY = y.on("change", update);
    const unsubD = diameter.on("change", update);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const interactiveSelectors =
      "a, button, [role='button'], input, textarea, [data-interactive], span";

    const bound = new WeakSet<HTMLElement>();

    const bind = () => {
      document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((el) => {
        if (bound.has(el)) return;
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        bound.add(el);
      });
    };

    bind();

    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);

    return () => {
      unsubX();
      unsubY();
      unsubD();
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [rawX, rawY, x, y, diameter, onEnter, onLeave]);

  if (!mounted) return null;

  return (
    <div
      ref={divRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        backgroundColor: "white",
        mixBlendMode: "difference",
        width: 40,
        height: 40,
        transform: "translate(-9999px, -9999px)",
        transition: "background-color 0.2s, mix-blend-mode 0.2s",
      }}
    />
  );
}