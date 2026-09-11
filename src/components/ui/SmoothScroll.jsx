import { useEffect } from "react";

/**
 * Eased ("slow load-in") page scrolling: wheel input is damped and animated
 * toward the target position instead of jumping. Frontend-only, desktop-only,
 * and skipped for reduced-motion users or inner scroll containers.
 */
export default function SmoothScroll({ ease = 0.085, multiplier = 0.9 }) {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return undefined;

    let target = window.scrollY;
    let current = window.scrollY;
    let frame = 0;
    let animating = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const scrollableAncestor = (node) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const scrolls = /(auto|scroll|overlay)/.test(`${style.overflowY}`);
        if (scrolls && el.scrollHeight > el.clientHeight + 1) return el;
        el = el.parentElement;
      }
      return null;
    };

    const render = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        animating = false;
        window.scrollTo(0, current);
        return;
      }
      window.scrollTo(0, current);
      frame = requestAnimationFrame(render);
    };

    const onWheel = (event) => {
      if (event.ctrlKey || event.defaultPrevented) return;
      if (scrollableAncestor(event.target)) return;
      event.preventDefault();
      if (!animating) current = window.scrollY;
      target = Math.min(maxScroll(), Math.max(0, target + event.deltaY * multiplier));
      if (!animating) {
        animating = true;
        frame = requestAnimationFrame(render);
      }
    };

    const syncFromNative = () => {
      if (!animating) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", syncFromNative);
    window.addEventListener("keydown", syncFromNative);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", syncFromNative);
      window.removeEventListener("keydown", syncFromNative);
    };
  }, [ease, multiplier]);

  return null;
}
