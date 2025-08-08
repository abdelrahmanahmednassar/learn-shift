"use client";
import { useTrans } from "@/Providers/useTrans";
import { useState } from "react";

export default function QASection() {
  const t = useTrans().trans;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="qa-section">
      <h2 className="title">{t.pages.index.qa.title}</h2>

      <div className="qa-container">
        {t.pages.index.qa.questions.map((item, index) => (
          <div key={index} className="qa-item">
            <div className="qa-question" onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              <div className={`qa-icon ${openIndex === index ? "open" : ""}`}>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className={`qa-answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
