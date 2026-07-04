"use client";

import { useEffect } from "react";
import AOS from "aos";
import { scrollToSection } from "@/utils/scrollToSection";

export default function PortfolioAnimationFix() {
  useEffect(() => {
    const revealAosElements = () => {
      document.querySelectorAll(".portfolio-dark [data-aos]").forEach((element) => {
        element.classList.add("aos-animate");
      });
      AOS.refreshHard();
    };

    revealAosElements();
    const t1 = window.setTimeout(revealAosElements, 400);
    const t2 = window.setTimeout(revealAosElements, 1200);

    window.addEventListener("load", revealAosElements);
    window.addEventListener("resize", revealAosElements);

    const hash = window.location.hash;
    const hashTimer = hash
      ? window.setTimeout(() => scrollToSection(hash, false), 900)
      : undefined;

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (hashTimer) window.clearTimeout(hashTimer);
      window.removeEventListener("load", revealAosElements);
      window.removeEventListener("resize", revealAosElements);
    };
  }, []);

  return null;
}
