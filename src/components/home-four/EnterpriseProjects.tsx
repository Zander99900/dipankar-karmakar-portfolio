import { enterpriseProjects } from "@/data/portfolio-data";

export default function EnterpriseProjects() {
  return (
    <section className="portfolio-section" aria-label="Enterprise projects">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>Enterprise Projects</h2>
        </div>
        <div className="row g-4">
          {enterpriseProjects.map((project, index) => (
            <div key={project.title} className="col-lg-4 col-md-6 d-flex">
              <div className="portfolio-card h-100" data-aos="fade-up" data-aos-delay={500 + index * 150}>
                <h3>{project.title}</h3>
                <p className="portfolio-card-text">{project.overview}</p>
                <div className="portfolio-tech-pills">
                  {project.stack.map((tech) => (
                    <span key={tech} className="portfolio-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="portfolio-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
