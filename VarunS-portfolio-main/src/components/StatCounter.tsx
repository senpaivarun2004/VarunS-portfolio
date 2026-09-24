import React, { useEffect, useState, useRef } from "react";

interface Props {
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const StatCounter: React.FC<Props> = ({ end, suffix, label, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    let startTime: number | null = null;
    let pausedTime = 0;
    let lastActiveTime = performance.now();

    const animate = (timestamp: number) => {
      if (document.hidden) {
        pausedTime += performance.now() - lastActiveTime;
        lastActiveTime = performance.now();
        requestAnimationFrame(animate);
        return;
      }
      lastActiveTime = performance.now();
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime - pausedTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quad formula: f(t) = t * (2 - t)
      const easeProgress = percentage * (2 - percentage);
      const currentVal = easeProgress * end;

      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-4 border border-border bg-bg-surface rounded-lg select-none hover:border-border-hover transition-colors duration-200">
      <span className="font-mono text-xl sm:text-2xl font-bold text-accent-cyan tracking-tight">
        {formattedCount}
        <span className="text-xs ml-0.5 text-text-secondary">{suffix}</span>
      </span>
      <span className="text-[10px] uppercase tracking-wider text-text-muted mt-1 font-mono">
        {label}
      </span>
    </div>
  );
};
