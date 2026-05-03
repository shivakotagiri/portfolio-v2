"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'motion/react';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export interface HoverAnimatedTextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  text: string;
  staggerDuration?: number;
  animationDuration?: number;
  mainClassName?: string;
  wordClassName?: string;
  charClassName?: string;
}

const HoverAnimatedText: React.FC<HoverAnimatedTextProps> = ({
  text,
  staggerDuration = 0.035,
  animationDuration = 0.25,
  mainClassName,
  wordClassName,
  charClassName,
  ...rest
}) => {
  const [playing, setPlaying] = useState<'idle' | 'exit' | 'reset' | 'enter'>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const words = text.split(' ');
  const totalChars = words.reduce((sum, w) => sum + w.length, 0);
  const exitDuration = (totalChars - 1) * staggerDuration + animationDuration;

  const handleMouseEnter = () => {
    if (playing !== 'idle') return;
    setPlaying('exit');
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (playing === 'exit') {
      timeoutRef.current = setTimeout(() => {
        setPlaying('reset');
      }, exitDuration * 1000);
    }

    if (playing === 'reset') {
      timeoutRef.current = setTimeout(() => {
        setPlaying('enter');
      }, 32);
    }

    if (playing === 'enter') {
      timeoutRef.current = setTimeout(() => {
        setPlaying('idle');
      }, exitDuration * 1000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [exitDuration, playing]);

  let charCounter = 0;

  const getVariants = (delay: number): Variants => ({
    idle: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0 },
    },
    exit: {
      y: '-120%',
      opacity: 0,
      transition: {
        duration: animationDuration,
        delay,
        ease: [0.55, 0, 1, 0.45] as [number, number, number, number],
      },
    },
    reset: {
      y: '120%',
      opacity: 0,
      transition: { duration: 0 },
    },
    enter: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: animationDuration,
        delay,
        ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
      },
    },
  });

  return (
    <span
      className={cn('inline-flex flex-wrap cursor-pointer text-white dark:text-black', mainClassName)}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, wi) => (
        <span
          key={wi}
          className={cn('inline-flex', wordClassName)}
          aria-hidden
          style={{ overflow: 'hidden' }}
        >
          {word.split('').map((char) => {
            const index = charCounter++;
            const delay = index * staggerDuration;
            return (
              <span key={index} style={{ display: 'inline-block', overflow: 'hidden' }}>
                <motion.span
                  className={cn('inline-block', charClassName)}
                  variants={getVariants(delay)}
                  animate={playing}
                  initial="idle"
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
          {wi < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.35em' }}> </span>
          )}
        </span>
      ))}
    </span>
  );
};

export default HoverAnimatedText;