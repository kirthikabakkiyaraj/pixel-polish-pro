import { useEffect, useRef } from "react";

export function useScrollReveal({ selector = ".scroll-reveal", root = null } = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer;
    const reveal = (element) => {
      if (!(element instanceof HTMLElement)) return;
      element.classList.add("scroll-reveal");
      if (reducedMotion) {
        element.classList.add("scroll-reveal-visible");
      } else {
        observer?.observe(element);
      }
    };

    if (!reducedMotion) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer?.unobserve(entry.target);
          }
        });
      }, { root, rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }

    const scan = () => {
      scope.querySelectorAll(selector).forEach(reveal);
    };
    scan();
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(scope, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, [root, selector]);

  return scopeRef;
}
