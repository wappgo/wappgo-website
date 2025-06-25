"use client";
import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import "../public/globals.css";
import "../public/styles/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const Testimonial = () => {
  const titleRef = useRef(null);
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const titleEl = titleRef.current;
    if (titleEl) {
      observer.observe(titleEl);
    }

    return () => {
      if (titleEl) observer.unobserve(titleEl);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      fadeRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <>
      {/* <TestimonialBorder /> */}
      <div className="clients-container">
        <div className="row">
          <h6 ref={(el) => (fadeRefs.current[0] = el)} className="comman-title fadeInUp-animation">Testimonials</h6>
          <article className="col-xl-6 col-lg-12">
            {/* <h5 className="Testimonials-title">Why Companies Choose Us</h5> */}
            <h5 ref={titleRef} className="Testimonials-title animated-title">
              {
                "Why Companies Choose Us".split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="word">
                    {[...word].map((char, charIndex) => (
                      <span
                        key={charIndex}
                        style={{ '--i': wordIndex * 10 + charIndex + 1 }}
                      >
                        {char}
                      </span>
                    ))}
                    <span>&nbsp;</span>
                  </span>
                ))
              }
            </h5>
            <div ref={(el) => (fadeRefs.current[1] = el)} className='fadeInUp-animation'>
              <Swiper
                grabCursor={false}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                // modules={[Pagination]}
                autoplay={{ delay: 3000 }} // Autoplay with 3 seconds delay
              modules={[Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <article className="review-logo-container">
                    <div className="review-items">
                      <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                        In construction, where timelines are tight and coordination is complex, having a reliable ERP system is non-negotiable. This solution has brought clarity, control, and speed to our projects. From procurement to on-site execution, every team now works in sync with real-time data. It’s not just software — it’s a backbone for modern construction operations.
                      </p>
                      <div className="client-details">
                        <div className="details">
                          <div className="image-items">
                            <img
                              className="client-outer"
                              src="/assets/Ellipse-5.png"
                            />
                            <img
                              className="client-image"
                              src="/assets/owener-lc-laxman.png"
                             style={{ borderRadius: "50px" }}
                              height="65px"
                              width="65px"
                            />
                          </div>
                          <div className="name-review-container">
                            <div className="name-designation">
                              <h4>Mr. LC Laxman</h4>
                              <span>Chairman & Director Laxman Construction</span>
                            </div>
                            <div className="review-frames">
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                            </div>
                          </div>
                        </div>
                        <img
                          className="testimonial-icon"
                          src="/assets/testimonial-icon.svg"
                        />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="review-logo-container">
                    <div className="review-items">
                      <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                        Business Tectis has redefined how we operate at scale. From automation to analytics, it connects the dots across our departments effortlessly. What stood out was the adaptability — it molded itself around our existing workflows rather than forcing us to change. For any growing organization aiming to stay ahead, this solution is a strategic asset
                      </p>
                      <div className="client-details">
                        <div className="details">
                          <div className="image-items">
                            <img
                              className="client-outer"
                              src="/assets/Ellipse-5.png"
                            />
                            <img
                              className="client-image"
                              src="/assets/owner-mukesh.png"
                              style={{ borderRadius: "50px" }}
                              height="65px"
                              width="65px"
                            />
                          </div>
                          <div className="name-review-container">
                            <div className="name-designation">
                              <h4>Mr. Mukesh Hajela</h4>
                              <span>Managing Director, NICT</span>
                            </div>
                            <div className="review-frames">
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                            </div>
                          </div>
                        </div>
                        <img
                          className="testimonial-icon"
                          src="/assets/testimonial-icon.svg"
                        />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="review-logo-container">
                    <div className="review-items">
                      <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                        As a venture capitalist deeply involved in fast-paced investments and financial structuring, I’ve seen many fintech platforms claim to simplify finance. But this solution genuinely delivers. It’s intuitive, secure, and surprisingly agile for our operational needs. From real-time insights to seamless fund management, it’s become an integral part of how we scale our portfolio companies. Kudos to the team behind this innovation.
                      </p>
                      <div className="client-details">
                        <div className="details">
                          <div className="image-items">
                            <img
                              className="client-outer"
                              src="/assets/Ellipse-5.png"
                            />
                            <img
                              className="client-image"
                              style={{ borderRadius: "50px" }}
                              src="/assets/jitendra-owner.jpeg"
                              height="65px"
                              width="65px"
                            />
                          </div>
                          <div className="name-review-container">
                            <div className="name-designation">
                              <h4>Jeetendra Choudhary</h4>
                              <span>Managing Director, JC Ventures</span>
                            </div>
                            <div className="review-frames">
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                              <img src="/assets/full-review.svg" />
                            </div>
                          </div>
                        </div>
                        <img
                          className="testimonial-icon"
                          src="/assets/testimonial-icon.svg"
                        />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>
          </article>
          <article ref={(el) => (fadeRefs.current[2] = el)} className="col-xl-6 col-lg-12 fadeInUp-animation">
            <div className="logos">
              <img className="logo-img" src="/assets/firms.png" />

              <img className="logo-img" src="/assets/good-firms.png" />

              <img className="logo-img" src="/assets/top-company.png" />

              <img className="logo-img" src="/assets/clutch.svg" />

              <img className="logo-img" src="/assets/app-development.svg" />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

export const TestimonialBorder = () => {
  return (
    <article className="row mb-4">
      <div className="col-lg-8 col-sm-12">
        <div className="client-border">
          <div>
            <img
              className="border-first img-fluid"
              src="/assets/client-border1.png"
            />
            <img
              className="border-sec img-fluid"
              src="/assets/client-border-xl.png"
            />
            <img
              className="border-sm img-fluid"
              src="/assets/client-border-sm-1.png"
            />
          </div>
          <div className="client-border-text">
            <span>Clients Testimonials</span>
          </div>
          <div>
            <img
              className="border-first img-fluid"
              src="/assets/client-border2.png"
            />
            <img
              className="border-sec img-fluid"
              src="/assets/client-border-xl2.png"
            />
            <img
              className="border-sm img-fluid"
              src="/assets/client-border-sm-2.png"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-0"></div>
    </article>
  );
};
