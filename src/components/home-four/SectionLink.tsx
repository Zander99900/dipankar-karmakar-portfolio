"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { handleSectionNavClick } from "@/utils/scrollToSection";

interface SectionLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-label"?: string;
  "data-text"?: string;
}

export default function SectionLink({
  href,
  className,
  children,
  onNavigate,
  ...rest
}: SectionLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (href.startsWith("#")) {
      handleSectionNavClick(event, href);
      onNavigate?.();
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
