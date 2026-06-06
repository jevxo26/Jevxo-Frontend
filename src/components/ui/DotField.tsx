"use client";

import { useEffect, useRef, memo } from "react";

const TWO_PI = Math.PI * 2;

interface Dot {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  [key: string]: unknown;
}

const DotField = memo(
  ({
    dotRadius = 1.5,
    dotSpacing = 28,
    cursorRadius = 520,
    cursorForce = 0.12,
    bulgeOnly = true,
    bulgeStrength = 72,
    glowRadius = 180,
    sparkle = true,
    waveAmplitude = 0,
    gradientFrom = "#1e40af",
    gradientTo = "#22d3ee",
    glowColor = "#1e3a8a",
    ...rest
  }: DotFieldProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const glowRef = useRef<SVGCircleElement>(null);
    const dotsRef = useRef<Dot[]>([]);
    const mouseRef = useRef({
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
    });
    const rafRef = useRef<number | null>(null);
    const sizeRef = useRef({ w: 0, h: 0 });

    const propsRef = useRef({
      ...rest,
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
    });

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let resizeTimer: NodeJS.Timeout;

      const resize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const w = window.innerWidth;
          const h = window.innerHeight;

          canvas.width = w * dpr;
          canvas.height = h * dpr;
          canvas.style.width = `${w}px`;
          canvas.style.height = `${h}px`;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

          sizeRef.current = { w, h };
          buildDots(w, h);
        }, 80);
      };

      const buildDots = (w: number, h: number) => {
        const p = propsRef.current;
        const step = (p.dotRadius as number) + (p.dotSpacing as number);
        const cols = Math.floor(w / step) + 2;
        const rows = Math.floor(h / step) + 2;
        const padX = (w % step) / 2;
        const padY = (h % step) / 2;

        const dots: Dot[] = [];
        for (let row = -1; row < rows; row++) {
          for (let col = -1; col < cols; col++) {
            const ax = padX + col * step;
            const ay = padY + row * step;
            dots.push({ ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay });
          }
        }
        dotsRef.current = dots;
      };

      const onMouseMove = (e: MouseEvent) => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      };

      const updateMouseSpeed = () => {
        const m = mouseRef.current;
        const dx = m.prevX - m.x;
        const dy = m.prevY - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        m.speed = Math.max(0, dist * 0.6);
        m.prevX = m.x;
        m.prevY = m.y;
      };

      const speedInterval = setInterval(updateMouseSpeed, 16);

      let frameCount = 0;

      const tick = () => {
        frameCount++;
        const dots = dotsRef.current;
        const m = mouseRef.current;
        const { w, h } = sizeRef.current;
        const p = propsRef.current;
        const len = dots.length;
        const t = frameCount * 0.018;

        ctx.clearRect(0, 0, w, h);

        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, p.gradientFrom as string);
        grad.addColorStop(1, p.gradientTo as string);
        ctx.fillStyle = grad;

        const cr = p.cursorRadius as number;
        const crSq = cr * cr;
        const rad = (p.dotRadius as number) / 2;

        ctx.beginPath();

        for (let i = 0; i < len; i++) {
          const d = dots[i];
          const dx = m.x - d.ax;
          const dy = m.y - d.ay;
          const distSq = dx * dx + dy * dy;

          let drawX = d.sx;
          let drawY = d.sy;

          if (distSq < crSq) {
            const dist = Math.sqrt(distSq);
            const t = 1 - dist / cr;
            const push = t * t * (p.bulgeStrength as number) * 0.9;
            const angle = Math.atan2(dy, dx);

            d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.18;
            d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.18;
          } else {
            d.sx += (d.ax - d.sx) * 0.12;
            d.sy += (d.ay - d.sy) * 0.12;
          }

          if ((p.waveAmplitude as number) > 0) {
            drawY += Math.sin(d.ax * 0.028 + t) * (p.waveAmplitude as number);
            drawX +=
              Math.cos(d.ay * 0.028 + t * 0.6) *
              (p.waveAmplitude as number) *
              0.5;
          }

          if (p.sparkle) {
            const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
            const r = hash % 120 < 4 ? rad * 1.75 : rad;
            ctx.moveTo(drawX + r, drawY);
            ctx.arc(drawX, drawY, r, 0, TWO_PI);
          } else {
            ctx.moveTo(drawX + rad, drawY);
            ctx.arc(drawX, drawY, rad, 0, TWO_PI);
          }
        }

        ctx.fill();

        // Update Glow
        if (glowRef.current) {
          glowRef.current.setAttribute("cx", String(m.x));
          glowRef.current.setAttribute("cy", String(m.y));
          glowRef.current.style.opacity = String(
            Math.min(0.65, mouseRef.current.speed / 8),
          );
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      rafRef.current = requestAnimationFrame(tick);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        clearInterval(speedInterval);
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

    return (
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        {...rest}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <radialGradient id="dot-glow">
              <stop offset="0%" stopColor={glowColor} stopOpacity="0.45" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle
            ref={glowRef}
            cx="-9999"
            cy="-9999"
            r={glowRadius}
            fill="url(#dot-glow)"
          />
        </svg>
      </div>
    );
  },
);

DotField.displayName = "DotField";

export default DotField;
