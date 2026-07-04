import { featureStrip } from "@/data/portfolio-data";

export default function FeatureStrip() {
  return (
    <section className="portfolio-feature-strip azzle-feature-section" aria-label="Core capabilities">
      <div className="container">
        <div className="azzle-feature-wraper">
          {featureStrip.map((item, index) => (
            <div
              key={item.title}
              className={`portfolio-card portfolio-feature-card azzle-feature-item ${index === 1 ? "item2" : ""}`}
              data-aos="fade-up"
              data-aos-delay={500 + index * 200}
            >
              <div className="azzle-feature-title">
                <img src={item.icon} alt="" aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>
              <div className="azzle-feature-data">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
