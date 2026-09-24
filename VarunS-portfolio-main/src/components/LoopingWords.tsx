"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "../lib/utils";

interface LoopingWordsProps {
  words: string[];
  className?: string;
}

export function LoopingWords({ words, className }: LoopingWordsProps) {
  const controls = useAnimationControls();
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [selectorWidth, setSelectorWidth] = useState(0);

  // Duplicate the words array to create a seamless infinite loop
  const duplicatedWords = [...words, ...words];
  const totalOriginal = words.length;

  useEffect(() => {
    // Initial width setup
    updateWidth(0);

    let index = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const startInterval = () => {
      if (intervalId) return;
      intervalId = setInterval(async () => {
        index++;
        updateWidth(index % totalOriginal);

        try {
          // Smooth cubic-bezier transition
          await controls.start({
            y: `-${(index * 100) / duplicatedWords.length}%`,
            transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] },
          });

          // If we've scrolled past the first full set, snap back to the start seamlessly
          if (index === totalOriginal) {
            index = 0;
            controls.set({ y: "0%" });
            updateWidth(0);
          }
        } catch (err) {
          // Ignore animation stop errors
        }
      }, 2200);
    };

    const stopInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      controls.stop();
    };

    // Start only if tab is active
    if (typeof document !== "undefined" && !document.hidden) {
      startInterval();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        // Reset layout instantly to the current index and restart
        controls.set({ y: `-${(index * 100) / duplicatedWords.length}%` });
        updateWidth(index % totalOriginal);
        startInterval();
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    return () => {
      stopInterval();
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
    };
  }, [controls, totalOriginal, duplicatedWords.length]);

  const updateWidth = (index: number) => {
    const el = wordsRef.current[index];
    if (el) {
      setSelectorWidth(el.offsetWidth);
    }
  };

  return (
    <div className={cn("flex items-center justify-center select-none w-full", className)}>
      {/* 
        Container with a strict line-height and height mapping.
        Using h-16 (mobile) and md:h-24 (desktop) to match heights precisely.
      */}
      <div className="relative h-16 md:h-24 w-full overflow-hidden font-bold uppercase tracking-tight text-[6vw] sm:text-[4vw] md:text-[3vw]">
        
        {/* List of words */}
        <motion.ul
          className="flex flex-col items-center m-0 p-0 list-none w-full"
          animate={controls}
          initial={{ y: "0%" }}
        >
          {duplicatedWords.map((word, i) => (
            <li
              key={i}
              className="text-white h-16 md:h-24 flex items-center justify-center shrink-0 m-0 p-0 w-full"
            >
              {/* ✅ Reference is set on the span to measure exact text width instead of parent full-width container */}
              <span
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                className="inline-block"
              >
                {word}
              </span>
            </li>
          ))}
        </motion.ul>
 
        {/* Soft Feather Gradients for faded top/bottom masking */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.8) 12%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.8) 88%, #000000 100%)",
          }}
        />
 
        {/* Selector Edge Boxes - height set to fit the text height perfectly */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[1.3em] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          animate={{ width: selectorWidth + 24 }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-cyan" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-cyan" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-cyan" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-cyan" />
        </motion.div>
      </div>
    </div>
  );
}

export default LoopingWords;
