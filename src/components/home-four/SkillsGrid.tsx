import { skillCategories } from "@/data/portfolio-data";

export default function SkillsGrid() {
  return (
    <section id="skills" className="portfolio-section" aria-label="Skills">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>Skills</h2>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="col-xl-3 col-md-6 d-flex">
              <div className="portfolio-card h-100" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                <h3>{category.title}</h3>
                <div className="portfolio-skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="portfolio-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
