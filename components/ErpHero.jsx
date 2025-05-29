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
  return (
    <>
    <section className="ecommerce-hero">
    <div className="indushero-container">
      <div className="indushero-left">
        <img src="/assets/crm.svg" alt="Mobile 1" className="mobile" />

      </div>
      <div className="indushero-right">
        <h1>
       <span className="indushighlight">CRM & ERP Solutions </span><br/>
         Where Efficiency meets Intelligence
        </h1>
        <h3>Everlasting Customer Relationships, Built Smarter.</h3>
        <p>
        WappGo CRM/ERP isn't just about managing data—it’s about orchestrating growth. With centralized operations, real-time analytics, and intelligent automation, we help you unlock deeper customer insights and drive business efficiency.
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