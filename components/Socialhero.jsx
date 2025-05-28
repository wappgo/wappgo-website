"use client";
import React,{useRef,useState,useEffect} from 'react'
import "../public/styles/Industrieshero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Autoplay } from "swiper/modules";
const Socialhero = () => {
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
    <section className="ecommerce-hero">
    <div className="indushero-container">
      <div className="indushero-left">
        <img src="/assets/teamwork.svg" alt="Mobile 1" className="mobile" />

      </div>
      {/* <div className="indushero-right"> */}
      <div
              ref={contentRef}
              className={`indushero-right ${
                isVisible ? "indushero-right-animate" : ""
              }`}
            >
        <h1>
          Best-in-class <span className="indushighlight">social media management solution</span>
        </h1>
        <h3>Where Ideas Meet Execution</h3>
        <p>
        We design intuitive and smart project management systems that empower modern teams to plan, collaborate, and deliver with precision. Whether you’re building the next big thing or managing daily operations, our platforms simplify complexity and unlock peak productivity.
        </p>
        <div className="indushero-buttons">
          <button className="indusprimary-btn">
            Get Consultation <span className="bolt">⚡</span>
          </button>
          <button className="indussecondary-btn">View Case Studies</button>
        </div>
      </div>
    </div>
  </section>

  </>
  )
}

export default Socialhero;