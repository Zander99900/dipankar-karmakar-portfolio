import { experienceItems } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="portfolio-section portfolio-section-alt" aria-label="Experience">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>Experience</h2>
        </div>
        <div className="portfolio-timeline">
          {experienceItems.map((item, index) => (
            <div key={item.company} className="portfolio-timeline-item" data-aos="fade-up" data-aos-delay={500 + index * 150}>
              <div className="portfolio-timeline-marker" aria-hidden="true" />
              <div className="portfolio-card portfolio-timeline-card">
                <span className="portfolio-timeline-period">{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
