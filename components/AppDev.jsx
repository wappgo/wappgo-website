import React, { useEffect, useRef,useLayoutEffect } from "react";
import "../public/styles/Appdev.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



const HeroSection = () => {
  return (
    <>
      <section className="home-hero-section">
        <div className="home-hero-container">
          <div className="home-hero-left2">
            <h3 className="home-hero-subtitle">Built to Scale. Designed to Slay.</h3>

              <h1 className="home-hero-title3">
                Apps That Move Fast <br /> and Break Limits.
              </h1>
        

            <p className="home-hero-description">
            We build mobile apps that aren’t just pretty — they perform, convert,<br/> and keep users coming back. Whether you’re launching your MVP or<br/> taking your app global, we’ve got the team, tech, and taste to make<br/> it happen.
            </p>

            <div className="home-hero-buttons">
              <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a>
              <span className="home-hero-or">or</span>
              <div className="home-hero-icon-buttons">
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaEnvelope /></a>
                <a href="#"><FaPhoneAlt /></a>
              </div>
            </div>
          </div>

          <div className="home-hero-right">
            <img src="/assets/appdev.svg" alt="Hero" />
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
