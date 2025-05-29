// components/WebExpertise.js
import React from 'react';
import "../public/styles/WebExpertise.css";
const WebExpertise = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">
            Our Expertise in <br />
            <span>DevOps Solutions</span>
          </h2>
          <p className="expertise-description">
            Our team has partnered with brands across industries to craft secure, reliable,
            and conversion-optimized platforms that users love.
          </p>
        </div>
        <div className="expertise-cards">
          <div className="expertise-card">
            <h3 className="card-stat"><span>50+</span></h3>
            <p className="card-text">
              Projects launched across SaaS, eCommerce, and enterprise platforms.
            </p>
          </div>
          <div className="expertise-card">
            <h3 className="card-stat"><span>10,000,000+</span></h3>
            <p className="card-text">
              0M+ users. Every month. Using products we proudly built — from high-traffic
              platforms to niche web apps.
            </p>
          </div>
          <div className="expertise-card">
            <h3 className="card-stat"><span>85%</span></h3>
            <p className="card-text">
              85% of clients partner with us again — not just for our code, but for the speed,
              and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebExpertise;
