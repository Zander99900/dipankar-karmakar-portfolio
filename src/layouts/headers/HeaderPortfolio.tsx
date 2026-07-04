"use client";

import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import portfolio_menu_data from "@/data/portfolio-menu-data";
import { profile } from "@/data/profile";
import SectionLink from "@/components/home-four/SectionLink";
import PortfolioLogo from "@/components/home-four/PortfolioLogo";
import PortfolioMobileMenu from "./PortfolioMobileMenu";

export default function HeaderPortfolio() {
  const { hidden, sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`site-header azzle-header-section section4 portfolio-header ${sticky ? "sticky-menu is-sticky" : ""} ${hidden ? "hide-header" : ""}`}
        id="sticky-menu"
      >
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between flex-nowrap">
            <div className="col">
              <div className="header-logo portfolio-header-brand">
                <SectionLink href="#home" className="portfolio-logo-link" aria-label={`${profile.name} home`}>
                  <PortfolioLogo />
                </SectionLink>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <div className="azzle-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left" aria-label="Primary navigation">
                  <ul>
                    {portfolio_menu_data.map((item) => (
                      <li key={item.title}>
                        {item.download ? (
                          <a
                            href={item.path}
                            download="Dipankar_Karmakar_Resume.pdf"
                            className="light-color"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <SectionLink href={item.path} className="light-color">
                            {item.title}
                          </SectionLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center d-lg-none">
              <div className="azzle-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="azzle-menu-toggle portfolio-menu-toggle"
                    aria-label="Toggle mobile menu"
                    aria-expanded={isOpen}
                  >
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <PortfolioMobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
