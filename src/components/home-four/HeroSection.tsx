import { profile } from "@/data/profile";
import { siteConfig } from "@/data/portfolio-data";
import ProfileImage from "./ProfileImage";
import SectionLink from "./SectionLink";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="portfolio-hero azzle-hero-section4 section position-r overflow-hidden"
      style={{ backgroundImage: "url(/assets/images/home-4/hero-bg.jpg)" }}
      aria-label="Introduction"
    >
      <div className="azzle-hero-overlay" aria-hidden="true" />
      <div className="container position-r">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="azzle-hero-content4 text-center">
              <div className="portfolio-hero-photo-wrap" data-aos="fade-up" data-aos-delay="400">
                <ProfileImage
                  width={120}
                  height={120}
                  className="portfolio-hero-photo"
                  priority
                />
              </div>
              <p className="portfolio-eyebrow" data-aos="fade-up" data-aos-delay="450">
                {profile.name}
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500">{profile.headline}</h1>
              <p data-aos="fade-up" data-aos-delay="550">{profile.tagline}</p>
              <div className="azzle-hero-button mt-50 justify-content-center">
                <a
                  className="portfolio-btn portfolio-btn-primary"
                  href={siteConfig.resumeUrl}
                  download="Dipankar_Karmakar_Resume.pdf"
                  data-text="Download Resume"
                >
                  <span className="button-wraper">Download Resume</span>
                </a>
                <SectionLink className="portfolio-btn portfolio-btn-secondary" href="#projects" data-text="Explore Projects">
                  <span className="button-wraper">Explore Projects</span>
                </SectionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
