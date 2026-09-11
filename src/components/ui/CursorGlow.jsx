import { useEffect, useRef, useState } from "react";

/**
 * Decorative round cursor light that follows the pointer with a soft glow.
 * Desktop / fine-pointer only and disabled for reduced-motion users.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return undefined;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glow = { ...target };
    let frame = 0;
    let visible = false;

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        visible = true;
        glow.x = target.x;
        glow.y = target.y;
        glowRef.current?.classList.add("cursor-glow-visible");
        dotRef.current?.classList.add("cursor-glow-visible");
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      const interactive = event.target instanceof Element && event.target.closest("a, button, [role='button'], input, textarea, select");
      glowRef.current?.classList.toggle("cursor-glow-active", !!interactive);
    };

    const onLeave = () => {
      glowRef.current?.classList.remove("cursor-glow-visible");
      dotRef.current?.classList.remove("cursor-glow-visible");
      visible = false;
    };

    const render = () => {
      glow.x += (target.x - glow.x) * 0.12;
      glow.y += (target.y - glow.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
