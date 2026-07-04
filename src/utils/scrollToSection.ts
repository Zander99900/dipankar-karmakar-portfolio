import type { MouseEvent } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";

const HEADER_OFFSET = "top 90px";

export function scrollToSection(hash: string, smooth = true): void {
  if (typeof window === "undefined" || !hash.startsWith("#")) return;

  const target = document.querySelector(hash);
  if (!target) return;

  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(target, smooth, HEADER_OFFSET);
  } else {
    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }

  window.history.replaceState(null, "", hash);
}

export function handleSectionNavClick(event: MouseEvent<HTMLAnchorElement>, path: string): void {
  if (!path.startsWith("#")) return;

  event.preventDefault();
  scrollToSection(path);
}
