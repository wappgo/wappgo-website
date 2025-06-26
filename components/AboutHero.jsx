"use client";
import React,{useRef,useState,useEffect} from 'react'
import "../public/styles/bg.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const AboutHero = () => {
  useGSAP(() => {
    gsap.to(".marque", {
      transform: 'translateX(-200%)',
      duration: 50,
      delay: 1,
      repeat: -1,
      ease: "none"
    })
  })
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="about-hero-container">
        <div className="row align-items-center">
          <article className="col-lg-7">
            <h4 className="about-title">About Us</h4>
            <h2 className="about-heading">
              Beyond Management,<br /> Embracing Our <span>Authentic</span><br /> Work Culture.
            </h2>
            <div className="row">
              <p className="about-text col-lg-9">
                By applying innovative approaches, we collaborate with corporations
                and stakeholders to transform and enhance their experiences.
              </p>
            </div>
            
          </article>
          <div
            className="col-lg-5 text-end">
            <img
              className="img-fluid about-hero-img"
              src="/assets/about-hero-img-up.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
