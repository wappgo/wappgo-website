"use client";
import Image from "next/image";
import "../app/globals.css";
import "../styles/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <TestimonialBorder />
      <div className="row clients-container">
        <article className="col-xl-6 col-lg-12">
          <Swiper
            grabCursor={false}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
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
        </article>
        <article className="col-xl-6 col-lg-12">
          <div className="logos">
            <img className="logo-img" src="/assets/firms.png" />

            <img className="logo-img" src="/assets/good-firms.png" />

            <img className="logo-img" src="/assets/top-company.png" />

            <img className="logo-img" src="/assets/clutch.svg" />

            <img className="logo-img" src="/assets/app-development.svg" />
          </div>
        </article>
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
