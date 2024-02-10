"use client";
import Image from "next/image";
import Carousel from "better-react-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const Blogs = () => {
  return (
    <main className="blogs-container">
      <h5>Blogs</h5>
      <div className="row heading-btn-wrapper">
        <div className="col-xxl-6">
          <h3 className="heading-btn-wrapper-title">
            Recent From
            <span className="heading-btn-wrapper-span"> Wappgo’s</span> Place
          </h3>
        </div>
        <div className="col-xxl-3 col-xl-0"></div>
        <div className="col-xxl-3 explore-btn">
          <button className="blog-btn mt-xxl-5">
            Explore Blogs <img src="/assets/align-left.svg" />
          </button>
        </div>
      </div>
      <Swiper
        grabCursor={false}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <section className="swiper-slide">
            <div className="row">
              <div className="col-xxl-4 col-xl-12 blog-img-container">
                <img
                  className="blog-img-xxl"
                  src="/assets/blogs-first-img.svg"
                />
                <img className="blog-img-xl" src="/assets/blogs-xl.jpg" />
              </div>
              <div className="col-xxl-1 col-xl-0"></div>
              <div className="col-xxl-7 col-xl-12">
                <div className="blogs-text">
                  <h2>Organizational Teams are Just Like Families</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </p>
                  <div className="dat">
                    <img src="/assets/calendar.svg" />
                    <span>12th September 2023</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="borderline"></div> */}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="swiper-slide">
            <div className="row">
              <div className="col-xxl-4 col-xl-12">
                <img
                  className="blog-img-xxl"
                  src="/assets/blogs-first-img.svg"
                />
                <img className="blog-img-xl" src="/assets/blogs-xl.jpg" />
              </div>
              <div className="col-xxl-1 col-xl-0"></div>
              <div className="col-xxl-7 col-xl-12">
                <div className="blogs-text">
                  <h2>Organizational Teams are Just Like Families</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </p>
                  <div className="dat">
                    <img src="/assets/calendar.svg" />
                    <span>12th September 2023</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="borderline"></div> */}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="swiper-slide">
            <div className="row">
              <div className="col-xxl-4 col-xl-12">
                <img
                  className="blog-img-xxl"
                  src="/assets/blogs-first-img.svg"
                />
                <img className="blog-img-xl" src="/assets/blogs-xl.jpg" />
              </div>
              <div className="col-xxl-1 col-xl-0"></div>
              <div className="col-xxl-7 col-xl-12">
                <div className="blogs-text">
                  <h2>Organizational Teams are Just Like Families</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </p>
                  <div className="dat">
                    <img src="/assets/calendar.svg" />
                    <span>12th September 2023</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="borderline"></div> */}
          </section>
        </SwiperSlide>
        <img src="/assets/arrow-left.svg" className="swiper-button-prev" />
        <img src="/assets/arrow-right.svg" className="swiper-button-next" />
      
        <div className="pagination-btns"></div>
      </Swiper>
      
    </main>
  );
};

export default Blogs;


