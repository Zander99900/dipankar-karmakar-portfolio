import Image from "next/image";
import { certifications } from "@/data/portfolio-data";

export default function CertificationSection() {
  return (
    <section className="portfolio-section portfolio-section-alt" aria-label="Certifications">
      <div className="container">
        <div className="portfolio-section-title is-center" data-aos="fade-up" data-aos-delay="500">
          <h2>Certifications</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="col-lg-5 col-md-6 d-flex">
              <div className="portfolio-card portfolio-cert-card h-100" data-aos="fade-up" data-aos-delay={500 + index * 150}>
                <div className="portfolio-cert-icon">
                  <Image src={cert.icon} alt={`${cert.issuer} logo`} width={88} height={40} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <a
                  href={cert.certificateUrl}
                  className="portfolio-btn portfolio-btn-secondary portfolio-cert-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-text="View Certificate"
                >
                  <span className="button-wraper">View Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
