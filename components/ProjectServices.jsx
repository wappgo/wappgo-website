// import React from 'react';
// import "../public/styles/IndustriesServices.css";

// const ChatSystemServices = () => {
//   return (
//     <section className="ecom-services-section">
//       <div className="ecom-services-container">

//         <div className="ecom-heading">
//           <h2>Our Chat System <br />Development Services</h2>
//         </div>

//         <div className="ecom-services-left">
//           <ul className="service-list">
//             <li><span>Custom Chat Platform Development</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
//             <li><span>Real-Time Messaging Solutions</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
//             <li><span>AI-Powered Chatbots & NLP</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
//             {/* <li><span>AI-Powered Personalization</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li> */}
//             <li><span>Multi-Platform Support (Web, Mobile, Desktop)</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
//             <li><span>End-to-End Encryption & Compliance</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
//           </ul>
//         </div>

//         <div className="ecom-services-right">
//           <img src="/assets/commerce.svg" alt="ecommerce-icons" className="ecom-icon" />
//           <p>
//             We design and develop tailor-made eCommerce platforms that align perfectly with your business goals.
//             Whether you need a B2B, B2C, or D2C solution, we ensure your platform is visually stunning, highly functional,
//             and conversion-driven. From seamless navigation to interactive UI/UX, we craft an experience that keeps customers coming back.
//           </p>
//         </div>

//         <video className="corner-video" autoPlay loop muted playsInline>
//           <source src="/assets/offer-videos.mp4" type="video/mp4" />
//         </video>
        
//       </div>
//     </section>
//   );
// };

// export default ChatSystemServices;
"use client";
import React, { useState } from 'react';
import "../public/styles/IndustriesServices.css";

const ProjectServices = () => {
    const chatservices = [
        {
          title: "Tailored Project Platforms",
          description:
            "No more juggling tools or chasing updates. Our platforms adapt to how you work—not the other way around. We bring together task tracking, resource planning, team communication, and actionable insights into one sleek, easy-to-use system.",
          icon: "/assets/tailor.svg",
        },
        {
          title: "Automated Workflows & Task Chains",
          description:
            "Enable users to communicate instantly with real-time messaging using WebSockets or Firebase. Fast, reliable, and responsive.",
          icon: "/assets/workflow.svg",
        },
        {
          title: "Smart Dashboards & Insights",
          description:
            "Boost user engagement with AI chatbots that use natural language processing (NLP) for smart, human-like conversations.",
          icon: "/assets/smart.svg",
        },
        {
          title: "Real-Time Collaboration & Messaging",
          description:
            "Our chat systems work seamlessly across platforms, including web browsers, mobile apps, and desktop clients — all synchronized in real-time.",
          icon: "/assets/real.svg",
        },
        {
          title: "Secure Role-Based Controls",
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
          <h2>Smarter Project Management <br />Solutions We Offer</h2>
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



