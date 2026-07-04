import Link from "next/link";
import { clientProjects } from "@/data/portfolio-data";

export default function ClientProjects() {
  return (
    <section className="portfolio-section" aria-label="Client projects">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>Client Projects</h2>
        </div>
        <div className="row g-4">
          {clientProjects.map((project, index) => (
            <div key={project.title} className="col-xl-4 col-md-6 d-flex">
              <div className="portfolio-card h-100" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                <span className="portfolio-client-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="portfolio-card-text">{project.description}</p>
                <div className="portfolio-tech-pills">
                  {project.technology.split(",").map((tech) => (
                    <span key={tech} className="portfolio-tech-pill">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div className="portfolio-card-footer">
                  {project.liveUrl ? (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-client-link">
                      Visit Website
                      <img src="assets/images/home1/arrow-white.svg" alt="" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="portfolio-client-link is-disabled">Internal System</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
