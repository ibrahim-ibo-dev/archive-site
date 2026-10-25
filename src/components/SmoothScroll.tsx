"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    const stop = () => { cancelAnimationFrame(frame); lenis?.destroy(); lenis = undefined; };
    const update = () => {
      stop();
      if (preference.matches) return;
      lenis = new Lenis({ lerp: 0.07, wheelMultiplier: 1, anchors: true });
      const raf = (time: number) => { lenis?.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
    };
    update();
    preference.addEventListener("change", update);
    return () => { stop(); preference.removeEventListener("change", update); };
  }, []);
  return <>{children}</>;
}
