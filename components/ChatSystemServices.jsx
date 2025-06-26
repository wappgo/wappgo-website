
"use client";
import React, { useState } from 'react';
import "../public/styles/IndustriesServices.css";

const ChatSystemServices = () => {
    const chatservices = [
        {
          title: "Custom Chat Platform Development",
          description:
            "We create scalable chat platforms tailored to your specific needs — whether for customer service, internal communication, or large-scale messaging networks.",
          icon: "/assets/chat.svg",
        },
        {
          title: "Real-Time Messaging Solutions",
          description:
            "Enable users to communicate instantly with real-time messaging using WebSockets or Firebase. Fast, reliable, and responsive.",
          icon: "/assets/real-time.svg",
        },
        {
          title: "AI-Powered Chatbots & NLP",
          description:
            "Boost user engagement with AI chatbots that use natural language processing (NLP) for smart, human-like conversations.",
          icon: "/assets/ai.svg",
        },
        {
          title: "Multi-Platform Support (Web, Mobile, Desktop)",
          description:
            "Our chat systems work seamlessly across platforms, including web browsers, mobile apps, and desktop clients — all synchronized in real-time.",
          icon: "/assets/Multi.svg",
        },
        {
          title: "End-to-End Encryption & Compliance",
          description:
            "We prioritize user privacy with robust end-to-end encryption and compliance with industry standards like GDPR and HIPAA.",
          icon: "/assets/encryption.svg",
        },
      ];
      
  const [activeIndex2, setActiveIndex2] = useState(0);

  return (
    <section className="ecom-services-section">
      <div className="ecom-services-container">

        <div className="ecom-heading">
          <h2>Our Chat System <br />Development Services</h2>
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

export default ChatSystemServices;
