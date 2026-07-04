import Link from "next/link";
import { siteConfig } from "@/data/portfolio-data";

export default function CTASection() {
  return (
    <section id="contact" className="portfolio-section portfolio-cta-section" aria-label="Contact call to action">
      <div className="container">
        <div className="portfolio-cta-inner portfolio-card" data-aos="fade-up" data-aos-delay="500">
          <h2>Interested in working together?</h2>
          <p>Let&apos;s build enterprise software.</p>
          <div className="azzle-hero-button mt-50 justify-content-center">
            <a
              className="portfolio-btn portfolio-btn-primary"
              href={siteConfig.resumeUrl}
              download="Dipankar_Karmakar_Resume.pdf"
              data-text="Download Resume"
            >
              <span className="button-wraper">Download Resume</span>
            </a>
            <Link className="portfolio-btn portfolio-btn-secondary" href={`mailto:${siteConfig.email}`} data-text="Contact Me">
              <span className="button-wraper">Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
