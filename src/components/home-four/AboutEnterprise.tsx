import { aboutContent } from "@/data/portfolio-data";
import { profile } from "@/data/profile";
import ProfileImage from "./ProfileImage";
import SectionLink from "./SectionLink";

export default function AboutEnterprise() {
  return (
    <>
      <section id="about" className="portfolio-section overflow-hidden" aria-label="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="portfolio-profile-sidebar" data-aos="fade-right" data-aos-delay="500">
                <div className="portfolio-media-frame portfolio-profile-frame">
                  <ProfileImage width={520} height={520} className="w-100 portfolio-profile-photo" />
                </div>

                <div className="portfolio-card portfolio-profile-sidebar-card">
                  <ul className="portfolio-profile-meta">
                    <li>
                      <span className="portfolio-profile-meta-label">Role</span>
                      <span>{profile.currentRole}</span>
                    </li>
                    <li>
                      <span className="portfolio-profile-meta-label">Company</span>
                      <span>{profile.currentCompany}</span>
                    </li>
                    <li>
                      <span className="portfolio-profile-meta-label">Location</span>
                      <span>{profile.location}</span>
                    </li>
                    <li>
                      <span className="portfolio-profile-meta-label">Experience</span>
                      <span>{profile.yearsExperience}</span>
                    </li>
                  </ul>
                </div>

                <div className="portfolio-card portfolio-profile-sidebar-card">
                  <div className="portfolio-education">
                    <h3>Education</h3>
                    <ul className="portfolio-education-list">
                      {profile.education.map((edu) => (
                        <li key={`${edu.degree}-${edu.college}-${edu.duration}`}>
                          <h4>{edu.degree}</h4>
                          <p>
                            {edu.college} · {edu.duration}
                            {edu.cgpa && edu.cgpa !== "Completed" ? ` · CGPA: ${edu.cgpa}` : ""}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="portfolio-card portfolio-profile-sidebar-card">
                  <div className="portfolio-profile-chips">
                    <h3>Languages</h3>
                    <div className="portfolio-tech-pills">
                      {profile.languages.map((language, index) => (
                        <span
                          key={language}
                          className="portfolio-tech-pill"
                          data-aos="fade-up"
                          data-aos-delay={500 + index * 80}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="portfolio-content pl-110" data-aos="fade-left" data-aos-delay="700">
                <h2>{aboutContent.heading}</h2>
                <p>{profile.aboutMe}</p>

                <div className="portfolio-card portfolio-profile-availability mt-50">
                  <span className="portfolio-profile-meta-label">Availability</span>
                  <p>{profile.availability}</p>
                </div>

                <div className="portfolio-profile-chips mt-50">
                  <h3>Interests</h3>
                  <div className="portfolio-tech-pills">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={interest}
                        className="portfolio-tech-pill"
                        data-aos="fade-up"
                        data-aos-delay={500 + index * 80}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-50">
                  <SectionLink className="portfolio-btn portfolio-btn-primary" href="#experience" data-text="More About Me">
                    <span className="button-wraper">More About Me</span>
                  </SectionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section overflow-hidden" aria-label="Engineering focus">
        <div className="container">
          <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
            <h2>{aboutContent.engineeringHeading}</h2>
            <p className="portfolio-section-subtitle">{aboutContent.engineeringDescription}</p>
          </div>
          <div className="portfolio-engineering-grid" data-aos="fade-up" data-aos-delay="700">
            {aboutContent.bullets.map((bullet, index) => (
              <div
                key={bullet}
                className="portfolio-card portfolio-engineering-tile"
                data-aos="fade-up"
                data-aos-delay={500 + index * 60}
              >
                <span className="portfolio-bullet-dot" aria-hidden="true" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
