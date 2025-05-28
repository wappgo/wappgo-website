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
                    <p>
                      Social media has become the food for everyone today. We had
                      a business model in mind and wanted to take it on digital
                      platforms.
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
                            src="/assets/client-image.png"
                          />
                        </div>
                        <div className="name-review-container">
                          <div className="name-designation">
                            <h4>JOHN BROOKS</h4>
                            <span>CEO, Metalite Industries</span>
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
                    <p>
                      Social media has become the food for everyone today. We had
                      a business model in mind and wanted to take it on digital
                      platforms.
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
                            src="/assets/client-image.png"
                          />
                        </div>
                        <div className="name-review-container">
                          <div className="name-designation">
                            <h4>JOHN BROOKS</h4>
                            <span>CEO, Metalite Industries</span>
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
                    <p>
                      Social media has become the food for everyone today. We had
                      a business model in mind and wanted to take it on digital
                      platforms.
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
                            src="/assets/client-image.png"
                          />
                        </div>
                        <div className="name-review-container">
                          <div className="name-designation">
                            <h4>JOHN BROOKS</h4>
                            <span>CEO, Metalite Industries</span>
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
