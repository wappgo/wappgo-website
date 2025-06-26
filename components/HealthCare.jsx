"use client";
import React from 'react'
import "../public/styles/Industrieshero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Autoplay } from "swiper/modules";
const HealthCare = ({indutries}) => {
  useGSAP(() => {
    gsap.to(".marque", {
      transform: 'translateX(-200%)',
      duration: 50,
      delay: 1,
      repeat: -1,
      ease: "none"
    })
  })
  console.log("indutries",indutries)
  return (
    <>
    <section className="ecommerce-hero">
    <div className="indushero-container">
      <div className="indushero-left">
        <img src="/assets/crm.svg" alt="Mobile 1" className="mobile" />

      </div>
      <div className="indushero-right">
        <h1>
            World Class
       <span className="indushighlight">Healthcare & HealthTech</span>
         Solutions
        </h1>
        <h3>Healthcare & HealthTech Solutions</h3>
        <p>
        Deliver seamless, secure, and scalable healthcare experiences through WappGo’s specialized IT solutions for the healthcare industry. From remote consultations to digital records, we help providers serve better, faster, and smarter.
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

export default HealthCare;