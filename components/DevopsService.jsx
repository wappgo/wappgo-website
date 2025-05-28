// import React, { useEffect, useRef, useLayoutEffect } from "react";
// import "../public/styles/Appdev.css";
// import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import gsap from "gsap";


// const DevopsService = () => {




//     return (
//         <>
//             <section className="home-hero-section">
//                 <div className="home-hero-container">
//                     <div className="home-hero-left2">
//                         <h3 className="home-hero-subtitle">Built to Scale. Designed to Slay.</h3>

//                         <h1 className="home-hero-title3">
//                             Apps That Move Fast <br /> and Break Limits.
//                         </h1>


//                         <p className="home-hero-description">
//                             We build mobile apps that aren’t just pretty — they perform, convert,<br /> and keep users coming back. Whether you’re launching your MVP or<br /> taking your app global, we’ve got the team, tech, and taste to make<br /> it happen.
//                         </p>

//                         <div className="home-hero-buttons">
//                             <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a>
//                             <span className="home-hero-or">or</span>
//                             <div className="home-hero-icon-buttons">
//                                 <a href="#"><FaWhatsapp /></a>
//                                 <a href="#"><FaEnvelope /></a>
//                                 <a href="#"><FaPhoneAlt /></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="home-hero-right">
//                         <img src="/assets/appdev.svg" alt="Hero" />
//                     </div>
//                 </div>
//             </section>

//         </>
//     );
// };

// export default DevopsService;
import React, { useEffect, useState } from "react";
import "../public/styles/Devops.css";
import "../public/styles/Appdev.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const DevOpsHero = () => {
  const [showScene, setShowScene] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowScene(true);
    }, 400); 

    const timer2 = setTimeout(() => {
      setAnimateText(true);
    }, 1000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="devops-hero">
      <div className={`image-wrapper ${showScene ? "to-right" : ""}`}>
        <img src={showScene ? "/assets/devops.svg" : "/assets/devops.svg"} alt="DevOps" className={showScene ? "img1" : "img2"}/>
      </div>
      <div className={`text-content ${animateText ? "fade-in-up" : ""}`}>
        <h2>Behind every great product</h2>
        <h1>There’s DevOps that works Flawless.</h1>
        <p>
          Our DevOps isn’t just scripts and CI/CD pipelines — it’s your
          product’s secret weapon. We automate the boring stuff, kill
          bottlenecks, and keep your apps running like a dream, 24/7. No
          downtime. No drama. Just clean, scalable, ship-ready workflows.
        </p>
        <div className="buttons">
          <button className="consult-btn">Get Consultation ⚡</button>
          {/* <span>or</span>
          <div className="icons">
            <button className="icon whatsapp">🟢</button>
            <button className="icon email">✉️</button>
            <button className="icon phone">📞</button>
          </div> */}
          <span>or</span>
          <div className="home-hero-icon-buttons">
                          <a href="#"><FaWhatsapp style={{color:"green"}}/></a>
                          <a href="#"><FaEnvelope /></a>
                          <a href="#"><FaPhoneAlt /></a>
                        </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsHero;

