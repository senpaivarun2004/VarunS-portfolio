"use client";

import React, { useEffect, useRef, useState } from "react";

export interface InteractiveGridBackgroundProps
  extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  effectColor?: string;
  darkEffectColor?: string;
  trailLength?: number;
  width?: number;
  height?: number;
  idleSpeed?: number;
  glow?: boolean;
  glowRadius?: number;
  children?: React.ReactNode;
  showFade?: boolean;
  fadeIntensity?: number;
  idleRandomCount?: number;
}

export const InteractiveGridBackground: React.FC<InteractiveGridBackgroundProps> = ({
  gridSize = 40,
  gridColor = "#111111",
  darkGridColor = "#111111",
  effectColor = "rgba(0, 216, 255, 0.08)",
  darkEffectColor = "rgba(0, 216, 255, 0.12)",
  trailLength = 4,
  width,
  height,
  idleSpeed = 0.08,
  glow = true,
  glowRadius = 15,
  children,
  showFade = true,
  fadeIntensity = 30,
  idleRandomCount = 4,
  className = "",
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const idleTargetsRef = useRef<{ x: number; y: number }[]>([]);
  const idlePositionsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseActiveRef = useRef(false);
  const lastMouseTimeRef = useRef(Date.now());

  // Detect dark mode (defaulting to true for pitch black theme)
  useEffect(() => {
    const updateDarkMode = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDark || true);
    };
    updateDarkMode();
    const observer = new MutationObserver(() => updateDarkMode());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Mouse tracking
  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const rawX = e.clientX - rect.left;
        const rawY = e.clientY - rect.top;

        if (rawX < 0 || rawY < 0 || rawX > rect.width || rawY > rect.height)
          return;

        mouseActiveRef.current = true;
        lastMouseTimeRef.current = Date.now();

        const snappedX = Math.floor(rawX / gridSize);
        const snappedY = Math.floor(rawY / gridSize);

        const last = trailRef.current[0];
        if (!last || last.x !== snappedX || last.y !== snappedY) {
          trailRef.current.unshift({ x: snappedX, y: snappedY });
          if (trailRef.current.length > trailLength) trailRef.current.pop();
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [gridSize, trailLength]);

  // Drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let canvasWidth = width || containerRef.current?.getBoundingClientRect().width || window.innerWidth;
    let canvasHeight = height || containerRef.current?.getBoundingClientRect().height || window.innerHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let cols = Math.floor(canvasWidth / gridSize);
    let rows = Math.floor(canvasHeight / gridSize);

    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvasWidth = width || rect.width;
      canvasHeight = height || rect.height;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      cols = Math.floor(canvasWidth / gridSize);
      rows = Math.floor(canvasHeight / gridSize);
    };

    window.addEventListener("resize", handleResize);

    const lineColor = isDarkMode ? darkGridColor : gridColor;
    const glowColor = isDarkMode ? darkEffectColor : effectColor;

    // Initialize idle positions if not already initialized
    if (idleTargetsRef.current.length === 0) {
      idleTargetsRef.current = Array.from({ length: idleRandomCount }, () => ({
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows),
      }));
      idlePositionsRef.current = idleTargetsRef.current.map((p) => ({ ...p }));
    }

    let animationFrameId: number | null = null;
    let isInView = true;
    let isTabActive = !document.hidden;

    const draw = () => {
      if (!isInView || !isTabActive) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }
      for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }

      // Idle animation logic
      const idleThreshold = 2000;
      if (Date.now() - lastMouseTimeRef.current > idleThreshold) {
        mouseActiveRef.current = false;

        idlePositionsRef.current.forEach((pos, i) => {
          const target = idleTargetsRef.current[i];
          if (!target) return;
          const dx = target.x - pos.x;
          const dy = target.y - pos.y;

          if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
            idleTargetsRef.current[i] = {
              x: Math.floor(Math.random() * cols),
              y: Math.floor(Math.random() * rows),
            };
          } else {
            pos.x += dx * idleSpeed;
            pos.y += dy * idleSpeed;
          }

          const roundedX = Math.round(pos.x);
          const roundedY = Math.round(pos.y);
          const last = trailRef.current[0];
          if (!last || last.x !== roundedX || last.y !== roundedY) {
            trailRef.current.unshift({ x: roundedX, y: roundedY });
            if (trailRef.current.length > trailLength * idleRandomCount)
              trailRef.current.pop();
          }
        });
      }

      // Draw trail glow
      trailRef.current.forEach((cell, idx) => {
        const alpha = 1 - idx * (1 / (trailLength + 1));
        const rgbaColor = glowColor.replace(/[\d.]+\)$/g, `${alpha})`);

        ctx.fillStyle = rgbaColor;
        if (glow) {
          ctx.shadowColor = rgbaColor;
          ctx.shadowBlur = glowRadius;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const stopLoop = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isInView) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;
      if (isInView && isTabActive) {
        startLoop();
      } else {
        stopLoop();
      }
    }, { threshold: 0 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (isInView && isTabActive) {
      startLoop();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
      stopLoop();
    };
  }, [
    gridSize,
    width,
    height,
    gridColor,
    darkGridColor,
    effectColor,
    darkEffectColor,
    isDarkMode,
    trailLength,
    idleSpeed,
    glow,
    glowRadius,
    idleRandomCount,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 bg-transparent z-1"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default InteractiveGridBackground;
