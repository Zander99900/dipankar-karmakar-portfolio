import { featuredProjects, featuredSoftwareSection } from "@/data/portfolio-data";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedSoftwareSection() {
  return (
    <section id="projects" className="portfolio-section portfolio-section-tight" aria-label="Featured software">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>{featuredSoftwareSection.title}</h2>
          <p className="portfolio-section-subtitle">{featuredSoftwareSection.subtitle}</p>
        </div>

        <div className="portfolio-featured-stack">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} aosDelay={500 + index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
