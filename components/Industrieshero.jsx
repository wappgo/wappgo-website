
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
const EcommerceHero = () => {
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
              <button className="indusprimary-btn">
                Get Consultation <span className="bolt">⚡</span>
              </button>
              <button className="indussecondary-btn">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>
      {/* <main className="partners-container2 mt-4">
        <div className="brands">
          <p className="heading">Trusted partners</p>
          <Swiper
            className="brand-name-container"
            autoplay={{
              delay: 1000,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2
              },
              375: {
                slidesPerView: 2
              },
              425: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 7,
              },
            }}
            loop={true}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets\nuxt.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/miro.svg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/LottieFiles.svg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/wise.svg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/dribble.svg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/kinsta.svg" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/angleList.svg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img src="/assets/behance.svg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main> */}
    </>
  );
};

export default EcommerceHero;
