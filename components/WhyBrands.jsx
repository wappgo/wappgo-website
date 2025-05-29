import React, { useState } from 'react';
import "../public/styles/Whybrand.css";


const accordionData = [
  {
    icon: '🎨',
    title: 'Seamless Design & Development',
    content: 'Designers and developers in perfect sync from day one—smooth collaboration, zero friction.',
  },
  {
    icon: '🚀',
    title: 'Speed Meets Reliability',
    content: '',
  },
  {
    icon: '📈',
    title: 'Engineered for Growth',
    content: '',
  },
  {
    icon: '💡',
    title: 'Transparency Without the Tech Jargon',
    content: '',
  },
];

const WhyChooseWappgo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="wappgo-why-choose-section">
      <div className="wappgo-why-choose-container">
        <div className="wappgo-image-section">
          <img src="/assets/whybrand.svg" alt="Team Wappgo" />
        </div>
        <div className="wappgo-content-section">
          <h2 className="wappgo-title">
            Why Brands Choose<br />Wappgo, Speed Meets<br />Reliability
          </h2>
          <div className="wappgo-accordion">
            {accordionData.map((item, index) => (
              <div className="wappgo-accordion-item" key={index}>
                <div className="wappgo-accordion-header" onClick={() => toggleAccordion(index)}>
                  <span className="wappgo-accordion-icon">{item.icon}</span>
                  <span className="wappgo-accordion-title">{item.title}</span>
                  <span className={`wappgo-arrow ${activeIndex === index ? 'wappgo-up' : 'wappgo-down'}`}>
                    <img src='/assets/down-arrow2.svg'/>
                  </span>
                </div>
                {activeIndex === index && item.content && (
                  <div className="wappgo-accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWappgo;
