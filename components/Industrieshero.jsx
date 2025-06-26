
"use client";
import React from 'react';
import "../public/styles/Industrieshero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from 'next/navigation';
const EcommerceHero = () => {
  const router = useRouter()
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
            <img src="/assets/Cover-Photoroom.png" alt="Mobile 1" className="mobile" />

          </div>
          <div className="indushero-right">
            <h1>
              Innovative <span className="indushighlight">eCommerce</span><br />
              Solutions for Future-Ready Businesses
            </h1>
            <h3>Elevate Your Digital Store</h3>
            <p>
              We specialize in crafting custom eCommerce solutions that drive growth, enhance customer
              engagement, and maximize conversions. Whether you’re a startup or an enterprise, we build
              scalable, intuitive, and feature-rich platforms that take your online business to the next level.
            </p>
            <div className="indushero-buttons">
              <button className="indusprimary-btn"  onClick={()=>router.push('/contact')}>
                Get Consultation <span className="bolt">⚡</span>
              </button>
              <button className="indussecondary-btn"  onClick={()=>router.push('/case-study')}>View Case Studies</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceHero;
