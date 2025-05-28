"use client";
import React, { useState } from 'react';
import "../public/styles/IndustriesServices.css";

const ProjectServices = () => {
    const chatservices = [
        {
          title: "Short-Video & Streaming Apps",
          description:
            "We design and deliver high-performance IT solutions for short-form video and streaming platforms that demand speed, reliability, and seamless scalability. From real-time video uploads to global content delivery, our infrastructure ensures your app runs smoothly—whether it’s a trending reel or a live stream with millions of viewers.",
          icon: "/assets/tailor.svg",
        },
        {
          title: "Influencer & Creator Marketplaces",
          description:
            "We design and deliver high-performance IT solutions for short-form video and streaming platforms that demand speed, reliability, and seamless scalability. From real-time video uploads to global content delivery, our infrastructure ensures your app runs smoothly—whether it’s a trending reel or a live stream with millions of viewers.",
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
          <h2>Our Social Media <br />Solutions & Services</h2>
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



