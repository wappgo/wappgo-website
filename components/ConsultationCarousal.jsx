"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
const CarouselComponent = () => {
    return (
      <Swiper
      grabCursor={false}
      pagination={{
        clickable: true,
      }}
      loop={true}
      // modules={[Pagination]}
      autoplay={{ delay: 3000 }} // Autoplay with 3 seconds delay
      modules={[ Autoplay]}
      >
        <SwiperSlide>
          <img src="/assets/Rectangle 70.png" alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets\Property 1=Variant3.png" alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets\Rectangle 70 (1).png" alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets\Rectangle 70 (2).png" alt="" className="w-100" />
        </SwiperSlide>
      </Swiper>
    );
  };
  
  export default CarouselComponent;