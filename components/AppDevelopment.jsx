"use client"
import React, { useEffect, useState } from "react";
import "../public/styles/Devops.css";
import "../public/styles/Appdev.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const AppDevelopment = () => {
  const router = useRouter()
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
        <img src={showScene ? "/assets/devops.svg" : "/assets/devops.svg"} alt="DevOps" className={showScene ? "img1" : "img2"} />
      </div>
      <div className={`text-content ${animateText ? "fade-in-up" : ""}`}>
        <h2>Built to Scale. Designed to Slay.</h2>
        <h1>Apps That Move Fast and Break Limits</h1>
        <p>
          We build mobile apps that aren’t just pretty — they perform, convert, and keep users coming back. Whether you’re launching your MVP or taking your app global, we’ve got the team, tech, and taste to make it happen.
        </p>
        <div className="buttons">
          <button className="consult-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
          {/* <span>or</span>
          <div className="icons">
            <button className="icon whatsapp">🟢</button>
            <button className="icon email">✉️</button>
            <button className="icon phone">📞</button>
          </div> */}
          <span>or</span>
          <div className="home-hero-icon-buttons">
            {/* <a href="#"><FaWhatsapp style={{color:"green"}}/></a>
                          <a href="#"><FaEnvelope /></a>
                          <a href="#"><FaPhoneAlt /></a> */}
            <a target="_blank" href="https://wa.me/917000581635?text=Hello%20Team%20Wappgo!">
              <FaWhatsapp style={{ color: "green" }} />
            </a>
            <a href="mailto:info@wappgo.com">
              <FaEnvelope />
            </a>
            <a href="tel:917000581635">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;

