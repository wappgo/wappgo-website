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
        <img src="/assets/original.svg" alt="Mobile 1" className="mobile" />

      </div>
      <div className="indushero-right">
        <h1>
          Innovative <span className="indushighlight">Chat Solutions</span><br />
          for Future-Ready Communication.
        </h1>
        <h3>Empower Real-Time Engagement</h3>
        <p>
        We craft intelligent and scalable chat system solutions that transform how businesses interact with their customers. Whether it’s live chat, support automation, or internal communication tools, we design systems that ensure seamless messaging, enhance support, and foster stronger relationships.
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