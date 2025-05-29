"use client";
import React,{useRef,useState,useEffect} from 'react'
import Image from "next/image";
import "../public/styles/bg.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Autoplay } from "swiper/modules";
import Partners from './Partners';
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

       {/* <Partners /> */}
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
      </div>
    </>
  );
};

export default AboutHero;
