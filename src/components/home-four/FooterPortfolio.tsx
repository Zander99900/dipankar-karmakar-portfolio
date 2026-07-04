import Link from "next/link";
import { siteConfig } from "@/data/portfolio-data";
import { profile } from "@/data/profile";

export default function FooterPortfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer" aria-label="Footer">
      <div className="container">
        <div className="portfolio-footer-inner">
          <div className="portfolio-footer-brand">
            <Link href="/home-4">{profile.name}</Link>
            <p>
              {profile.currentRole} · {profile.location}
            </p>
          </div>
          <div className="portfolio-footer-links">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="portfolio-footer-copy">© {currentYear} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
