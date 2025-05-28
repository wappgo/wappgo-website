
import React, { useEffect, useState } from "react";
import "../public/styles/Devops.css";
import "../public/styles/Appdev.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const TestingHero = () => {
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
                <img src={showScene ? "/assets/testing-animate.svg " : "/assets/testinghero.svg"} alt="DevOps" className={showScene ? "img1" : "img2"} />
            </div>
            <div className={`text-content ${animateText ? "fade-in-up" : ""}`}>
                <h2>Where Bugs Go to Die.</h2>
                <h1>Good code deserves even better testing.</h1>
                <p>
                    we don’t just find bugs we hunt them down, crush them, and make sure they never come back.
                    Our QA game is built for the modern digital world: fast, flexible, and totally relentless.
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
                        <a href="#"><FaWhatsapp style={{ color: "green" }} /></a>
                        <a href="#"><FaEnvelope /></a>
                        <a href="#"><FaPhoneAlt /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestingHero;

