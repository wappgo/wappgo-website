"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
const Partners = () => {
  return (
    <main className="partners-container">

      <div className="brands">
        {/* <p className="heading">Trusted partners</p> */}
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
    </main>
  );
};

export default Partners;
