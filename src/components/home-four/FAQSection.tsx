"use client";

import { useId, useState } from "react";
import { faqItems } from "@/data/portfolio-data";
import { profile } from "@/data/profile";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const baseId = useId();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const getAnswer = (question: string, answer: string) => {
    if (question === "Who am I?") {
      return `I am ${profile.name}, ${profile.shortBio}`;
    }

    return answer;
  };

  return (
    <section className="portfolio-section" aria-label="Frequently asked questions">
      <div className="container">
        <div className="portfolio-section-title" data-aos="fade-up" data-aos-delay="500">
          <h2>Common Questions</h2>
        </div>
        <div className="portfolio-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const headerId = `${baseId}-header-${index}`;

            return (
              <div
                key={item.question}
                className={`portfolio-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  id={headerId}
                  className="portfolio-faq-header"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <h3>{item.question}</h3>
                  <span className="portfolio-faq-icon" aria-hidden="true">
                    <img className="portfolio-faq-plus" src="assets/images/home1/+.svg" alt="" />
                    <img className="portfolio-faq-minus" src="assets/images/home2/plas+.svg" alt="" />
                  </span>
                </button>
                <div
                  id={panelId}
                  className="portfolio-faq-panel"
                  role="region"
                  aria-labelledby={headerId}
                  aria-hidden={!isOpen}
                >
                  <div className="portfolio-faq-content">
                    <p>{getAnswer(item.question, item.answer)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
