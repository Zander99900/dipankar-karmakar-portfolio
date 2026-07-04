"use client";

import Image from "next/image";
import Count from "@/common/count";
import type { FeaturedProjectConfig } from "@/data/portfolio-data";

interface FeaturedProjectCardProps {
  project: FeaturedProjectConfig;
  aosDelay?: number;
}

export default function FeaturedProjectCard({ project, aosDelay = 500 }: FeaturedProjectCardProps) {
  const hasHighlights = Boolean(project.highlights?.length);

  return (
    <article id={project.id} className="azzle-video-section portfolio-featured-block" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="row g-0">
        <div className="col-xl-6">
          <div className={`portfolio-featured-left${hasHighlights ? " has-highlights" : ""}`}>
            <div className="azzle-video-thumb">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-100"
              />
            </div>
            {hasHighlights && (
              <div className="portfolio-featured-highlights is-below-image">
                {project.highlights!.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="portfolio-featured-highlight-card is-compact"
                    data-aos="fade-up"
                    data-aos-delay={aosDelay + 100 + index * 100}
                  >
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center">
          <div className="azzle-video-wrap">
            <div className="azzle-video-content portfolio-featured-content">
              <p className="portfolio-eyebrow">{project.eyebrow}</p>
              {project.category && <span className="portfolio-client-category">{project.category}</span>}
              <h2>{project.title}</h2>
              <p className="portfolio-featured-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="portfolio-tech-pills">
                {project.techPills.map((pill) => (
                  <span key={pill} className="portfolio-tech-pill">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="portfolio-divider mt-50" />

              <div className="portfolio-stats">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="portfolio-stat">
                    <h3 className="portfolio-counter-data" aria-label={`${stat.value}${stat.suffix}`}>
                      <Count number={stat.value} text={stat.suffix} />
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
