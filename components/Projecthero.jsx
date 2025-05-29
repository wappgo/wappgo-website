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
const Chatsystem = () => {
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
        <img src="/assets/teamwork-collaboration.svg" alt="Mobile 1" className="mobile" />

      </div>
      <div className="indushero-right">
        <h1>
          Intelligent Systems for<br />
          High Performing<br/>
          <span className="indushighlight">Project Management</span>
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

export default Chatsystem