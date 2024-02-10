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
      <p className="heading">Trusted partners</p>
        <Swiper
          className="brand-name-container"
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            
            425: {
              slidesPerView: 1
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
              slidesPerView: 8,
            },
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="/assets/Nuxt.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/miro.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/LottieFiles.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/wise.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/dribble.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/kinsta.svg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/angleList.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/behance.svg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Partners;
