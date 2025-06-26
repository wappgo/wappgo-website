
import React, { useEffect, useState } from "react";
import "../public/styles/Devops.css";
import "../public/styles/Appdev.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const DevOpsHero = () => {
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
        <h2>Behind every great product</h2>
        <h1 >There’s DevOps that works Flawless.</h1>
        <p>
          Our DevOps isn’t just scripts and CI/CD pipelines — it’s your
          product’s secret weapon. We automate the boring stuff, kill
          bottlenecks, and keep your apps running like a dream, 24/7. No
          downtime. No drama. Just clean, scalable, ship-ready workflows.
        </p>
        <div className="home-hero-buttons">
          <button className="consult-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
          <div>
          <span>or</span>
          </div>
          <div className="home-hero-icon-buttons">
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

export default DevOpsHero;

