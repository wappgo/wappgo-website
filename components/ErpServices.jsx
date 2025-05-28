"use client";
import React, { useState } from 'react';
import "../public/styles/IndustriesServices.css";

const ProjectServices = () => {
    const chatservices = [
        {
          title: "Unified CRM + ERP Engine",
          description:
            "Bring your sales, operations, finance, and customer service into perfect sync. A seamlessly integrated CRM and ERP engine means fewer silos, faster workflows, smarter decisions, and better customer experiences—all from a single, intuitive dashboard.",
          icon: "/assets/erp2.svg",
        },
        {
          title: "Smart Automation",
          description:
          "Bring your sales, operations, finance, and customer service into perfect sync. A seamlessly integrated CRM and ERP engine means fewer silos, faster workflows, smarter decisions, and better customer experiences—all from a single, intuitive dashboard.",
          icon: "/assets/workflow.svg",
        },
        {
          title: "Fan & Follower Platforms",
          description:
            "Boost user engagement with AI chatbots that use natural language processing (NLP) for smart, human-like conversations.",
          icon: "/assets/smart.svg",
        },
        {
          title: "Social Commerce & Affiliate Networks",
          description:
            "Our chat systems work seamlessly across platforms, including web browsers, mobile apps, and desktop clients — all synchronized in real-time.",
          icon: "/assets/real.svg",
        },
        {
          title: "Community-Based Networks",
          description:
            "We prioritize user privacy with robust end-to-end encryption and compliance with industry standards like GDPR and HIPAA.",
          icon: "/assets/lock.svg",
        },
      ];
      
  const [activeIndex2, setActiveIndex2] = useState(0);

  return (
    <section className="ecom-services-section">
      <div className="ecom-services-container">

        <div className="ecom-heading">
          <h2>We Makes our CRM <br />& ERP Services Different</h2>
        </div>

        <div className="ecom-services-left">
          <ul className="service-list2">
            {chatservices.map((chatservice, index) => (
              <li
                key={index}
                className={activeIndex2 === index ? "active" : ""}
                // onClick={() => setActiveIndex(index)}
                onClick={(e) => {
                    e.stopPropagation(); 
                    setActiveIndex2(index);
                  }}
                  
              >
                <span>{chatservice.title}</span>
                <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ecom-services-right">
          {/* <img src="/assets/commerce.svg" alt="ecommerce-icons" className="ecom-icon" /> */}
          <img
    src={chatservices[activeIndex2].icon}
    alt="chat-service-icon"
    className="ecom-icon"
  />
          <p>{chatservices[activeIndex2].description}</p>
        </div>

        <video className="corner-video" autoPlay loop muted playsInline>
          <source src="/assets/offer-videos.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  );
};

export default ProjectServices;



