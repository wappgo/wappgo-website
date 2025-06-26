"use client"

import React, { useEffect, useRef, useState } from "react";
import "../public/styles/ServiceSection.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const router = useRouter()
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null); // Start with null for SSR
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This only runs on client side
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLoading(false);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      const video = videoRef.current;

      gsap.to(video, {
        scrollTrigger: {
          trigger: ".video-bottom-section",
          start: "top bottom",
          end: "top top",
          scrub: 1.5,
        },
        top: "110vh",
        left: "115%",
        x: "-115%",
        scale: 7,
        ease: "power2.out",
      });
    }
  }, [isMobile]);

  // Show loading state during SSR and initial client render
  if (isLoading) {
    return (
      <section className="home-hero-section">
        <div className="home-hero-container">
          {/* Empty container that matches desktop structure */}
          <div className="home-hero-left" style={{ visibility: 'hidden' }} />
          <div className="home-hero-right" style={{ visibility: 'hidden' }} />
        </div>
      </section>
    );
  }

  if (isMobile) {
    return (
      <section className="mobile-hero-section">
        <div className="mobile-hero-container">
          <video
            className="mobile-hero-video"
            src="/assets/web-dev-video.webm"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="mobile-hero-content">
            <h3 className="mobile-hero-subtitle">We Don't Just Build Websites.</h3>
            <h1 className="mobile-hero-title">
              We Engineer Digital Experiences.
            </h1>

            <p className="mobile-hero-description">
              Think of us as your tech sidekick. Whether you're launching a new idea or
              leveling up an existing product, Wappgo turns your vision into a
              high-performing, pixel-perfect reality.
            </p>

            <div className="mobile-hero-buttons">
              <button className="consult-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
              <span className="mobile-hero-or">or</span>
              <div className="mobile-hero-icon-buttons">
                {/* <a href="#"><FaWhatsapp /></a>
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
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="home-hero-section">
        <div className="home-hero-container">
          <div className="home-hero-left">
            <h3 className="home-hero-subtitle">We Don't Just Build Websites.</h3>
            <div className="hero-service">
              <video
                ref={videoRef}
                className="scroll-video"
                src="/assets/web-dev-video.webm"
                autoPlay
                loop
                muted
                playsInline
              />
              <h1 className="home-hero-title">
                We Engineer Digital <br /> Experiences.
              </h1>
            </div>

            <p className="home-hero-description">
              Think of us as your tech sidekick. Whether you're launching a new <br />idea or
              leveling up an existing product, Wappgo turns your vision<br /> into a
              high-performing, pixel-perfect reality.
            </p>

            <div className="home-hero-buttons">
              {/* <a href="#" className="home-hero-cta-btn">Get Consultation ⚡</a> */}
               <button className="home-hero-cta-btn" onClick={() => router.push('/contact')}>Get Consultation ⚡</button>
              <span className="home-hero-or">or</span>
              <div className="home-hero-icon-buttons">
                {/* <a href="#"><FaWhatsapp /></a>
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

          <div className="home-hero-right">
            <img src="/assets/WebDev.svg" alt="Hero" />
          </div>
        </div>
      </section>

      <section className="video-bottom-section">
        <p className="video-bottom-text"></p>
      </section>
    </>
  );
};

export default HeroSection;