import { Outlet, useLocation } from "@/lib/router-compat";
import { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

/**
 * Auto-reveal: staggers the entrance of the top-level blocks of whichever page
 * is rendered, and reveals lower blocks as they scroll into view.
 */
function useAutoReveal(key) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer;
    if (!reducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
      );
    }

    const scan = () => {
      const blocks = scope.firstElementChild
        ? Array.from(scope.firstElementChild.children)
        : [];
      blocks.forEach((block, index) => {
        if (!(block instanceof HTMLElement) || block.dataset.reveal === "done") return;
        block.dataset.reveal = "done";
        block.classList.add("reveal");
        block.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 70}ms`);
        if (reducedMotion) block.classList.add("reveal-visible");
        else observer?.observe(block);
      });
    };

    scan();
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(scope, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, [key]);

  return scopeRef;
}

export default function AppLayout() {
  const { pathname } = useLocation();
  const scopeRef = useAutoReveal(pathname);

  return (
    <div className="aether-shell min-h-screen">
      <Sidebar />
      <main className="ml-[240px] min-h-screen flex flex-col p-4 sm:p-5 lg:p-6">
        <div
          key={pathname}
          ref={scopeRef}
          className="page-enter flex-1 bg-white/70 backdrop-blur-sm border border-purple-100/50 rounded-2xl shadow-[0_18px_50px_-32px_rgba(88,28,135,0.35)] p-4 sm:p-6 lg:p-8"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
