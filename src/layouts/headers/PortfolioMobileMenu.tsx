"use client";

import portfolio_menu_data from "@/data/portfolio-menu-data";
import SectionLink from "@/components/home-four/SectionLink";
import PortfolioLogo from "@/components/home-four/PortfolioLogo";

interface PortfolioMobileMenuProps {
  setIsOpen?: (open: boolean) => void;
  isOpen?: boolean;
}

export default function PortfolioMobileMenu({ setIsOpen, isOpen }: PortfolioMobileMenuProps) {
  return (
    <div
      className={`azzle-menu-wrapper portfolio-mobile-menu ${isOpen ? "azzle-body-visible" : ""}`}
      onClick={() => setIsOpen && setIsOpen(false)}
    >
      <div className="azzle-menu-area portfolio-mobile-menu-area" onClick={(e) => e.stopPropagation()}>
        <div className="azzle-menu-mobile-top">
          <div className="mobile-logo">
            <SectionLink href="#home" className="portfolio-logo-link" onNavigate={() => setIsOpen && setIsOpen(false)}>
              <PortfolioLogo className="is-mobile" />
            </SectionLink>
          </div>
          <button
            className="azzle-menu-toggle mobile portfolio-mobile-menu-close"
            onClick={() => setIsOpen && setIsOpen(false)}
            aria-label="Close mobile menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="azzle-mobile-menu">
          <ul>
            {portfolio_menu_data.map((item) => (
              <li key={item.title}>
                {item.download ? (
                  <a
                    href={item.path}
                    download="Dipankar_Karmakar_Resume.pdf"
                    onClick={() => setIsOpen && setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <SectionLink href={item.path} onNavigate={() => setIsOpen && setIsOpen(false)}>
                    {item.title}
                  </SectionLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
